import { db } from "../db/client";
import { backgroundJobs, appointments, patients, invoices } from "../db/schema";
import { eq, and, lte } from "drizzle-orm";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processReminder(payload: string) {
  const data = JSON.parse(payload);
  console.log(`[Worker] Processing patient appointment reminder. Target: ${data.patientName} at ${data.time}`);
  // Simulate WhatsApp/SMS dispatch API call
  await sleep(500);
}

async function processInvoiceGeneration(payload: string) {
  const data = JSON.parse(payload);
  console.log(`[Worker] Processing recurring invoice generation for: ${data.patientName}`);
  
  // Insert new invoice record
  await db.insert(invoices).values({
    id: `inv-${Date.now()}`,
    tenantId: data.tenantId,
    patientName: data.patientName,
    amount: data.amount,
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    duration: "Billing Cycle",
    status: "Paid"
  });
  
  await sleep(500);
}

async function pollAndProcessJobs() {
  console.log("[Worker] Polling background jobs queue...");
  
  // Get pending jobs scheduled to run now or in the past
  const now = new Date();
  const pendingJobs = await db
    .select()
    .from(backgroundJobs)
    .where(and(eq(backgroundJobs.status, "pending"), lte(backgroundJobs.runAt, now)));

  for (const job of pendingJobs) {
    console.log(`[Worker] Claiming Job ${job.id} (Type: ${job.type})`);
    
    // Update status to processing
    await db
      .update(backgroundJobs)
      .set({ status: "processing" })
      .where(eq(backgroundJobs.id, job.id));

    try {
      if (job.type === "reminder" && job.payload) {
        await processReminder(job.payload);
      } else if (job.type === "invoice_generation" && job.payload) {
        await processInvoiceGeneration(job.payload);
      } else {
        throw new Error(`Unknown job type: ${job.type}`);
      }

      // Mark completed
      await db
        .update(backgroundJobs)
        .set({ status: "completed" })
        .where(eq(backgroundJobs.id, job.id));
      
      console.log(`[Worker] Job ${job.id} successfully completed.`);
    } catch (err: any) {
      console.error(`[Worker] Job ${job.id} failed:`, err);
      
      // Mark failed
      await db
        .update(backgroundJobs)
        .set({ status: "failed", error: err?.message || String(err) })
        .where(eq(backgroundJobs.id, job.id));
    }
  }
}

async function startWorker() {
  console.log("[Worker] Autonique background jobs worker started. Listening for tasks...");
  while (true) {
    try {
      await pollAndProcessJobs();
    } catch (error) {
      console.error("[Worker] Main loop error:", error);
    }
    await sleep(5000); // Poll every 5 seconds
  }
}

// Execute worker if run directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("worker.ts")) {
  startWorker();
}

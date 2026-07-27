import { db, pool } from "./client";
import { tenants, users, patients, appointments, invoices } from "./schema";

async function main() {
  console.log("Seeding database with multi-tenant mock data...");
  try {
    // 1. Clean existing records
    console.log("Truncating existing data...");
    await db.delete(invoices);
    await db.delete(appointments);
    await db.delete(patients);
    await db.delete(users);
    await db.delete(tenants);

    // 2. Insert Tenants
    console.log("Inserting tenants...");
    await db.insert(tenants).values([
      { id: "tenant-1", name: "Apex Clinic HQ", plan: "growth", stripeCustomerId: "cus_mock_apex" },
      { id: "tenant-2", name: "Eastside Clinic", plan: "essential", stripeCustomerId: "cus_mock_east" },
    ]);

    // 3. Insert Users (RBAC)
    console.log("Inserting users...");
    await db.insert(users).values([
      { id: "user-1", tenantId: "tenant-1", name: "Dr. Sarah Reyes", email: "reyes@autonique.com", passwordHash: "hashed_password_123", role: "owner" },
      { id: "user-2", tenantId: "tenant-1", name: "Admin Manager", email: "admin@autonique.com", passwordHash: "hashed_password_123", role: "admin" },
      { id: "user-3", tenantId: "tenant-1", name: "Office Supervisor", email: "manager@autonique.com", passwordHash: "hashed_password_123", role: "manager" },
      { id: "user-4", tenantId: "tenant-1", name: "Front Desk Staff", email: "staff@autonique.com", passwordHash: "hashed_password_123", role: "staff" },
      { id: "user-5", tenantId: "tenant-2", name: "Dr. Eastside Owner", email: "east@autonique.com", passwordHash: "hashed_password_123", role: "owner" },
    ]);

    // 4. Insert Patients
    console.log("Inserting patients...");
    await db.insert(patients).values([
      {
        id: "pat-1",
        tenantId: "tenant-1",
        name: "Michael Ross",
        email: "michael@ross.com",
        phone: "+1 555-0192",
        city: "New York",
        status: "Active",
        visits: 8,
        balance: 12000, // $120.00
        provider: "Dr. Sarah Reyes",
        lastVisit: "Jun 20, 2026",
        nextVisit: "Jul 10, 2026",
        notes: "Patient is responding well to anti-hypertensive treatment. Monitor blood pressure closely.",
      },
      {
        id: "pat-2",
        tenantId: "tenant-1",
        name: "Emma Wilson",
        email: "emma@wilson.com",
        phone: "+1 555-0183",
        city: "Boston",
        status: "Active",
        visits: 12,
        balance: 0,
        provider: "Dr. Sarah Reyes",
        lastVisit: "Jun 19, 2026",
        nextVisit: "Jul 15, 2026",
        notes: "Migraine history. Scheduled for follow-up consult.",
      },
      {
        id: "pat-3",
        tenantId: "tenant-1",
        name: "David Brown",
        email: "david@brown.com",
        phone: "+1 555-0144",
        city: "Seattle",
        status: "Active",
        visits: 3,
        balance: 45000, // $450.00
        provider: "Dr. Sarah Reyes",
        lastVisit: "Jun 18, 2026",
        nextVisit: "Jul 22, 2026",
        notes: "Diabetes Type 2 monitoring. HbA1c is high.",
      },
      {
        id: "pat-4",
        tenantId: "tenant-2",
        name: "Sophia Carter",
        email: "sophia@carter.com",
        phone: "+1 555-0112",
        city: "Chicago",
        status: "Active",
        visits: 2,
        balance: 7500, // $75.00
        provider: "Dr. Eastside Owner",
        lastVisit: "Jun 22, 2026",
        nextVisit: "Aug 01, 2026",
        notes: "General physical checkup.",
      },
    ]);

    // 5. Insert Appointments
    console.log("Inserting appointments...");
    await db.insert(appointments).values([
      { id: "app-1", tenantId: "tenant-1", patientId: "pat-1", practitionerName: "Dr. Sarah Reyes", time: "10:30 AM", status: "Confirmed", notes: "Routine follow-up" },
      { id: "app-2", tenantId: "tenant-1", patientId: "pat-2", practitionerName: "Dr. Sarah Reyes", time: "02:15 PM", status: "Pending", notes: "Therapy check" },
      { id: "app-3", tenantId: "tenant-2", patientId: "pat-4", practitionerName: "Dr. Eastside Owner", time: "11:00 AM", status: "Confirmed", notes: "Annual physical checkup" },
    ]);

    // 6. Insert Invoices
    console.log("Inserting invoices...");
    await db.insert(invoices).values([
      { id: "inv-101", tenantId: "tenant-1", patientName: "Michael Ross", amount: "$120.00", date: "Jun 20, 2026", duration: "Jun 01 - Jun 20", status: "Paid" },
      { id: "inv-102", tenantId: "tenant-1", patientName: "David Brown", amount: "$450.00", date: "Jun 18, 2026", duration: "May 18 - Jun 18", status: "Unpaid" },
      { id: "inv-103", tenantId: "tenant-2", patientName: "Sophia Carter", amount: "$75.00", date: "Jun 22, 2026", duration: "Jun 22 - Jun 22", status: "Paid" },
    ]);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Database seeding failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Execute seed if run directly
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("seed.ts")) {
  main();
}

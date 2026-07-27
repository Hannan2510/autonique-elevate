import { db } from "../db/client";
import { invoices } from "../db/schema";
import { eq, and } from "drizzle-orm";

export class InvoiceRepository {
  static async findById(id: string, tenantId: string) {
    const results = await db
      .select()
      .from(invoices)
      .where(and(eq(invoices.id, id), eq(invoices.tenantId, tenantId)));
    return results[0] || null;
  }

  static async list(tenantId: string) {
    return await db.select().from(invoices).where(eq(invoices.tenantId, tenantId));
  }

  static async create(data: typeof invoices.$inferInsert) {
    const results = await db.insert(invoices).values(data).returning();
    return results[0];
  }

  static async update(id: string, tenantId: string, data: Partial<typeof invoices.$inferInsert>) {
    const results = await db
      .update(invoices)
      .set(data)
      .where(and(eq(invoices.id, id), eq(invoices.tenantId, tenantId)))
      .returning();
    return results[0] || null;
  }
}

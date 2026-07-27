import { db } from "../db/client";
import { appointments } from "../db/schema";
import { eq, and } from "drizzle-orm";

export class AppointmentRepository {
  static async findById(id: string, tenantId: string) {
    const results = await db
      .select()
      .from(appointments)
      .where(and(eq(appointments.id, id), eq(appointments.tenantId, tenantId)));
    return results[0] || null;
  }

  static async list(tenantId: string) {
    return await db.select().from(appointments).where(eq(appointments.tenantId, tenantId));
  }

  static async create(data: typeof appointments.$inferInsert) {
    const results = await db.insert(appointments).values(data).returning();
    return results[0];
  }

  static async update(id: string, tenantId: string, data: Partial<typeof appointments.$inferInsert>) {
    const results = await db
      .update(appointments)
      .set(data)
      .where(and(eq(appointments.id, id), eq(appointments.tenantId, tenantId)))
      .returning();
    return results[0] || null;
  }

  static async delete(id: string, tenantId: string) {
    const results = await db
      .delete(appointments)
      .where(and(eq(appointments.id, id), eq(appointments.tenantId, tenantId)))
      .returning();
    return results[0] || null;
  }
}

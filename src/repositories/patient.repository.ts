import { db } from "../db/client";
import { patients } from "../db/schema";
import { eq, and, ilike, or } from "drizzle-orm";

export class PatientRepository {
  static async findById(id: string, tenantId: string) {
    const results = await db
      .select()
      .from(patients)
      .where(and(eq(patients.id, id), eq(patients.tenantId, tenantId)));
    return results[0] || null;
  }

  static async list(tenantId: string, search?: string) {
    if (search) {
      return await db
        .select()
        .from(patients)
        .where(
          and(
            eq(patients.tenantId, tenantId),
            or(ilike(patients.name, `%${search}%`), ilike(patients.email, `%${search}%`))
          )
        );
    }
    return await db.select().from(patients).where(eq(patients.tenantId, tenantId));
  }

  static async create(data: typeof patients.$inferInsert) {
    const results = await db.insert(patients).values(data).returning();
    return results[0];
  }

  static async update(id: string, tenantId: string, data: Partial<typeof patients.$inferInsert>) {
    const results = await db
      .update(patients)
      .set(data)
      .where(and(eq(patients.id, id), eq(patients.tenantId, tenantId)))
      .returning();
    return results[0] || null;
  }

  static async delete(id: string, tenantId: string) {
    const results = await db
      .delete(patients)
      .where(and(eq(patients.id, id), eq(patients.tenantId, tenantId)))
      .returning();
    return results[0] || null;
  }
}

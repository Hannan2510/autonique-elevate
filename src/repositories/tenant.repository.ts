import { db } from "../db/client";
import { tenants } from "../db/schema";
import { eq } from "drizzle-orm";

export class TenantRepository {
  static async findById(id: string) {
    const results = await db.select().from(tenants).where(eq(tenants.id, id));
    return results[0] || null;
  }

  static async create(data: typeof tenants.$inferInsert) {
    const results = await db.insert(tenants).values(data).returning();
    return results[0];
  }

  static async update(id: string, data: Partial<typeof tenants.$inferInsert>) {
    const results = await db.update(tenants).set(data).where(eq(tenants.id, id)).returning();
    return results[0] || null;
  }
}

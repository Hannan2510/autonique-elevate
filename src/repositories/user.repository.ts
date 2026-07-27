import { db } from "../db/client";
import { users } from "../db/schema";
import { eq, and } from "drizzle-orm";

export class UserRepository {
  static async findById(id: string, tenantId: string) {
    const results = await db
      .select()
      .from(users)
      .where(and(eq(users.id, id), eq(users.tenantId, tenantId)));
    return results[0] || null;
  }

  static async findByEmail(email: string) {
    const results = await db.select().from(users).where(eq(users.email, email));
    return results[0] || null;
  }

  static async listByTenant(tenantId: string) {
    return await db.select().from(users).where(eq(users.tenantId, tenantId));
  }

  static async create(data: typeof users.$inferInsert) {
    const results = await db.insert(users).values(data).returning();
    return results[0];
  }
}

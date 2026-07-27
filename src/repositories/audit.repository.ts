import { db } from "../db/client";
import { auditLogs } from "../db/schema";
import { eq, desc } from "drizzle-orm";

export class AuditLogRepository {
  static async list(tenantId: string) {
    return await db
      .select()
      .from(auditLogs)
      .where(eq(auditLogs.tenantId, tenantId))
      .orderBy(desc(auditLogs.createdAt));
  }

  static async log(data: typeof auditLogs.$inferInsert) {
    const results = await db.insert(auditLogs).values(data).returning();
    return results[0];
  }
}

import { InvoiceRepository } from "../repositories/invoice.repository";
import { AuditLogRepository } from "../repositories/audit.repository";
import { RbacService, UserRole } from "./rbac";
import { invoices } from "../db/schema";

export class BillingService {
  static async listInvoices(tenantId: string, requestorRole: UserRole) {
    RbacService.check(requestorRole, "billing:read");
    return await InvoiceRepository.list(tenantId);
  }

  static async createInvoice(
    data: typeof invoices.$inferInsert,
    requestorRole: UserRole,
    requestorId: string
  ) {
    RbacService.check(requestorRole, "billing:write");
    const newInvoice = await InvoiceRepository.create(data);

    await AuditLogRepository.log({
      tenantId: data.tenantId,
      userId: requestorId,
      action: "CREATE_INVOICE",
      resource: "invoices",
      details: `Created invoice ${newInvoice.id} for ${data.patientName} amounting to ${data.amount}`,
    });

    return newInvoice;
  }

  static async updateInvoiceStatus(
    id: string,
    tenantId: string,
    status: "Paid" | "Unpaid" | "Void",
    requestorRole: UserRole,
    requestorId: string
  ) {
    RbacService.check(requestorRole, "billing:write");
    const updated = await InvoiceRepository.update(id, tenantId, { status });

    if (updated) {
      await AuditLogRepository.log({
        tenantId,
        userId: requestorId,
        action: "UPDATE_INVOICE_STATUS",
        resource: "invoices",
        details: `Updated status of invoice ${id} to: ${status}`,
      });
    }

    return updated;
  }
}

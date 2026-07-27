import { PatientRepository } from "../repositories/patient.repository";
import { AuditLogRepository } from "../repositories/audit.repository";
import { RbacService, UserRole } from "./rbac";
import { patients } from "../db/schema";

export class PatientService {
  static async getPatient(id: string, tenantId: string, requestorRole: UserRole, requestorId: string) {
    // 1. Enforce RBAC
    RbacService.check(requestorRole, "patient:read");

    // 2. Fetch from Repo (scoped by tenant)
    const patient = await PatientRepository.findById(id, tenantId);

    // 3. Log Audit
    if (patient) {
      await AuditLogRepository.log({
        tenantId,
        userId: requestorId,
        action: "READ_PATIENT",
        resource: "patients",
        details: `Read patient ID: ${id}`,
      });
    }

    return patient;
  }

  static async listPatients(tenantId: string, search: string | undefined, requestorRole: UserRole) {
    RbacService.check(requestorRole, "patient:read");
    return await PatientRepository.list(tenantId, search);
  }

  static async createPatient(
    data: typeof patients.$inferInsert,
    requestorRole: UserRole,
    requestorId: string
  ) {
    // 1. Enforce RBAC
    RbacService.check(requestorRole, "patient:write");

    // 2. Execute insertion
    const newPatient = await PatientRepository.create(data);

    // 3. Log Audit
    await AuditLogRepository.log({
      tenantId: data.tenantId,
      userId: requestorId,
      action: "CREATE_PATIENT",
      resource: "patients",
      details: `Created patient: ${data.name} (ID: ${newPatient.id})`,
    });

    return newPatient;
  }

  static async updatePatient(
    id: string,
    tenantId: string,
    data: Partial<typeof patients.$inferInsert>,
    requestorRole: UserRole,
    requestorId: string
  ) {
    RbacService.check(requestorRole, "patient:write");
    const updated = await PatientRepository.update(id, tenantId, data);

    if (updated) {
      await AuditLogRepository.log({
        tenantId,
        userId: requestorId,
        action: "UPDATE_PATIENT",
        resource: "patients",
        details: `Updated patient details for: ${updated.name} (ID: ${id})`,
      });
    }

    return updated;
  }

  static async deletePatient(id: string, tenantId: string, requestorRole: UserRole, requestorId: string) {
    RbacService.check(requestorRole, "patient:delete");
    const deleted = await PatientRepository.delete(id, tenantId);

    if (deleted) {
      await AuditLogRepository.log({
        tenantId,
        userId: requestorId,
        action: "DELETE_PATIENT",
        resource: "patients",
        details: `Deleted patient: ${deleted.name} (ID: ${id})`,
      });
    }

    return deleted;
  }
}

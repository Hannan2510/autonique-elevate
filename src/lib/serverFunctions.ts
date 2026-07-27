import { createServerFn } from "@tanstack/react-start";
import { PatientService } from "../services/patient.service";
import { BillingService } from "../services/billing.service";
import { AuditLogRepository } from "../repositories/audit.repository";
import { TenantRepository } from "../repositories/tenant.repository";
import { AppointmentRepository } from "../repositories/appointment.repository";
import { db } from "../db/client";
import { patients as patientsTable, appointments as appointmentsTable, invoices as invoicesTable } from "../db/schema";
import { eq, sql } from "drizzle-orm";

// Simulated session context for demo app
const DEMO_TENANT_ID = "tenant-1";
const DEMO_USER_ID = "user-1";
const DEMO_USER_ROLE = "owner"; // 'owner', 'admin', 'manager', 'staff'

// 1. Patient Server Functions
export const getPatientsFn = createServerFn({ method: "GET" })
  .validator((search?: string) => search)
  .handler(async ({ data: search }) => {
    try {
      return await PatientService.listPatients(DEMO_TENANT_ID, search || undefined, DEMO_USER_ROLE);
    } catch (error: any) {
      throw new Error(error?.message || "Failed to fetch patients.");
    }
  });

export const createPatientFn = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    try {
      return await PatientService.createPatient(
        {
          ...data,
          tenantId: DEMO_TENANT_ID,
        },
        DEMO_USER_ROLE,
        DEMO_USER_ID
      );
    } catch (error: any) {
      throw new Error(error?.message || "Failed to create patient.");
    }
  });

export const updatePatientFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; updates: any }) => data)
  .handler(async ({ data }) => {
    try {
      return await PatientService.updatePatient(data.id, DEMO_TENANT_ID, data.updates, DEMO_USER_ROLE, DEMO_USER_ID);
    } catch (error: any) {
      throw new Error(error?.message || "Failed to update patient.");
    }
  });

// 2. Billing & Invoices Server Functions
export const getInvoicesFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await BillingService.listInvoices(DEMO_TENANT_ID, DEMO_USER_ROLE);
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch invoices.");
  }
});

export const createInvoiceFn = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    try {
      return await BillingService.createInvoice(
        {
          ...data,
          tenantId: DEMO_TENANT_ID,
        },
        DEMO_USER_ROLE,
        DEMO_USER_ID
      );
    } catch (error: any) {
      throw new Error(error?.message || "Failed to compile invoice.");
    }
  });

// 3. Appointments Server Functions
export const getAppointmentsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await AppointmentRepository.list(DEMO_TENANT_ID);
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch appointments.");
  }
});

export const createAppointmentFn = createServerFn({ method: "POST" })
  .validator((data: any) => data)
  .handler(async ({ data }) => {
    try {
      const newApp = await AppointmentRepository.create({
        ...data,
        tenantId: DEMO_TENANT_ID,
      });
      // Audit log it
      await AuditLogRepository.log({
        tenantId: DEMO_TENANT_ID,
        userId: DEMO_USER_ID,
        action: "CREATE_APPOINTMENT",
        resource: "appointments",
        details: `Booked appointment for patient ID: ${data.patientId}`,
      });
      return newApp;
    } catch (error: any) {
      throw new Error(error?.message || "Failed to book appointment.");
    }
  });

// 4. Audit Logs Server Function
export const getAuditLogsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await AuditLogRepository.list(DEMO_TENANT_ID);
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch security audit logs.");
  }
});

// 5. Tenant Settings Server Functions
export const getTenantSettingsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await TenantRepository.findById(DEMO_TENANT_ID);
  } catch (error: any) {
    throw new Error(error?.message || "Failed to load clinic configurations.");
  }
});

export const updateTenantSettingsFn = createServerFn({ method: "POST" })
  .validator((updates: any) => updates)
  .handler(async ({ data }) => {
    try {
      const updated = await TenantRepository.update(DEMO_TENANT_ID, data);
      await AuditLogRepository.log({
        tenantId: DEMO_TENANT_ID,
        userId: DEMO_USER_ID,
        action: "UPDATE_TENANT_SETTINGS",
        resource: "tenants",
        details: `Updated settings parameters.`,
      });
      return updated;
    } catch (error: any) {
      throw new Error(error?.message || "Failed to update configurations.");
    }
  });

// 6. Dashboard Live Metrics Aggregation Server Function
export const getDashboardStatsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    // Queries to calculate metrics totals
    const patientsCount = await db
      .select({ count: sql<number>`count(*)` })
      .from(patientsTable)
      .where(eq(patientsTable.tenantId, DEMO_TENANT_ID));

    const appointmentsCount = await db
      .select({ count: sql<number>`count(*)` })
      .from(appointmentsTable)
      .where(eq(appointmentsTable.tenantId, DEMO_TENANT_ID));

    const invoicesTotal = await db
      .select({ count: sql<number>`count(*)` })
      .from(invoicesTable)
      .where(eq(invoicesTable.tenantId, DEMO_TENANT_ID));

    return {
      patientsTotal: Number(patientsCount[0]?.count || 0),
      appointmentsTotal: Number(appointmentsCount[0]?.count || 0),
      invoicesTotal: Number(invoicesTotal[0]?.count || 0),
    };
  } catch (error: any) {
    throw new Error(error?.message || "Failed to compute analytics.");
  }
});

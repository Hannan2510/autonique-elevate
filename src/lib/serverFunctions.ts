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

// ──────── MOCK FALLBACK DATA FOR LOCAL PREVIEWS ────────

const fallbackPatients = [
  { id: "P-1042", name: "Ava Chen", email: "ava.chen@meridian.io", phone: "+49 30 8823 1194", city: "Berlin", status: "Active", lastVisit: "22 Jul 2026", nextVisit: "05 Aug 2026", visits: 14, balance: 0, provider: "Dr. Sarah Reyes", notes: "Prefers morning appointments. Allergic to penicillin." },
  { id: "P-1041", name: "Marcus Weiss", email: "m.weiss@hey.com", phone: "+49 30 4412 8802", city: "Berlin", status: "Active", lastVisit: "22 Jul 2026", visits: 6, balance: 240, provider: "Dr. Marcus Okafor", notes: "Post-op follow-up scheduled." },
  { id: "P-1040", name: "Priya Kapoor", email: "priya.k@fastmail.com", phone: "+49 30 2201 4488", city: "Potsdam", status: "Active", lastVisit: "22 Jul 2026", visits: 3, balance: 0, provider: "Dr. Sarah Reyes", notes: "New procedure evaluation in progress." },
  { id: "P-1039", name: "Jonas Lind", email: "jonas@lind.se", phone: "+46 8 4402 1188", city: "Stockholm", status: "Pending", lastVisit: "22 Jul 2026", visits: 1, balance: 120, provider: "Dr. Marcus Okafor", notes: "Referred by Dr. Bergman." },
  { id: "P-1038", name: "Sofia Martins", email: "sofia.martins@proton.me", phone: "+351 21 998 4412", city: "Lisbon", status: "Active", lastVisit: "19 Jul 2026", visits: 22, balance: 0, provider: "Dr. Sarah Reyes", notes: "Long-term patient. Annual review due." },
];

const fallbackAppointments = [
  { id: "A-101", patientId: "P-1042", practitionerName: "Dr. Sarah Reyes", time: "09:00 AM", status: "Confirmed", notes: "Regular check-up" },
  { id: "A-102", patientId: "P-1041", practitionerName: "Dr. Marcus Okafor", time: "10:30 AM", status: "Pending", notes: "Consultation" },
  { id: "A-103", patientId: "P-1040", practitionerName: "Dr. Sarah Reyes", time: "02:00 PM", status: "Confirmed", notes: "Tooth extraction" },
];

const fallbackInvoices = [
  { id: "INV-2026-004", patientName: "Ava Chen", date: "Jul 12, 2026", duration: "Jun 12, 2026 - Jul 12, 2026", amount: "$516.00", status: "Paid" },
  { id: "INV-2026-003", patientName: "Marcus Weiss", date: "Jun 12, 2026", duration: "May 12, 2026 - Jun 12, 2026", amount: "$516.00", status: "Paid" },
  { id: "INV-2026-002", patientName: "Priya Kapoor", date: "May 12, 2026", duration: "Apr 12, 2026 - May 12, 2026", amount: "$516.00", status: "Paid" },
  { id: "INV-2026-001", patientName: "Jonas Lind", date: "Apr 12, 2026", duration: "Mar 12, 2026 - Apr 12, 2026", amount: "$129.00", status: "Paid" },
];

const fallbackSettings = {
  id: "tenant-1",
  name: "Apex Clinic (HQ)",
  phone: "+49 30 8823 1100",
  address: "Friedrichstraße 95, 10117 Berlin",
  openingTime: "08:00",
  closingTime: "18:00",
};

const fallbackAuditLogs = [
  { id: "1", createdAt: new Date().toISOString(), action: "READ_PATIENT", userId: "user-1", resource: "patients", details: "Read patient Ava Chen details" },
  { id: "2", createdAt: new Date().toISOString(), action: "UPDATE_TENANT_SETTINGS", userId: "user-1", resource: "tenants", details: "Updated clinic operating hours" },
  { id: "3", createdAt: new Date().toISOString(), action: "CREATE_PATIENT", userId: "user-1", resource: "patients", details: "Created patient profile: Ava Chen" },
];

// 1. Patient Server Functions
export const getPatientsFn = createServerFn({ method: "GET" })
  .validator((search?: string) => search)
  .handler(async ({ data: search }) => {
    try {
      return await PatientService.listPatients(DEMO_TENANT_ID, search || undefined, DEMO_USER_ROLE);
    } catch (error: any) {
      console.warn("[Database Connection Refused] Falling back to mock patient records.");
      return fallbackPatients;
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
      console.warn("[Database Connection Refused] Simulating patient creation.");
      return data;
    }
  });

export const updatePatientFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; updates: any }) => data)
  .handler(async ({ data }) => {
    try {
      return await PatientService.updatePatient(data.id, DEMO_TENANT_ID, data.updates, DEMO_USER_ROLE, DEMO_USER_ID);
    } catch (error: any) {
      console.warn("[Database Connection Refused] Simulating patient update.");
      return { id: data.id, ...data.updates };
    }
  });

// 2. Billing & Invoices Server Functions
export const getInvoicesFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await BillingService.listInvoices(DEMO_TENANT_ID, DEMO_USER_ROLE);
  } catch (error: any) {
    console.warn("[Database Connection Refused] Falling back to mock invoice ledgers.");
    return fallbackInvoices;
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
      console.warn("[Database Connection Refused] Simulating invoice compilation.");
      return data;
    }
  });

// 3. Appointments Server Functions
export const getAppointmentsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await AppointmentRepository.list(DEMO_TENANT_ID);
  } catch (error: any) {
    console.warn("[Database Connection Refused] Falling back to mock scheduled slots.");
    return fallbackAppointments;
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
      await AuditLogRepository.log({
        tenantId: DEMO_TENANT_ID,
        userId: DEMO_USER_ID,
        action: "CREATE_APPOINTMENT",
        resource: "appointments",
        details: `Booked appointment for patient ID: ${data.patientId}`,
      });
      return newApp;
    } catch (error: any) {
      console.warn("[Database Connection Refused] Simulating slot reservation.");
      return data;
    }
  });

// 4. Audit Logs Server Function
export const getAuditLogsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await AuditLogRepository.list(DEMO_TENANT_ID);
  } catch (error: any) {
    console.warn("[Database Connection Refused] Falling back to mock HIPAA logs.");
    return fallbackAuditLogs;
  }
});

// 5. Tenant Settings Server Functions
export const getTenantSettingsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await TenantRepository.findById(DEMO_TENANT_ID);
  } catch (error: any) {
    console.warn("[Database Connection Refused] Falling back to default configuration.");
    return fallbackSettings;
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
      console.warn("[Database Connection Refused] Simulating settings parameter writes.");
      return data;
    }
  });

// 6. Dashboard Live Metrics Aggregation Server Function
export const getDashboardStatsFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
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
    console.warn("[Database Connection Refused] Computing mock dashboard aggregates.");
    return {
      patientsTotal: fallbackPatients.length,
      appointmentsTotal: fallbackAppointments.length,
      invoicesTotal: fallbackInvoices.length,
    };
  }
});

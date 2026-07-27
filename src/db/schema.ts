import { pgTable, text, timestamp, integer, boolean, uuid } from "drizzle-orm/pg-core";

// 1. Tenants Table
export const tenants = pgTable("tenants", {
  id: text("id").primaryKey(), // e.g. uuid or slug
  name: text("name").notNull(),
  plan: text("plan").default("growth").notNull(), // essential, growth, enterprise
  stripeCustomerId: text("stripe_customer_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 2. Users (RBAC) Table
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  tenantId: text("tenant_id").references(() => tenants.id, { onDelete: "cascade" }).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").default("staff").notNull(), // owner, admin, manager, staff
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 3. Patients Table
export const patients = pgTable("patients", {
  id: text("id").primaryKey(),
  tenantId: text("tenant_id").references(() => tenants.id, { onDelete: "cascade" }).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  city: text("city").notNull(),
  status: text("status").default("Active").notNull(), // Active, Inactive, Pending
  visits: integer("visits").default(0).notNull(),
  balance: integer("balance").default(0).notNull(), // in cents/dollars
  provider: text("provider").notNull(),
  lastVisit: text("last_visit").notNull(),
  nextVisit: text("next_visit"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 4. Appointments Table
export const appointments = pgTable("appointments", {
  id: text("id").primaryKey(),
  tenantId: text("tenant_id").references(() => tenants.id, { onDelete: "cascade" }).notNull(),
  patientId: text("patient_id").references(() => patients.id, { onDelete: "cascade" }).notNull(),
  practitionerName: text("practitioner_name").notNull(),
  time: text("time").notNull(), // Time string or Iso string
  status: text("status").default("Pending").notNull(), // Confirmed, Pending, Cancelled
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 5. Invoices Table
export const invoices = pgTable("invoices", {
  id: text("id").primaryKey(),
  tenantId: text("tenant_id").references(() => tenants.id, { onDelete: "cascade" }).notNull(),
  patientName: text("patient_name").notNull(),
  amount: text("amount").notNull(), // e.g. "$129.00"
  date: text("date").notNull(),
  duration: text("duration").notNull(),
  status: text("status").default("Paid").notNull(), // Paid, Unpaid, Void
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 6. Audit Logs Table (HIPAA tracking)
export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  tenantId: text("tenant_id").references(() => tenants.id, { onDelete: "cascade" }).notNull(),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  action: text("action").notNull(), // e.g. READ_PATIENT, UPDATE_INVOICE
  resource: text("resource").notNull(), // e.g. patients, invoices
  details: text("details"), // JSON or string of parameters changed
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 7. Background Jobs Table
export const backgroundJobs = pgTable("background_jobs", {
  id: uuid("id").defaultRandom().primaryKey(),
  type: text("type").notNull(), // reminder, invoice_generation
  status: text("status").default("pending").notNull(), // pending, processing, completed, failed
  payload: text("payload"), // JSON payload
  runAt: timestamp("run_at").defaultNow().notNull(),
  error: text("error"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

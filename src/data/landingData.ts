import {
  Users,
  Calendar,
  FileSpreadsheet,
  Receipt,
  BarChart3,
  Bot,
  MessageSquare,
  UserCheck,
  Boxes,
  FileText,
  Bell,
  Shield,
  Lock,
  Clock,
  Award,
  Server,
  KeyRound,
  LucideIcon,
} from "lucide-react";

export interface PlatformModule {
  title: string;
  desc: string;
  icon: LucideIcon;
  spot: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  sub: string;
  spot: string;
}

export interface EnterpriseFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
  spot: string;
}

export interface ComplianceItem {
  icon: LucideIcon;
  title: string;
  sub: string;
  spot: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
  delay: string;
  spot: string;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  sub: string;
  features: string[];
  highlight?: boolean;
  delay: string;
  spot: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const platformModules: PlatformModule[] = [
  { title: "Patient CRM", desc: "Centralized medical histories", icon: Users, spot: "from-emerald-400/15" },
  { title: "Appointments", desc: "Automated queue & tokens", icon: Calendar, spot: "from-teal-400/15" },
  { title: "EMR Records", desc: "Structured clinical charting", icon: FileSpreadsheet, spot: "from-lime-400/15" },
  { title: "Billing & Invoices", desc: "Stripe & clinic receipts", icon: Receipt, spot: "from-indigo-400/15" },
  { title: "Clinical Analytics", desc: "Revenue & visit telemetry", icon: BarChart3, spot: "from-teal-400/15" },
  { title: "AI Assistant", desc: "Smart diagnostic notes", icon: Bot, spot: "from-emerald-400/15" },
  { title: "Automated Follow-ups", desc: "WhatsApp patient reminders", icon: MessageSquare, spot: "from-lime-400/15" },
  { title: "Staff Roster", desc: "Role-based staff permissions", icon: UserCheck, spot: "from-indigo-400/15" },
  { title: "Pharmacy Inventory", desc: "Drug stock & batch tracking", icon: Boxes, spot: "from-emerald-400/15" },
  { title: "Custom Reports", desc: "Exportable PDF/CSV digests", icon: FileText, spot: "from-teal-400/15" },
  { title: "Smart Alerts", desc: "Real-time clinical triggers", icon: Bell, spot: "from-lime-400/15" },
  { title: "Enterprise Security", desc: "HIPAA & 256-bit encryption", icon: Shield, spot: "from-indigo-400/15" },
];

export const workflowSteps: WorkflowStep[] = [
  { step: "01", title: "Booking", sub: "Online or front desk", spot: "from-emerald-400/20" },
  { step: "02", title: "Confirmation", sub: "WhatsApp alert sent", spot: "from-teal-400/20" },
  { step: "03", title: "Consultation", sub: "Doctor notes & EMR", spot: "from-lime-400/20" },
  { step: "04", title: "Prescription", sub: "Digital PDF signature", spot: "from-indigo-400/20" },
  { step: "05", title: "Billing", sub: "Stripe or cash receipt", spot: "from-emerald-400/20" },
  { step: "06", title: "Follow-up", sub: "Automated feedback", spot: "from-teal-400/20" },
];

export const enterpriseFeatures: EnterpriseFeature[] = [
  { title: "Multi-Tenant Architecture", desc: "Isolated clinic data boundaries with multi-campus hospital organization support.", icon: Server, spot: "from-emerald-400/20" },
  { title: "Role-Based Access Control", desc: "Granular permissions for Doctors, Nurses, Receptionists, and Billing staff.", icon: KeyRound, spot: "from-teal-400/20" },
  { title: "Immutable Audit Logging", desc: "Complete timestamped records of every patient chart view and prescription edit.", icon: FileText, spot: "from-indigo-400/20" },
];

export const complianceBadges: ComplianceItem[] = [
  { icon: Shield, title: "HIPAA Compliant", sub: "End-to-end encrypted data", spot: "from-emerald-400/20" },
  { icon: Lock, title: "GDPR Certified", sub: "Strict privacy safeguards", spot: "from-teal-400/20" },
  { icon: Clock, title: "99.9% Uptime SLA", sub: "Guaranteed cloud reliability", spot: "from-lime-400/20" },
  { icon: Award, title: "ISO 27001", sub: "Enterprise security standard", spot: "from-indigo-400/20" },
];

export const testimonials: Testimonial[] = [
  { name: "Dr. Sarah Ahmed", role: "General Practitioner, Karachi", quote: "Autonique transformed how we manage our clinic. Patient no-shows dropped by 55% after using WhatsApp reminders.", stars: 5, delay: "1", spot: "from-emerald-400/20" },
  { name: "Dr. Farhan Malik", role: "Orthopedic Surgeon, Lahore", quote: "The billing and prescription modules save us 3+ hours every single day. It's the best investment we've made for our practice.", stars: 5, delay: "2", spot: "from-teal-400/20" },
  { name: "Dr. Nadia Reyes", role: "Clinic Director, Islamabad", quote: "From EMR to payments — everything is in one place. Our staff onboarded in just 2 days. Absolutely seamless.", stars: 5, delay: "3", spot: "from-lime-400/20" },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: "$49",
    annualPrice: "$39",
    sub: "For solo doctor practices.",
    features: ["Smart calendar scheduling", "Structured patient records", "Automated email reminders", "Standard revenue reports"],
    delay: "1",
    spot: "from-emerald-400/20",
  },
  {
    name: "Growth",
    monthlyPrice: "$129",
    annualPrice: "$99",
    sub: "For growing clinic teams.",
    features: ["Everything in Starter", "Stripe payment gateway", "WhatsApp automation", "Priority 24/7 support"],
    highlight: true,
    delay: "2",
    spot: "from-teal-400/30",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    sub: "For hospital groups.",
    features: ["Custom EMR integrations", "Immutable audit logs", "99.99% SLA & dedicated CSM", "Custom BAA — HIPAA"],
    delay: "3",
    spot: "from-indigo-400/20",
  },
];

export const faqItems: FaqItem[] = [
  { question: "How long does clinic onboarding take?", answer: "Most single and multi-doctor clinics are fully setup and operating on Autonique within 24 to 48 hours. Our team assists with data import." },
  { question: "Is Autonique compliant with HIPAA and GDPR?", answer: "Yes. Autonique encrypts all patient medical records at rest (AES-256) and in transit (TLS 1.3) with full audit logging and compliance." },
  { question: "Can I import existing patient records from Excel or another EHR?", answer: "Absolutly. We provide automated CSV and Excel importers, as well as dedicated migration specialists for hospital databases." },
  { question: "Does Autonique support WhatsApp appointment reminders?", answer: "Yes, automated WhatsApp & SMS appointment confirmations and follow-ups are built directly into the platform." },
];

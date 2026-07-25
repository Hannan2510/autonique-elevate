import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  CreditCard,
  Shield,
  Building2,
  Check,
  Zap,
  Smartphone,
  Key,
  RefreshCw,
  Users,
  CheckCircle2,
  Clock,
  Plus,
  Activity,
  Wifi,
  Database,
  Lock,
  Mail,
  Phone,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";
import { Badge, Button, Card, PageHeader } from "@/components/app/AppShell";
import { StripePaymentModal, StripePaymentItem } from "@/components/app/StripePaymentModal";

export const Route = createFileRoute("/_app/clinic")({
  head: () => ({
    meta: [
      { title: "Clinic Operations · Autonique" },
      { name: "description", content: "Manage clinic locations, provider seats, integrations, and HIPAA logs." },
      { property: "og:title", content: "Clinic Operations · Autonique" },
      { property: "og:description", content: "Manage clinic locations, provider seats, integrations, and HIPAA logs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ClinicPanel,
});

/* Clean Switch Primitive */
function Switch({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5.5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
        checked ? "bg-emerald-600" : "bg-muted-foreground/20"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4.5 w-4.5 transform rounded-full bg-white shadow-xs transition duration-200 ease-in-out ${
          checked ? "translate-x-4.5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function DiagnosticRow({ label, value, status }: { label: string; value: string; status: "success" | "warning" | "info" }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border/20 last:border-0">
      <span className="text-[12px] font-medium text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-foreground font-mono">{value}</span>
        <span className={`h-1.5 w-1.5 rounded-full ${
          status === "success" ? "bg-emerald-500" : status === "warning" ? "bg-amber-500" : "bg-blue-500"
        }`} />
      </div>
    </div>
  );
}

function ClinicPanel() {
  const [stripeModalOpen, setStripeModalOpen] = useState(false);
  const [stripeItem, setStripeItem] = useState<StripePaymentItem>({
    title: "Autonique Growth Plan Upgrade",
    description: "Multi-Provider Seats Expansion Package",
    amount: 129,
  });

  // Interactive configurations
  const [chatbotActive, setChatbotActive] = useState(true);
  const [sandboxMode, setSandboxMode] = useState(true);
  const [selectedBranch, setSelectedBranch] = useState<"central" | "potsdam">("central");
  
  const handleStripeUpgrade = (planName: string, amount: number) => {
    setStripeItem({
      title: `Autonique Clinic Plan (${planName})`,
      description: `Monthly Clinic Platform Upgrade & Expansion`,
      amount: amount,
    });
    setStripeModalOpen(true);
  };

  return (
    <>
      {/* Stripe Payment Modal */}
      <StripePaymentModal
        isOpen={stripeModalOpen}
        onClose={() => setStripeModalOpen(false)}
        item={stripeItem}
        onSuccess={(txId) => {
          console.log("Clinic Stripe payment completed:", txId);
        }}
      />

      <PageHeader
        title={
          <span className="flex items-center gap-2 font-semibold text-foreground">
            Clinic <span className="text-emerald-800 dark:text-emerald-300 font-semibold">Operations</span>
          </span>
        }
        description="Monitor multi-branch locations, active integrations, provider seating, and secure HIPAA event logs."
        actions={
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11.5px] text-muted-foreground font-medium hidden sm:inline">Sunday, June 22, 2026</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-700 dark:text-emerald-400 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              HIPAA Compliant Session
            </span>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-12 space-y-6">

        {/* Dashboard Grid Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="rounded-2xl border border-border/50 bg-card p-4.5 shadow-xs flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Locations</div>
              <div className="text-lg font-bold text-foreground mt-0.5">2 Active Campuses</div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-4.5 shadow-xs flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Provider Seating</div>
              <div className="text-lg font-bold text-foreground mt-0.5">4 / 10 Active Seats</div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-4.5 shadow-xs flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-700 dark:text-blue-400 flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">WhatsApp Delivery</div>
              <div className="text-lg font-bold text-foreground mt-0.5">99.8% Success Rate</div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card p-4.5 shadow-xs flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Gateway Status</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-450 mt-0.5">Live Online</div>
            </div>
          </div>
        </div>

        {/* Multi-Location Switcher and details */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-xs overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Practice Campuses & Locations</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5">Select a campus to inspect resources and capacity.</p>
            </div>
            <Button size="xs" variant="outline" className="self-start sm:self-center">
              <Plus className="h-3 w-3" /> Add Location
            </Button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Campus 1: Berlin Central */}
              <div
                onClick={() => setSelectedBranch("central")}
                className={`rounded-2xl border p-5 cursor-pointer transition-all flex flex-col justify-between ${
                  selectedBranch === "central"
                    ? "border-emerald-500 bg-gradient-to-br from-emerald-500/5 via-card to-card shadow-sm"
                    : "border-border/60 hover:border-border"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[14px] font-extrabold text-foreground">Berlin Central Campus</h4>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Primary Clinical Facility</p>
                    </div>
                    {selectedBranch === "central" ? (
                      <Badge tone="success">Primary</Badge>
                    ) : (
                      <Badge tone="info">Branch</Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 pt-1 text-[12px] font-mono text-muted-foreground">
                    <div className="bg-background/60 p-2 rounded-xl border border-border/20 text-center">
                      <div className="font-bold text-foreground">8</div>
                      <div>Rooms</div>
                    </div>
                    <div className="bg-background/60 p-2 rounded-xl border border-border/20 text-center">
                      <div className="font-bold text-foreground">3</div>
                      <div>Doctors</div>
                    </div>
                    <div className="bg-background/60 p-2 rounded-xl border border-border/20 text-center">
                      <div className="font-bold text-foreground">96%</div>
                      <div>Occupancy</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/20 flex items-center justify-between text-[11.5px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> Open: 08:00 - 20:00
                  </span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">Manage Campus →</span>
                </div>
              </div>

              {/* Campus 2: Potsdam Campus */}
              <div
                onClick={() => setSelectedBranch("potsdam")}
                className={`rounded-2xl border p-5 cursor-pointer transition-all flex flex-col justify-between ${
                  selectedBranch === "potsdam"
                    ? "border-emerald-500 bg-gradient-to-br from-emerald-500/5 via-card to-card shadow-sm"
                    : "border-border/60 hover:border-border"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-[14px] font-extrabold text-foreground">Potsdam Sub-Clinic</h4>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Consultation & Recovery Wing</p>
                    </div>
                    {selectedBranch === "potsdam" ? (
                      <Badge tone="success">Primary</Badge>
                    ) : (
                      <Badge tone="info">Branch</Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 pt-1 text-[12px] font-mono text-muted-foreground">
                    <div className="bg-background/60 p-2 rounded-xl border border-border/20 text-center">
                      <div className="font-bold text-foreground">3</div>
                      <div>Rooms</div>
                    </div>
                    <div className="bg-background/60 p-2 rounded-xl border border-border/20 text-center">
                      <div className="font-bold text-foreground">1</div>
                      <div>Doctor</div>
                    </div>
                    <div className="bg-background/60 p-2 rounded-xl border border-border/20 text-center">
                      <div className="font-bold text-foreground">35%</div>
                      <div>Occupancy</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-border/20 flex items-center justify-between text-[11.5px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> Open: 09:00 - 17:00
                  </span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">Manage Campus →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connected API Gateways Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* WhatsApp Automation Setup */}
          <div className="rounded-3xl border border-border/50 bg-card shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4.5 w-4.5 text-[#0D9488]" />
                  <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">WhatsApp Business API</h3>
                </div>
                <Switch checked={chatbotActive} onChange={setChatbotActive} />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between bg-background/50 border border-border/40 p-4 rounded-2xl">
                  <div>
                    <div className="text-[12.5px] font-bold text-foreground">Chatbot Integration Status</div>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Automated appointment scheduling & EMR sync.</p>
                  </div>
                  <Badge tone={chatbotActive ? "success" : "danger"}>
                    {chatbotActive ? "API Connected" : "Disabled"}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <DiagnosticRow label="WhatsApp Phone Number" value="+49 170 1234567" status="success" />
                  <DiagnosticRow label="Average Hook Latency" value="14ms" status="success" />
                  <DiagnosticRow label="Opted-in Patients" value="1,894 accounts" status="info" />
                  <DiagnosticRow label="Meta Account Status" value="Verified" status="success" />
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-muted/10 border-t border-border/20 flex items-center justify-between">
              <span className="text-[11px] font-mono text-muted-foreground">WABA ID: waba_842a9k1z995e</span>
              <Button size="xs" variant="ghost">Configure Templates</Button>
            </div>
          </div>

          {/* Stripe Webhook Diagnostic Console */}
          <div className="rounded-3xl border border-border/50 bg-card shadow-xs overflow-hidden flex flex-col justify-between">
            <div>
              <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4.5 w-4.5 text-emerald-700" />
                  <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Stripe Payments Console</h3>
                </div>
                <Switch checked={sandboxMode} onChange={setSandboxMode} />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between bg-background/50 border border-border/40 p-4 rounded-2xl">
                  <div>
                    <div className="text-[12.5px] font-bold text-foreground">Stripe Integration Status</div>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">End-to-end sandbox payments integration.</p>
                  </div>
                  <Badge tone={sandboxMode ? "info" : "success"}>
                    {sandboxMode ? "Sandbox mode" : "Live mode"}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <DiagnosticRow label="Webhook Endpoint" value="/api/v1/webhooks/stripe" status="success" />
                  <DiagnosticRow label="API Handshake" value="Healthy" status="success" />
                  <DiagnosticRow label="Active Webhook Signing Key" value="whsec_••••••••" status="success" />
                  <DiagnosticRow label="HIPAA Audit Routing" value="Enabled" status="success" />
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-muted/10 border-t border-border/20 flex items-center justify-between">
              <span className="text-[11px] font-mono text-muted-foreground">Webhook ID: hook_01jk98az8f9</span>
              <Button size="xs" variant="ghost" onClick={() => handleStripeUpgrade("Sandbox Diagnostic Check", 1)}>
                Test Connection
              </Button>
            </div>
          </div>
        </div>

        {/* Practitioner Team Seating Roster */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-xs overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">Practitioner Team Seats</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5">Manage physician permissions and access credentials.</p>
            </div>
            <Button size="xs" onClick={() => handleStripeUpgrade("Extra Provider Seat Addition", 129)}>
              <Plus className="h-3.5 w-3.5" /> Invite Provider
            </Button>
          </div>
          <div className="divide-y divide-border/25">
            {[
              { name: "Dr. Iman Reyes", role: "Medical Director", license: "MD-84920", status: "Active", access: "Administrator", email: "iman@meridian.io" },
              { name: "Dr. Sarah Khan", role: "Consultant Cardiologist", license: "MD-91024", status: "Active", access: "Doctor", email: "sarah.khan@meridian.io" },
              { name: "Prof. Marcus Weiss", role: "Internal Medicine", license: "MD-55829", status: "Active", access: "Doctor", email: "marcus.weiss@meridian.io" },
              { name: "Emma Cole", role: "Practice Lead Nurse", license: "RN-11802", status: "Active", access: "Nurse Practitioner", email: "emma.cole@meridian.io" },
            ].map((p) => (
              <div key={p.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 hover:bg-muted/5 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-700/20 text-[#0F766E] dark:text-[#2DD4BF] flex items-center justify-center font-bold text-[13.5px] border border-border/40">
                    {p.name.split(" ").pop()?.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-foreground flex items-center gap-2">
                      {p.name} <Badge tone="success">{p.status}</Badge>
                    </div>
                    <div className="text-[11.5px] text-muted-foreground mt-0.5">
                      {p.role} · Specialty License: <span className="font-mono">{p.license}</span>
                    </div>
                    <div className="flex items-center gap-3.5 text-[11px] text-muted-foreground/80 mt-1">
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {p.email}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 sm:self-center">
                  <div className="bg-background/80 border border-border/40 px-3 py-1.5 rounded-xl">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">Role</span>
                    <span className="text-[11.5px] font-bold text-foreground block mt-0.5">{p.access}</span>
                  </div>
                  <Button variant="ghost" size="xs">Edit Settings</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HIPAA Telemetry Security Logger */}
        <div className="rounded-3xl border border-border/50 bg-card shadow-xs overflow-hidden">
          <div className="px-6 py-4 bg-muted/20 border-b border-border/40 flex items-center justify-between">
            <div>
              <h3 className="text-[13.5px] font-bold text-foreground tracking-tight">HIPAA Audit Logs & Telemetry</h3>
              <p className="text-[11.5px] text-muted-foreground mt-0.5">Real-time encryption events and practitioner records access logs.</p>
            </div>
            <Badge tone="success" className="font-mono">
              <Lock className="h-2.5 w-2.5 mr-1" /> SECURE HANDSHAKE
            </Badge>
          </div>
          <div className="p-5 bg-black/5 dark:bg-black/25">
            <div className="font-mono text-[11px] text-muted-foreground space-y-2.5 max-h-[160px] overflow-y-auto scrollbar-none">
              <div className="flex items-start gap-3">
                <span className="text-emerald-700 dark:text-emerald-450 font-bold">[14:22:10]</span>
                <span className="text-foreground">E-prescription signed securely by Dr. Iman Reyes (License: MD-84920) via private RSA key.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-700 dark:text-emerald-450 font-bold">[13:05:42]</span>
                <span className="text-foreground">Patient EHR records database backup encrypted and synced to AWS HIPAA bucket (Region: eu-central-1).</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-700 dark:text-emerald-450 font-bold">[11:40:19]</span>
                <span className="text-foreground">WhatsApp API bot dispatched automated booking reminder to patient (+49 170 •••• 567) - Delivered: 200 OK.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-700 dark:text-emerald-450 font-bold">[10:15:00]</span>
                <span className="text-foreground">Secure TLS 1.3 handshake completed with Stripe sandbox webhook listener (IP: 54.187.216.5).</span>
              </div>
              <div className="flex items-start gap-3 opacity-60">
                <span className="text-emerald-700 dark:text-emerald-450 font-bold">[09:30:11]</span>
                <span className="text-foreground">Administrator session authorized for Sudeep Kumar (Berlin Central Campus). Authentication token validated.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

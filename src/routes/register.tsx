import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { User, Mail, Lock, Building, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/landing/HeaderNav";
import { FormInput, FormSelect } from "@/components/app/FormComponents";
import { toast } from "sonner";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account · Autonique" },
      { name: "description", content: "Register a clinic account on Autonique." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [practiceName, setPracticeName] = useState("");
  const [specialty, setSpecialty] = useState("general");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !practiceName || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    toast.loading("Setting up practice environment...", { id: "register-toast" });

    setTimeout(() => {
      setLoading(false);
      toast.success("Account successfully created!", {
        id: "register-toast",
        description: "Welcome to Autonique Clinical OS.",
      });
      navigate({ to: "/dashboard" });
    }, 1800);
  };

  const specialties = [
    { label: "General Practice / Family Medicine", value: "general" },
    { label: "Cardiology", value: "cardiology" },
    { label: "Dermatology", value: "dermatology" },
    { label: "Pediatrics", value: "pediatrics" },
    { label: "Neurology", value: "neurology" },
    { label: "Other / Specialty Clinic", value: "other" },
  ];

  return (
    <div className="relative min-h-screen bg-[#F8FFFE] dark:bg-[#061514] text-[#0F172A] dark:text-[#E2F1F0] font-sans flex items-center justify-center p-4 overflow-x-hidden select-none">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#0D9488]/8 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#14B8A6]/8 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:20px_20px] z-0" />

      {/* Main Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-[440px] bg-white/70 dark:bg-[#0B201E]/60 backdrop-blur-xl rounded-[24px] border border-[#0D9488]/15 dark:border-[#0D9488]/30 shadow-2xl p-6 sm:p-8 space-y-5">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          <Logo className="scale-105" />
          <div className="pt-1.5">
            <h2 className="text-[17px] font-bold text-foreground tracking-tight">Create your account</h2>
            <p className="text-[11.5px] text-muted-foreground">Start your 14-day free trial on Clinical OS</p>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleRegister} className="space-y-3.5">
          <div className="relative">
            <User className="absolute top-8 left-3.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <FormInput
              label="Full Name"
              type="text"
              placeholder="Dr. Sarah Khan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-9.5"
              required
              disabled={loading}
            />
          </div>

          <div className="relative">
            <Mail className="absolute top-8 left-3.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <FormInput
              label="Email Address"
              type="email"
              placeholder="sarah@clinic.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9.5"
              required
              disabled={loading}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="relative">
              <Building className="absolute top-8 left-3.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
              <FormInput
                label="Practice Name"
                type="text"
                placeholder="Apex Clinic"
                value={practiceName}
                onChange={(e) => setPracticeName(e.target.value)}
                className="pl-9.5"
                required
                disabled={loading}
              />
            </div>
            <div>
              <FormSelect
                label="Specialization"
                options={specialties}
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="relative">
            <Lock className="absolute top-8 left-3.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <FormInput
              label="Password"
              type="password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-9.5"
              required
              disabled={loading}
            />
          </div>

          <div className="text-[10px] leading-relaxed text-muted-foreground">
            By signing up, you agree to our{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Legal docs are simulated."); }} className="text-primary hover:underline font-semibold">Terms of Service</a>{" "}
            and{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Privacy docs are simulated."); }} className="text-primary hover:underline font-semibold">Privacy Policy</a>.
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-9.5 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:opacity-95 text-white text-[12.5px] font-bold shadow-md shadow-[#0D9488]/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none mt-1"
          >
            {loading ? (
              <span className="h-4.5 w-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Generate Practice Environment</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Redirect options */}
        <p className="text-center text-[11px] text-muted-foreground pt-1">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline font-semibold">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}

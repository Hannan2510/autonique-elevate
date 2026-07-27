import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, ArrowRight, Chrome, Apple, Sparkles } from "lucide-react";
import { Logo } from "@/components/landing/HeaderNav";
import { FormInput } from "@/components/app/FormComponents";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In · Autonique" },
      { name: "description", content: "Sign in to your clinical operating system." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    toast.loading("Authenticating credentials...", { id: "login-toast" });

    setTimeout(() => {
      setLoading(false);
      toast.success("Successfully logged in!", {
        id: "login-toast",
        description: "Redirecting to your clinical dashboard.",
      });
      navigate({ to: "/dashboard" });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-[#F8FFFE] dark:bg-[#061514] text-[#0F172A] dark:text-[#E2F1F0] font-sans flex items-center justify-center p-4 overflow-x-hidden select-none">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#0D9488]/8 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#14B8A6]/8 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04] bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:20px_20px] z-0" />

      {/* Main Glassmorphic Container */}
      <div className="relative z-10 w-full max-w-[420px] bg-white/70 dark:bg-[#0B201E]/60 backdrop-blur-xl rounded-[24px] border border-[#0D9488]/15 dark:border-[#0D9488]/30 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          <Logo className="scale-105" />
          <div className="pt-2">
            <h2 className="text-[17px] font-bold text-foreground tracking-tight">Welcome back</h2>
            <p className="text-[11.5px] text-muted-foreground">Sign in to manage your medical practice</p>
          </div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute top-8 left-3.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <FormInput
              label="Email Address"
              type="email"
              placeholder="name@clinic.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-9.5"
              required
              disabled={loading}
            />
          </div>

          <div className="relative">
            <Lock className="absolute top-8 left-3.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <FormInput
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-9.5"
              required
              disabled={loading}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer text-muted-foreground hover:text-foreground transition-all">
              <input type="checkbox" className="rounded border-border/80 text-primary focus:ring-emerald-500/20" />
              <span>Remember me</span>
            </label>
            <a href="#" onClick={(e) => { e.preventDefault(); toast.info("Password recovery is disabled for demo."); }} className="text-primary hover:underline font-semibold">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-9.5 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0D9488] hover:opacity-95 text-white text-[12.5px] font-bold shadow-md shadow-[#0D9488]/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none mt-2"
          >
            {loading ? (
              <span className="h-4.5 w-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign In to OS</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Separator */}
        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-border/40"></div>
          <span className="flex-shrink mx-3 text-[10px] text-muted-foreground uppercase font-mono tracking-wider font-semibold">Or continue with</span>
          <div className="flex-grow border-t border-border/40"></div>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => toast.info("Google OAuth is simulated for demo.")}
            className="flex h-9 items-center justify-center gap-2 rounded-xl border border-border/80 bg-background text-[11.5px] font-semibold text-foreground hover:bg-accent transition-all cursor-pointer"
          >
            <Chrome className="h-3.5 w-3.5 text-rose-500" />
            <span>Google</span>
          </button>
          <button
            onClick={() => toast.info("Apple OAuth is simulated for demo.")}
            className="flex h-9 items-center justify-center gap-2 rounded-xl border border-border/80 bg-background text-[11.5px] font-semibold text-foreground hover:bg-accent transition-all cursor-pointer"
          >
            <Apple className="h-3.5 w-3.5 text-foreground" />
            <span>Apple ID</span>
          </button>
        </div>

        {/* Redirect options */}
        <p className="text-center text-[11px] text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline font-semibold">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}

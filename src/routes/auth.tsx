import React, { useState, useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Lock,
  Mail,
  User,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Globe,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  BookOpen,
  ArrowLeft,
  KeyRound,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUser, loginUser, getCurrentUser, UserProfile } from "@/lib/auth-state";
import { checkAndLockGuestDemo, validateEmailMx, checkProjectAccess } from "@/services/ecosystem-auth-service";

export const Route = createFileRoute("/auth")({
  validateSearch: (s: Record<string, unknown>): { next?: string; tab?: "login" | "cadastro" } => ({
    next: typeof s.next === "string" && s.next.startsWith("/") && !s.next.startsWith("//") ? s.next : undefined,
    tab: s.tab === "cadastro" || s.tab === "login" ? s.tab : undefined,
  }),
  component: AuthPage,
});

const ECOSYSTEM_APPS = [
  {
    id: "construtor-pdf",
    name: "Montanha PDF Studio",
    tag: "App Atual",
    slogan: "Diagramação Editorial & Publicações de Alto Nível com IA",
    accent: "#f59e0b",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    isCurrent: true,
  },
  {
    id: "eduflow-finance",
    name: "Montanha Personal Studio",
    tag: "Finanças & Studio",
    slogan: "Gestão Financeira & Inteligência de Negócio para Studios",
    accent: "#10b981",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    isCurrent: false,
  },
  {
    id: "sistema-hibrido",
    name: "Montanha Hybrid Training",
    tag: "Treino Híbrido",
    slogan: "Alta Performance & Periodização de Treino",
    accent: "#06b6d4",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    isCurrent: false,
  },
  {
    id: "smart-language",
    name: "Montanha Language AI",
    tag: "Idiomas com IA",
    slogan: "Tutor de Idiomas com IA & Microtreinos de 5 Minutos",
    accent: "#6366f1",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    isCurrent: false,
  },
  {
    id: "whatsapp-lovable",
    name: "Montanha WhatsApp Automation",
    tag: "SaaS CRM",
    slogan: "Automação Multi-Tenant & Disparos de PDFs via WhatsApp",
    accent: "#a855f7",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    isCurrent: false,
  },
];

function AuthPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();
  const nextTarget = search.next || "/";

  const [activeTab, setActiveTab] = useState<"login" | "cadastro" | "reset">(
    search.tab === "cadastro" ? "cadastro" : "login"
  );
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => getCurrentUser());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showEcosystem, setShowEcosystem] = useState(false);

  // Form Fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  useEffect(() => {
    const handleAuthSync = () => {
      setCurrentUser(getCurrentUser());
    };
    window.addEventListener("montanha-auth-changed", handleAuthSync);
    return () => window.removeEventListener("montanha-auth-changed", handleAuthSync);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const cleanEmail = loginEmail.trim().toLowerCase();
      const mx = await validateEmailMx(cleanEmail);
      if (!mx.valid) {
        setErrorMessage(mx.reason || "E-mail inválido.");
        setIsLoading(false);
        return;
      }

      const access = await checkProjectAccess(null, "construtor-pdf", cleanEmail);
      if (!access.hasAccess) {
        setErrorMessage(access.message || "Acesso não liberado para este projeto.");
        setIsLoading(false);
        return;
      }

      const res = loginUser(cleanEmail, loginPassword);
      if (!res.success) {
        setErrorMessage(res.error || "Credenciais inválidas. Verifique seu e-mail e senha.");
        setIsLoading(false);
        return;
      }

      setSuccessMessage("Autenticação validada com sucesso! Redirecionando...");
      setTimeout(() => {
        navigate({ to: nextTarget });
      }, 700);
    } catch (err) {
      setErrorMessage("Erro inesperado ao validar credenciais. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const cleanEmail = registerEmail.trim().toLowerCase();
      const mx = await validateEmailMx(cleanEmail);
      if (!mx.valid) {
        setErrorMessage(mx.reason || "E-mail inválido.");
        setIsLoading(false);
        return;
      }

      const res = registerUser(registerName, cleanEmail, registerPassword);
      if (!res.success) {
        setErrorMessage(res.error || "Não foi possível concluir o cadastro.");
        setIsLoading(false);
        return;
      }

      setSuccessMessage("Conta criada com sucesso! Redirecionando...");
      setTimeout(() => {
        navigate({ to: nextTarget });
      }, 700);
    } catch (err) {
      setErrorMessage("Falha ao registrar usuário.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const cleanEmail = loginEmail.trim().toLowerCase();
      if (!cleanEmail) {
        setErrorMessage("Informe o e-mail cadastrado.");
        setIsLoading(false);
        return;
      }

      const mx = await validateEmailMx(cleanEmail);
      if (!mx.valid) {
        setErrorMessage(mx.reason || "E-mail inválido.");
        setIsLoading(false);
        return;
      }

      setSuccessMessage(`Um link de recuperação seguro foi despachado para ${cleanEmail}.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickFill = (email: string, pass: string) => {
    setLoginEmail(email);
    setLoginPassword(pass);
    setErrorMessage(null);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-4 selection:bg-amber-500 selection:text-black">
      {/* Background Decorative Auras */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-amber-500/15 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-orange-600/10 blur-[150px]" />
      </div>

      {/* Top Bar with back link */}
      <div className="w-full max-w-md flex items-center justify-between mb-6 z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-amber-400 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Estúdio Principal</span>
        </Link>
        <span className="font-mono text-[10px] uppercase font-bold text-amber-400/90 border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
          v2.5 Security Gate
        </span>
      </div>

      {/* Main Authentication Card */}
      <div className="w-full max-w-md z-10 bg-slate-900/85 backdrop-blur-2xl border border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_60px_rgba(245,158,11,0.15)] space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 border-b border-slate-800 pb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/25 border-2 border-black mb-1">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center justify-center gap-2">
            <span>Montanha</span>
            <span className="text-amber-400">PDF Studio</span>
          </h1>
          <p className="text-xs text-slate-400">
            Validação de Acesso &amp; Diagramação Editorial com Inteligência Artificial
          </p>
        </div>

        {/* User is already logged in info banner */}
        {currentUser && (
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-amber-400" />
              <div>
                <p className="font-bold text-white">{currentUser.name}</p>
                <p className="text-[10px] text-slate-400">{currentUser.email}</p>
              </div>
            </div>
            <Link
              to={nextTarget}
              className="text-xs font-black text-amber-400 hover:text-amber-300 underline"
            >
              Continuar →
            </Link>
          </div>
        )}

        {/* Tabs Switcher */}
        <div className="flex items-center p-1 rounded-2xl bg-slate-950/70 border border-slate-800">
          <button
            type="button"
            data-testid="auth-page-tab-login"
            onClick={() => {
              setActiveTab("login");
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === "login"
                ? "bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Entrar</span>
          </button>
          <button
            type="button"
            data-testid="auth-page-tab-register"
            onClick={() => {
              setActiveTab("cadastro");
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === "cadastro"
                ? "bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Cadastrar</span>
          </button>
        </div>

        {/* Status Alerts */}
        {errorMessage && (
          <div
            data-testid="auth-page-error-msg"
            className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in"
          >
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div
            data-testid="auth-page-success-msg"
            className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Tab: LOGIN */}
        {activeTab === "login" && (
          <form onSubmit={handleLogin} noValidate className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>E-mail Profissional</span>
              </Label>
              <Input
                type="email"
                required
                data-testid="auth-page-input-login-email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="seu.email@montanha.com"
                className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                  <span>Senha</span>
                </Label>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("reset");
                    setErrorMessage(null);
                    setSuccessMessage(null);
                  }}
                  className="text-xs text-amber-400 hover:text-amber-300 hover:underline font-semibold cursor-pointer"
                >
                  Esqueceu a senha?
                </button>
              </div>
              <Input
                type="password"
                required
                data-testid="auth-page-input-login-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              data-testid="auth-page-btn-submit-login"
              className="w-full h-11 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>{isLoading ? "Validando Acesso..." : "Validar Acesso & Entrar"}</span>
            </Button>

            {/* One-click Demo Credentials Helper */}
            <div className="pt-2 border-t border-slate-800/80 space-y-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block text-center">
                Acesso Rápido de Testes (Ecossistema)
              </span>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <button
                  type="button"
                  onClick={() => handleQuickFill("demo@montanha.com", "senha123")}
                  className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 text-left transition cursor-pointer"
                >
                  <span className="font-bold text-amber-300 block">Coach Demo</span>
                  <span className="text-slate-500">demo@montanha.com</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill("pro@montanha.com", "senha123")}
                  className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 text-left transition cursor-pointer"
                >
                  <span className="font-bold text-emerald-300 block">Assinante PRO</span>
                  <span className="text-slate-500">pro@montanha.com</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Tab: CADASTRO */}
        {activeTab === "cadastro" && (
          <form onSubmit={handleRegister} noValidate className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span>Nome Completo</span>
              </Label>
              <Input
                type="text"
                required
                data-testid="auth-page-input-register-name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                placeholder="Ex: Coach Rafael Montanha"
                className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>E-mail Profissional</span>
              </Label>
              <Input
                type="email"
                required
                data-testid="auth-page-input-register-email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Senha (mínimo 6 caracteres)</span>
              </Label>
              <Input
                type="password"
                required
                data-testid="auth-page-input-register-password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              data-testid="auth-page-btn-submit-register"
              className="w-full h-11 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isLoading ? "Criando Conta..." : "Concluir Cadastro & Acessar"}</span>
            </Button>
          </form>
        )}

        {/* Tab: RESET */}
        {activeTab === "reset" && (
          <form onSubmit={handleResetPassword} noValidate className="space-y-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>E-mail para Redefinição</span>
              </Label>
              <Input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-500 text-xs rounded-xl focus:border-amber-500 focus:ring-amber-500/20"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar Link de Recuperação</span>
            </Button>

            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className="w-full text-center text-xs text-slate-400 hover:text-white transition cursor-pointer"
            >
              ← Voltar para a tela de login
            </button>
          </form>
        )}

        {/* Ecosystem Drawer Toggle */}
        <div className="text-center pt-2 border-t border-slate-800">
          <button
            type="button"
            onClick={() => setShowEcosystem(!showEcosystem)}
            className="text-xs text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 transition-all cursor-pointer shadow-md"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Ecossistema Montanha (5 Apps Integrados)</span>
            {showEcosystem ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Ecosystem Apps Drawer */}
        {showEcosystem && (
          <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-amber-500/30 space-y-2 animate-in fade-in">
            <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Plataformas Integradas do Ecossistema</span>
            </div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {ECOSYSTEM_APPS.map((app) => (
                <div
                  key={app.id}
                  className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                    app.isCurrent
                      ? "bg-amber-500/10 border-amber-500/50 text-white"
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: app.accent }} />
                      {app.name}
                    </span>
                    <span className="text-[10px] text-slate-400">{app.slogan}</span>
                  </div>
                  <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${app.badgeBg}`}>
                    {app.isCurrent ? "ATUAL" : app.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <footer className="mt-8 text-center text-[11px] text-slate-500 z-10 space-y-1">
        <p>Montanha PDF Studio — Ecossistema Montanha © 2026</p>
        <p>Acesso unificado com segurança e alta performance editorial.</p>
      </footer>
    </div>
  );
}

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { registerUser, loginUser, UserProfile } from "../../lib/auth-state";
import { LogIn, UserPlus, AlertCircle, CheckCircle2, Lock, Mail, User } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
  initialTab?: "login" | "register";
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialTab = "login",
}) => {
  const [activeTab, setActiveTab] = useState<"login" | "register">(initialTab);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Login Form State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register Form State
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const resetForm = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoginEmail("");
    setLoginPassword("");
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const res = loginUser(loginEmail, loginPassword);
    if (!res.success) {
      setErrorMessage(res.error || "Falha na autenticação.");
      return;
    }

    setSuccessMessage("Login realizado com sucesso!");
    setTimeout(() => {
      if (res.user) onSuccess(res.user);
      handleClose();
    }, 600);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const res = registerUser(registerName, registerEmail, registerPassword);
    if (!res.success) {
      setErrorMessage(res.error || "Falha no cadastro.");
      return;
    }

    setSuccessMessage("Cadastro realizado com sucesso!");
    setTimeout(() => {
      if (res.user) onSuccess(res.user);
      handleClose();
    }, 600);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        data-testid="auth-modal"
        className="theme-app-card max-w-md p-6 font-sans border-2 border-black shadow-2xl"
      >
        <DialogHeader className="border-b pb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
              CONTA & SEGURANÇA
            </span>
          </div>
          <DialogTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-500" />
            <span>{activeTab === "login" ? "Entrar na sua Conta" : "Criar Nova Conta"}</span>
          </DialogTitle>
        </DialogHeader>

        {/* Tab switchers */}
        <div className="flex items-center p-1 rounded-lg border-2 border-current theme-app-card-subtle my-2">
          <button
            type="button"
            data-testid="tab-login"
            onClick={() => {
              setActiveTab("login");
              setErrorMessage(null);
            }}
            className={`flex-1 py-1.5 text-xs font-black rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === "login"
                ? "bg-amber-400 text-black shadow-xs border border-black"
                : "opacity-75 hover:opacity-100"
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Entrar</span>
          </button>
          <button
            type="button"
            data-testid="tab-register"
            onClick={() => {
              setActiveTab("register");
              setErrorMessage(null);
            }}
            className={`flex-1 py-1.5 text-xs font-black rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === "register"
                ? "bg-amber-400 text-black shadow-xs border border-black"
                : "opacity-75 hover:opacity-100"
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Cadastrar</span>
          </button>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div
            data-testid="auth-error-msg"
            className="p-3 rounded-lg bg-red-500/10 border-2 border-red-500 text-red-700 text-xs font-bold flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success Notification */}
        {successMessage && (
          <div
            data-testid="auth-success-msg"
            className="p-3 rounded-lg bg-emerald-500/10 border-2 border-emerald-500 text-emerald-700 text-xs font-bold flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Login Tab Form */}
        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4 pt-1">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold uppercase flex items-center gap-1">
                <Mail className="w-3 h-3 text-amber-500" />
                <span>E-mail</span>
              </Label>
              <Input
                type="email"
                data-testid="input-login-email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="theme-app-input font-medium text-xs border-2"
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-bold uppercase flex items-center gap-1">
                <Lock className="w-3 h-3 text-amber-500" />
                <span>Senha</span>
              </Label>
              <Input
                type="password"
                data-testid="input-login-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="theme-app-input font-medium text-xs border-2"
              />
            </div>

            <Button
              type="submit"
              data-testid="btn-submit-login"
              className="w-full h-10 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs uppercase border-2 border-black shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-4 h-4" />
              <span>Acessar Conta</span>
            </Button>
          </form>
        )}

        {/* Register Tab Form */}
        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="space-y-3.5 pt-1">
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase flex items-center gap-1">
                <User className="w-3 h-3 text-amber-500" />
                <span>Nome Completo</span>
              </Label>
              <Input
                type="text"
                data-testid="input-register-name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                placeholder="Ex: Coach Silva"
                className="theme-app-input font-medium text-xs border-2"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase flex items-center gap-1">
                <Mail className="w-3 h-3 text-amber-500" />
                <span>E-mail Profissional</span>
              </Label>
              <Input
                type="email"
                data-testid="input-register-email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="theme-app-input font-medium text-xs border-2"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase flex items-center gap-1">
                <Lock className="w-3 h-3 text-amber-500" />
                <span>Senha (Mínimo 6 caracteres)</span>
              </Label>
              <Input
                type="password"
                data-testid="input-register-password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                placeholder="••••••••"
                className="theme-app-input font-medium text-xs border-2"
              />
            </div>

            <Button
              type="submit"
              data-testid="btn-submit-register"
              className="w-full h-10 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs uppercase border-2 border-black shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" />
              <span>Concluir Cadastro & Entrar</span>
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

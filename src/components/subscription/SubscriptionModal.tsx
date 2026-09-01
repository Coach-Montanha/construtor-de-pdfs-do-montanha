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
import { upgradeUserToPro } from "../../lib/auth-state";
import { Crown, CreditCard, ShieldCheck, CheckCircle2, AlertCircle, Sparkles, Check } from "lucide-react";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const resetForm = () => {
    setCardNumber("");
    setCardHolder("");
    setCardExpiry("");
    setCardCvv("");
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsProcessing(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsProcessing(true);

    setTimeout(() => {
      const res = upgradeUserToPro(cardNumber, cardHolder, cardExpiry, cardCvv);
      setIsProcessing(false);

      if (!res.success) {
        setErrorMessage(res.error || "Pagamento recusado.");
        return;
      }

      setSuccessMessage("Pagamento aprovado! Plano Montanha Magazine PRO ativado com sucesso.");
      setTimeout(() => {
        onSuccess();
        handleClose();
      }, 700);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        data-testid="payment-modal"
        className="theme-app-card max-w-lg max-h-[92vh] overflow-y-auto p-6 font-sans border-2 border-black shadow-2xl custom-scrollbar"
      >
        <DialogHeader className="border-b pb-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase flex items-center gap-1">
              <Crown className="w-3 h-3 text-black" />
              UPGRADE PRO
            </span>
          </div>
          <DialogTitle className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
            <span>Montanha Magazine Studio PRO</span>
          </DialogTitle>
          <p className="text-xs opacity-75 mt-0.5">
            Desbloqueie exportação vetorial de PDFs em alta resolução (300 DPI para impressão), redação ilimitada por IA e todos os 16 temas editoriais.
          </p>
        </DialogHeader>

        {/* Plan Selector */}
        <div className="grid grid-cols-2 gap-3 my-3">
          <button
            type="button"
            data-testid="btn-plan-annual"
            onClick={() => setSelectedPlan("annual")}
            className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
              selectedPlan === "annual"
                ? "bg-amber-400 text-black border-black shadow-sm ring-2 ring-amber-400"
                : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-black text-xs uppercase">Plano Anual</span>
              <span className="font-mono text-[8.5px] font-black px-1.5 py-0.5 rounded bg-black text-amber-400 border border-black uppercase">
                ECONOMIZE 35%
              </span>
            </div>
            <div className="font-black text-lg">12x R$ 32,50</div>
            <span className="text-[10px] opacity-75 font-semibold block">R$ 390 / ano faturado</span>
          </button>

          <button
            type="button"
            data-testid="btn-plan-monthly"
            onClick={() => setSelectedPlan("monthly")}
            className={`p-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
              selectedPlan === "monthly"
                ? "bg-amber-400 text-black border-black shadow-sm ring-2 ring-amber-400"
                : "theme-app-card-subtle border-slate-300 hover:border-black opacity-80"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="font-black text-xs uppercase">Plano Mensal</span>
            </div>
            <div className="font-black text-lg">R$ 49,00</div>
            <span className="text-[10px] opacity-75 font-semibold block">Sem fidelidade</span>
          </button>
        </div>

        {/* Features Checklist */}
        <div className="theme-app-card-subtle p-3 rounded-lg border text-xs space-y-1.5 mb-2">
          <div className="flex items-center gap-1.5 font-bold">
            <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>PDFs em Alta Definição Prontos para Gráfica e Impressão</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold">
            <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Geração de Matérias e Redação Editorial Ilimitada com IA</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold">
            <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Acesso a Todos os 16 Temas e Famílias Tipográficas Premium</span>
          </div>
        </div>

        {/* Error Feedback */}
        {errorMessage && (
          <div
            data-testid="payment-error-msg"
            className="p-3 rounded-lg bg-red-500/10 border-2 border-red-500 text-red-700 text-xs font-bold flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success Feedback */}
        {successMessage && (
          <div
            data-testid="payment-success-badge"
            className="p-3 rounded-lg bg-emerald-500/10 border-2 border-emerald-500 text-emerald-700 text-xs font-bold flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Payment Form */}
        <form onSubmit={handlePayment} className="space-y-3 pt-1">
          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-amber-500" />
              <span>Número do Cartão de Crédito</span>
            </Label>
            <Input
              type="text"
              data-testid="input-card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="4532 0156 8920 4455"
              maxLength={19}
              className="theme-app-input font-mono text-xs border-2"
            />
          </div>

          <div className="space-y-1">
            <Label className="text-xs font-bold uppercase">Nome Impresso no Cartão</Label>
            <Input
              type="text"
              data-testid="input-card-holder"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
              placeholder="COACH SILVA"
              className="theme-app-input font-bold text-xs border-2 uppercase"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase">Validade (MM/AA)</Label>
              <Input
                type="text"
                data-testid="input-card-expiry"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                placeholder="12/28"
                maxLength={5}
                className="theme-app-input font-mono text-xs border-2 text-center"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase">CVV (3 ou 4 dígitos)</Label>
              <Input
                type="password"
                data-testid="input-card-cvv"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                placeholder="•••"
                maxLength={4}
                className="theme-app-input font-mono text-xs border-2 text-center"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isProcessing}
              data-testid="btn-submit-payment"
              className="w-full h-11 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs uppercase border-2 border-black shadow-md cursor-pointer flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>
                {isProcessing
                  ? "Processando Pagamento Seguro..."
                  : selectedPlan === "annual"
                  ? "Confirmar Assinatura Anual (R$ 390)"
                  : "Confirmar Assinatura Mensal (R$ 49)"}
              </span>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] font-mono opacity-60 text-center pt-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>Ambiente Criptografado de Pagamento com Certificado SSL 256-bit</span>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

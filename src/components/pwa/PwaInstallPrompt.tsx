import React, { useState, useEffect } from "react";
import { Download, Smartphone, CheckCircle2, Share, PlusSquare, X } from "lucide-react";
import { Button } from "../ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export const PwaInstallPrompt: React.FC<{ variant?: "header" | "card" | "banner" }> = ({
  variant = "header",
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isIos, setIsIos] = useState<boolean>(false);
  const [showIosGuide, setShowIosGuide] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if already installed as standalone
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    ) {
      setIsInstalled(true);
      return;
    }

    // Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIos(isIosDevice);

    // Capture beforeinstallprompt for Android / Chrome / Edge
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIos) {
      setShowIosGuide(true);
    } else {
      alert("Para instalar no celular: abra as opções do seu navegador (três pontinhos) e selecione 'Adicionar à Tela Inicial' ou 'Instalar Aplicativo'.");
    }
  };

  if (isInstalled) {
    if (variant === "card") {
      return (
        <div className="p-4 rounded-xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <div className="text-xs">
            <span className="font-black block uppercase text-emerald-600">App Instalado no Dispositivo</span>
            <span className="opacity-80">Você já está utilizando a versão PWA instalada do Montanha Magazine Studio.</span>
          </div>
        </div>
      );
    }
    return null;
  }

  // Header Button Variant
  if (variant === "header") {
    return (
      <>
        <Button
          size="sm"
          onClick={handleInstallClick}
          className="h-8 sm:h-9 bg-amber-400 hover:bg-amber-500 text-black border-2 border-black font-black text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
          title="Instalar App no Celular / Computador"
        >
          <Smartphone className="w-3.5 h-3.5 text-black" />
          <span className="hidden lg:inline">Instalar App (PWA)</span>
          <span className="lg:hidden">App</span>
        </Button>

        {/* iOS Guide Modal */}
        {showIosGuide && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="theme-app-card max-w-sm w-full p-5 rounded-2xl border-2 border-black shadow-2xl space-y-4 font-sans text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center mx-auto border-2 border-black">
                <Smartphone className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-black text-base uppercase">Instalar no iPhone / iPad</h3>
              <p className="text-xs opacity-80 leading-relaxed text-left space-y-2">
                <span className="block font-semibold">1. Toque no botão de <strong>Compartilhar</strong> (<Share className="w-3.5 h-3.5 inline mx-0.5 text-blue-500" />) na barra do Safari.</span>
                <span className="block font-semibold">2. Role para baixo e selecione <strong>Adicionar à Tela de Início</strong> (<PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-amber-500" />).</span>
                <span className="block font-semibold">3. Toque em <strong>Adicionar</strong> no topo direito. O app aparecerá direto na sua tela inicial!</span>
              </p>
              <Button
                onClick={() => setShowIosGuide(false)}
                className="w-full bg-amber-400 hover:bg-amber-500 text-black font-black text-xs h-9 border-2 border-black"
              >
                Entendi!
              </Button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Card Variant in Settings
  if (variant === "card") {
    return (
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-3 shadow-sm bg-amber-400/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-amber-500" />
            <h3 className="text-sm font-black uppercase tracking-tight">
              Instalar Aplicativo no Celular ou Desktop (PWA)
            </h3>
          </div>
          <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
            PWA STANDALONE
          </span>
        </div>

        <p className="text-xs opacity-75 leading-relaxed">
          Instale o Montanha Magazine Studio como um aplicativo nativo no seu iPhone, celular Android ou computador. Tenha acesso rápido em tela cheia direto do seu ícone na tela inicial.
        </p>

        <div className="pt-2">
          <Button
            onClick={handleInstallClick}
            className="h-9 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs px-5 border-2 border-black shadow-md cursor-pointer flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Instalar Aplicativo Agora</span>
          </Button>
        </div>

        {/* iOS Guide Modal */}
        {showIosGuide && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="theme-app-card max-w-sm w-full p-5 rounded-2xl border-2 border-black shadow-2xl space-y-4 font-sans text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center mx-auto border-2 border-black">
                <Smartphone className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-black text-base uppercase">Instalar no iPhone / iPad</h3>
              <div className="text-xs opacity-85 leading-relaxed text-left space-y-2 font-medium">
                <p>1. Toque no botão de <strong>Compartilhar</strong> (<Share className="w-3.5 h-3.5 inline mx-0.5 text-blue-500" />) na barra inferior do Safari.</p>
                <p>2. Role a lista e toque em <strong>"Adicionar à Tela de Início"</strong> (<PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-amber-500" />).</p>
                <p>3. Toque em <strong>Adicionar</strong> no canto superior direito.</p>
              </div>
              <Button
                onClick={() => setShowIosGuide(false)}
                className="w-full bg-amber-400 hover:bg-amber-500 text-black font-black text-xs h-9 border-2 border-black"
              >
                Entendi!
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

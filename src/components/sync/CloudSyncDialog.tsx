import React, { useState, useRef } from "react";
import { MagazineProject } from "../../types/magazine";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Cloud,
  RefreshCw,
  Download,
  Upload,
  QrCode,
  Copy,
  CheckCircle2,
  Smartphone,
  Laptop,
  ArrowRightLeft,
  Loader2,
  Sparkles,
  ShieldCheck,
  Send,
  CloudDownload,
  ExternalLink,
} from "lucide-react";
import {
  syncProjectToCloud,
  loadLatestProject,
  exportProjectToFile,
  importProjectFromFile,
  generateShareUrl,
} from "../../lib/cloud-sync";

interface CloudSyncDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: MagazineProject;
  onUpdateProject: (updated: MagazineProject) => void;
}

export const CloudSyncDialog: React.FC<CloudSyncDialogProps> = ({
  isOpen,
  onClose,
  project,
  onUpdateProject,
}) => {
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isPulling, setIsPulling] = useState<boolean>(false);
  const [lastSyncedText, setLastSyncedText] = useState<string>("Sincronizado");
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [syncSuccessMessage, setSyncSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const shareUrl = typeof window !== "undefined" ? generateShareUrl(project) : "";
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
    shareUrl
  )}&bgcolor=FFFFFF&color=000000&margin=2`;

  const handleManualPushToCloud = async () => {
    setIsSyncing(true);
    setSyncSuccessMessage(null);
    const result = await syncProjectToCloud(project);
    setIsSyncing(false);
    if (result.success) {
      setLastSyncedText(`Sincronizado às ${new Date().toLocaleTimeString("pt-BR")}`);
      setSyncSuccessMessage("✓ Projeto enviado para a nuvem com sucesso! Acesse no outro navegador ou celular para carregar.");
      setTimeout(() => setSyncSuccessMessage(null), 5000);
    }
  };

  const handlePullFromCloud = async () => {
    setIsPulling(true);
    setSyncSuccessMessage(null);
    try {
      const latest = await loadLatestProject();
      if (latest) {
        onUpdateProject(latest);
        setLastSyncedText(`Atualizado da nuvem às ${new Date().toLocaleTimeString("pt-BR")}`);
        setSyncSuccessMessage("✓ Versão mais recente baixada e aplicada neste dispositivo!");
        setTimeout(() => setSyncSuccessMessage(null), 5000);
      }
    } catch (e: any) {
      alert("Erro ao buscar da nuvem: " + e.message);
    } finally {
      setIsPulling(false);
    }
  };

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleExportBackup = () => {
    exportProjectToFile(project);
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const imported = await importProjectFromFile(file);
      onUpdateProject(imported);
      await syncProjectToCloud(imported);
      alert("Backup importado e sincronizado com sucesso em todos os aparelhos!");
      onClose();
    } catch (err: any) {
      alert("Erro ao importar arquivo: " + err.message);
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="theme-app-card max-w-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">
              <Cloud className="w-5 h-5 text-amber-500" />
              <span>Central de Sincronização em Nuvem & Multi-Dispositivo</span>
            </DialogTitle>
          </div>
          <p className="text-xs opacity-75 mt-0.5">
            Sincronize suas matérias, fotos e diagramação entre o notebook (Edge / Chrome) e o celular em tempo real.
          </p>
        </DialogHeader>

        {syncSuccessMessage && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border-2 border-emerald-500/40 text-emerald-700 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{syncSuccessMessage}</span>
          </div>
        )}

        <div className="space-y-4 my-2">
          {/* 1. Direct Transfer via QR Code (Instant 1-Click for Mobile) */}
          <div className="theme-app-card p-4 rounded-xl border-2 space-y-3 shadow-sm bg-amber-400/5">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-500" />
                <h4 className="font-black text-xs uppercase tracking-tight">
                  1. Abrir Exatamente Esta Edição no Celular (QR Code)
                </h4>
              </div>
              <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                INSTANTÂNEO NO CELULAR
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-2 rounded-lg bg-white border-2 border-black shrink-0 shadow-sm">
                <img
                  src={qrCodeApiUrl}
                  alt="QR Code de Sincronização"
                  className="w-32 h-32 object-contain"
                />
              </div>

              <div className="space-y-2 text-xs flex-1 text-center sm:text-left">
                <p className="font-bold opacity-90 leading-snug">
                  Abra a câmera do seu celular e aponte para este QR Code. A edição completa do seu computador carregará imediatamente no seu telefone!
                </p>
                <p className="text-[11px] opacity-75 leading-snug">
                  Transfere todos os artigos, capas personalizadas, fotos e configurações sem depender de login ou cookies de navegador.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <Input
                    value={shareUrl}
                    readOnly
                    className="theme-app-input font-mono text-[10px] h-8 border-2 truncate"
                  />
                  <Button
                    size="sm"
                    onClick={handleCopyLink}
                    className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    {copiedLink ? <CheckCircle2 className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? "Link Copiado!" : "Copiar Link"}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Push & Pull Actions (Sync between Edge and Chrome on Notebook) */}
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4 text-amber-500" />
                <h4 className="font-black text-xs uppercase tracking-tight">
                  2. Sincronização entre Navegadores (Edge ⇄ Chrome ⇄ Celular)
                </h4>
              </div>
              <span className="text-[10px] font-mono font-bold text-emerald-600">
                {lastSyncedText}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <Button
                onClick={handleManualPushToCloud}
                disabled={isSyncing}
                className="h-9 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                {isSyncing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                <span>Enviar Esta Versão para a Nuvem (Upload)</span>
              </Button>

              <Button
                onClick={handlePullFromCloud}
                disabled={isPulling}
                variant="outline"
                className="h-9 font-black text-xs border-2 border-current shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                {isPulling ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CloudDownload className="w-3.5 h-3.5 text-amber-500" />}
                <span>Puxar Versão da Nuvem (Download)</span>
              </Button>
            </div>
          </div>

          {/* 3. Export & Import Backup Files (.json) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Export Backup Card */}
            <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center gap-1.5 font-black text-xs uppercase mb-1">
                  <Download className="w-4 h-4 text-amber-500" />
                  <span>3. Baixar Arquivo de Backup</span>
                </div>
                <p className="text-[11px] opacity-75 leading-snug">
                  Gere um arquivo <code>.json</code> completo com todos os textos e fotos para guardar no Google Drive ou enviar por WhatsApp.
                </p>
              </div>

              <Button
                onClick={handleExportBackup}
                className="w-full h-8 bg-white hover:bg-amber-50 text-black font-bold text-xs border-2 border-black cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-amber-500" />
                <span>Salvar Arquivo .JSON</span>
              </Button>
            </div>

            {/* Import Backup Card */}
            <div className="theme-app-card-subtle p-3.5 rounded-xl border-2 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center gap-1.5 font-black text-xs uppercase mb-1">
                  <Upload className="w-4 h-4 text-amber-500" />
                  <span>4. Restaurar / Importar Backup</span>
                </div>
                <p className="text-[11px] opacity-75 leading-snug">
                  Selecione um arquivo <code>.json</code> salvo para substituir e atualizar o projeto neste dispositivo instantaneamente.
                </p>
              </div>

              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,application/json"
                  onChange={handleImportFile}
                  className="hidden"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-8 bg-white hover:bg-amber-50 text-black font-bold text-xs border-2 border-black cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-500" />
                  <span>Carregar Arquivo .JSON</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

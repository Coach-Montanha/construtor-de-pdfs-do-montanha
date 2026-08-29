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
  CloudCheck,
  RefreshCw,
  Download,
  Upload,
  QrCode,
  Share2,
  Copy,
  CheckCircle2,
  Smartphone,
  Laptop,
  ArrowRightLeft,
  Loader2,
} from "lucide-react";
import {
  syncProjectToCloud,
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
  const [lastSyncedText, setLastSyncedText] = useState<string>("Sincronizado agora");
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const shareUrl = typeof window !== "undefined" ? generateShareUrl(project) : "";
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(
    shareUrl
  )}&bgcolor=FFFFFF&color=000000&margin=1`;

  const handleManualSync = async () => {
    setIsSyncing(true);
    const success = await syncProjectToCloud(project);
    setIsSyncing(false);
    if (success) {
      setLastSyncedText(`Sincronizado com a nuvem às ${new Date().toLocaleTimeString("pt-BR")}`);
    } else {
      setLastSyncedText("Salvo localmente (offline)");
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
      alert("Backup importado e sincronizado com sucesso!");
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
      <DialogContent className="theme-app-card max-w-2xl max-h-[90vh] overflow-y-auto p-6 custom-scrollbar font-sans border-2 border-black shadow-2xl">
        <DialogHeader className="border-b-2 border-current pb-3">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">
              <Cloud className="w-5 h-5 text-amber-500" />
              <span>Central de Sincronização em Nuvem & Backup</span>
            </DialogTitle>
          </div>
          <p className="text-xs opacity-75 mt-0.5">
            Mantenha seu projeto sincronizado entre seu computador, celular e outros navegadores em tempo real.
          </p>
        </DialogHeader>

        <div className="space-y-5 my-3">
          {/* 1. Real-Time Cloud Sync Status Banner */}
          <div className="theme-app-card-subtle p-4 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400 flex items-center justify-center border-2 border-black shrink-0 shadow-sm">
                <ArrowRightLeft className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-black text-xs uppercase text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Sincronização Multi-Dispositivo Ativa</span>
                </div>
                <p className="text-xs opacity-75 font-medium mt-0.5">{lastSyncedText}</p>
              </div>
            </div>

            <Button
              size="sm"
              onClick={handleManualSync}
              disabled={isSyncing}
              className="h-8 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              {isSyncing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
              <span>{isSyncing ? "Sincronizando..." : "Sincronizar Agora"}</span>
            </Button>
          </div>

          {/* 2. QR Code to Open on Mobile Phone */}
          <div className="theme-app-card p-4 rounded-xl border-2 space-y-3 shadow-sm bg-amber-400/5">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-500" />
                <h4 className="font-black text-xs uppercase tracking-tight">
                  Abrir no Celular Instantaneamente (QR Code)
                </h4>
              </div>
              <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                1-CLIQUE NO CELULAR
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
                  Aponte a câmera do seu celular para este QR Code para carregar todas as matérias, fotos e diagramação no seu telefone!
                </p>
                <p className="text-[11px] opacity-75 leading-snug">
                  Qualquer nova matéria ou foto que você adicionar fica disponível tanto no computador quanto no celular.
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

          {/* 3. Export & Import Backup Files (.json) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Export Backup Card */}
            <div className="theme-app-card-subtle p-4 rounded-xl border-2 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-1.5 font-black text-xs uppercase mb-1">
                  <Download className="w-4 h-4 text-amber-500" />
                  <span>Baixar Arquivo de Backup</span>
                </div>
                <p className="text-[11px] opacity-75 leading-snug">
                  Faça o download de um arquivo <code>.json</code> completo com todos os artigos, capas, fotos e configurações da sua revista.
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
            <div className="theme-app-card-subtle p-4 rounded-xl border-2 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center gap-1.5 font-black text-xs uppercase mb-1">
                  <Upload className="w-4 h-4 text-amber-500" />
                  <span>Restaurar / Importar Backup</span>
                </div>
                <p className="text-[11px] opacity-75 leading-snug">
                  Carregue um arquivo <code>.json</code> salvo anteriormente para restaurar sua edição em qualquer outro computador ou celular.
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
                  <span>Escolher Arquivo .JSON</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

import React, { useState, useRef, useEffect } from "react";
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
  Download,
  Upload,
  Copy,
  CheckCircle2,
  Smartphone,
  ArrowRightLeft,
  Loader2,
  Send,
  CloudDownload,
  ExternalLink,
  Key,
  AlertCircle,
  FolderOpen,
  RefreshCw,
  LogOut,
  FolderSync,
  Zap,
  Settings,
  ShieldCheck,
  Info,
  HelpCircle,
} from "lucide-react";
import {
  syncProjectToCloud,
  fetchProjectFromCloud,
  exportProjectToFile,
  importProjectFromFile,
  generateShareUrl,
} from "../../lib/cloud-sync";
import {
  getGoogleDriveStatus,
  connectGoogleDrive,
  disconnectGoogleDrive,
  syncProjectToGoogleDrive,
  fetchProjectFromGoogleDrive,
  pullNewTextsFromGoogleDrive,
  getGoogleDriveFolderUrl,
  GoogleDriveStatus,
  DEDICATED_FOLDER_NAME,
  isGoogleClientIdConfigured,
  getGoogleClientId,
  setGoogleClientId,
} from "../../lib/google-drive-sync";

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
  // Tabs: Sincronização Direta 1-Clique (Padrão) vs Google Drive (Avançado)
  const [activeTab, setActiveTab] = useState<"direct" | "gdrive">("direct");

  const [syncCode, setSyncCode] = useState<string>("MONTANHA");
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [isPulling, setIsPulling] = useState<boolean>(false);
  const [lastSyncedText, setLastSyncedText] = useState<string>("Pronto para sincronizar");
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [syncSuccessMessage, setSyncSuccessMessage] = useState<string | null>(null);
  const [syncErrorMessage, setSyncErrorMessage] = useState<string | null>(null);
  const [qrError, setQrError] = useState<boolean>(false);

  // Google Drive State
  const [driveStatus, setDriveStatus] = useState<GoogleDriveStatus>(() => getGoogleDriveStatus());
  const [isConnectingDrive, setIsConnectingDrive] = useState<boolean>(false);
  const [isSyncingDrive, setIsSyncingDrive] = useState<boolean>(false);
  const [isPullingDrive, setIsPullingDrive] = useState<boolean>(false);
  const [driveMessage, setDriveMessage] = useState<string | null>(null);
  const [driveError, setDriveError] = useState<string | null>(null);
  const [customClientIdInput, setCustomClientIdInput] = useState<string>(() => getGoogleClientId());
  const [isEditingClientId, setIsEditingClientId] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCode = localStorage.getItem("montanha_sync_code");
      if (savedCode) {
        setSyncCode(savedCode.toUpperCase());
      }
      setDriveStatus(getGoogleDriveStatus());
      setCustomClientIdInput(getGoogleClientId());
    }
  }, [isOpen]);

  // Escutar eventos de sincronização do Google Drive
  useEffect(() => {
    const handleStatusChanged = () => {
      setDriveStatus(getGoogleDriveStatus());
      setCustomClientIdInput(getGoogleClientId());
    };
    window.addEventListener("montanha-gdrive-status-changed", handleStatusChanged);
    return () => window.removeEventListener("montanha-gdrive-status-changed", handleStatusChanged);
  }, []);

  const cleanCode = (syncCode || "MONTANHA").trim().toUpperCase();
  const shareUrl = typeof window !== "undefined" ? generateShareUrl(cleanCode) : "";
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
    shareUrl
  )}&bgcolor=FFFFFF&color=000000&margin=2`;

  // --- Handlers do Google Drive ---
  const handleSaveClientId = () => {
    const trimmed = customClientIdInput.trim();
    if (trimmed && (!trimmed.includes(".apps.googleusercontent.com") || trimmed.length < 25)) {
      setDriveError(
        "Formato inválido. O ID do cliente Google precisa terminar com '.apps.googleusercontent.com' (ex: 123456789-abcdef.apps.googleusercontent.com)."
      );
      return;
    }
    setGoogleClientId(trimmed);
    setDriveStatus(getGoogleDriveStatus());
    if (trimmed) {
      setDriveMessage("✓ Google Client ID salvo com sucesso! Agora você pode conectar com o Google Drive.");
      setDriveError(null);
      setIsEditingClientId(false);
    } else {
      setDriveMessage("Google Client ID removido.");
      setIsEditingClientId(false);
    }
  };

  const handleConnectDrive = async () => {
    setIsConnectingDrive(true);
    setDriveMessage(null);
    setDriveError(null);
    try {
      const res = await connectGoogleDrive();
      if (res.success) {
        setDriveMessage(
          `✓ Conectado ao Google Drive com sucesso (${res.email})! Pasta dedicada: "${DEDICATED_FOLDER_NAME}". Sincronizando acervo...`
        );
        // Sincronizar imediatamente o projeto atual e os documentos
        const syncRes = await syncProjectToGoogleDrive(project);
        if (syncRes.success) {
          setDriveMessage(
            `✓ Conectado (${res.email}) e acervo salvo na pasta "${DEDICATED_FOLDER_NAME}" no seu Google Drive!`
          );
        }
      } else {
        setDriveError(res.error || "Falha ao conectar com o Google Drive.");
      }
    } catch (err: any) {
      setDriveError(err?.message || "Erro inesperado ao autenticar com o Google.");
    } finally {
      setIsConnectingDrive(false);
      setDriveStatus(getGoogleDriveStatus());
    }
  };

  const handleDisconnectDrive = () => {
    if (window.confirm("Deseja desconectar sua conta do Google Drive deste dispositivo?")) {
      disconnectGoogleDrive();
      setDriveStatus(getGoogleDriveStatus());
      setDriveMessage("Google Drive desconectado deste navegador.");
    }
  };

  const handleSyncDriveNow = async () => {
    setIsSyncingDrive(true);
    setDriveMessage(null);
    setDriveError(null);
    try {
      const res = await syncProjectToGoogleDrive(project);
      if (res.success) {
        const timeStr = new Date().toLocaleTimeString("pt-BR");
        setDriveMessage(
          `✓ Sincronizado com o Google Drive às ${timeStr}! Todos os ${project.contentRepository?.length || 0} textos do acervo e a revista estão salvos na pasta "${DEDICATED_FOLDER_NAME}".`
        );
      } else {
        setDriveError(res.error || "Falha ao salvar no Google Drive.");
      }
    } catch (err: any) {
      setDriveError(err?.message || "Erro ao sincronizar com o Drive.");
    } finally {
      setIsSyncingDrive(false);
      setDriveStatus(getGoogleDriveStatus());
    }
  };

  const handlePullFromDrive = async () => {
    setIsPullingDrive(true);
    setDriveMessage(null);
    setDriveError(null);
    try {
      // 1. Puxar projeto mestre se disponível
      const projRes = await fetchProjectFromGoogleDrive();
      let currentProj = project;
      let projUpdated = false;
      if (projRes.project && Array.isArray(projRes.project.articles)) {
        currentProj = projRes.project;
        projUpdated = true;
      }

      // 2. Puxar novos arquivos .txt / .md soltos na pasta do Drive
      const textsRes = await pullNewTextsFromGoogleDrive(currentProj.contentRepository || []);
      let updatedDocsList = [...(currentProj.contentRepository || [])];

      if (textsRes.updatedDocs.length > 0) {
        const updateMap = new Map(textsRes.updatedDocs.map((d) => [d.id, d]));
        updatedDocsList = updatedDocsList.map((d) => updateMap.get(d.id) || d);
      }

      if (textsRes.newDocs.length > 0) {
        updatedDocsList = [...textsRes.newDocs, ...updatedDocsList];
      }

      if (textsRes.newDocs.length > 0 || textsRes.updatedDocs.length > 0 || projUpdated) {
        const finalProj: MagazineProject = {
          ...currentProj,
          contentRepository: updatedDocsList,
          updatedAt: new Date().toISOString(),
        };
        onUpdateProject(finalProj);
        setDriveMessage(
          `✓ Recuperado do Google Drive: ${textsRes.newDocs.length} novo(s) texto(s) adicionado(s), ${textsRes.updatedDocs.length} atualizado(s).${
            projUpdated ? " Edição mestre sincronizada." : ""
          }`
        );
      } else {
        setDriveMessage(`✓ Pasta no Google Drive verificada: Todos os textos e o projeto já estão em dia.`);
      }
    } catch (err: any) {
      setDriveError(err?.message || "Falha ao recuperar dados do Google Drive.");
    } finally {
      setIsPullingDrive(false);
      setDriveStatus(getGoogleDriveStatus());
    }
  };

  const handleManualPushToCloud = async () => {
    setIsSyncing(true);
    setSyncSuccessMessage(null);
    setSyncErrorMessage(null);

    try {
      const result = await syncProjectToCloud(project, cleanCode);
      if (result.success) {
        const timeStr = new Date().toLocaleTimeString("pt-BR");
        setLastSyncedText(`Sincronizado às ${timeStr}`);
        setSyncSuccessMessage(
          `✓ Projeto enviado para a nuvem sob o código [${result.code}]! Agora você pode baixá-lo no outro dispositivo ou escanear o QR Code.`
        );
      } else {
        setSyncErrorMessage(result.error || "Não foi possível enviar para a nuvem.");
      }
    } catch (e: any) {
      setSyncErrorMessage("Erro no envio: " + (e?.message || e));
    } finally {
      setIsSyncing(false);
    }
  };

  const handlePullFromCloud = async () => {
    setIsPulling(true);
    setSyncSuccessMessage(null);
    setSyncErrorMessage(null);

    try {
      const result = await fetchProjectFromCloud(cleanCode);
      if (result && result.project) {
        onUpdateProject(result.project);
        const timeStr = new Date().toLocaleTimeString("pt-BR");
        setLastSyncedText(`Atualizado da nuvem às ${timeStr}`);
        setSyncSuccessMessage(
          `✓ Edição [${result.code}] baixada da nuvem e aplicada com sucesso neste dispositivo!`
        );
      } else {
        setSyncErrorMessage(
          `Nenhuma edição encontrada na nuvem com o código [${cleanCode}]. Certifique-se de clicar em 'Enviar' no dispositivo principal primeiro.`
        );
      }
    } catch (e: any) {
      setSyncErrorMessage("Erro ao buscar da nuvem: " + (e?.message || e));
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
      await syncProjectToCloud(imported, cleanCode);
      alert("Backup importado e sincronizado com sucesso neste e em outros dispositivos!");
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
            Sincronize matérias, fotos e diagramação entre o notebook (Edge / Chrome) e o celular em tempo real.
          </p>
        </DialogHeader>

        {/* Abas de Navegação */}
        <div className="flex border-b-2 border-black/15 dark:border-white/15 gap-2 pt-1">
          <button
            type="button"
            onClick={() => setActiveTab("direct")}
            className={`flex-1 pb-2.5 pt-2 px-3 text-xs font-black uppercase tracking-tight flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "direct"
                ? "border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-t-lg"
                : "border-transparent opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-t-lg"
            }`}
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Nuvem Direta & Celular</span>
            <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-black uppercase">
              1-Clique / Instantâneo
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("gdrive")}
            className={`flex-1 pb-2.5 pt-2 px-3 text-xs font-black uppercase tracking-tight flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "gdrive"
                ? "border-amber-500 text-amber-600 dark:text-amber-400 bg-amber-500/10 rounded-t-lg"
                : "border-transparent opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5 rounded-t-lg"
            }`}
          >
            <FolderSync className="w-4 h-4 text-amber-500" />
            <span>Google Drive</span>
            <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold uppercase">
              {driveStatus.isConnected ? "Conectado" : "Avançado"}
            </span>
          </button>
        </div>

        {syncSuccessMessage && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border-2 border-emerald-500/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="leading-snug">{syncSuccessMessage}</span>
          </div>
        )}

        {syncErrorMessage && (
          <div className="p-3 rounded-lg bg-red-500/10 border-2 border-red-500/50 text-red-700 dark:text-red-300 text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span className="leading-snug">{syncErrorMessage}</span>
          </div>
        )}

        <div className="space-y-4 my-2">
          {/* ============================================================ */}
          {/* ABA 1: SINCRONIZAÇÃO DIRETA EM NUVEM (1-CLIQUE / CELULAR / QR) */}
          {/* ============================================================ */}
          {activeTab === "direct" && (
            <>
              {/* Card de Boas-Vindas e Dica Rápida */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-amber-900 dark:text-amber-200 leading-snug">
                    Sincronização 100% Autônoma e Sem Configuração
                  </p>
                  <p className="opacity-80 text-[11px] leading-snug">
                    Funciona instantaneamente no Edge, Chrome, iPhone e Android. Aponte a câmera para o QR Code abaixo para carregar esta edição completa no celular, ou use o botão <strong>Enviar</strong> e <strong>Puxar</strong> entre navegadores no computador.
                  </p>
                </div>
              </div>

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
                  <div className="p-2 rounded-lg bg-white border-2 border-black shrink-0 shadow-sm flex items-center justify-center min-w-[136px] min-h-[136px]">
                    {!qrError ? (
                      <img
                        src={qrCodeApiUrl}
                        alt="QR Code de Sincronização"
                        onError={() => setQrError(true)}
                        className="w-32 h-32 object-contain"
                      />
                    ) : (
                      <div className="w-32 h-32 flex flex-col items-center justify-center p-2 text-center text-[10px] font-mono font-bold text-black border border-dashed border-black">
                        <span>CÓDIGO:</span>
                        <span className="text-xs font-black text-amber-600 my-1">{cleanCode}</span>
                        <span className="text-[9px] opacity-75">Acesse o site e use 'Puxar da Nuvem'</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 text-xs flex-1 text-center sm:text-left">
                    <p className="font-bold opacity-90 leading-snug">
                      Abra a câmera do seu celular e aponte para este QR Code. A edição completa do seu computador carregará imediatamente no seu telefone!
                    </p>
                    <p className="text-[11px] opacity-75 leading-snug">
                      Transfere todos os artigos, capas personalizadas, fotos e configurações com 1 clique.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <Input
                        value={shareUrl}
                        readOnly
                        className="theme-app-input font-mono text-[10px] h-8 border-2 truncate"
                      />
                      <div className="flex gap-1.5 shrink-0 justify-center sm:justify-start">
                        <Button
                          size="sm"
                          onClick={handleCopyLink}
                          className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer flex items-center gap-1"
                        >
                          {copiedLink ? <CheckCircle2 className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedLink ? "Link Copiado!" : "Copiar Link"}</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(shareUrl, "_blank")}
                          className="h-8 text-xs font-bold border-2 shrink-0 cursor-pointer flex items-center gap-1"
                          title="Abrir em Nova Aba"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Push & Pull Actions (Sync between Edge and Chrome on Notebook) */}
              <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b pb-2">
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft className="w-4 h-4 text-amber-500" />
                    <h4 className="font-black text-xs uppercase tracking-tight">
                      2. Sincronização entre Dispositivos (Edge ⇄ Chrome ⇄ Celular)
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {lastSyncedText}
                  </span>
                </div>

                {/* Sync Code Identifier */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-lg bg-black/10 dark:bg-white/5 border border-current">
                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    <Key className="w-3.5 h-3.5 text-amber-500" />
                    <span>Código da Edição na Nuvem:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      value={syncCode}
                      onChange={(e) => setSyncCode(e.target.value.toUpperCase().replace(/[^A-Z0-9_-]/g, ""))}
                      placeholder="Ex: MONTANHA"
                      className="theme-app-input font-mono font-black text-xs h-7 w-32 text-center uppercase tracking-wider border-2"
                    />
                    <span className="text-[10px] opacity-70 font-mono">Use o mesmo código nos dois aparelhos</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <Button
                    data-testid="btn-cloud-push"
                    onClick={handleManualPushToCloud}
                    disabled={isSyncing}
                    className="h-10 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs border-2 border-black shadow-xs cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                  >
                    {isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    <span>Enviar Esta Versão para a Nuvem (Upload)</span>
                  </Button>

                  <Button
                    data-testid="btn-cloud-pull"
                    onClick={handlePullFromCloud}
                    disabled={isPulling}
                    variant="outline"
                    className="h-10 font-black text-xs border-2 border-current shadow-xs cursor-pointer flex items-center justify-center gap-1.5 hover:bg-amber-400/20 active:scale-95 transition-all"
                  >
                    {isPulling ? <Loader2 className="w-4 h-4 animate-spin text-amber-500" /> : <CloudDownload className="w-4 h-4 text-amber-500" />}
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
                      Gere um arquivo <code>.json</code> completo com todos os textos e fotos para guardar onde preferir.
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
            </>
          )}

          {/* ============================================================ */}
          {/* ABA 2: GOOGLE DRIVE (PASTA DEDICADA & OAUTH PESSOAL)           */}
          {/* ============================================================ */}
          {activeTab === "gdrive" && (
            <div className="space-y-3">
              {/* Feedback messages for Drive */}
              {driveMessage && (
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="leading-snug">{driveMessage}</span>
                </div>
              )}

              {driveError && (
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/40 text-red-700 dark:text-red-300 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="leading-snug">{driveError}</span>
                </div>
              )}

              {/* Status Header */}
              <div className="theme-app-card p-4 rounded-xl border-2 space-y-3 shadow-md bg-amber-500/5 border-amber-500/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/30 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-400 text-black flex items-center justify-center font-black border border-black shadow-xs">
                      <FolderSync className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-tight">
                        Google Drive — Pasta Dedicada Pessoal
                      </h4>
                      <p className="text-[10px] opacity-75">
                        Pasta: <strong className="text-amber-500 font-mono">📁 {DEDICATED_FOLDER_NAME}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {driveStatus.isConnected ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-black px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500 uppercase shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        CONECTADO ({driveStatus.email || "OK"})
                      </span>
                    ) : driveStatus.isConfigured ? (
                      <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-amber-400 text-black border border-black uppercase">
                        CLIENT ID PRONTO
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] font-black px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-400 uppercase">
                        REQUER CLIENT ID OAUTH
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs space-y-2">
                  <p className="opacity-90 leading-snug">
                    Salva automaticamente matérias e artigos em formato Markdown (<code className="font-mono bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-[11px]">[Acervo] Titulo.md</code>) dentro da pasta <strong>{DEDICATED_FOLDER_NAME}</strong> no seu Google Drive pessoal.
                  </p>

                  {/* Se já estiver conectado */}
                  {driveStatus.isConnected ? (
                    <div className="space-y-3 pt-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <Button
                          size="sm"
                          onClick={handleSyncDriveNow}
                          disabled={isSyncingDrive}
                          className="h-8 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer flex items-center gap-1.5 shadow-xs"
                        >
                          {isSyncingDrive ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5 text-black" />}
                          <span>Salvar / Sincronizar no Drive</span>
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handlePullFromDrive}
                          disabled={isPullingDrive}
                          className="h-8 font-black text-xs border-2 shrink-0 cursor-pointer flex items-center gap-1.5 hover:bg-amber-400/20"
                        >
                          {isPullingDrive ? <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500" /> : <CloudDownload className="w-3.5 h-3.5 text-amber-500" />}
                          <span>Puxar Textos do Drive</span>
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(getGoogleDriveFolderUrl(driveStatus.folderId), "_blank")}
                          className="h-8 text-xs font-bold border-2 shrink-0 cursor-pointer flex items-center gap-1"
                          title="Abrir pasta no Google Drive"
                        >
                          <FolderOpen className="w-3.5 h-3.5 text-amber-500" />
                          <span>Abrir no Drive</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </Button>

                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={handleDisconnectDrive}
                          className="h-8 text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-500/10 cursor-pointer flex items-center gap-1 ml-auto"
                          title="Desconectar conta Google"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Desconectar</span>
                        </Button>
                      </div>
                    </div>
                  ) : driveStatus.isConfigured ? (
                    /* Configurado com Client ID válido, pronto para login */
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                      <Button
                        onClick={handleConnectDrive}
                        disabled={isConnectingDrive}
                        className="h-9 bg-black hover:bg-zinc-900 text-amber-400 font-black text-xs border-2 border-black shadow-sm cursor-pointer flex items-center gap-2"
                      >
                        {isConnectingDrive ? (
                          <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                        ) : (
                          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                          </svg>
                        )}
                        <span>Autorizar e Conectar com Google Drive</span>
                      </Button>

                      <button
                        type="button"
                        onClick={() => setIsEditingClientId(!isEditingClientId)}
                        className="text-[11px] opacity-75 hover:opacity-100 underline flex items-center gap-1 cursor-pointer"
                      >
                        <Settings className="w-3 h-3" />
                        <span>Gerenciar Google Client ID</span>
                      </button>
                    </div>
                  ) : (
                    /* Não configurado: Orientação clara sobre Google OAuth */
                    <div className="space-y-3 pt-2">
                      <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-current/20 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                          <Info className="w-4 h-4 shrink-0" />
                          <span>Como funciona a integração com o Google Drive:</span>
                        </div>
                        <p className="text-[11px] opacity-80 leading-snug">
                          Por políticas de segurança da Google, para um site gravar arquivos diretamente na sua pasta pessoal sem intermediários, é necessário fornecer uma chave de cliente (OAuth 2.0 Client ID) registrada no Google Cloud Console com o endereço <code>https://montanhamagazine.lovable.app</code> autorizado.
                        </p>
                      </div>

                      {/* Recomendação de Sincronização Direta */}
                      <div className="p-3 rounded-lg bg-amber-400/20 border-2 border-amber-500 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-black dark:text-amber-300 uppercase">
                            ⚡ Quer sincronizar agora sem configurar nada?
                          </span>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black text-amber-400 uppercase">
                            Zero Chaves
                          </span>
                        </div>
                        <p className="text-[11px] opacity-85 leading-snug text-black dark:text-zinc-200">
                          A <strong>Sincronização Direta em Nuvem</strong> da aba ao lado já transfere tudo entre seu notebook e seu celular via QR Code ou Código sem precisar de nenhuma conta ou chave do Google Cloud!
                        </p>
                        <Button
                          size="sm"
                          onClick={() => setActiveTab("direct")}
                          className="h-8 bg-black hover:bg-zinc-900 text-amber-400 font-bold text-xs border border-black cursor-pointer shadow-xs flex items-center gap-1.5"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>Ir para Sincronização Direta em 1-Clique</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Seção de Configuração do Client ID (quando não configurado ou quando clica em gerenciar) */}
              {(!driveStatus.isConfigured || isEditingClientId) && (
                <div className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-3">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="flex items-center gap-1.5 text-xs font-black uppercase">
                      <Settings className="w-4 h-4 text-amber-500" />
                      <span>Configurar Google OAuth 2.0 Client ID</span>
                    </div>
                    {isEditingClientId && (
                      <button
                        type="button"
                        onClick={() => setIsEditingClientId(false)}
                        className="text-[11px] opacity-60 hover:opacity-100 cursor-pointer"
                      >
                        Fechar
                      </button>
                    )}
                  </div>

                  <p className="text-[11px] opacity-80 leading-snug">
                    Insira seu <strong>Client ID</strong> gerado no Google Cloud Console para o aplicativo da web.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input
                      value={customClientIdInput}
                      onChange={(e) => setCustomClientIdInput(e.target.value)}
                      placeholder="Ex: 123456789-abcdefghijk.apps.googleusercontent.com"
                      className="theme-app-input font-mono text-[11px] h-9 border-2 flex-1"
                    />
                    <Button
                      onClick={handleSaveClientId}
                      className="h-9 bg-amber-400 hover:bg-amber-500 text-black font-black text-xs border-2 border-black shrink-0 cursor-pointer"
                    >
                      Salvar Chave
                    </Button>
                  </div>

                  {/* Passo a passo resumido */}
                  <details className="text-[11px] opacity-80 bg-black/5 dark:bg-white/5 p-2.5 rounded-lg border border-current/10 cursor-pointer">
                    <summary className="font-bold flex items-center gap-1 text-amber-600 dark:text-amber-400">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Passo a passo para gerar seu Google Client ID gratuito</span>
                    </summary>
                    <ol className="list-decimal pl-5 space-y-1 mt-2 text-[10.5px]">
                      <li>
                        Acesse o{" "}
                        <a
                          href="https://console.cloud.google.com/apis/credentials"
                          target="_blank"
                          rel="noreferrer"
                          className="underline font-bold text-amber-600"
                        >
                          Google Cloud Console (Credenciais)
                        </a>
                        .
                      </li>
                      <li>Clique em <strong>+ Criar Credenciais &gt; ID do cliente OAuth</strong>.</li>
                      <li>Tipo de aplicativo: <strong>Aplicativo da Web</strong>.</li>
                      <li>
                        Em <strong>Origens JavaScript autorizadas</strong>, adicione:
                        <ul className="list-disc pl-4 font-mono text-[10px] mt-0.5 opacity-90">
                          <li><code>https://montanhamagazine.lovable.app</code></li>
                          <li><code>http://localhost:8080</code></li>
                        </ul>
                      </li>
                      <li>
                        Em <strong>APIs e Serviços &gt; Biblioteca</strong>, ative a <strong>Google Drive API</strong>.
                      </li>
                      <li>Copie o ID do cliente criado e cole no campo acima.</li>
                    </ol>
                  </details>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

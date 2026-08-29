import React from "react";
import {
  MagazineProject,
  EditorialCredit,
  Contributor,
} from "../../types/magazine";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { ImagePicker } from "../ui/image-picker";
import {
  Feather,
  Plus,
  Trash2,
  Users,
  ShieldAlert,
  Award,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

interface EditorialSettingsProps {
  project: MagazineProject;
  onChange: (updated: MagazineProject) => void;
}

export const EditorialSettings: React.FC<EditorialSettingsProps> = ({
  project,
  onChange,
}) => {
  const visibility = {
    showCover: true,
    showEditorLetter: true,
    showContributors: false, // Default false
    showTableOfContents: true,
    showBackCover: true,
    ...project.pageVisibility,
  };

  const updateVisibility = (field: keyof typeof visibility, val: boolean) => {
    onChange({
      ...project,
      pageVisibility: {
        ...visibility,
        [field]: val,
      },
    });
  };

  const updateEditorial = <K extends keyof typeof project.editorialInfo>(
    field: K,
    value: (typeof project.editorialInfo)[K]
  ) => {
    onChange({
      ...project,
      editorialInfo: {
        ...project.editorialInfo,
        [field]: value,
      },
    });
  };

  const handleAddCredit = () => {
    const newCredit: EditorialCredit = {
      id: "c-" + Date.now(),
      role: "Cargo / Função",
      name: "Nome do Integrante",
    };
    updateEditorial("credits", [...project.editorialInfo.credits, newCredit]);
  };

  const handleUpdateCredit = (id: string, field: "role" | "name", value: string) => {
    const updated = project.editorialInfo.credits.map((c) =>
      c.id === id ? { ...c, [field]: value } : c
    );
    updateEditorial("credits", updated);
  };

  const handleRemoveCredit = (id: string) => {
    updateEditorial(
      "credits",
      project.editorialInfo.credits.filter((c) => c.id !== id)
    );
  };

  // Contributors Management
  const handleAddContributor = () => {
    const newCon: Contributor = {
      id: "con-" + Date.now(),
      name: "NOVO COACH / AUTOR",
      title: "SPECIALIST // CSCS",
      bio: "Especialista em preparação física e metodologia de treinamento não-convencional.",
      photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
      handle: "@treinador",
      facility: "TACTICAL PERFORMANCE LAB",
    };
    updateEditorial("contributors", [...(project.editorialInfo.contributors || []), newCon]);
  };

  const handleUpdateContributor = (id: string, field: keyof Contributor, value: string) => {
    const updated = (project.editorialInfo.contributors || []).map((c) =>
      c.id === id ? { ...c, [field]: value } : c
    );
    updateEditorial("contributors", updated);
  };

  const handleRemoveContributor = (id: string) => {
    updateEditorial(
      "contributors",
      (project.editorialInfo.contributors || []).filter((c) => c.id !== id)
    );
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Header Info */}
      <div className="theme-app-card p-5 rounded-xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase">
              SEÇÃO EDITORIAL
            </span>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase">
              ESTRUTURA DE ABERTURA
            </span>
          </div>
          <h2 className="text-lg font-black uppercase tracking-tight">
            Carta do Editor & Painel de Colaboradores
          </h2>
          <p className="text-xs opacity-75 mt-0.5">
            Gerencie fotos com upload ou IA, textos do manifesto e ative ou desative as páginas conforme a sua necessidade.
          </p>
        </div>
      </div>

      {/* Page 2: Letter from Editor & Staff */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Feather className="w-4 h-4 text-amber-500" />
            <span>Carta do Editor & Manifesto de Abertura</span>
          </h3>
          <div className="flex items-center gap-2">
            <Switch
              checked={visibility.showEditorLetter}
              onCheckedChange={(val) => updateVisibility("showEditorLetter", val)}
            />
            <span className="text-xs font-bold font-mono">
              {visibility.showEditorLetter ? "PÁGINA ATIVA" : "PÁGINA DESATIVADA"}
            </span>
          </div>
        </div>

        {visibility.showEditorLetter ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs font-bold">NOME DO EDITOR-CHEFE</Label>
                <Input
                  value={project.editorialInfo.editorName}
                  onChange={(e) => updateEditorial("editorName", e.target.value)}
                  className="theme-app-input text-xs mt-1 font-bold border-2"
                />
              </div>

              <div>
                <Label className="text-xs font-bold">TÍTULO DO MANIFESTO / CARTA</Label>
                <Input
                  value={project.editorialInfo.editorLetterTitle}
                  onChange={(e) => updateEditorial("editorLetterTitle", e.target.value)}
                  className="theme-app-input text-xs mt-1 font-bold border-2"
                />
              </div>
            </div>

            {/* Photos with Universal ImagePicker (Upload / AI Prompt / URL) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImagePicker
                label="Foto de Perfil do Editor (Card 1/3)"
                value={project.editorialInfo.editorPhoto}
                onChange={(url) => updateEditorial("editorPhoto", url)}
                aspectRatio="portrait"
                placeholderPrompt="Retrato profissional de Coach de força imponente, estúdio dramático preto e branco..."
                helperText="Upload local, IA ou URL"
              />

              <ImagePicker
                label="Foto de Ação do Editor (Inset 2/3)"
                value={project.editorialInfo.editorActionPhoto || ""}
                onChange={(url) => updateEditorial("editorActionPhoto", url)}
                aspectRatio="landscape"
                placeholderPrompt="Coach realizando levantamento pesado de kettlebell em academia de ferro industrial..."
                helperText="Upload local, IA ou URL"
              />
            </div>

            <div>
              <Label className="text-xs font-bold">CORPO DA CARTA DO EDITOR (PARÁGRAFOS)</Label>
              <Textarea
                value={project.editorialInfo.editorLetter}
                onChange={(e) => updateEditorial("editorLetter", e.target.value)}
                className="theme-app-input text-xs mt-1 h-36 leading-relaxed font-sans border-2"
              />
            </div>

            <div>
              <Label className="text-xs font-bold">FRASE DE ASSINATURA / CITAÇÃO FINAL DO EDITOR</Label>
              <Input
                value={project.editorialInfo.editorialNote || ""}
                onChange={(e) => updateEditorial("editorialNote", e.target.value)}
                placeholder="Ex: A consistência diária nos detalhes invisíveis forja a grandeza."
                className="theme-app-input text-xs mt-1 font-semibold border-2 text-amber-600"
              />
            </div>

            <div>
              <Label className="text-xs font-bold flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                <span>AVISO LEGAL & MÉDICO (DISCLAIMER MICRO-TYPOGRAPHY)</span>
              </Label>
              <Textarea
                value={project.editorialInfo.disclaimerText || ""}
                onChange={(e) => updateEditorial("disclaimerText", e.target.value)}
                className="theme-app-input text-xs mt-1 h-16 leading-tight font-mono text-[11px] border-2"
              />
            </div>

            {/* Expediente Credits */}
            <div className="pt-3 border-t border-slate-300 space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>EXPEDIENTE & STAFF EDITORIAL</span>
                </Label>
                <Button
                  size="sm"
                  onClick={handleAddCredit}
                  className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1 border border-black"
                >
                  <Plus className="w-3 h-3" />
                  Adicionar Cargo
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.editorialInfo.credits.map((c) => (
                  <div
                    key={c.id}
                    className="theme-app-card-subtle p-2 rounded-lg flex items-center gap-2 border-2"
                  >
                    <Input
                      value={c.role}
                      onChange={(e) => handleUpdateCredit(c.id, "role", e.target.value)}
                      placeholder="Cargo"
                      className="theme-app-input font-bold text-xs h-7 w-36 border"
                    />
                    <Input
                      value={c.name}
                      onChange={(e) => handleUpdateCredit(c.id, "name", e.target.value)}
                      placeholder="Nome"
                      className="theme-app-input text-xs h-7 flex-1 border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveCredit(c.id)}
                      className="text-red-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="p-4 rounded-lg bg-amber-500/10 border-2 border-amber-500/30 text-xs font-medium flex items-center gap-2">
            <EyeOff className="w-4 h-4 text-amber-500 shrink-0" />
            <span>A página da Carta do Editor está desativada e não aparecerá na revista nem no PDF final.</span>
          </div>
        )}
      </div>

      {/* Page 3: Contributors Grid Settings with ON/OFF Toggle */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between border-b pb-3">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-500" />
              <span>Painel de Colaboradores & Autores Convidados</span>
            </h3>
            <p className="text-xs opacity-75 mt-0.5">
              Ligue ou desligue a página de colaboradores conforme a disponibilidade da sua equipe.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              checked={visibility.showContributors}
              onCheckedChange={(val) => updateVisibility("showContributors", val)}
            />
            <span className={`text-xs font-black font-mono px-2 py-0.5 rounded border ${
              visibility.showContributors
                ? "bg-emerald-400 text-black border-black"
                : "bg-slate-200 text-slate-700 border-slate-400"
            }`}>
              {visibility.showContributors ? "INCLUÍDA NO PDF" : "REMOVIDA DO PDF"}
            </span>
          </div>
        </div>

        {!visibility.showContributors ? (
          <div className="p-4 rounded-xl bg-amber-400/10 border-2 border-amber-400/40 space-y-2">
            <div className="flex items-center gap-2 font-black text-xs text-amber-600 uppercase">
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span>Página de Colaboradores Desativada com Sucesso</span>
            </div>
            <p className="text-xs opacity-90 leading-relaxed font-medium">
              Esta página <strong>NÃO será impressa nem fará parte do seu PDF final</strong>. O sumário e a paginação das matérias já foram reorganizados automaticamente. Você pode reativá-la a qualquer momento acionando o botão acima quando tiver colaboradores cadastrados.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-end">
              <Button
                size="sm"
                onClick={handleAddContributor}
                className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1 border border-black"
              >
                <Plus className="w-3 h-3" />
                Adicionar Colaborador
              </Button>
            </div>

            {(project.editorialInfo.contributors || []).map((con) => (
              <div
                key={con.id}
                className="theme-app-card-subtle p-4 rounded-xl border-2 space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between gap-3">
                  <Input
                    value={con.name}
                    onChange={(e) => handleUpdateContributor(con.id, "name", e.target.value.toUpperCase())}
                    placeholder="NOME DO COLABORADOR (ALL CAPS)"
                    className="theme-app-input font-black text-sm h-8 border-2"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveContributor(con.id)}
                    className="text-red-500 hover:text-red-400 p-1"
                    title="Remover colaborador"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Label className="text-[10px] font-bold">TÍTULO / CERTIFICAÇÃO</Label>
                    <Input
                      value={con.title}
                      onChange={(e) => handleUpdateContributor(con.id, "title", e.target.value.toUpperCase())}
                      placeholder="Ex: MASTER KETTLEBELL COACH // CSCS"
                      className="theme-app-input font-mono text-xs h-7 mt-1 border"
                    />
                  </div>
                  <div>
                    <Label className="text-[10px] font-bold">CONTATO / INSTAGRAM</Label>
                    <Input
                      value={con.handle}
                      onChange={(e) => handleUpdateContributor(con.id, "handle", e.target.value)}
                      placeholder="Ex: @coachmontanha"
                      className="theme-app-input text-xs h-7 mt-1 font-mono border"
                    />
                  </div>
                </div>

                {/* Contributor Photo with ImagePicker */}
                <ImagePicker
                  label="Foto do Colaborador"
                  value={con.photo}
                  onChange={(url) => handleUpdateContributor(con.id, "photo", url)}
                  aspectRatio="square"
                  placeholderPrompt="Retrato de treinador de elite, foto em preto e branco de alta qualidade..."
                  helperText="Upload ou IA"
                />

                <div>
                  <Label className="text-[10px] font-bold">MINI-BIO (3 A 5 LINHAS)</Label>
                  <Textarea
                    value={con.bio}
                    onChange={(e) => handleUpdateContributor(con.id, "bio", e.target.value)}
                    placeholder="Resumo da metodologia e histórico do coach..."
                    className="theme-app-input text-xs mt-1 h-16 leading-relaxed border"
                  />
                </div>

                <div>
                  <Label className="text-[10px] font-bold">CENTRO DE TREINAMENTO / FACILITY</Label>
                  <Input
                    value={con.facility || ""}
                    onChange={(e) => handleUpdateContributor(con.id, "facility", e.target.value)}
                    placeholder="Ex: MONTANHA IRON LAB // SP"
                    className="theme-app-input text-xs h-7 mt-1 font-mono border"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

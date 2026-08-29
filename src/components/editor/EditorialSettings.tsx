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
import {
  Feather,
  Plus,
  Trash2,
  Users,
  ShieldAlert,
  Award,
} from "lucide-react";

interface EditorialSettingsProps {
  project: MagazineProject;
  onChange: (updated: MagazineProject) => void;
}

export const EditorialSettings: React.FC<EditorialSettingsProps> = ({
  project,
  onChange,
}) => {
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
              PÁGINAS 02 & 03
            </span>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase">
              SEÇÃO EDITORIAL DA REVISTA
            </span>
          </div>
          <h2 className="text-lg font-black uppercase tracking-tight">
            Carta do Editor, Expediente & Painel de Colaboradores
          </h2>
          <p className="text-xs opacity-75 mt-0.5">
            Configure o manifesto do Editor-Chefe, aviso legal e a grade de perfis dos autores e especialistas.
          </p>
        </div>
      </div>

      {/* Page 2: Letter from Editor & Staff */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <Feather className="w-4 h-4 text-amber-500" />
          <span>Página 02: Carta do Editor & Manifesto de Abertura</span>
        </h3>

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
            <Label className="text-xs font-bold">FOTO DE PERFIL DO EDITOR (URL)</Label>
            <Input
              value={project.editorialInfo.editorPhoto}
              onChange={(e) => updateEditorial("editorPhoto", e.target.value)}
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold">TÍTULO DO MANIFESTO / CARTA</Label>
            <Input
              value={project.editorialInfo.editorLetterTitle}
              onChange={(e) => updateEditorial("editorLetterTitle", e.target.value)}
              className="theme-app-input text-xs mt-1 font-bold border-2"
            />
          </div>

          <div>
            <Label className="text-xs font-bold">FOTO DE AÇÃO DO EDITOR (INSET URL)</Label>
            <Input
              value={project.editorialInfo.editorActionPhoto || ""}
              onChange={(e) => updateEditorial("editorActionPhoto", e.target.value)}
              className="theme-app-input text-xs mt-1 border-2"
            />
          </div>
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
      </div>

      {/* Page 3: Contributors Grid Settings */}
      <div className="theme-app-card p-5 rounded-xl border-2 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-500" />
            <span>Página 03: Painel de Colaboradores & Autores (Contributors Grid)</span>
          </h3>
          <Button
            size="sm"
            onClick={handleAddContributor}
            className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1 border border-black"
          >
            <Plus className="w-3 h-3" />
            Adicionar Colaborador
          </Button>
        </div>

        <div className="space-y-4">
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
                  <Label className="text-[10px] font-bold">FOTO DO COLABORADOR (URL)</Label>
                  <Input
                    value={con.photo}
                    onChange={(e) => handleUpdateContributor(con.id, "photo", e.target.value)}
                    placeholder="URL da foto (B&W portrait)"
                    className="theme-app-input text-xs h-7 mt-1 border"
                  />
                </div>
              </div>

              <div>
                <Label className="text-[10px] font-bold">MINI-BIO (3 A 5 LINHAS)</Label>
                <Textarea
                  value={con.bio}
                  onChange={(e) => handleUpdateContributor(con.id, "bio", e.target.value)}
                  placeholder="Resumo da metodologia e histórico do coach..."
                  className="theme-app-input text-xs mt-1 h-16 leading-relaxed border"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label className="text-[10px] font-bold">CONTATO / INSTAGRAM</Label>
                  <Input
                    value={con.handle}
                    onChange={(e) => handleUpdateContributor(con.id, "handle", e.target.value)}
                    placeholder="Ex: @coachmontanha"
                    className="theme-app-input text-xs h-7 mt-1 font-mono border"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

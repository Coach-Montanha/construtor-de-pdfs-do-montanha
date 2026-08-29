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
    <div className="space-y-6 text-slate-100 font-sans">
      {/* Header Info */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono px-2 py-0.5 rounded uppercase">
              PÁGINAS 02 & 03
            </span>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">
              SEÇÃO EDITORIAL DA REVISTA
            </span>
          </div>
          <h2 className="text-lg font-black text-white uppercase tracking-tight">
            Carta do Editor, Expediente & Painel de Colaboradores
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Configure o manifesto do Editor-Chefe, aviso legal e a grade de perfis dos autores e especialistas.
          </p>
        </div>
      </div>

      {/* Page 2: Letter from Editor & Staff */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Feather className="w-4 h-4" />
          <span>Página 02: Carta do Editor & Manifesto de Abertura</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-semibold text-slate-300">NOME DO EDITOR-CHEFE</Label>
            <Input
              value={project.editorialInfo.editorName}
              onChange={(e) => updateEditorial("editorName", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-bold"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">FOTO DE PERFIL DO EDITOR (URL)</Label>
            <Input
              value={project.editorialInfo.editorPhoto}
              onChange={(e) => updateEditorial("editorPhoto", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-semibold text-slate-300">TÍTULO DO MANIFESTO / CARTA</Label>
            <Input
              value={project.editorialInfo.editorLetterTitle}
              onChange={(e) => updateEditorial("editorLetterTitle", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1 font-bold"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">FOTO DE AÇÃO DO EDITOR (INSET URL)</Label>
            <Input
              value={project.editorialInfo.editorActionPhoto || ""}
              onChange={(e) => updateEditorial("editorActionPhoto", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300">CORPO DA CARTA DO EDITOR (PARÁGRAFOS)</Label>
          <Textarea
            value={project.editorialInfo.editorLetter}
            onChange={(e) => updateEditorial("editorLetter", e.target.value)}
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1 h-36 leading-relaxed font-sans"
          />
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300">FRASE DE ASSINATURA / CITAÇÃO FINAL DO EDITOR</Label>
          <Input
            value={project.editorialInfo.editorialNote || ""}
            onChange={(e) => updateEditorial("editorialNote", e.target.value)}
            placeholder="Ex: A consistência diária nos detalhes invisíveis forja a grandeza."
            className="bg-slate-800 border-slate-700 text-amber-300 text-xs mt-1 font-semibold"
          />
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>AVISO LEGAL & MÉDICO (DISCLAIMER MICRO-TYPOGRAPHY)</span>
          </Label>
          <Textarea
            value={project.editorialInfo.disclaimerText || ""}
            onChange={(e) => updateEditorial("disclaimerText", e.target.value)}
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1 h-16 leading-tight font-mono text-[11px]"
          />
        </div>

        {/* Expediente Credits */}
        <div className="pt-3 border-t border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>EXPEDIENTE & STAFF EDITORIAL</span>
            </Label>
            <Button
              size="sm"
              onClick={handleAddCredit}
              className="h-7 text-xs bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-1"
            >
              <Plus className="w-3 h-3" />
              Adicionar Cargo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.editorialInfo.credits.map((c) => (
              <div
                key={c.id}
                className="bg-slate-800/70 p-2 rounded flex items-center gap-2 border border-slate-700"
              >
                <Input
                  value={c.role}
                  onChange={(e) => handleUpdateCredit(c.id, "role", e.target.value)}
                  placeholder="Cargo"
                  className="bg-slate-900 border-slate-700 text-amber-400 font-semibold text-xs h-7 w-36"
                />
                <Input
                  value={c.name}
                  onChange={(e) => handleUpdateCredit(c.id, "name", e.target.value)}
                  placeholder="Nome"
                  className="bg-slate-900 border-slate-700 text-white text-xs h-7 flex-1"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveCredit(c.id)}
                  className="text-red-400 hover:text-red-300 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 3: Contributors Grid Settings */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Página 03: Painel de Colaboradores & Autores (Contributors Grid)</span>
          </h3>
          <Button
            size="sm"
            onClick={handleAddContributor}
            className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1"
          >
            <Plus className="w-3 h-3" />
            Adicionar Colaborador
          </Button>
        </div>

        <div className="space-y-4">
          {(project.editorialInfo.contributors || []).map((con) => (
            <div
              key={con.id}
              className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                <Input
                  value={con.name}
                  onChange={(e) => handleUpdateContributor(con.id, "name", e.target.value.toUpperCase())}
                  placeholder="NOME DO COLABORADOR (ALL CAPS)"
                  className="bg-slate-900 border-slate-700 text-white font-black text-sm h-8"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveContributor(con.id)}
                  className="text-red-400 hover:text-red-300 p-1"
                  title="Remover colaborador"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label className="text-[10px] font-bold text-slate-400">TÍTULO / CERTIFICAÇÃO</Label>
                  <Input
                    value={con.title}
                    onChange={(e) => handleUpdateContributor(con.id, "title", e.target.value.toUpperCase())}
                    placeholder="Ex: MASTER KETTLEBELL COACH // CSCS"
                    className="bg-slate-900 border-slate-700 text-amber-400 font-mono text-xs h-7 mt-1"
                  />
                </div>
                <div>
                  <Label className="text-[10px] font-bold text-slate-400">FOTO DO COLABORADOR (URL)</Label>
                  <Input
                    value={con.photo}
                    onChange={(e) => handleUpdateContributor(con.id, "photo", e.target.value)}
                    placeholder="URL da foto (B&W portrait)"
                    className="bg-slate-900 border-slate-700 text-white text-xs h-7 mt-1"
                  />
                </div>
              </div>

              <div>
                <Label className="text-[10px] font-bold text-slate-400">MINI-BIO (3 A 5 LINHAS)</Label>
                <Textarea
                  value={con.bio}
                  onChange={(e) => handleUpdateContributor(con.id, "bio", e.target.value)}
                  placeholder="Resumo da metodologia e histórico do coach..."
                  className="bg-slate-900 border-slate-700 text-white text-xs mt-1 h-16 leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label className="text-[10px] font-bold text-slate-400">CONTATO / INSTAGRAM</Label>
                  <Input
                    value={con.handle}
                    onChange={(e) => handleUpdateContributor(con.id, "handle", e.target.value)}
                    placeholder="Ex: @coachmontanha"
                    className="bg-slate-900 border-slate-700 text-slate-300 text-xs h-7 mt-1 font-mono"
                  />
                </div>
                <div>
                  <Label className="text-[10px] font-bold text-slate-400">CENTRO DE TREINAMENTO / FACILITY</Label>
                  <Input
                    value={con.facility || ""}
                    onChange={(e) => handleUpdateContributor(con.id, "facility", e.target.value)}
                    placeholder="Ex: MONTANHA IRON LAB // SP"
                    className="bg-slate-900 border-slate-700 text-slate-300 text-xs h-7 mt-1 font-mono"
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

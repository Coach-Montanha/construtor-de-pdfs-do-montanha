import React, { useState } from "react";
import {
  MagazineProject,
  MagazineThemeId,
  EditorialCredit,
} from "../../types/magazine";
import { MAGAZINE_THEMES } from "../../lib/sample-data";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Palette,
  Feather,
  Key,
  Plus,
  Trash2,
  CheckCircle2,
  Share2,
  Sparkles,
} from "lucide-react";

interface MagazineSettingsProps {
  project: MagazineProject;
  onChange: (updated: MagazineProject) => void;
}

export const MagazineSettings: React.FC<MagazineSettingsProps> = ({
  project,
  onChange,
}) => {
  const [apiKeyInput, setApiKeyInput] = useState<string>(
    project.geminiApiKey || (typeof window !== "undefined" ? localStorage.getItem("gemini_api_key") || "" : "")
  );
  const [apiKeySaved, setApiKeySaved] = useState<boolean>(false);

  const handleSaveApiKey = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gemini_api_key", apiKeyInput.trim());
    }
    onChange({
      ...project,
      geminiApiKey: apiKeyInput.trim(),
    });
    setApiKeySaved(true);
    setTimeout(() => setApiKeySaved(false), 3000);
  };

  const handleSelectTheme = (themeId: MagazineThemeId) => {
    onChange({
      ...project,
      themeId,
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

  return (
    <div className="space-y-6 text-slate-100">
      {/* Theme & Palette Selector */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Palette className="w-4 h-4" />
          <span>Tema Visual & Estilo Editorial</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {MAGAZINE_THEMES.map((theme) => {
            const isSelected = project.themeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => handleSelectTheme(theme.id)}
                className={`cursor-pointer p-3.5 rounded-xl border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-amber-400 bg-slate-800/90 shadow-lg shadow-amber-500/10"
                    : "border-slate-800 bg-slate-950/60 hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-black text-xs text-white uppercase">
                      {theme.name}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug mb-3">
                    {theme.description}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-slate-800">
                  <div
                    className="w-5 h-5 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.primaryColor }}
                    title="Cor Primária"
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.cardBg }}
                    title="Cor de Fundo / Card"
                  />
                  <div
                    className="w-5 h-5 rounded-full border border-white/20"
                    style={{ backgroundColor: theme.bgDark }}
                    title="Cor Escura"
                  />
                  <span className="text-[9px] font-mono text-slate-500 ml-auto">
                    {theme.fontSerif ? "Serif" : "Sans"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Key Settings */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Key className="w-4 h-4" />
          <span>Configuração da IA (Google Gemini API)</span>
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          O criador já inclui um modelo inteligente embutido que funciona offline. Para usar o modelo de última geração <strong>Gemini 3.7 Flash</strong> para criar matérias completas e reescrever artigos sem limites, insira sua chave gratuita da Google AI Studio.
        </p>

        <div className="flex gap-2">
          <Input
            type="password"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            placeholder="Cole aqui sua chave (ex: AIzaSy...)"
            className="bg-slate-800 border-slate-700 text-white font-mono text-xs"
          />
          <Button
            onClick={handleSaveApiKey}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5"
          >
            {apiKeySaved ? "Salva!" : "Salvar Chave"}
          </Button>
        </div>
      </div>

      {/* Editorial Page & Credits Settings */}
      <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
          <Feather className="w-4 h-4" />
          <span>Carta do Editor & Expediente</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-semibold text-slate-300">NOME DO EDITOR-CHEFE</Label>
            <Input
              value={project.editorialInfo.editorName}
              onChange={(e) => updateEditorial("editorName", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>

          <div>
            <Label className="text-xs font-semibold text-slate-300">FOTO DO EDITOR (URL)</Label>
            <Input
              value={project.editorialInfo.editorPhoto}
              onChange={(e) => updateEditorial("editorPhoto", e.target.value)}
              className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
            />
          </div>
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300">TÍTULO DA CARTA DO EDITOR</Label>
          <Input
            value={project.editorialInfo.editorLetterTitle}
            onChange={(e) => updateEditorial("editorLetterTitle", e.target.value)}
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
          />
        </div>

        <div>
          <Label className="text-xs font-semibold text-slate-300">TEXTO DA CARTA DO EDITOR</Label>
          <Textarea
            value={project.editorialInfo.editorLetter}
            onChange={(e) => updateEditorial("editorLetter", e.target.value)}
            className="bg-slate-800 border-slate-700 text-white text-xs mt-1 h-28 leading-relaxed"
          />
        </div>

        {/* Expediente Credits */}
        <div className="pt-3 border-t border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold text-slate-300">CRÉDITOS DO EXPEDIENTE</Label>
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
                  className="bg-slate-900 border-slate-700 text-amber-400 font-semibold text-xs h-7 w-32"
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
    </div>
  );
};

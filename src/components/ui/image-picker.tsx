import React, { useState, useRef } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import {
  Upload,
  Sparkles,
  Link,
  Trash2,
  Image as ImageIcon,
  Loader2,
  CheckCircle2,
  Wand2,
  MoveVertical,
} from "lucide-react";
import { generateAiImageUrl } from "../../lib/ai-service";

interface ImagePickerProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  position?: string;
  onPositionChange?: (pos: string) => void;
  aspectRatio?: "square" | "portrait" | "landscape" | "banner";
  placeholderPrompt?: string;
  helperText?: string;
  className?: string;
}

export const ImagePicker: React.FC<ImagePickerProps> = ({
  label,
  value,
  onChange,
  position,
  onPositionChange,
  aspectRatio = "landscape",
  placeholderPrompt = "Foto atlética profissional de força não-convencional...",
  helperText,
  className = "",
}) => {
  const [activeMode, setActiveMode] = useState<"upload" | "ai" | "url">("upload");
  const [promptText, setPromptText] = useState<string>("");
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Helper to extract vertical percentage from position string (e.g. "50% 20%", "top", "center", "bottom")
  const parsePercentY = (pos?: string): number => {
    if (!pos || pos === "center") return 50;
    if (pos === "top") return 15;
    if (pos === "bottom") return 85;
    const match = pos.match(/(\d+)%/g);
    if (match && match.length >= 2) {
      return parseInt(match[1]!, 10);
    }
    if (match && match.length === 1) {
      return parseInt(match[0]!, 10);
    }
    return 50;
  };

  const currentPercentY = parsePercentY(position);

  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square w-24 sm:w-28"
      : aspectRatio === "portrait"
      ? "aspect-[3/4] w-24 sm:w-28"
      : aspectRatio === "banner"
      ? "aspect-[16/6] w-full max-h-36"
      : "aspect-[16/9] w-32 sm:w-36";

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (e.g. 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("A imagem selecionada é muito grande. Escolha uma imagem de até 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onChange(result);
        if (onPositionChange && !position) {
          onPositionChange("50% 50%");
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateAi = async () => {
    const targetPrompt = promptText.trim() || placeholderPrompt;
    if (!targetPrompt) return;

    setIsGeneratingAi(true);
    try {
      const width = aspectRatio === "square" ? 800 : aspectRatio === "portrait" ? 800 : 1200;
      const height = aspectRatio === "square" ? 800 : aspectRatio === "portrait" ? 1000 : 800;
      const aiUrl = generateAiImageUrl(targetPrompt, width, height);

      // Pre-load image to verify
      const img = new Image();
      img.src = aiUrl;
      img.onload = () => {
        onChange(aiUrl);
        if (onPositionChange && !position) {
          onPositionChange("50% 50%");
        }
        setIsGeneratingAi(false);
      };
      img.onerror = () => {
        onChange(aiUrl);
        if (onPositionChange && !position) {
          onPositionChange("50% 50%");
        }
        setIsGeneratingAi(false);
      };
    } catch (err) {
      console.error("Erro ao gerar imagem por IA:", err);
      setIsGeneratingAi(false);
    }
  };

  const clearImage = () => {
    onChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`space-y-2 font-sans ${className}`}>
      {/* Label and Helper */}
      <div className="flex items-center justify-between">
        <Label className="text-xs font-black uppercase tracking-tight block">
          {label}
        </Label>
        {helperText && (
          <span className="text-[10px] opacity-70 font-medium">
            {helperText}
          </span>
        )}
      </div>

      {/* Main Image Control Container */}
      <div className="theme-app-card p-3 rounded-xl border-2 space-y-3 shadow-xs">
        {/* Top: Current Image Preview & Mode Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Thumbnail Preview */}
          <div className="relative shrink-0 rounded-lg overflow-hidden border-2 border-black bg-slate-900 shadow-sm flex items-center justify-center group">
            {value ? (
              <>
                <img
                  src={value}
                  alt={label}
                  className={`${aspectClass} object-cover filter contrast-110`}
                  style={{ objectPosition: position || "center" }}
                />
                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-md shadow-lg cursor-pointer z-10 hover:scale-105 active:scale-95 transition-all"
                  title="Remover Imagem"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </>
            ) : (
              <div className={`${aspectClass} flex flex-col items-center justify-center p-2 text-slate-400 text-center`}>
                <ImageIcon className="w-6 h-6 opacity-40 mb-1" />
                <span className="text-[9px] font-bold uppercase opacity-60">Sem Foto</span>
              </div>
            )}
          </div>

          {/* Action Modality Switcher (Upload / IA / URL) */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-1 theme-app-card-subtle p-0.5 rounded-lg border">
              <button
                type="button"
                onClick={() => setActiveMode("upload")}
                className={`flex-1 py-1 px-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeMode === "upload"
                    ? "bg-amber-400 text-black font-black border border-black shadow-xs"
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                <Upload className="w-3 h-3" />
                <span>Upload PC</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("ai")}
                className={`flex-1 py-1 px-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeMode === "ai"
                    ? "bg-amber-400 text-black font-black border border-black shadow-xs"
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                <Sparkles className="w-3 h-3 text-black animate-pulse" />
                <span>Gerar com IA</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("url")}
                className={`flex-1 py-1 px-2 text-[11px] font-bold rounded-md transition-all flex items-center justify-center gap-1 cursor-pointer ${
                  activeMode === "url"
                    ? "bg-amber-400 text-black font-black border border-black shadow-xs"
                    : "opacity-75 hover:opacity-100"
                }`}
              >
                <Link className="w-3 h-3" />
                <span>URL Web</span>
              </button>
            </div>

            {/* Sub-panel depending on active mode */}
            {activeMode === "upload" && (
              <div className="flex items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id={`file-upload-${label.replace(/\s+/g, "-")}`}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="h-8 font-bold text-xs flex items-center gap-1.5 border-2 border-black w-full justify-center bg-white text-black hover:bg-amber-50 cursor-pointer shadow-xs"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-500" />
                  <span>Escolher Imagem do seu Computador</span>
                </Button>
              </div>
            )}

            {activeMode === "ai" && (
              <div className="space-y-1.5">
                <div className="flex gap-1.5">
                  <Input
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder={placeholderPrompt}
                    className="theme-app-input text-xs h-8 border-2 font-medium flex-1"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleGenerateAi();
                      }
                    }}
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={handleGenerateAi}
                    disabled={isGeneratingAi}
                    className="h-8 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs px-3 border-2 border-black shrink-0 cursor-pointer shadow-xs flex items-center gap-1"
                  >
                    {isGeneratingAi ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Wand2 className="w-3.5 h-3.5" />
                    )}
                    <span>{isGeneratingAi ? "Criando..." : "Gerar"}</span>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Retrato Coach B&W",
                    "Ação Kettlebell",
                    "Estúdio Alta Luz",
                    "Equipamento Ferro",
                  ].map((quick, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setPromptText(quick);
                      }}
                      className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border border-slate-400 bg-slate-100 text-slate-800 hover:bg-amber-200 cursor-pointer"
                    >
                      + {quick}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeMode === "url" && (
              <div>
                <Input
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="theme-app-input text-xs h-8 border-2 font-mono"
                />
              </div>
            )}
          </div>
        </div>

        {/* Focal Point / Visible Area Selector */}
        {value && onPositionChange && (
          <div className="pt-2.5 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-[10px] font-black uppercase tracking-tight flex items-center gap-1.5 text-amber-500">
                <MoveVertical className="w-3.5 h-3.5" />
                <span>Enquadramento / Trecho Visível da Foto</span>
              </Label>
              <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-600 dark:text-amber-400 border border-amber-400/40">
                {currentPercentY}% vertical
              </span>
            </div>

            {/* Quick Preset Buttons */}
            <div className="grid grid-cols-5 gap-1 text-[10px] font-bold">
              {[
                { label: "Topo / Rosto", val: 15 },
                { label: "Superior", val: 35 },
                { label: "Centro", val: 50 },
                { label: "Inferior", val: 65 },
                { label: "Base", val: 85 },
              ].map((preset) => {
                const isCurrent = Math.abs(currentPercentY - preset.val) <= 10;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => onPositionChange(`50% ${preset.val}%`)}
                    className={`py-1 px-1 rounded border text-center transition-all cursor-pointer truncate ${
                      isCurrent
                        ? "bg-amber-400 text-black border-black font-black shadow-xs ring-1 ring-amber-400"
                        : "theme-app-card-subtle opacity-75 hover:opacity-100 hover:border-black"
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Slider for continuous adjustment */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[9px] font-mono opacity-60 shrink-0">0% (Topo)</span>
              <input
                type="range"
                min="0"
                max="100"
                value={currentPercentY}
                onChange={(e) => onPositionChange(`50% ${e.target.value}%`)}
                className="flex-1 accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              />
              <span className="text-[9px] font-mono opacity-60 shrink-0">100% (Base)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

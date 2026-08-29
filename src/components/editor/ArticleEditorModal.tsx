import React, { useState } from "react";
import { Article, LayoutTemplate } from "../../types/magazine";
import {
  polishEditorialText,
  generateEditorialHeadlines,
  extractPullQuotes,
  generateAiImageUrl,
  getEditorialCuratedImage,
} from "../../lib/ai-service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Sparkles,
  Wand2,
  Quote,
  Image as ImageIcon,
  Layout,
  Plus,
  Trash2,
  CheckCircle2,
  RefreshCw,
  Loader2,
} from "lucide-react";

interface ArticleEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article | null;
  onSave: (updated: Article) => void;
  apiKey?: string;
}

export const ArticleEditorModal: React.FC<ArticleEditorModalProps> = ({
  isOpen,
  onClose,
  article,
  onSave,
  apiKey,
}) => {
  const [formData, setFormData] = useState<Article>(
    article || {
      id: "art-" + Date.now(),
      title: "",
      subtitle: "",
      category: "TREINAMENTO",
      author: "Coach Montanha",
      authorBio: "Especialista em alta performance",
      authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
      heroImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "",
      heroImagePrompt: "",
      content: "",
      pullQuotes: [],
      calloutBox: {
        title: "DESTAQUE DA REDAÇÃO",
        content: "",
      },
      keyTakeaways: [],
      layoutTemplate: "editorial-lead",
      tags: [],
      estimatedReadTime: 4,
      featuredOnCover: true,
    }
  );

  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiStatusMsg, setAiStatusMsg] = useState<string>("");
  const [newQuoteInput, setNewQuoteInput] = useState<string>("");
  const [newTakeawayInput, setNewTakeawayInput] = useState<string>("");

  React.useEffect(() => {
    if (article) {
      setFormData(article);
    }
  }, [article, isOpen]);

  // AI Actions
  const handlePolishText = async () => {
    if (!formData.content) return;
    try {
      setIsAiLoading(true);
      setAiStatusMsg("Polindo e refinando texto com IA...");
      const polished = await polishEditorialText(formData.content, "journalistic", apiKey);
      setFormData((prev) => ({
        ...prev,
        content: polished,
        estimatedReadTime: Math.max(2, Math.round(polished.split(/\s+/).length / 150)),
      }));
    } catch (err: any) {
      alert("Erro ao polir texto: " + err.message);
    } finally {
      setIsAiLoading(false);
      setAiStatusMsg("");
    }
  };

  const handleSuggestHeadlines = async () => {
    try {
      setIsAiLoading(true);
      setAiStatusMsg("Gerando manchetes de impacto...");
      const suggestions = await generateEditorialHeadlines(
        formData.title,
        formData.content,
        apiKey
      );
      if (suggestions.length > 0) {
        const top = suggestions[0];
        setFormData((prev) => ({
          ...prev,
          title: top.title,
          subtitle: top.subtitle,
          category: top.category || prev.category,
        }));
      }
    } catch (err: any) {
      alert("Erro: " + err.message);
    } finally {
      setIsAiLoading(false);
      setAiStatusMsg("");
    }
  };

  const handleExtractQuotes = async () => {
    if (!formData.content) return;
    try {
      setIsAiLoading(true);
      setAiStatusMsg("Extraindo citações de destaque...");
      const quotes = await extractPullQuotes(formData.content, apiKey);
      setFormData((prev) => ({
        ...prev,
        pullQuotes: quotes,
      }));
    } catch (err: any) {
      alert("Erro: " + err.message);
    } finally {
      setIsAiLoading(false);
      setAiStatusMsg("");
    }
  };

  const handleGenerateAiImage = () => {
    const prompt = formData.heroImagePrompt || `${formData.title} ${formData.category} fitness editorial`;
    const aiUrl = generateAiImageUrl(prompt);
    setFormData((prev) => ({
      ...prev,
      heroImage: aiUrl,
      heroImageCaption: `Ilustração gerada para: ${formData.title}`,
    }));
  };

  const handleCuratedImage = () => {
    const curated = getEditorialCuratedImage(formData.category, Math.floor(Math.random() * 5));
    setFormData((prev) => ({
      ...prev,
      heroImage: curated,
      heroImageCaption: "Fotografia Editorial de Alta Resolução",
    }));
  };

  const handleAddQuote = () => {
    if (newQuoteInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        pullQuotes: [...prev.pullQuotes, newQuoteInput.trim()],
      }));
      setNewQuoteInput("");
    }
  };

  const handleRemoveQuote = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      pullQuotes: prev.pullQuotes.filter((_, i) => i !== idx),
    }));
  };

  const handleAddTakeaway = () => {
    if (newTakeawayInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        keyTakeaways: [...(prev.keyTakeaways || []), newTakeawayInput.trim()],
      }));
      setNewTakeawayInput("");
    }
  };

  const handleRemoveTakeaway = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      keyTakeaways: (prev.keyTakeaways || []).filter((_, i) => i !== idx),
    }));
  };

  const handleSave = () => {
    if (!formData.title) {
      alert("Por favor, preencha o título do artigo.");
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-800 text-slate-100 p-6 custom-scrollbar">
        <DialogHeader className="border-b border-slate-800 pb-3">
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-white">
            <Wand2 className="w-5 h-5 text-amber-400" />
            <span>Editor Editorial de Artigo & Assistente IA</span>
          </DialogTitle>
        </DialogHeader>

        {/* AI Loading Banner */}
        {isAiLoading && (
          <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg flex items-center gap-3 text-amber-400 animate-pulse">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-semibold">{aiStatusMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {/* Left Column: Basic Details & Titles */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label className="text-xs font-bold text-slate-300">CATEGORIA DA MATÉRIA</Label>
              </div>
              <Input
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value.toUpperCase() })}
                placeholder="EX: HIPERTROFIA, NUTRIÇÃO, BIOHACKING"
                className="bg-slate-800 border-slate-700 text-white font-bold"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <Label className="text-xs font-bold text-slate-300">MANCHETE / TÍTULO PRINCIPAL</Label>
                <button
                  type="button"
                  onClick={handleSuggestHeadlines}
                  disabled={isAiLoading}
                  className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20"
                >
                  <Sparkles className="w-3 h-3" />
                  Sugerir Títulos com IA
                </button>
              </div>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Título impactante do artigo"
                className="bg-slate-800 border-slate-700 text-white font-bold text-base"
              />
            </div>

            <div>
              <Label className="text-xs font-bold text-slate-300 mb-1 block">SUBTÍTULO / CHAPÉU EDITORIAL</Label>
              <Textarea
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                placeholder="Explicação de 1 a 2 linhas com gatilho de curiosidade"
                className="bg-slate-800 border-slate-700 text-white text-xs h-16"
              />
            </div>

            {/* Author Info */}
            <div className="grid grid-cols-2 gap-3 bg-slate-800/60 p-3 rounded-lg border border-slate-700">
              <div>
                <Label className="text-[11px] font-semibold text-slate-400">Autor</Label>
                <Input
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Nome do Autor"
                  className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
                />
              </div>
              <div>
                <Label className="text-[11px] font-semibold text-slate-400">Bio Curta</Label>
                <Input
                  value={formData.authorBio || ""}
                  onChange={(e) => setFormData({ ...formData, authorBio: e.target.value })}
                  placeholder="Cargo ou especialidade"
                  className="bg-slate-800 border-slate-700 text-white text-xs mt-1"
                />
              </div>
            </div>

            {/* Template Selection */}
            <div>
              <Label className="text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Layout className="w-3.5 h-3.5 text-amber-400" />
                <span>TEMPLATE DE DIAGRAMAÇÃO</span>
              </Label>
              <select
                value={formData.layoutTemplate}
                onChange={(e) =>
                  setFormData({ ...formData, layoutTemplate: e.target.value as LayoutTemplate })
                }
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-md px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="editorial-lead">Matéria de Capa (3 Colunas + Drop Cap + Hero)</option>
                <option value="two-column-quote">2 Colunas Clássicas com Citação Central</option>
                <option value="infographic-tips">Guia Prático com Cards de Dicas Numeradas</option>
              </select>
            </div>
          </div>

          {/* Right Column: Hero Image & Quotes */}
          <div className="space-y-4">
            {/* Hero Image Controls */}
            <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>FOTO DE DESTAQUE DO ARTIGO</span>
                </Label>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleCuratedImage}
                    className="text-[10px] bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-white font-medium"
                    title="Buscar foto curada de alta resolução"
                  >
                    Foto Curada
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerateAiImage}
                    className="text-[10px] bg-amber-500 hover:bg-amber-600 px-2 py-1 rounded text-slate-950 font-bold flex items-center gap-1"
                    title="Gerar foto por IA"
                  >
                    <Sparkles className="w-3 h-3" />
                    Gerar por IA
                  </button>
                </div>
              </div>

              <Input
                value={formData.heroImage}
                onChange={(e) => setFormData({ ...formData, heroImage: e.target.value })}
                placeholder="URL da imagem (Unsplash, IA ou link direto)"
                className="bg-slate-800 border-slate-700 text-white text-xs"
              />

              {formData.heroImage && (
                <div className="relative h-28 w-full rounded-md overflow-hidden border border-slate-600">
                  <img
                    src={formData.heroImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Pull Quotes Manager */}
            <div className="bg-slate-800/60 p-3.5 rounded-lg border border-slate-700 space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-amber-400" />
                  <span>CITAÇÕES DE DESTAQUE (PULL QUOTES)</span>
                </Label>
                <button
                  type="button"
                  onClick={handleExtractQuotes}
                  disabled={isAiLoading || !formData.content}
                  className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  Extrair com IA
                </button>
              </div>

              <div className="space-y-1.5 max-h-28 overflow-y-auto">
                {formData.pullQuotes.map((q, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2 bg-slate-900 px-2.5 py-1.5 rounded text-xs border border-slate-700"
                  >
                    <span className="italic text-slate-300 line-clamp-1">"{q}"</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveQuote(idx)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  value={newQuoteInput}
                  onChange={(e) => setNewQuoteInput(e.target.value)}
                  placeholder="Digitar nova frase de efeito..."
                  className="bg-slate-800 border-slate-700 text-white text-xs h-8"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddQuote();
                    }
                  }}
                />
                <Button
                  size="sm"
                  type="button"
                  onClick={handleAddQuote}
                  className="h-8 bg-slate-700 hover:bg-slate-600 text-white"
                >
                  <Plus className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Full Article Content Editor */}
        <div className="space-y-2 mt-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold text-slate-300">
              CORPO DO ARTIGO (TEXTO COMPLETO E PARÁGRAFOS)
            </Label>
            <Button
              size="sm"
              type="button"
              onClick={handlePolishText}
              disabled={isAiLoading || !formData.content}
              className="h-7 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1.5"
            >
              <Wand2 className="w-3 h-3" />
              <span>Polir Texto com IA Editorial</span>
            </Button>
          </div>
          <Textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Escreva ou cole seu artigo aqui. Separe parágrafos com quebra de linha dupla. Use **Subtítulo** para criar seções."
            className="bg-slate-800 border-slate-700 text-white text-xs font-mono min-h-[180px] leading-relaxed"
          />
        </div>

        <DialogFooter className="border-t border-slate-800 pt-4 mt-4 flex items-center justify-between">
          <Button variant="ghost" onClick={onClose} className="text-slate-400 hover:text-white">
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6"
          >
            Salvar Artigo na Revista
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

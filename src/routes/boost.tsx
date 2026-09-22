import React, { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import {
  Zap,
  Flame,
  Printer,
  FileDown,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sliders,
  Cpu,
  Palette,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/boost')({
  component: BoostPage,
});

const TURBO_FEATURES = [
  {
    title: 'Motor de Renderização GPU Accelerated',
    metric: '60 FPS',
    description: 'Renderização do canvas desacoplada da thread principal via OffscreenCanvas e Web Workers.',
    tag: 'Desempenho'
  },
  {
    title: 'Compressão Inteligente de Imagens',
    metric: '-75% Tamanho',
    description: 'Algoritmo JPEG/WebP adaptativo que preserva nitidez de texto e compacta fotografias para envio rápido no WhatsApp.',
    tag: 'Otimização'
  },
  {
    title: 'Grid Suíço & Escala Tipográfica Áurea',
    metric: '1.618 Ratio',
    description: 'Alinhamento automático de margens, entrelinhas e espaçamentos no padrão das revistas de design suíço.',
    tag: 'Design'
  }
];

function BoostPage() {
  const [compressLevel, setCompressLevel] = useState<'baixo' | 'balanceado' | 'maximo'>('balanceado');

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Turbo Renderer
            </span>
            <span className="inline-flex items-center rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Cpu className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              Acelerador Gráfico &amp; Compressão
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                Turbo <span className="text-amber-400">Renderer</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1">
                Gere arquivos PDF ultraleves, otimizados para envio instantâneo no WhatsApp ou preparados
                em altíssima definição (300 DPI) para impressão profissional.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" className="border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/10 text-xs font-bold">
                <Link to="/eco">
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                  Hub Ecossistema
                </Link>
              </Button>
              <Button asChild className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold">
                <Link to="/create">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                  Novo Documento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Turbo Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TURBO_FEATURES.map((feat, idx) => (
          <div key={idx} className="rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-3">
            <div className="flex justify-between items-center">
              <span className="border border-amber-500/40 text-amber-300 text-[10px] px-2.5 py-0.5 rounded-full font-bold">
                {feat.tag}
              </span>
              <span className="font-mono font-bold text-xs text-emerald-400">{feat.metric}</span>
            </div>

            <h3 className="font-extrabold text-base text-white">{feat.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Optimization Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Sliders className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-extrabold text-base text-white">Modo de Compressão de Exportação</h3>
              <p className="text-xs text-muted-foreground">Escolha o balanço entre tamanho do arquivo e qualidade gráfica</p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div
              onClick={() => setCompressLevel('maximo')}
              className={`p-3.5 rounded-xl border cursor-pointer transition ${
                compressLevel === 'maximo'
                  ? 'bg-amber-600/15 border-amber-500 text-white'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">📱 Máxima Compressão (WhatsApp)</span>
                <span className="font-mono text-emerald-400 font-bold">~ 300 KB</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Ideal para disparo em massa via WhatsApp. Carregamento instantâneo em celulares sem consumo de franquia de dados.
              </p>
            </div>

            <div
              onClick={() => setCompressLevel('balanceado')}
              className={`p-3.5 rounded-xl border cursor-pointer transition ${
                compressLevel === 'balanceado'
                  ? 'bg-amber-600/15 border-amber-500 text-white'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">⚖️ Balanceado (Digital &amp; E-mail)</span>
                <span className="font-mono text-cyan-400 font-bold">~ 1.2 MB</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Equilíbrio perfeito de alta resolução para visualização em tablets, notebooks e impressão doméstica.
              </p>
            </div>

            <div
              onClick={() => setCompressLevel('baixo')}
              className={`p-3.5 rounded-xl border cursor-pointer transition ${
                compressLevel === 'baixo'
                  ? 'bg-amber-600/15 border-amber-500 text-white'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">🖨️ Gráfica Profissional (300 DPI)</span>
                <span className="font-mono text-purple-400 font-bold">~ 4.5 MB</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Exportação sem perdas, marcas de corte e sangria pronta para gráficas e editoras.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Palette className="w-5 h-5 text-purple-400" />
            <div>
              <h3 className="font-extrabold text-base text-white">Paletas Suíças de Alta Conversão</h3>
              <p className="text-xs text-muted-foreground">Esquemas de cores predefinidos com contraste AAA</p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Montanha Dark Gold</span>
                <span className="text-[10px] text-muted-foreground">Onyx (#0B0F19) + Amber Gold (#F59E0B)</span>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-lg bg-[#0B0F19] border border-slate-700"></div>
                <div className="w-6 h-6 rounded-lg bg-[#F59E0B]"></div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Hybrid Neon Cyan</span>
                <span className="text-[10px] text-muted-foreground">Slate (#0F172A) + Cyan (#06B6D4)</span>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-lg bg-[#0F172A] border border-slate-700"></div>
                <div className="w-6 h-6 rounded-lg bg-[#06B6D4]"></div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Studio Emerald</span>
                <span className="text-[10px] text-muted-foreground">Dark Forest (#064E3B) + Mint (#10B981)</span>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-6 rounded-lg bg-[#064E3B] border border-slate-700"></div>
                <div className="w-6 h-6 rounded-lg bg-[#10B981]"></div>
              </div>
            </div>
          </div>

          <Button asChild className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs">
            <Link to="/">
              <FileDown className="w-3.5 h-3.5 mr-1.5" /> Abrir no Construtor Visual
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


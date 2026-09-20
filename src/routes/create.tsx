import React, { useState } from 'react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import {
  Sparkles,
  FileText,
  Layout,
  Layers,
  ArrowLeft,
  ArrowRight,
  Plus,
  Printer,
  CheckCircle2,
  Copy,
  BookOpen,
  Award,
  DollarSign,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const Route = createFileRoute('/create')({
  component: CreateStudioPage,
});

const DOCUMENT_TEMPLATES = [
  {
    id: 'ficha-treino',
    title: 'Ficha de Treino & Periodização',
    format: 'A4 Retrato / Paisagem',
    tag: 'Treinamento Híbrido',
    color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
    description: 'Tabelas completas com séries, repetições, carga, RPE, descanso e notas técnicas do coach.'
  },
  {
    id: 'relatorio-fisico',
    title: 'Relatório de Avaliação Física & Bioimpedância',
    format: 'A4 Editorial (3 a 5 páginas)',
    tag: 'Studio & Performance',
    color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
    description: 'Gráficos de evolução de % de gordura, massa magra, circunferências e fotos de antes/depois.'
  },
  {
    id: 'contrato-digital',
    title: 'Contrato de Prestação de Serviços',
    format: 'A4 Jurídico (2 páginas)',
    tag: 'Finanças & Proteção',
    color: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
    description: 'Termo de compromisso para personal trainer e alunos com assinatura e cláusulas claras.'
  },
  {
    id: 'ebook-manual',
    title: 'E-book / Manual Técnico de Exercícios',
    format: 'A4 / E-book Digital',
    tag: 'Publicação Editorial',
    color: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
    description: 'Diagramação no estilo revista suíça com capa, sumário, fotos de alta resolução e tipografia premium.'
  }
];

function CreateStudioPage() {
  const navigate = useNavigate();
  const [docTitle, setDocTitle] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('ficha-treino');

  const handleCreateDocument = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: '/' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-amber-500/50 bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Estúdio de Diagramação com IA
            </span>
            <span className="inline-flex items-center rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wider px-3 py-1">
              <Layout className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              Padrão Editorial Suíço
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                Criação de <span className="text-amber-400">PDFs &amp; Publicações</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mt-1">
                Gere documentos elegantes, prontos para impressão em 300 DPI ou envio imediato via WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" className="border-slate-700 hover:border-amber-500/50 hover:bg-amber-500/10 text-xs font-bold">
                <Link to="/eco">
                  <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                  Hub Ecossistema
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-500/40 hover:bg-amber-500/10 text-amber-300 text-xs font-bold">
                <Link to="/boost">Turbo Renderer</Link>
              </Button>
              <Button asChild className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold">
                <Link to="/">
                  Abrir Editor <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Creation Form */}
      <div className="rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="font-extrabold text-base text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-amber-400" />
            Criar Novo Documento Editorial
          </h3>
          <p className="text-xs text-muted-foreground">Escolha o modelo de base e configure o título da publicação</p>
        </div>

        <form onSubmit={handleCreateDocument} className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="docTitle" className="text-xs font-bold">Título do Documento</Label>
            <Input
              id="docTitle"
              placeholder="Ex: Guia de Periodização para Hipertrofia e Endurance 2026"
              value={docTitle}
              onChange={(e) => setDocTitle(e.target.value)}
              className="bg-slate-900 border-slate-800"
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="tpl" className="text-xs font-bold">Modelo Pré-Configurado</Label>
            <select
              id="tpl"
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white outline-none focus:border-amber-500 font-bold"
            >
              {DOCUMENT_TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>{t.title}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3 flex justify-end">
            <Button type="submit" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:opacity-90 text-white font-bold">
              <Sparkles className="w-4 h-4 mr-1.5" /> Abrir no Diagramador Visual
            </Button>
          </div>
        </form>
      </div>

      {/* Templates Showcase Grid */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-amber-400" />
            Modelos Disponíveis no Ecossistema
          </h2>
          <p className="text-xs text-muted-foreground">
            Compatíveis com exportação para PDF de alta fidelidade e envio direto pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DOCUMENT_TEMPLATES.map((tpl) => (
            <div key={tpl.id} className="rounded-2xl p-6 border border-slate-800 bg-slate-900/70 backdrop-blur-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${tpl.color}`}>
                    {tpl.tag}
                  </span>
                  <span className="border border-slate-700 text-slate-400 text-[10px] px-2 py-0.5 rounded">
                    {tpl.format}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-white">{tpl.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tpl.description}
                </p>
              </div>

              <div className="pt-2">
                <Button asChild className="w-full bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10 text-white text-xs font-bold">
                  <Link to="/">
                    <FileText className="w-3.5 h-3.5 mr-1.5 text-amber-400" /> Usar este Modelo
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateStudioPage;

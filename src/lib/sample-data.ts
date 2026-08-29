import { MagazineProject, MagazineTheme } from "../types/magazine";

export const MAGAZINE_THEMES: MagazineTheme[] = [
  {
    id: "montanha-titanium",
    name: "Montanha Titanium",
    description: "Visual imponente e moderno: Preto fosco profundo, detalhes em dourado nobre e tipografia de alto impacto.",
    primaryColor: "#E5A93C", // Dourado
    accentColor: "#F59E0B",
    textColor: "#0F172A",
    bgLight: "#F8FAFC",
    bgDark: "#0B0F19",
    cardBg: "#1E293B",
    borderColor: "#334155",
    fontHeadline: "font-sans font-black tracking-tight uppercase",
    fontBody: "font-sans leading-relaxed text-slate-800",
    fontSerif: false,
  },
  {
    id: "vogue-haute",
    name: "Editorial Vogue & Luxury",
    description: "Elegância pura em preto e branco marfim, tipografia serifada clássica de alta costura e espaçamento generoso.",
    primaryColor: "#111827",
    accentColor: "#6B7280",
    textColor: "#1F2937",
    bgLight: "#FAFAF9",
    bgDark: "#18181B",
    cardBg: "#F4F4F5",
    borderColor: "#E4E4E7",
    fontHeadline: "font-serif font-bold tracking-normal",
    fontBody: "font-serif leading-loose text-stone-800",
    fontSerif: true,
  },
  {
    id: "cyber-neon",
    name: "Cyber Tech & Performance",
    description: "Estética futurista e tecnológica com destaques em ciano elétrico e visual geométrico afiado.",
    primaryColor: "#06B6D4",
    accentColor: "#3B82F6",
    textColor: "#0F172A",
    bgLight: "#F0FDF4",
    bgDark: "#020617",
    cardBg: "#0F172A",
    borderColor: "#1E293B",
    fontHeadline: "font-mono font-extrabold tracking-tighter uppercase",
    fontBody: "font-sans leading-relaxed text-slate-700",
    fontSerif: false,
  },
  {
    id: "wellness-botanic",
    name: "Wellness & Natureza",
    description: "Tons terrosos e verde esmeralda com estilo orgânico para saúde, bem-estar e longevidade.",
    primaryColor: "#059669",
    accentColor: "#10B981",
    textColor: "#064E3B",
    bgLight: "#F0FDF4",
    bgDark: "#064E3B",
    cardBg: "#ECFDF5",
    borderColor: "#A7F3D0",
    fontHeadline: "font-sans font-semibold tracking-wide uppercase",
    fontBody: "font-sans leading-relaxed text-emerald-950",
    fontSerif: false,
  },
  {
    id: "business-leader",
    name: "Business Leader & Forbes",
    description: "Azul marinho profundo e vinho executivo, com tom de prestígio, autoridade e liderança global.",
    primaryColor: "#1E3A8A",
    accentColor: "#991B1B",
    textColor: "#1E293B",
    bgLight: "#F8FAFC",
    bgDark: "#0F172A",
    cardBg: "#EFF6FF",
    borderColor: "#CBD5E1",
    fontHeadline: "font-serif font-bold tracking-tight",
    fontBody: "font-sans leading-relaxed text-slate-800",
    fontSerif: true,
  },
  {
    id: "crimson-editorial",
    name: "Crimson Impact",
    description: "Contraste vibrante em vermelho rubi e carvão, ideal para notícias urgentes, capas de choque e destaque visual.",
    primaryColor: "#DC2626",
    accentColor: "#B91C1C",
    textColor: "#18181B",
    bgLight: "#FFF1F2",
    bgDark: "#18181B",
    cardBg: "#FFE4E6",
    borderColor: "#FECDD3",
    fontHeadline: "font-sans font-black tracking-tight uppercase",
    fontBody: "font-sans leading-relaxed text-zinc-800",
    fontSerif: false,
  },
];

export const INITIAL_MAGAZINE_PROJECT: MagazineProject = {
  id: "montanha-mag-01",
  title: "REVISTA MONTANHA",
  subtitle: "O Guia Definitivo do Corpo, Mente e Performance de Elite",
  editionNumber: "01",
  volume: "VOL. 01",
  date: "SETEMBRO 2026",
  category: "PERFORMANCE & SAÚDE",
  themeId: "montanha-titanium",
  coverConfig: {
    mastheadText: "MONTANHA",
    issueBadge: "EDIÇÃO ESPECIAL DE LANÇAMENTO • Nº 01",
    mainHeadline: "O CÓDIGO DA ALTA PERFORMANCE",
    subHeadline: "Como reprogramar o metabolismo, construir força indestrutível e dominar a disciplina diária.",
    categoryTag: "EXCLUSIVO",
    issueDate: "SETEMBRO 2026",
    editionNumber: "Nº 01",
    priceBadge: "EDIÇÃO PREMIUM",
    barcodeText: "9 771234 567003 01",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    backgroundOverlayOpacity: 40,
    highlights: [
      {
        id: "hl-1",
        tag: "HIPERTROFIA & CIÊNCIA",
        title: "Os 3 Pilares Ocultos do Ganho de Massa que a Maioria Ignora",
        pageTarget: 3,
      },
      {
        id: "hl-2",
        tag: "BIOHACKING",
        title: "Sono Profundo: A Janela de Recuperação Celular e Hormonal",
        pageTarget: 4,
      },
      {
        id: "hl-3",
        tag: "MINDSET",
        title: "A Psicologia do Vencedor: Blindando sua Mente contra a Procrastinação",
        pageTarget: 5,
      },
    ],
    footerHighlights: [
      "NUTRIÇÃO DE PRECISÃO",
      "SUPLEMENTOS QUE FUNCIONAM",
      "TREINAMENTO INTELIGENTE",
      "LONGEVIDADE",
    ],
  },
  editorialInfo: {
    editorName: "Coach Montanha",
    editorRole: "Fundador & Editor-Chefe",
    editorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
    editorLetterTitle: "A Busca Incessante pela Excelência",
    editorLetter: `Bem-vindo à primeira edição oficial da Revista Montanha.

Este projeto nasceu de uma convicção inabalável: o potencial humano não tem teto quando alinhamos conhecimento científico de ponta com execução diária implacável. Em um mundo saturado de atalhos vazios e promessas mágicas, escolhemos o caminho da verdade, do esforço inteligente e da consistência estruturada.

Nas páginas que se seguem, você encontrará não apenas artigos teóricos, mas manuais práticos de ação. Cada matéria foi cuidadosamente desenhada para fornecer ferramentas reais que você pode aplicar hoje mesmo na sua rotina de treinos, na sua nutrição e na sua postura diante dos desafios da vida.

O corpo é o templo onde sua mente habita. Trate-o com o respeito e a exigência que ele merece. Nos vemos no topo!`,
    editorialNote: "Revista Montanha é uma publicação independente voltada ao desenvolvimento físico, mental e estratégico.",
    credits: [
      { id: "c1", role: "Editor-Chefe & Direção Geral", name: "Coach Montanha" },
      { id: "c2", role: "Design Editorial & Direção de Arte", name: "Studio Montanha Design" },
      { id: "c3", role: "Revisão Científica & Pesquisa", name: "Conselho de Fisiologia e Treinamento" },
      { id: "c4", role: "Fotografia Editorial", name: "Montanha Media Lab" },
    ],
  },
  articles: [
    {
      id: "art-1",
      title: "O CÓDIGO DA HIPERTROFIA: CIÊNCIA & APLICAÇÃO",
      subtitle: "Desmistificando os mecanismos de tensão mecânica, estresse metabólico e dano muscular para acelerar resultados.",
      category: "TREINAMENTO AVANÇADO",
      author: "Coach Montanha",
      authorBio: "Especialista em preparação física, biomecânica e hipertrofia com mais de 15 anos transformando vidas.",
      authorPhoto: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=300&q=80",
      heroImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "A precisão na execução angular determina a ativação muscular real.",
      heroImagePrompt: "Athletic bodybuilder training hard in dark aesthetic gym, dramatic rim lighting, sweat, 8k",
      content: `O processo de desenvolvimento muscular tem sido alvo de debates há décadas, mas a fisiologia moderna aponta para um pilar central: a **tensão mecânica progressiva**. Sem uma sobrecarga contínua aplicada nas fibras musculares com cadência controlada, qualquer volume de treino torna-se mero esforço desperdiçado.

**A Falácia do Treino Aleatório**
Muitos praticantes trocam de exercícios semanalmente na crença de que estão "surpreendendo o músculo". Na realidade, o corpo não precisa ser surpreendido; ele precisa ser estimulado de forma repetitiva e progressiva. A adaptação neural precede a hipertrofia, e somente quando dominamos a técnica de um padrão motor podemos extrair o máximo de tensão de cada série.

**Volume vs. Intensidade Real**
A proximidade da falha concêntrica (RPE 8 a 10) é o divisor de águas. Fazer 20 séries fofas não produz o mesmo estímulo de sinalização celular (mTOR) que 8 séries executadas com foco absoluto e carga desafiadora. Quando você aprende a recrutar todas as unidades motoras de alto limiar, o tempo necessário na sala de musculação diminui enquanto os resultados disparam.`,
      pullQuotes: [
        "A intensidade real não se mede pelo suor no chão, mas pela proximidade honesta do limite fisiológico em cada repetição.",
        "O corpo humano é uma máquina de adaptação: dê a ele um estímulo incontestável e ele não terá outra escolha a não ser crescer.",
      ],
      calloutBox: {
        title: "REGRA DE OURO DO COACH",
        content: "Antes de aumentar o peso na barra, certifique-se de que a fase excêntrica do movimento dura pelo menos 2 a 3 segundos com controle milimétrico.",
      },
      keyTakeaways: [
        "Priorize a tensão mecânica sobre o cansaço cardiovascular no treino de força.",
        "Mantenha uma cadência controlada na fase excêntrica de cada exercício.",
        "Monitore suas cargas e repetições em um diário de treino para garantir a sobrecarga progressiva.",
      ],
      layoutTemplate: "editorial-lead",
      tags: ["Hipertrofia", "Biomecânica", "Fisiologia", "Montanha"],
      estimatedReadTime: 5,
      featuredOnCover: true,
    },
    {
      id: "art-2",
      title: "SONO ANABÓLICO: A FONTE DA JUVENTUDE CELULAR",
      subtitle: "Como o ciclo circadiano e as ondas lentas regulam a liberação de GH, síntese proteica e restauração neural.",
      category: "BIOHACKING & RECUPERAÇÃO",
      author: "Dra. Helena Vasconcelos",
      authorBio: "Neurocientista e consultora de performance humana e medicina do sono.",
      heroImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "A escuridão total e temperatura fresca são os gatilhos mestres para o sono REM profundo.",
      content: `Enquanto você dorme, seu organismo realiza uma verdadeira faxina metabólica através do sistema glinfático. É durante as fases 3 e 4 do sono profundo de ondas lentas (NREM) que ocorrem os picos de liberação do hormônio do crescimento (GH) e a maior taxa de síntese e reparo de tecidos.

**A Luz Azul e a Queda da Melatonina**
A exposição a telas e iluminação artificial de LED após o pôr do sol envia um sinal ao núcleo supraquiasmático indicando que ainda é dia. Isso atrasa a liberação natural da melatonina em até 90 minutos, fragmentando o sono e impedindo que o corpo alcance os ciclos de restauração celular ideais.

**O Protocolo Noturno de Alta Performance**
Reduzir as luzes da casa 2 horas antes de dormir, manter o quarto em torno de 19°C e evitar refeições pesadas ricas em gorduras saturadas tarde da noite são passos simples que elevam drasticamente a variabilidade da frequência cardíaca (HRV) e o descanso muscular.`,
      pullQuotes: [
        "O melhor suplemento de recuperação do planeta é gratuito, tem duração de 8 horas e acontece de olhos fechados.",
      ],
      calloutBox: {
        title: "CHECKLIST NOTURNO",
        content: "Zero telas 60 min antes de deitar • Quarto totalmente escuro (blackout) • Temperatura entre 18°C e 20°C • Suplementação inteligente com Magnésio e Gaba.",
      },
      keyTakeaways: [
        "A recuperação muscular ocorre majoritariamente no sono de ondas lentas.",
        "A iluminação noturna destrói a produção de melatonina.",
        "Consistência nos horários de dormir e acordar fortalece o ritmo circadiano.",
      ],
      layoutTemplate: "two-column-quote",
      tags: ["Sono", "Recuperação", "Hormônios", "Saúde"],
      estimatedReadTime: 4,
      featuredOnCover: true,
    },
    {
      id: "art-3",
      title: "MENTE INABALÁVEL: A CIÊNCIA DA DISCIPLINA",
      subtitle: "Por que depender de motivação é o erro número um e como construir sistemas à prova de procrastinação.",
      category: "DESENVOLVIMENTO PESSOAL",
      author: "Coach Montanha",
      authorBio: "Treinador e mentor de executivos e atletas de elite.",
      heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85",
      heroImageCaption: "A mente domina o corpo quando o propósito é inegociável.",
      content: `A motivação é uma emoção volátil e passageira. Nos dias de sol e energia alta, qualquer pessoa consegue treinar, comer limpo e produzir com vigor. No entanto, o que separa os amadores dos campeões é a capacidade de executar com a mesma perfeição nos dias frios, cansativos e desfavoráveis.

**Construção de Identidade e Hábitos**
Não tente apenas mudar resultados superficiais; mude a sua autoimagem. Quando você assume a identidade de alguém que não negocia com o desleixo, as decisões tornam-se automáticas. Você não precisa debater consigo mesmo se vai à academia às 6h da manhã; você simplesmente vai, porque é isso que você é.

**A Regra dos 2 Minutos para Romper a Inércia**
A maior resistência psicológica reside no início da ação. Ao reduzir a barreira inicial para apenas calçar o tênis ou preparar a primeira refeição, o cérebro supera a amígdala e entra em estado de fluxo, neutralizando a vontade de adiar.`,
      pullQuotes: [
        "A disciplina liberta: quem controla a própria vontade não é escravo de impulsos imediatistas.",
      ],
      keyTakeaways: [
        "Motivação inicia o movimento; disciplina o mantém em órbita.",
        "Crie rituais que reduzam o atrito para começar tarefas difíceis.",
        "Comemore pequenas vitórias diárias para reprogramar os circuitos de dopamina.",
      ],
      layoutTemplate: "infographic-tips",
      tags: ["Mentalidade", "Foco", "Alta Performance"],
      estimatedReadTime: 3,
      featuredOnCover: true,
    },
  ],
  backCoverConfig: {
    headline: "TRANSFORME SEU CORPO. CONQUISTE SUA VIDA.",
    subheadline: "Junte-se à comunidade oficial do Coach Montanha e acesse conteúdos exclusivos toda semana.",
    message: "A consistência é o único atalho real para a grandeza. Não espere a próxima segunda-feira para assumir o controle do seu destino.",
    backgroundImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=85",
    ctaText: "ACESSE O PROTOCOLO COMPLETO",
    websiteUrl: "www.coachmontanha.com.br",
    socialHandles: {
      instagram: "@coachmontanha",
      youtube: "Coach Montanha Oficial",
      email: "contato@coachmontanha.com.br",
    },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

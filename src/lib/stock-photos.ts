export interface StockPhoto {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  category: "barra-fixa" | "kettlebell" | "musculacao" | "coach" | "academia" | "nutricao" | "geral";
  author: string;
}

export const EDITORIAL_STOCK_PHOTOS: StockPhoto[] = [
  // Barra Fixa & Dorsais (Atletas na Barra / Costas / Calistenia)
  {
    id: "pullup-01",
    url: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400&q=75",
    title: "Atleta em Barra Fixa Strict",
    category: "barra-fixa",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "pullup-02",
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=75",
    title: "Treino de Dorsais & Tração",
    category: "barra-fixa",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "pullup-03",
    url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=400&q=75",
    title: "Força Relativa & Calistenia",
    category: "barra-fixa",
    author: "Unsplash Sports Editorial",
  },

  // Kettlebell & Balística
  {
    id: "kb-01",
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=75",
    title: "Kettlebell Swing Potência",
    category: "kettlebell",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "kb-02",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=75",
    title: "Atleta com Kettlebells de Ferro",
    category: "kettlebell",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "kb-03",
    url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=400&q=75",
    title: "Clean & Press com Kettlebell",
    category: "kettlebell",
    author: "Unsplash Sports Editorial",
  },

  // Força, Halteres & Musculação
  {
    id: "lift-01",
    url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=400&q=75",
    title: "Treino de Halteres & Peitoral",
    category: "musculacao",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "lift-02",
    url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=75",
    title: "Levantamento Pesado com Barra",
    category: "musculacao",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "lift-03",
    url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=75",
    title: "Atleta Feminina em Treino de Força",
    category: "musculacao",
    author: "Unsplash Sports Editorial",
  },

  // Retratos de Coach & Atletas em Estúdio
  {
    id: "coach-01",
    url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=75",
    title: "Retrato Editorial Coach Masculino",
    category: "coach",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "coach-02",
    url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=75",
    title: "Retrato Coach Feminina em Estúdio",
    category: "coach",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "coach-03",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=75",
    title: "Retrato Profissional Esportivo",
    category: "coach",
    author: "Unsplash Sports Editorial",
  },

  // Academia & Equipamentos
  {
    id: "gym-01",
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=75",
    title: "Centro de Treinamento Moderno",
    category: "academia",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "gym-02",
    url: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=400&q=75",
    title: "Rack de Halteres & Anilhas",
    category: "academia",
    author: "Unsplash Sports Editorial",
  },

  // Nutrição & Biohacking
  {
    id: "nutri-01",
    url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=75",
    title: "Nutrição de Performance & Alimentos",
    category: "nutricao",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "nutri-02",
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=75",
    title: "Refeição Limpa & Densidade Nutricional",
    category: "nutricao",
    author: "Unsplash Sports Editorial",
  },
  {
    id: "nutri-03",
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=85",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=75",
    title: "Biohacking & Recuperação Muscular",
    category: "nutricao",
    author: "Unsplash Sports Editorial",
  },
];

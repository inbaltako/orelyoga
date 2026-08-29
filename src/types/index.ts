export type Language = 'he' | 'en';

export interface StyleItem {
  id: string;
  name: { he: string; en: string };
  description: { he: string; en: string };
  icon: string;
}

export interface SessionPlan {
  id: string;
  title: { he: string; en: string };
  subtitle: { he: string; en: string };
  description: { he: string; en: string };
  duration: string;
  icon: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySchedule {
  dayName: { he: string; en: string };
  date: string; // e.g. "14.05"
  dayNumber: number;
  slots: string[];
  isAvailable: boolean;
}

export interface Retreat {
  id: string;
  title: { he: string; en: string };
  date: { he: string; en: string };
  location: { he: string; en: string };
  description: { he: string; en: string };
  image: string;
  imageAlt: string;
  tag?: { he: string; en: string } | null;
  price?: { he: string; en: string };
  spotsLeft?: number;
}

export interface Article {
  id: string;
  slug: string;
  title: { he: string; en: string };
  subtitle?: { he: string; en: string };
  category: 'philosophy' | 'anatomy' | 'mindfulness' | 'lifestyle' | 'home-practice';
  categoryLabel: { he: string; en: string };
  readTime: { he: string; en: string };
  date: { he: string; en: string };
  image: string;
  imageAlt: string;
  excerpt: { he: string; en: string };
  content: {
    he: {
      lead: string;
      sections: { heading?: string; paragraphs: string[] }[];
      quote?: string;
    };
    en: {
      lead: string;
      sections: { heading?: string; paragraphs: string[] }[];
      quote?: string;
    };
  };
}

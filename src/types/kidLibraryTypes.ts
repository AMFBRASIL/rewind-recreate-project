export type MomentType = 'photo' | 'video' | 'text' | 'mural';

export interface KidMoment {
  id: string;
  type: MomentType;
  title: string;
  date: string;
  description: string;
  category: string; // ex: "aniversário", "escola", "férias"
  tags: string[];
  
  // Mídia
  photos?: string[]; // URLs das fotos
  videoUrl?: string;
  textContent?: string;
  
  // Metadata
  createdAt: string;
}

export interface KidProfile {
  name: string;
  birthDate: string;
  avatar?: string;
}

export type MovieTemplate = 'birthday' | 'school-year' | 'summer' | 'all-moments';

export interface MovieTemplateConfig {
  id: MovieTemplate;
  name: string;
  description: string;
  icon: string;
  categories: string[];
}

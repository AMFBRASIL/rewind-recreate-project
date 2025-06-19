
export interface SlideData {
  id: number;
  type: 'image' | 'video';
  backgroundImage?: string;
  videoUrl?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon?: 'heart' | 'star' | 'moon' | 'music' | 'clock' | 'image' | 'gift' | 'calendar';
}

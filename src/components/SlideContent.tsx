
import { Star, Moon, Heart } from "lucide-react";
import { SlideData } from '../types/slideTypes';

interface SlideContentProps {
  slide: SlideData;
}

const SlideContent = ({ slide }: SlideContentProps) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />;
      case 'moon':
        return <Moon className="w-8 h-8 text-blue-300 mx-auto mb-4 animate-pulse" />;
      default:
        return <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4 animate-pulse" />;
    }
  };

  return (
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="text-center text-white px-8 max-w-4xl">
        <div className="mb-4">
          {getIcon(slide.icon || 'heart')}
          <p className="text-pink-300 text-lg font-medium mb-2">{slide.date}</p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent animate-fade-in">
          {slide.title}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-200 animate-fade-in">
          {slide.subtitle}
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
          {slide.description}
        </p>
      </div>
    </div>
  );
};

export default SlideContent;

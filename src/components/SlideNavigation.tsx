
import { ChevronDown, ChevronUp } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
}

const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrevSlide, 
  onNextSlide, 
  onGoToSlide 
}: SlideNavigationProps) => {
  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={onPrevSlide}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-white"
          disabled={currentSlide === 0}
        >
          <ChevronUp size={24} />
        </button>
        
        <div className="flex flex-col space-y-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-pink-400 scale-125'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={onNextSlide}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-white"
          disabled={currentSlide === totalSlides - 1}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default SlideNavigation;

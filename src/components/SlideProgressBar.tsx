
interface SlideProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}

const SlideProgressBar = ({ currentSlide, totalSlides }: SlideProgressBarProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-md rounded-full px-6 py-3">
        <span className="text-white text-sm font-medium">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
        <span className="text-white text-sm font-medium">
          {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default SlideProgressBar;

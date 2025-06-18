
import { ChevronDown } from "lucide-react";

interface ScrollHintProps {
  show: boolean;
}

const ScrollHint = ({ show }: ScrollHintProps) => {
  if (!show) return null;

  return (
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <div className="flex flex-col items-center text-white/70">
        <span className="text-sm mb-2">Deslize para explorar</span>
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default ScrollHint;

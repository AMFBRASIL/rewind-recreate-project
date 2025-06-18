
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-300 opacity-20 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
          size={8 + Math.random() * 12}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;

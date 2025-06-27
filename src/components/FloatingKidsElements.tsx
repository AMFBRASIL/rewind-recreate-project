
import { Baby, Heart, Star, Sun, Moon, Rainbow, Gift, Palette, Music } from "lucide-react";

const FloatingKidsElements = () => {
  const kidsElements = [
    { icon: Baby, color: '#FFB6C1', size: 20 },
    { icon: Heart, color: '#87CEEB', size: 16 },
    { icon: Star, color: '#98FB98', size: 18 },
    { icon: Sun, color: '#F0E68C', size: 22 },
    { icon: Moon, color: '#DDA0DD', size: 18 },
    { icon: Rainbow, color: '#FFB6C1', size: 24 },
    { icon: Gift, color: '#87CEEB', size: 20 },
    { icon: Palette, color: '#98FB98', size: 18 },
    { icon: Music, color: '#F0E68C', size: 16 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => {
        const element = kidsElements[Math.floor(Math.random() * kidsElements.length)];
        const Icon = element.icon;
        
        return (
          <Icon
            key={i}
            className="absolute opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              color: element.color
            }}
            size={element.size}
          />
        );
      })}
      
      {/* Emojis flutuantes também */}
      {[...Array(15)].map((_, i) => {
        const emojis = ['🎈', '🎨', '🌈', '⭐', '🎁', '🦄', '🌟', '🎪', '🎭', '🧸'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        return (
          <div
            key={`emoji-${i}`}
            className="absolute text-2xl opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingKidsElements;

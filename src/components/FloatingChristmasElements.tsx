
import { Star, Gift, Snowflake, TreePine, Bell, Candy, Heart, Sparkles, Crown } from "lucide-react";

const FloatingChristmasElements = () => {
  const christmasElements = [
    { icon: Gift, color: '#DC2626', size: 22 },
    { icon: Star, color: '#FCD34D', size: 18 },
    { icon: Snowflake, color: '#DBEAFE', size: 20 },
    { icon: TreePine, color: '#16A34A', size: 24 },
    { icon: Bell, color: '#F59E0B', size: 18 },
    { icon: Candy, color: '#EC4899', size: 16 },
    { icon: Heart, color: '#DC2626', size: 16 },
    { icon: Sparkles, color: '#FCD34D', size: 20 },
    { icon: Crown, color: '#F59E0B', size: 18 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(40)].map((_, i) => {
        const element = christmasElements[Math.floor(Math.random() * christmasElements.length)];
        const Icon = element.icon;
        
        return (
          <Icon
            key={i}
            className="absolute opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              color: element.color
            }}
            size={element.size}
          />
        );
      })}
      
      {/* Emojis natalinos flutuantes */}
      {[...Array(20)].map((_, i) => {
        const christmasEmojis = ['🎅', '🎄', '🔔', '⭐', '🎁', '❄️', '🤶', '🦌', '🛷', '🕯️', '🍪', '🥛', '🧦', '🎀', '✨'];
        const emoji = christmasEmojis[Math.floor(Math.random() * christmasEmojis.length)];
        
        return (
          <div
            key={`emoji-${i}`}
            className="absolute text-3xl opacity-50 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          >
            {emoji}
          </div>
        );
      })}
      
      {/* Neve caindo */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`snow-${i}`}
          className="absolute text-white opacity-60 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 2}s`
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
};

export default FloatingChristmasElements;

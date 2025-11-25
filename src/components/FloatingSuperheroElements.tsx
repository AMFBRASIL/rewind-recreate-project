import { Sparkles, Zap, Star, Shield, Rocket, Crown, Award, Trophy } from "lucide-react";

const FloatingSuperheroElements = () => {
  const heroElements = [
    { Icon: Zap, color: 'text-yellow-400' },
    { Icon: Star, color: 'text-yellow-300' },
    { Icon: Shield, color: 'text-blue-400' },
    { Icon: Rocket, color: 'text-red-400' },
    { Icon: Crown, color: 'text-yellow-500' },
    { Icon: Sparkles, color: 'text-pink-400' },
    { Icon: Award, color: 'text-purple-400' },
    { Icon: Trophy, color: 'text-orange-400' },
  ];

  const emojis = ['⚡', '🦸', '🌟', '💫', '🚀', '👑', '🏆', '⭐', '💥', '🎯'];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Elementos de ícones animados */}
      {Array.from({ length: 25 }).map((_, i) => {
        const Element = heroElements[i % heroElements.length];
        return (
          <div
            key={`icon-${i}`}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Element.Icon 
              className={`${Element.color} opacity-20`}
              size={16 + Math.random() * 24}
            />
          </div>
        );
      })}

      {/* Emojis flutuantes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`emoji-${i}`}
          className="absolute text-3xl opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        >
          {emojis[i % emojis.length]}
        </div>
      ))}

      {/* Raios de energia */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`ray-${i}`}
          className="absolute w-1 bg-gradient-to-b from-yellow-400/30 via-orange-400/20 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10%',
            height: `${30 + Math.random() * 40}%`,
            animationDelay: `${Math.random() * 3}s`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingSuperheroElements;

import { Sparkles, Zap, Star, Shield, Rocket, Crown, Award, Trophy, Plane, Cloud } from "lucide-react";

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
  
  // Super-heróis e bichinhos voadores
  const flyingCharacters = ['🦸‍♂️', '🦸‍♀️', '🦅', '🦋', '🐝', '🐞', '🦜', '🦇', '🚁', '✈️'];
  
  // Nuvens e elementos do céu
  const skyElements = ['☁️', '⭐', '🌙', '🌈', '☀️'];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Super-heróis voando da esquerda para direita */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`flying-hero-${i}`}
          className="absolute text-5xl md:text-6xl animate-fly-across"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: '-10%',
            animationDelay: `${i * 5 + Math.random() * 3}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {flyingCharacters[i % flyingCharacters.length]}
        </div>
      ))}

      {/* Bichinhos e personagens voando em diagonal */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`diagonal-fly-${i}`}
          className="absolute text-4xl md:text-5xl animate-fly-diagonal"
          style={{
            top: `${-10}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 3 + Math.random() * 2}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        >
          {flyingCharacters[(i + 3) % flyingCharacters.length]}
        </div>
      ))}

      {/* Nuvens flutuantes passando lentamente */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`cloud-${i}`}
          className="absolute text-6xl md:text-8xl opacity-20 animate-float-slow"
          style={{
            top: `${10 + i * 15}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        >
          ☁️
        </div>
      ))}

      {/* Aviões e foguetes cruzando o céu */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`plane-${i}`}
          className="absolute flex items-center animate-fly-across"
          style={{
            top: `${20 + i * 20}%`,
            left: '-15%',
            animationDelay: `${i * 6 + 2}s`,
            animationDuration: `${12 + Math.random() * 4}s`,
          }}
        >
          <span className="text-4xl md:text-5xl">✈️</span>
          <div className="ml-2 flex space-x-1">
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      ))}

      {/* Balões subindo */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`balloon-${i}`}
          className="absolute text-4xl animate-float-up"
          style={{
            left: `${10 + i * 15}%`,
            bottom: '-10%',
            animationDelay: `${i * 2.5}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        >
          🎈
        </div>
      ))}

      {/* Pássaros voando em grupo */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`bird-${i}`}
          className="absolute text-2xl md:text-3xl animate-bird-fly"
          style={{
            top: `${15 + Math.random() * 30}%`,
            left: `${-10 - i * 5}%`,
            animationDelay: `${i * 0.5 + Math.random()}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        >
          🐦
        </div>
      ))}

      {/* Elementos de ícones animados (mantidos do original) */}
      {Array.from({ length: 20 }).map((_, i) => {
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
              className={`${Element.color} opacity-15`}
              size={16 + Math.random() * 20}
            />
          </div>
        );
      })}

      {/* Emojis de céu flutuantes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`sky-emoji-${i}`}
          className="absolute text-3xl opacity-25 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        >
          {skyElements[i % skyElements.length]}
        </div>
      ))}

      {/* Estrelas cadentes */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={`shooting-star-${i}`}
          className="absolute animate-shooting-star"
          style={{
            top: `${10 + i * 25}%`,
            right: '-10%',
            animationDelay: `${i * 8 + 4}s`,
            animationDuration: '2s',
          }}
        >
          <div className="flex items-center">
            <span className="text-3xl">⭐</span>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          </div>
        </div>
      ))}

      {/* Raios de energia (mantidos do original) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`ray-${i}`}
          className="absolute w-1 bg-gradient-to-b from-yellow-400/20 via-orange-400/10 to-transparent animate-pulse"
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

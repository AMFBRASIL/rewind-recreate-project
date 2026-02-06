import { useEffect, useState } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  type: "heart" | "star" | "sparkle" | "dot";
}

interface EmotionalParticlesProps {
  mood?: "romantic" | "nostalgic" | "joyful" | "bittersweet";
  intensity?: number;
}

const EmotionalParticles = ({ mood = "romantic", intensity = 30 }: EmotionalParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < intensity; i++) {
        const types: Particle["type"][] = 
          mood === "romantic" ? ["heart", "sparkle", "dot"] :
          mood === "nostalgic" ? ["star", "dot", "sparkle"] :
          mood === "joyful" ? ["star", "sparkle", "heart"] :
          ["heart", "star", "dot"];
        
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 8 + Math.random() * 16,
          opacity: 0.1 + Math.random() * 0.4,
          duration: 15 + Math.random() * 20,
          delay: Math.random() * 10,
          type: types[Math.floor(Math.random() * types.length)]
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [mood, intensity]);

  const getMoodColors = () => {
    switch (mood) {
      case "romantic":
        return "text-pink-300";
      case "nostalgic":
        return "text-amber-200";
      case "joyful":
        return "text-yellow-300";
      case "bittersweet":
        return "text-purple-300";
      default:
        return "text-white";
    }
  };

  const renderParticle = (particle: Particle) => {
    const baseClasses = `${getMoodColors()} drop-shadow-lg`;
    
    switch (particle.type) {
      case "heart":
        return <Heart className={baseClasses} style={{ width: particle.size, height: particle.size }} />;
      case "star":
        return <Star className={baseClasses} style={{ width: particle.size, height: particle.size }} />;
      case "sparkle":
        return <Sparkles className={baseClasses} style={{ width: particle.size, height: particle.size }} />;
      default:
        return (
          <div 
            className={`rounded-full bg-current ${getMoodColors()}`}
            style={{ width: particle.size / 2, height: particle.size / 2 }}
          />
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {renderParticle(particle)}
        </div>
      ))}
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) translateX(15px) rotate(5deg);
          }
          50% {
            transform: translateY(-15px) translateX(-10px) rotate(-3deg);
          }
          75% {
            transform: translateY(-40px) translateX(20px) rotate(8deg);
          }
        }
      `}</style>
    </div>
  );
};

export default EmotionalParticles;

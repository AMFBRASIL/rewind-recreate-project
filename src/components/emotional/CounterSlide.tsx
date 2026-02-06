import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, Star, Clock } from "lucide-react";

interface CounterSlideProps {
  stats: {
    label: string;
    value: number;
    suffix?: string;
    icon: "heart" | "calendar" | "star" | "clock";
  }[];
  title: string;
  isActive: boolean;
}

const CounterSlide = ({ stats, title, isActive }: CounterSlideProps) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (!isActive) {
      setCounts(stats.map(() => 0));
      return;
    }

    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.value / 50);
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
          }
          return newCounts;
        });
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, [isActive, stats]);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "heart": return <Heart className="w-8 h-8" />;
      case "calendar": return <Calendar className="w-8 h-8" />;
      case "star": return <Star className="w-8 h-8" />;
      case "clock": return <Clock className="w-8 h-8" />;
      default: return <Heart className="w-8 h-8" />;
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-purple-950 via-rose-950 to-black">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-pink-500/20"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white text-center mb-16 drop-shadow-2xl"
        >
          {title}
        </motion.h2>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={isActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 50 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6, type: "spring" }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="text-pink-400 mb-4 flex justify-center"
                >
                  {getIcon(stat.icon)}
                </motion.div>
                
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  key={counts[index]}
                >
                  {counts[index].toLocaleString()}{stat.suffix || ""}
                </motion.div>
                
                <p className="text-pink-200 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSlide;

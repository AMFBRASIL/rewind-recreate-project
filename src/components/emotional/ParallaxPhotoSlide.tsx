import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from "../TypewriterText";

interface ParallaxPhotoSlideProps {
  backgroundPhoto: string;
  foregroundPhoto: string;
  title: string;
  subtitle?: string;
  isActive: boolean;
}

const ParallaxPhotoSlide = ({ 
  backgroundPhoto, 
  foregroundPhoto, 
  title, 
  subtitle,
  isActive 
}: ParallaxPhotoSlideProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    if (isActive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isActive]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background layer - moves slower */}
      <motion.div
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute inset-[-50px]"
      >
        <img
          src={backgroundPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      
      {/* Foreground photo - moves faster */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={isActive ? {
          opacity: 1,
          y: 0,
          scale: 1,
          x: mousePosition.x * 30,
          rotateY: mousePosition.x * 5,
        } : {
          opacity: 0,
          y: 100,
          scale: 0.8,
        }}
        transition={{ 
          delay: 0.3,
          duration: 0.8,
          x: { type: "spring", stiffness: 50, damping: 30 },
        }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 w-72 md:w-96"
        style={{ perspective: "1000px" }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl opacity-50 blur-2xl animate-pulse" />
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src={foregroundPhoto}
              alt=""
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </motion.div>
      
      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-24 left-0 right-0 text-center px-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-4">
          <TypewriterText text={title} delay={80} />
        </h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl md:text-2xl text-pink-200 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
      
      {/* Floating hearts */}
      {isActive && [...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            y: "100vh",
            x: `${Math.random() * 100}vw`,
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: "-20vh",
          }}
          transition={{
            duration: 4,
            delay: i * 0.5 + 1,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute text-4xl"
        >
          💕
        </motion.div>
      ))}
    </div>
  );
};

export default ParallaxPhotoSlide;

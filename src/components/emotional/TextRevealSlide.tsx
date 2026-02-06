import { motion } from "framer-motion";

interface TextRevealSlideProps {
  lines: string[];
  backgroundGradient?: string;
  isActive: boolean;
}

const TextRevealSlide = ({ lines, backgroundGradient, isActive }: TextRevealSlideProps) => {
  return (
    <div className={`relative h-full w-full overflow-hidden ${backgroundGradient || "bg-gradient-to-br from-rose-950 via-purple-950 to-black"}`}>
      {/* Animated lines background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent w-full"
            style={{ top: `${(i + 1) * 10}%` }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-8">
        <div className="space-y-4 text-center max-w-4xl">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={isActive ? { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)" 
              } : { 
                opacity: 0, 
                y: 50, 
                filter: "blur(10px)" 
              }}
              transition={{ 
                delay: index * 0.4 + 0.5, 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="overflow-hidden"
            >
              <motion.p
                className={`${
                  index === 0 
                    ? "text-4xl md:text-7xl font-bold bg-gradient-to-r from-pink-300 via-white to-pink-300 bg-clip-text text-transparent" 
                    : index === lines.length - 1
                    ? "text-2xl md:text-4xl text-pink-300 italic mt-8"
                    : "text-2xl md:text-4xl text-white/90"
                }`}
                animate={isActive ? {
                  textShadow: [
                    "0 0 20px rgba(236, 72, 153, 0)",
                    "0 0 40px rgba(236, 72, 153, 0.5)",
                    "0 0 20px rgba(236, 72, 153, 0)",
                  ],
                } : {}}
                transition={{
                  duration: 2,
                  delay: index * 0.4 + 1.5,
                  repeat: Infinity,
                }}
              >
                {line}
              </motion.p>
            </motion.div>
          ))}
        </div>
        
        {/* Floating emojis */}
        {isActive && (
          <div className="absolute inset-0 pointer-events-none">
            {["💕", "✨", "💖", "🌟", "💗"].map((emoji, i) => (
              <motion.span
                key={i}
                className="absolute text-4xl"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  rotate: 0,
                }}
                animate={{ 
                  y: -100,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 6,
                  delay: i * 1.5 + 2,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextRevealSlide;

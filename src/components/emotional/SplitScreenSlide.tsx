import { motion } from "framer-motion";
import TypewriterText from "../TypewriterText";

interface SplitScreenSlideProps {
  leftPhoto: string;
  rightPhoto: string;
  leftLabel?: string;
  rightLabel?: string;
  centerText: string;
  isActive: boolean;
}

const SplitScreenSlide = ({ 
  leftPhoto, 
  rightPhoto, 
  leftLabel,
  rightLabel,
  centerText, 
  isActive 
}: SplitScreenSlideProps) => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {/* Left side */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isActive ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 top-0 w-1/2 h-full"
      >
        <img
          src={leftPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
        
        {leftLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-8"
          >
            <span className="text-xl text-white/80 uppercase tracking-widest">
              {leftLabel}
            </span>
          </motion.div>
        )}
      </motion.div>
      
      {/* Right side */}
      <motion.div
        initial={{ x: "100%" }}
        animate={isActive ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-0 top-0 w-1/2 h-full"
      >
        <img
          src={rightPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80" />
        
        {rightLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 right-8 text-right"
          >
            <span className="text-xl text-white/80 uppercase tracking-widest">
              {rightLabel}
            </span>
          </motion.div>
        )}
      </motion.div>
      
      {/* Center divider with glow */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isActive ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-20"
      >
        <div className="h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent" />
        <div className="absolute inset-0 blur-lg bg-pink-500/50" />
      </motion.div>
      
      {/* Center heart icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isActive ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ delay: 1, duration: 0.6, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
      >
        <div className="relative">
          <div className="absolute -inset-6 bg-pink-500/30 rounded-full blur-xl animate-pulse" />
          <div className="relative w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-4xl">💕</span>
          </div>
        </div>
      </motion.div>
      
      {/* Center text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-32 left-0 right-0 text-center z-20 px-8"
      >
        <p className="text-2xl md:text-4xl font-light text-white drop-shadow-2xl">
          <TypewriterText text={centerText} delay={50} />
        </p>
      </motion.div>
    </div>
  );
};

export default SplitScreenSlide;

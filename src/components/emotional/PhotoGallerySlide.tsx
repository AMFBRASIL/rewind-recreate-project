import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoGallerySlideProps {
  photos: string[];
  title?: string;
  isActive: boolean;
}

const PhotoGallerySlide = ({ photos, title, isActive }: PhotoGallerySlideProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % photos.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isActive, photos.length]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background blur from active photo */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 scale-110 blur-3xl"
        style={{
          backgroundImage: `url(${photos[activeIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Floating photos grid */}
      <div className="relative h-full flex items-center justify-center p-8">
        <div className="grid grid-cols-3 gap-4 max-w-5xl w-full">
          {photos.slice(0, 6).map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
              animate={{ 
                opacity: isActive ? 1 : 0, 
                scale: activeIndex === index ? 1.1 : 1,
                rotate: activeIndex === index ? 0 : Math.random() * 6 - 3,
                zIndex: activeIndex === index ? 10 : 1,
              }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className={`relative aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 ${
                activeIndex === index ? "ring-4 ring-pink-400 ring-offset-4 ring-offset-black/50" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={photo}
                alt=""
                className="w-full h-full object-cover"
              />
              
              {/* Shine effect */}
              <motion.div
                animate={{
                  x: activeIndex === index ? ["-100%", "200%"] : "-100%",
                }}
                transition={{
                  duration: 1.5,
                  repeat: activeIndex === index ? Infinity : 0,
                  repeatDelay: 2,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Title */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-16 left-0 right-0 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">
            {title}
          </h2>
        </motion.div>
      )}
      
      {/* Photo counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {photos.slice(0, 6).map((_, index) => (
          <motion.div
            key={index}
            animate={{
              scale: activeIndex === index ? 1.3 : 1,
              backgroundColor: activeIndex === index ? "#ec4899" : "rgba(255,255,255,0.3)",
            }}
            className="w-2 h-2 rounded-full cursor-pointer"
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallerySlide;

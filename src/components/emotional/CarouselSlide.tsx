import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlideProps {
  photos: { url: string; caption?: string }[];
  title?: string;
  isActive: boolean;
}

const CarouselSlide = ({ photos, title, isActive }: CarouselSlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isActive, photos.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % photos.length;
      }
      return (prev - 1 + photos.length) % photos.length;
    });
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      {/* Title */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-0 right-0 text-center z-30"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">
            {title}
          </h2>
        </motion.div>
      )}
      
      {/* Carousel */}
      <div className="relative h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full flex items-center justify-center px-20"
          >
            <div className="relative max-w-4xl w-full">
              {/* Photo frame */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 rounded-3xl opacity-60 blur-xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={photos[currentIndex].url}
                    alt=""
                    className="w-full h-[60vh] object-cover"
                  />
                  
                  {/* Caption overlay */}
                  {photos[currentIndex].caption && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                    >
                      <p className="text-xl text-white text-center italic">
                        {photos[currentIndex].caption}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation arrows */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 z-20 p-3 bg-white/10 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        
        <button
          onClick={() => navigate(1)}
          className="absolute right-4 z-20 p-3 bg-white/10 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
      
      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {photos.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-pink-500" : "w-2 bg-white/30"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSlide;

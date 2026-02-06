import { motion } from "framer-motion";

interface ScatteredPhotosSlideProps {
  photos: string[];
  centerText?: string;
  isActive: boolean;
}

const ScatteredPhotosSlide = ({ photos, centerText, isActive }: ScatteredPhotosSlideProps) => {
  const positions = [
    { x: "-30%", y: "-20%", rotate: -15, scale: 0.7 },
    { x: "25%", y: "-25%", rotate: 12, scale: 0.6 },
    { x: "-35%", y: "15%", rotate: 8, scale: 0.65 },
    { x: "30%", y: "20%", rotate: -10, scale: 0.7 },
    { x: "0%", y: "-35%", rotate: 5, scale: 0.55 },
    { x: "-15%", y: "30%", rotate: -8, scale: 0.6 },
    { x: "20%", y: "-5%", rotate: 15, scale: 0.5 },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-rose-950 via-purple-950 to-black">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Scattered photos */}
      <div className="relative h-full flex items-center justify-center">
        {photos.slice(0, 7).map((photo, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: "0%",
              y: "0%",
              rotate: 0,
            }}
            animate={isActive ? { 
              opacity: 1, 
              scale: positions[index]?.scale || 0.6,
              x: positions[index]?.x || "0%",
              y: positions[index]?.y || "0%",
              rotate: positions[index]?.rotate || 0,
            } : {
              opacity: 0,
              scale: 0,
            }}
            transition={{ 
              delay: index * 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{ 
              scale: (positions[index]?.scale || 0.6) * 1.3,
              rotate: 0,
              zIndex: 50,
            }}
            className="absolute w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
            style={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src={photo}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        ))}
        
        {/* Center text overlay */}
        {centerText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute z-40 text-center px-8 py-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10"
          >
            <p className="text-2xl md:text-4xl font-light text-white italic">
              "{centerText}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScatteredPhotosSlide;

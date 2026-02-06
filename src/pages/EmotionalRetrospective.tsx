import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import new slide components
import PhotoGallerySlide from "@/components/emotional/PhotoGallerySlide";
import ScatteredPhotosSlide from "@/components/emotional/ScatteredPhotosSlide";
import ParallaxPhotoSlide from "@/components/emotional/ParallaxPhotoSlide";
import CounterSlide from "@/components/emotional/CounterSlide";
import SplitScreenSlide from "@/components/emotional/SplitScreenSlide";
import CarouselSlide from "@/components/emotional/CarouselSlide";
import TextRevealSlide from "@/components/emotional/TextRevealSlide";
import EmotionalSlide, { EmotionalSlideData } from "@/components/EmotionalSlide";

type SlideType = 
  | { type: "emotional"; data: EmotionalSlideData }
  | { type: "gallery"; photos: string[]; title?: string }
  | { type: "scattered"; photos: string[]; centerText?: string }
  | { type: "parallax"; backgroundPhoto: string; foregroundPhoto: string; title: string; subtitle?: string }
  | { type: "counter"; stats: { label: string; value: number; suffix?: string; icon: "heart" | "calendar" | "star" | "clock" }[]; title: string }
  | { type: "split"; leftPhoto: string; rightPhoto: string; leftLabel?: string; rightLabel?: string; centerText: string }
  | { type: "carousel"; photos: { url: string; caption?: string }[]; title?: string }
  | { type: "textReveal"; lines: string[]; backgroundGradient?: string };

const EmotionalRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const slideDuration = 12000; // 12 segundos por slide

  const slides: SlideType[] = [
    // 1. Intro dramático com texto revelando
    {
      type: "textReveal",
      lines: [
        "Uma História de Amor",
        "Escrita com momentos",
        "Guardada no coração",
        "Para sempre nossa..."
      ]
    },
    
    // 2. Galeria de fotos animada
    {
      type: "gallery",
      photos: [
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800",
      ],
      title: "Nossos Momentos"
    },
    
    // 3. Split screen - antes e agora
    {
      type: "split",
      leftPhoto: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
      rightPhoto: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800",
      leftLabel: "O Início",
      rightLabel: "Hoje",
      centerText: "O amor só ficou mais forte..."
    },
    
    // 4. Contador animado
    {
      type: "counter",
      title: "Nossa Jornada em Números",
      stats: [
        { label: "Dias Juntos", value: 1825, icon: "calendar" },
        { label: "Beijos", value: 9999, suffix: "+", icon: "heart" },
        { label: "Risos", value: 99999, suffix: "+", icon: "star" },
        { label: "Aventuras", value: 365, icon: "clock" },
      ]
    },
    
    // 5. Fotos espalhadas com citação
    {
      type: "scattered",
      photos: [
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600",
      ],
      centerText: "Cada foto conta uma história"
    },
    
    // 6. Parallax interativo
    {
      type: "parallax",
      backgroundPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920",
      foregroundPhoto: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      title: "Meu Lugar Favorito",
      subtitle: "É ao seu lado, não importa onde"
    },
    
    // 7. Carrossel com legendas
    {
      type: "carousel",
      title: "Momentos Inesquecíveis",
      photos: [
        { url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200", caption: "O dia que tudo mudou" },
        { url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200", caption: "Nosso primeiro passo juntos" },
        { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200", caption: "Risos que nunca vou esquecer" },
        { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200", caption: "Você iluminou minha vida" },
        { url: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1200", caption: "Cada segundo vale a pena" },
      ]
    },
    
    // 8. Texto emocional
    {
      type: "textReveal",
      lines: [
        "Obrigado",
        "Por cada sorriso",
        "Por cada abraço",
        "Por ser você..."
      ],
      backgroundGradient: "bg-gradient-to-br from-pink-950 via-rose-900 to-purple-950"
    },
    
    // 9. Galeria final
    {
      type: "gallery",
      photos: [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800",
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
      ],
      title: "E a história continua..."
    },
    
    // 10. Slide emocional clássico - finale
    {
      type: "emotional",
      data: {
        id: 10,
        type: "finale",
        title: "Te Amo Infinitamente",
        text: "Hoje, amanhã, sempre. Meu coração é seu, para sempre e além.",
        mood: "romantic"
      }
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  // Auto-advance with progress
  useEffect(() => {
    if (isPaused) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (slideDuration / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPaused, nextSlide, slideDuration]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

  const renderSlide = (slide: SlideType, index: number) => {
    const isActive = index === currentSlide;
    
    switch (slide.type) {
      case "gallery":
        return <PhotoGallerySlide photos={slide.photos} title={slide.title} isActive={isActive} />;
      case "scattered":
        return <ScatteredPhotosSlide photos={slide.photos} centerText={slide.centerText} isActive={isActive} />;
      case "parallax":
        return <ParallaxPhotoSlide {...slide} isActive={isActive} />;
      case "counter":
        return <CounterSlide stats={slide.stats} title={slide.title} isActive={isActive} />;
      case "split":
        return <SplitScreenSlide {...slide} isActive={isActive} />;
      case "carousel":
        return <CarouselSlide photos={slide.photos} title={slide.title} isActive={isActive} />;
      case "textReveal":
        return <TextRevealSlide lines={slide.lines} backgroundGradient={slide.backgroundGradient} isActive={isActive} />;
      case "emotional":
        return <EmotionalSlide slide={slide.data} isActive={isActive} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides with AnimatePresence for smooth transitions */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 ${index === currentSlide ? "z-10" : "z-0 pointer-events-none"}`}
          >
            {renderSlide(slide, index)}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex gap-1 p-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden cursor-pointer"
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
              animate={{
                width: index < currentSlide 
                  ? "100%" 
                  : index === currentSlide 
                    ? `${progress}%` 
                    : "0%"
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </motion.button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
        {/* Pause/Play */}
        <motion.button
          onClick={() => setIsPaused(!isPaused)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
          aria-label={isPaused ? "Reproduzir" : "Pausar"}
        >
          {isPaused ? (
            <Play className="w-6 h-6 text-white" />
          ) : (
            <Pause className="w-6 h-6 text-white" />
          )}
        </motion.button>

        {/* Slide Counter */}
        <div className="text-white/70 text-sm font-medium tracking-wider bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Mute/Unmute */}
        <motion.button
          onClick={() => setIsMuted(!isMuted)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white" />
          ) : (
            <Volume2 className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* Touch/Swipe Areas */}
      <div 
        className="absolute inset-y-0 left-0 w-1/4 z-20 cursor-pointer"
        onClick={prevSlide}
      />
      <div 
        className="absolute inset-y-0 right-0 w-1/4 z-20 cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default EmotionalRetrospective;

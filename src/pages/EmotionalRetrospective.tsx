import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import EmotionalSlide, { EmotionalSlideData } from "@/components/EmotionalSlide";

const EmotionalRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const slideDuration = 10000; // 10 segundos por slide

  const slides: EmotionalSlideData[] = [
    {
      id: 1,
      type: "intro",
      title: "Uma História de Amor",
      subtitle: "Cada momento ao seu lado é uma página escrita no livro mais bonito da minha vida...",
      backgroundImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920",
      mood: "romantic"
    },
    {
      id: 2,
      type: "quote",
      quote: "O amor não se vê com os olhos, mas com a alma. E minha alma encontrou a sua no primeiro olhar.",
      quoteAuthor: "Para você, meu amor",
      mood: "romantic"
    },
    {
      id: 3,
      type: "photo",
      backgroundImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1920",
      title: "O Dia Que Tudo Mudou",
      date: "O primeiro encontro",
      text: "Naquele dia, sem saber, eu encontrei meu futuro. Cada sorriso seu iluminou um caminho que eu nem sabia que existia.",
      mood: "nostalgic"
    },
    {
      id: 4,
      type: "milestone",
      backgroundImage: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920",
      title: "Nossos Primeiros Passos",
      date: "O início de tudo",
      text: "Mãos dadas, corações acelerados, e a certeza de que algo mágico estava começando entre nós dois.",
      mood: "joyful"
    },
    {
      id: 5,
      type: "quote",
      quote: "Você me ensinou que amar não é olhar um para o outro, mas olhar juntos na mesma direção.",
      quoteAuthor: "Com todo meu coração",
      mood: "bittersweet"
    },
    {
      id: 6,
      type: "photo",
      backgroundImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920",
      title: "Risos e Lágrimas",
      date: "Momentos que guardamos",
      text: "Cada risada compartilhada, cada lágrima enxugada... você transformou meus dias comuns em memórias extraordinárias.",
      mood: "nostalgic"
    },
    {
      id: 7,
      type: "milestone",
      backgroundImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1920",
      title: "Superamos Juntos",
      date: "Nos momentos difíceis",
      text: "Quando o mundo pareceu desmoronar, sua mão na minha me lembrou: juntos somos mais fortes que qualquer tempestade.",
      mood: "bittersweet"
    },
    {
      id: 8,
      type: "quote",
      quote: "Você é meu lar. Não importa onde eu esteja, quando estou com você, estou em casa.",
      quoteAuthor: "A verdade mais simples",
      mood: "romantic"
    },
    {
      id: 9,
      type: "photo",
      backgroundImage: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1920",
      title: "Pequenos Grandes Momentos",
      date: "O extraordinário no comum",
      text: "Café da manhã juntos, conversas até tarde, abraços sem motivo... são esses detalhes que fazem nossa história única.",
      mood: "joyful"
    },
    {
      id: 10,
      type: "milestone",
      backgroundImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920",
      title: "Crescemos Juntos",
      date: "Uma jornada compartilhada",
      text: "Você me fez uma pessoa melhor. Cada dia ao seu lado é uma oportunidade de evoluir, de amar mais, de ser mais.",
      mood: "nostalgic"
    },
    {
      id: 11,
      type: "quote",
      quote: "Se eu tivesse uma flor para cada vez que você me fez sorrir, teria um jardim infinito.",
      quoteAuthor: "Gratidão eterna",
      mood: "joyful"
    },
    {
      id: 12,
      type: "dedication",
      title: "Obrigado por Existir",
      text: "Por cada segundo, cada minuto, cada hora ao seu lado. Você é o presente mais precioso que a vida me deu.",
      mood: "romantic"
    },
    {
      id: 13,
      type: "finale",
      title: "Te Amo Infinitamente",
      text: "Hoje, amanhã, sempre. Meu coração é seu, para sempre e além.",
      mood: "romantic"
    }
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
  }, [isPaused, nextSlide]);

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

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <EmotionalSlide slide={slide} isActive={index === currentSlide} />
        </div>
      ))}

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
            <div
              className="h-full bg-white rounded-full transition-all duration-100"
              style={{
                width: index < currentSlide 
                  ? "100%" 
                  : index === currentSlide 
                    ? `${progress}%` 
                    : "0%"
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 group"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
        {/* Pause/Play */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 group"
          aria-label={isPaused ? "Reproduzir" : "Pausar"}
        >
          {isPaused ? (
            <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Slide Counter */}
        <div className="text-white/70 text-sm font-medium tracking-wider">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Mute/Unmute */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 group"
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-white" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
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

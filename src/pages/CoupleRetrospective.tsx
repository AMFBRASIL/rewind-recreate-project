
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Heart, Play, Pause, Star, Moon } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface SlideData {
  id: number;
  type: 'image' | 'video';
  backgroundImage?: string;
  videoUrl?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  icon?: 'heart' | 'star' | 'moon';
}

const CoupleRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides: SlideData[] = [
    {
      id: 1,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'O Início de Tudo',
      subtitle: 'Nosso Primeiro Encontro',
      description: 'Aquele momento mágico quando nossos olhares se cruzaram pela primeira vez. Nenhum de nós sabia que ali começaria a nossa história de amor.',
      date: '14 de Fevereiro, 2023',
      icon: 'heart'
    },
    {
      id: 2,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
      title: 'Nosso Signo',
      subtitle: 'Aquário - O Casal dos Sonhos',
      description: 'Começamos a namorar sob o signo de Aquário, conhecido pela originalidade e conexão única. Somos um casal que pensa fora da caixa e constrói um amor autêntico.',
      date: '20 de Janeiro - 18 de Fevereiro',
      icon: 'star'
    },
    {
      id: 3,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Nossa Lua',
      subtitle: 'Lua Crescente - Crescendo Juntos',
      description: 'Nossa história começou durante a lua crescente, simbolizando crescimento, esperança e novos começos. Como nossa lua, nosso amor só cresce.',
      date: '14 de Fevereiro, 2023',
      icon: 'moon'
    },
    {
      id: 4,
      type: 'video',
      videoUrl: 'https://videos.unsplash.com/video-1533060588340-a3e30e3cac36',
      title: 'Momentos Especiais',
      subtitle: 'Nossa Primeira Viagem',
      description: 'Descobrindo novos lugares juntos, criando memórias que durarão para sempre. Cada momento ao seu lado é uma nova aventura.',
      date: '15 de Junho, 2023',
      icon: 'heart'
    },
    {
      id: 5,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      title: 'Nosso Primeiro Beijo',
      subtitle: 'O Momento Que Mudou Tudo',
      description: 'Entre flores e sorrisos, nosso primeiro beijo selou nosso destino. Naquele instante, soubemos que éramos para sempre.',
      date: '20 de Fevereiro, 2023',
      icon: 'heart'
    },
    {
      id: 6,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      title: 'Construindo Nosso Lar',
      subtitle: 'Nossa Casa dos Sonhos',
      description: 'Transformando uma casa em nosso lar, onde cada canto tem uma história nossa. Aqui começamos a construir nosso futuro juntos.',
      date: '20 de Setembro, 2023',
      icon: 'heart'
    },
    {
      id: 7,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      title: 'Nossa Família Cresceu',
      subtitle: 'Adotamos Nosso Gatinho',
      description: 'Nosso amor se expandiu para incluir mais um membro da família. Agora somos três corações batendo como um só.',
      date: '10 de Dezembro, 2023',
      icon: 'heart'
    },
    {
      id: 8,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1470375262327-ee60e5aa9a4b',
      title: 'Nosso Primeiro Ano',
      subtitle: 'Celebrando Cada Momento',
      description: 'Um ano repleto de descobertas, risadas, lágrimas de alegria e muito amor. Cada dia ao seu lado é uma nova página da nossa história.',
      date: '14 de Fevereiro, 2024',
      icon: 'heart'
    },
    {
      id: 9,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      title: 'Para Sempre',
      subtitle: 'Nosso Futuro Juntos',
      description: 'Como ondas do mar que sempre retornam à praia, nosso amor sempre encontra o caminho de volta um para o outro.',
      date: 'Todos os Dias',
      icon: 'heart'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowUp') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlideData = slides[currentSlide];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />;
      case 'moon':
        return <Moon className="w-8 h-8 text-blue-300 mx-auto mb-4 animate-pulse" />;
      default:
        return <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4 animate-pulse" />;
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        {currentSlideData.type === 'image' ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url(${currentSlideData.backgroundImage})`
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-black">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={currentSlideData.videoUrl} type="video/mp4" />
            </video>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-pink-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-8 max-w-4xl">
          <div className="mb-4">
            {getIcon(currentSlideData.icon || 'heart')}
            <p className="text-pink-300 text-lg font-medium mb-2">{currentSlideData.date}</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent animate-fade-in">
            {currentSlideData.title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-200 animate-fade-in">
            {currentSlideData.subtitle}
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
            {currentSlideData.description}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-white"
            disabled={currentSlide === 0}
          >
            <ChevronUp size={24} />
          </button>
          
          <div className="flex flex-col space-y-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-pink-400 scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 text-white"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-md rounded-full px-6 py-3">
          <span className="text-white text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')}
          </span>
          <div className="w-32 h-1 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
          <span className="text-white text-sm font-medium">
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Scroll Hint */}
      {currentSlide === 0 && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Deslize para explorar</span>
            <ChevronDown size={20} />
          </div>
        </div>
      )}

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
            size={8 + Math.random() * 12}
          />
        ))}
      </div>
    </div>
  );
};

export default CoupleRetrospective;

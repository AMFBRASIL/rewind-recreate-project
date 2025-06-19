
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Gift, TreePine, Star, Snowflake, Bell, Calendar, Music, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SlideBackground from "@/components/SlideBackground";
import SlideContent from "@/components/SlideContent";
import SlideNavigation from "@/components/SlideNavigation";
import { SlideData } from "@/types/slideTypes";

const ChristmasRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [christmasCountdown, setChristmasCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Dados dos slides específicos para Papai Noel/Natal
  const christmasSlides: SlideData[] = [
    {
      id: 1,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be',
      title: 'Ho Ho Ho!',
      subtitle: 'Mensagem Especial do Papai Noel',
      description: 'Uma retrospectiva mágica cheia de alegria natalina e momentos especiais para você!',
      date: 'Dezembro 2024',
      icon: 'gift'
    },
    {
      id: 2,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5',
      title: 'Contagem Regressiva',
      subtitle: 'Para o Natal Mágico',
      description: 'Cada segundo nos aproxima da noite mais mágica do ano!',
      date: 'Preparando a Magia',
      icon: 'calendar'
    },
    {
      id: 3,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0',
      title: 'Sua Lista de Desejos',
      subtitle: 'O que você pediu este ano?',
      description: 'Cada desejo é especial e o Papai Noel está trabalhando duro para realizá-los!',
      date: 'Desejos de 2024',
      icon: 'star'
    },
    {
      id: 4,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4',
      title: 'Música Natalina',
      subtitle: 'Sons da Temporada',
      description: 'Deixe a magia do Natal envolver seu coração com essas melodias especiais!',
      date: 'Trilha Sonora Natalina',
      icon: 'music'
    },
    {
      id: 5,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1514303059159-142462096d42',
      title: 'Memórias Natalinas',
      subtitle: 'Seus Momentos Especiais',
      description: 'Cada foto conta uma história de alegria, amor e celebração natalina!',
      date: 'Galeria de Memórias',
      icon: 'image'
    },
    {
      id: 6,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be',
      title: 'Feliz Natal!',
      subtitle: 'Com Amor, Papai Noel',
      description: 'Que este Natal traga muita paz, amor e alegria para você e sua família. Ho Ho Ho!',
      date: '25 de Dezembro',
      icon: 'heart'
    }
  ];

  // Contagem regressiva para o Natal
  useEffect(() => {
    const updateChristmasCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let christmasDate = new Date(currentYear, 11, 25); // 25 de dezembro
      
      // Se já passou o Natal deste ano, contar para o próximo
      if (now > christmasDate) {
        christmasDate = new Date(currentYear + 1, 11, 25);
      }
      
      const difference = christmasDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setChristmasCountdown({ days, hours, minutes, seconds });
    };
    
    updateChristmasCountdown();
    const interval = setInterval(updateChristmasCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentSlide < christmasSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Efeito de neve
  const SnowEffect = () => (
    <div className="fixed inset-0 pointer-events-none z-30">
      {[...Array(50)].map((_, i) => (
        <Snowflake
          key={i}
          className="absolute text-white opacity-70 animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
          size={8 + Math.random() * 16}
        />
      ))}
    </div>
  );

  return (
    <div className="h-screen overflow-hidden relative bg-gradient-to-br from-red-900 via-green-900 to-red-800">
      {/* Efeito de neve */}
      <SnowEffect />
      
      {/* Background do slide atual */}
      <SlideBackground slide={christmasSlides[currentSlide]} />
      
      {/* Conteúdo principal */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-8 max-w-4xl">
          {/* Ícones natalinos */}
          <div className="mb-4 flex justify-center space-x-4">
            <Gift className="w-8 h-8 text-red-400 animate-pulse" />
            <TreePine className="w-8 h-8 text-green-400 animate-pulse" />
            <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
            <Bell className="w-8 h-8 text-gold-400 animate-pulse" />
          </div>
          
          <p className="text-red-300 text-lg font-medium mb-2">{christmasSlides[currentSlide].date}</p>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-red-300 via-green-300 to-gold-300 bg-clip-text text-transparent animate-fade-in">
            {christmasSlides[currentSlide].title}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-green-200 animate-fade-in">
            {christmasSlides[currentSlide].subtitle}
          </h2>
          
          {/* Contagem regressiva especial para o slide 2 */}
          {currentSlide === 1 && (
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
                <div className="bg-gradient-to-br from-red-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-red-300/30">
                  <div className="text-3xl md:text-4xl font-bold text-red-300 mb-2">
                    {christmasCountdown.days}
                  </div>
                  <div className="text-sm text-gray-300">Dias</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-green-300/30" style={{ animationDelay: '200ms' }}>
                  <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">
                    {christmasCountdown.hours}
                  </div>
                  <div className="text-sm text-gray-300">Horas</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-yellow-300/30" style={{ animationDelay: '400ms' }}>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                    {christmasCountdown.minutes}
                  </div>
                  <div className="text-sm text-gray-300">Minutos</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-blue-300/30" style={{ animationDelay: '600ms' }}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                    {christmasCountdown.seconds}
                  </div>
                  <div className="text-sm text-gray-300">Segundos</div>
                </div>
              </div>
            </div>
          )}

          {/* Player de música natalina para o slide 4 */}
          {currentSlide === 3 && (
            <div className="mb-8">
              <div className="max-w-md mx-auto bg-gradient-to-br from-red-500/20 to-green-500/20 backdrop-blur-lg rounded-2xl p-6 border border-red-300/30">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">🎄 Música Natalina</h3>
                  <p className="text-green-300 text-sm">Sons mágicos do Natal</p>
                </div>
                
                <div className="bg-gradient-to-r from-red-500/20 to-green-600/20 rounded-xl p-4 mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-green-600 rounded-lg flex items-center justify-center">
                      <TreePine className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Silent Night</h4>
                      <p className="text-green-300 text-sm">Canção Natalina Clássica</p>
                    </div>
                  </div>
                  
                  <div className="relative bg-white/20 rounded-full h-2 mb-2">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-green-500 rounded-full w-1/3 transition-all duration-300"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-green-300">
                    <span>1:20</span>
                    <span>4:15</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <Button className="bg-gradient-to-r from-red-500 to-green-600 hover:from-red-600 hover:to-green-700 text-white">
                    <Music className="w-4 h-4 mr-2" />
                    Tocar
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Galeria de fotos natalinas para o slide 5 */}
          {currentSlide === 4 && (
            <div className="mb-8">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 max-w-3xl mx-auto mb-6">
                {[
                  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0',
                  'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4',
                  'https://images.unsplash.com/photo-1511268559489-34b624fbfcf5',
                  'https://images.unsplash.com/photo-1482517967863-00e15c9b44be',
                  'https://images.unsplash.com/photo-1514303059159-142462096d42',
                  'https://images.unsplash.com/photo-1471115853179-bb1d604434e0',
                  'https://images.unsplash.com/photo-1500673922987-e212871fec22',
                  'https://images.unsplash.com/photo-1512389142860-9c449e58a543'
                ].map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-xl overflow-hidden transform hover:scale-110 transition-all duration-300 animate-fade-in border-2 border-gradient-to-r from-red-400 to-green-400"
                    style={{ 
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <img
                      src={photo}
                      alt={`Memória Natalina ${index + 1}`}
                      className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                      <span className="text-white text-xs font-semibold">🎄</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
            {christmasSlides[currentSlide].description}
          </p>
        </div>
      </div>
      
      {/* Navegação */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={christmasSlides.length}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onGoToSlide={goToSlide}
      />
      
      {/* Indicadores de progresso no topo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {christmasSlides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-400 scale-125'
                  : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChristmasRetrospective;

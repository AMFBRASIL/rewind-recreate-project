
import { useState, useEffect } from "react";
import SlideBackground from "../components/SlideBackground";
import SlideContent from "../components/SlideContent";
import SlideNavigation from "../components/SlideNavigation";
import SlideProgressBar from "../components/SlideProgressBar";
import { SlideData } from "../types/slideTypes";

const ParentsRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos slides específicos para pais e mães
  const slidesData: SlideData[] = [
    {
      id: 1,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1511895426328-dc8714ebb3cd',
      title: 'Gratidão Eterna',
      subtitle: 'Por tudo que vocês fizeram por mim',
      description: 'Cada sacrifício, cada palavra de apoio, cada momento de cuidado. Vocês são os pilares da minha vida e nunca conseguirei expressar toda a gratidão que sinto.',
      date: 'Para sempre no meu coração',
      icon: 'heart'
    },
    {
      id: 2,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1609220136736-443140cffec6',
      title: 'Primeiros Passos',
      subtitle: 'Vocês estavam lá desde o início',
      description: 'Desde os primeiros passos até as primeiras palavras, vocês foram minha segurança, meu porto seguro. Cada conquista minha é também de vocês.',
      date: 'Desde sempre',
      icon: 'star'
    },
    {
      id: 3,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
      title: 'Lições de Vida',
      subtitle: 'Os ensinamentos que levarei para sempre',
      description: 'Vocês me ensinaram valores, me mostraram o certo e o errado, me deram as ferramentas para enfrentar o mundo. Sou quem sou graças a vocês.',
      date: 'Aprendizados eternos',
      icon: 'star'
    },
    {
      id: 4,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1576071215297-be0bb7d30b2b',
      title: 'Momentos Especiais',
      subtitle: 'Memórias que guardo no coração',
      description: 'Cada abraço, cada conversa, cada risada compartilhada. São essas memórias que me dão força e me lembram do amor incondicional que vocês sempre me deram.',
      date: 'Memórias preciosas',
      icon: 'image'
    },
    {
      id: 5,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      title: 'Sacrifícios Reconhecidos',
      subtitle: 'Tudo que vocês abriram mão por mim',
      description: 'Sei que vocês abriram mão de muitos sonhos para realizar os meus. Cada sacrifício foi um ato de amor puro, e hoje entendo o tamanho desse amor.',
      date: 'Com reconhecimento',
      icon: 'heart'
    },
    {
      id: 6,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      title: 'Força e Apoio',
      subtitle: 'Sempre estiveram ao meu lado',
      description: 'Nos momentos difíceis, vocês foram minha força. Nas vitórias, foram minha alegria. Em cada fase da vida, sempre posso contar com vocês.',
      date: 'Apoio incondicional',
      icon: 'heart'
    },
    {
      id: 7,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e8b61522',
      title: 'Exemplo de Vida',
      subtitle: 'Vocês são meu maior exemplo',
      description: 'Vejo em vocês a força, a determinação, o amor pela família. Espero um dia ser metade dos pais que vocês foram para mim.',
      date: 'Meu exemplo',
      icon: 'star'
    },
    {
      id: 8,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      title: 'Amor Infinito',
      subtitle: 'O amor que nunca acaba',
      description: 'Por mais que eu cresça, por mais longe que eu vá, o amor de vocês me acompanha sempre. É um amor que não tem fim, que não tem condições.',
      date: 'Para toda vida',
      icon: 'heart'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <SlideBackground slide={slidesData[currentSlide]} />
      
      {/* Content */}
      <SlideContent slide={slidesData[currentSlide]} />
      
      {/* Navigation */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onGoToSlide={goToSlide}
      />
      
      {/* Progress Bar */}
      <SlideProgressBar
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
      />
    </div>
  );
};

export default ParentsRetrospective;

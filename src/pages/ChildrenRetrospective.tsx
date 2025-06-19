
import { useState, useEffect } from "react";
import SlideBackground from "../components/SlideBackground";
import SlideContent from "../components/SlideContent";
import SlideNavigation from "../components/SlideNavigation";
import SlideProgressBar from "../components/SlideProgressBar";
import { SlideData } from "../types/slideTypes";

const ChildrenRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos slides específicos para crianças
  const slidesData: SlideData[] = [
    {
      id: 1,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
      title: 'Meu Mundo Mágico',
      subtitle: 'Onde tudo é possível!',
      description: 'Cada dia é uma nova aventura cheia de descobertas, risos e momentos especiais. No meu mundo, os sonhos se tornam realidade e a imaginação não tem limites!',
      date: 'Sempre brincando',
      icon: 'star'
    },
    {
      id: 2,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643',
      title: 'Brincadeiras Favoritas',
      subtitle: 'Diversão sem fim!',
      description: 'Esconde-esconde, pega-pega, desenhar, brincar de boneca, jogar bola... Cada brincadeira é um momento de pura alegria e diversão com os amigos e família!',
      date: 'Hora da diversão',
      icon: 'heart'
    },
    {
      id: 3,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
      title: 'Contador da Idade',
      subtitle: 'Crescendo a cada dia',
      description: 'Já vivi tantos dias incríveis! Cada aniversário é uma festa, cada mês que passa é cheio de novas experiências e aprendizados. Estou crescendo e descobrindo o mundo!',
      date: 'Crescendo forte',
      icon: 'clock'
    },
    {
      id: 4,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a',
      title: 'Mural de Memórias',
      subtitle: 'Momentos preciosos guardados',
      description: 'Fotos das minhas aventuras, desenhos que fiz, momentos especiais em família... Cada lembrança é um tesouro que guardo no coração!',
      date: 'Memórias especiais',
      icon: 'image'
    },
    {
      id: 5,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
      title: 'Momentos com Papai e Mamãe',
      subtitle: 'Amor infinito',
      description: 'Os abraços quentinhos, as histórias na hora de dormir, os passeios no parque, as risadas juntos... Estes são os momentos mais especiais da minha vida!',
      date: 'Com amor',
      icon: 'heart'
    },
    {
      id: 6,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2',
      title: 'Aprendendo Sempre',
      subtitle: 'Descobrindo o mundo',
      description: 'Cada dia aprendo algo novo! As cores, os números, as letras, como as plantas crescem, por que o céu é azul... Curiosidade é minha superpoder!',
      date: 'Sempre curioso',
      icon: 'star'
    },
    {
      id: 7,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e',
      title: 'Amigos Especiais',
      subtitle: 'Diversão em dobro!',
      description: 'Brincar com os amigos é ainda mais divertido! Compartilhamos risos, aventuras, segredos e criamos as melhores memórias juntos. Amizade é mágica!',
      date: 'Amigos para sempre',
      icon: 'heart'
    },
    {
      id: 8,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      title: 'Sonhos Coloridos',
      subtitle: 'O futuro é brilhante',
      description: 'Quando crescer, quero ser astronauta, médica, artista... ou talvez tudo ao mesmo tempo! Meus sonhos são coloridos como um arco-íris e grandes como o universo!',
      date: 'Sonhando alto',
      icon: 'star'
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

export default ChildrenRetrospective;

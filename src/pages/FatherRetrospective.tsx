import { useState, useEffect } from "react";
import SlideBackground from "../components/SlideBackground";
import SlideContent from "../components/SlideContent";
import SlideNavigation from "../components/SlideNavigation";
import SlideProgressBar from "../components/SlideProgressBar";
import { SlideData } from "../types/slideTypes";

const FatherRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dados dos slides específicos para pai (criado pelo filho)
  const slidesData: SlideData[] = [
    {
      id: 1,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      title: 'Meu Herói',
      subtitle: 'Para o melhor pai do mundo',
      description: 'Desde pequeno você sempre foi meu super-herói. Aquele que me protegia, me ensinava e me fazia rir. Esta retrospectiva é minha forma de dizer: obrigado por ser o pai mais incrível!',
      date: 'Com todo meu amor',
      icon: 'heart'
    },
    {
      id: 2,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1609220136736-443140cffec6',
      title: 'Nossa Jornada Juntos',
      subtitle: 'Do meu primeiro passo aos dias de hoje',
      description: 'Você estava lá quando eu dei meus primeiros passos, disse minhas primeiras palavras, e ainda está aqui para cada conquista. Nossa jornada juntos é cheia de amor, risadas e aventuras!',
      date: 'Desde sempre',
      icon: 'star'
    },
    {
      id: 3,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
      title: 'Nossos Códigos Secretos',
      subtitle: 'Só nós dois entendemos',
      description: 'Aquele piscar de olho quando a mamãe não está vendo, nossas piadas internas, nossos apelidos bobos... Esses são nossos códigos secretos que fazem nossa conexão ser única!',
      date: 'Só entre nós',
      icon: 'heart'
    },
    {
      id: 4,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      title: 'Seu Signo: Leão ♌',
      subtitle: 'Forte e corajoso como um verdadeiro rei',
      description: 'Nascido para liderar e proteger, você tem toda a força e generosidade de um Leão. Sempre nos defendendo e nos dando coragem para enfrentar qualquer desafio!',
      date: '23 Jul - 22 Ago',
      icon: 'star'
    },
    {
      id: 5,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e8b61522',
      title: 'Lua em Sagitário 🏹',
      subtitle: 'Aventureiro por natureza',
      description: 'Sua lua em Sagitário explica essa vontade de explorar o mundo comigo! Sempre planejando nossa próxima aventura, me ensinando que a vida é uma grande jornada para ser descoberta.',
      date: 'Espírito livre',
      icon: 'moon'
    },
    {
      id: 6,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1576071215297-be0bb7d30b2b',
      title: 'Nossos Hobbies',
      subtitle: 'Momentos que mais amo',
      description: 'Futebol no quintal, videogame até tarde, aquelas pescarias que mais conversamos que pescamos... Cada hobby compartilhado é um tesouro na nossa coleção de memórias!',
      date: 'Diversão garantida',
      icon: 'star'
    },
    {
      id: 7,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1511895426328-dc8714ebb3cd',
      title: 'Fotos dos Nossos Momentos',
      subtitle: 'Cada sorriso guardado',
      description: 'Aquelas fotos bobas que tiramos, as caretas, os abraços apertados... Cada foto conta uma história de amor entre pai e filho que vai durar para sempre!',
      date: 'Memórias eternas',
      icon: 'image'
    },
    {
      id: 8,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      title: 'Momentos Especiais',
      subtitle: 'Que guardarei para sempre',
      description: 'Nossas conversas sérias sobre a vida, aquele dia que me ensinou a andar de bicicleta, quando me consolou após minha primeira desilusão... Momentos que definiram quem eu sou hoje.',
      date: 'No meu coração',
      icon: 'heart'
    },
    {
      id: 9,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      title: 'Memórias Engraçadas',
      subtitle: 'Como você me faz rir!',
      description: 'Suas piadas ruins que só eu acho graça, quando tentou cozinhar e quase queimou a casa, aquela vez que dançou igual criança... Você sempre sabe como alegrar meu dia!',
      date: 'Risadas eternas',
      icon: 'star'
    },
    {
      id: 10,
      type: 'image',
      backgroundImage: 'https://images.unsplash.com/photo-1609220136736-443140cffec6',
      title: 'Meu Eterno Exemplo',
      subtitle: 'Obrigado por tudo, pai',
      description: 'Você me ensinou a ser forte, gentil, corajoso e amoroso. Cada dia ao seu lado é uma lição de vida. Sou grato por ter você como pai e melhor amigo. Te amo infinitamente!',
      date: 'Para sempre',
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

export default FatherRetrospective;
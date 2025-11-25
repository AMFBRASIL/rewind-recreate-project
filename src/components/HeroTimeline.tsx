import { Zap, Star, Heart, Sparkles, Trophy, Crown, Shield, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  images: string[];
  icon: 'zap' | 'star' | 'heart' | 'sparkles' | 'trophy' | 'crown' | 'shield' | 'rocket';
}

const HeroTimeline = () => {
  const events: TimelineEvent[] = [
    {
      date: "Capítulo 1",
      title: "O Nascimento do Herói",
      description: "Onde tudo começou! Um pequeno super-herói chegou ao mundo trazendo alegria e superpoderes especiais.",
      images: [
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
        "https://images.unsplash.com/photo-1519689680058-324335c77eba",
        "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7"
      ],
      icon: "star"
    },
    {
      date: "Capítulo 2",
      title: "Primeiros Poderes",
      description: "Descobrindo habilidades incríveis: rir, brincar e conquistar corações com apenas um sorriso!",
      images: [
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb",
        "https://images.unsplash.com/photo-1548865573-1cc845710a8f"
      ],
      icon: "zap"
    },
    {
      date: "Capítulo 3",
      title: "Academia de Heróis",
      description: "Treinamento intensivo! Aprendendo novas habilidades todos os dias na escola da vida.",
      images: [
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
        "https://images.unsplash.com/photo-1472162072942-cd5147eb3902",
        "https://images.unsplash.com/photo-1560421683-6856ea585c78"
      ],
      icon: "shield"
    },
    {
      date: "Capítulo 4",
      title: "Aliados Especiais",
      description: "Todo herói precisa de amigos! Formando uma equipe imbatível de aventureiros.",
      images: [
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
        "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc",
        "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c"
      ],
      icon: "heart"
    },
    {
      date: "Capítulo 5",
      title: "Conquistas Épicas",
      description: "Cada desafio superado, cada vitória celebrada. Colecionando troféus da vida!",
      images: [
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
        "https://images.unsplash.com/photo-1551379782-d0f89ccbc2b6",
        "https://images.unsplash.com/photo-1540479859555-17af45c78602"
      ],
      icon: "trophy"
    },
    {
      date: "Capítulo 6",
      title: "Aventuras Infinitas",
      description: "A jornada continua! Novos mundos para explorar, novos desafios para superar.",
      images: [
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        "https://images.unsplash.com/photo-1530319067432-f2a729c03db5"
      ],
      icon: "rocket"
    }
  ];

  const getIcon = (iconType: string) => {
    const iconProps = { className: "w-6 h-6 text-white" };
    switch (iconType) {
      case 'zap': return <Zap {...iconProps} />;
      case 'star': return <Star {...iconProps} />;
      case 'heart': return <Heart {...iconProps} />;
      case 'sparkles': return <Sparkles {...iconProps} />;
      case 'trophy': return <Trophy {...iconProps} />;
      case 'crown': return <Crown {...iconProps} />;
      case 'shield': return <Shield {...iconProps} />;
      case 'rocket': return <Rocket {...iconProps} />;
      default: return <Star {...iconProps} />;
    }
  };

  const TimelineEventCarousel = ({ images, title }: { images: string[], title: string }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Troca de foto a cada 3 segundos

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative overflow-hidden rounded-2xl border-4 border-yellow-400/40 hover:border-yellow-400/80 transition-all duration-500 group-hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30">
        {/* Carrossel de imagens */}
        <div className="relative h-64 overflow-hidden">
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${title} - ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                idx === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>

        {/* Indicadores de foto */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentImageIndex 
                  ? 'w-8 bg-yellow-400' 
                  : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Badge de contagem */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1 rounded-full text-sm z-10 flex items-center space-x-1">
          <Star className="w-4 h-4 fill-current" />
          <span>{currentImageIndex + 1}/{images.length}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="text-white font-bold">Memória Épica {currentImageIndex + 1}</span>
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          A Saga do Super-Herói
        </h2>
        <p className="text-xl text-gray-200">Uma jornada épica de aventuras e conquistas</p>
      </div>

      <div className="relative">
        {/* Linha central do timeline */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 opacity-30"></div>

        {events.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col group animate-fade-in`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Conteúdo */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center`}>
              <div className="bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-xl rounded-2xl p-6 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-sm mb-3">
                  {event.date}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-3 group-hover:text-yellow-200 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Ícone central */}
            <div className="relative z-10 flex items-center justify-center my-4 md:my-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 animate-pulse group-hover:scale-125 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  {getIcon(event.icon)}
                </div>
              </div>
              {/* Pulso de energia */}
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-500/10 blur-xl"></div>
            </div>

            {/* Carrossel de Imagens */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mt-4 md:mt-0`}>
              <TimelineEventCarousel images={event.images} title={event.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Badge final */}
      <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1200ms' }}>
        <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-full">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-full px-8 py-4">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                A Aventura Continua...
              </span>
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTimeline;

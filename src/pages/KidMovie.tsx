import { useState, useEffect, useRef } from "react";
import { ChevronDown, Star, Heart, Users, Sparkles, Camera, Book, Smile, PartyPopper, Zap, CircleDot } from "lucide-react";
import FloatingKidsElements from "@/components/FloatingKidsElements";

interface TimelineStory {
  id: number;
  section: 'hero' | 'personal' | 'friends' | 'adventures' | 'suspense' | 'party';
  title: string;
  subtitle: string;
  images: string[];
  description: string;
  emotion?: string;
  year?: string;
  timestamp?: string;
}

const KidMovie = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dados da criança - em produção viriam do backend
  const timelineStories: TimelineStory[] = [
    {
      id: 0,
      section: 'hero',
      title: 'Lucas',
      subtitle: 'Uma História Incrível',
      images: ['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9'],
      description: 'Prepare-se para conhecer momentos especiais de uma jornada inesquecível!',
      emotion: 'exciting'
    },
    {
      id: 1,
      section: 'personal',
      title: 'Meus Primeiros Passos',
      subtitle: 'O Começo de Tudo',
      images: [
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643',
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
        'https://images.unsplash.com/photo-1519340333755-56e9c1d4eb46'
      ],
      description: 'Cada dia era uma nova descoberta, cada sorriso uma conquista especial!',
      year: '2020',
      emotion: 'touching'
    },
    {
      id: 2,
      section: 'personal',
      title: 'Aprendendo Coisas Novas',
      subtitle: 'Crescendo e Explorando',
      images: [
        'https://images.unsplash.com/photo-1587616211892-06957b6d8b8d',
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
        'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1'
      ],
      description: 'Desenhando, brincando e criando memórias que duram para sempre!',
      year: '2021',
      emotion: 'happy'
    },
    {
      id: 3,
      section: 'personal',
      title: 'Momentos Especiais em Família',
      subtitle: 'Amor Sem Limites',
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
        'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a',
        'https://images.unsplash.com/photo-1560155477-f0dde1468f87'
      ],
      description: 'O amor da família é o maior tesouro que existe!',
      year: '2022',
      emotion: 'touching'
    },
    {
      id: 4,
      section: 'friends',
      title: 'Conhecendo Novos Amigos',
      subtitle: 'Amizades que Transformam',
      images: [
        'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643'
      ],
      description: 'Novos rostos, novas risadas, novos companheiros de aventura!',
      year: '2023',
      emotion: 'happy'
    },
    {
      id: 5,
      section: 'friends',
      title: 'Brincadeiras Inesquecíveis',
      subtitle: 'Diversão com a Galera',
      images: [
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
        'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19'
      ],
      description: 'Cada brincadeira, cada gargalhada, cada momento juntos!',
      year: '2023',
      emotion: 'exciting'
    },
    {
      id: 6,
      section: 'adventures',
      title: 'Grandes Aventuras',
      subtitle: 'Explorando o Mundo',
      images: [
        'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a',
        'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
        'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2'
      ],
      description: 'Viagens incríveis, lugares mágicos e memórias para toda a vida!',
      year: '2024',
      emotion: 'exciting'
    },
    {
      id: 7,
      section: 'adventures',
      title: 'Conquistas e Vitórias',
      subtitle: 'Cada Dia Mais Forte',
      images: [
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643',
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
        'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a'
      ],
      description: 'Superando desafios e celebrando cada conquista com alegria!',
      year: '2024',
      emotion: 'happy'
    },
    {
      id: 8,
      section: 'adventures',
      title: 'E a História Continua...',
      subtitle: 'Novos Capítulos Chegando',
      images: [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
        'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1'
      ],
      description: 'O melhor ainda está por vir! Esta jornada incrível está apenas começando!',
      year: '2025',
      emotion: 'touching'
    },
    {
      id: 9,
      section: 'suspense',
      title: 'Estão Preparados?',
      subtitle: 'Algo Incrível Está Chegando...',
      images: [],
      description: 'O momento mais especial está prestes a acontecer!'
    },
    {
      id: 10,
      section: 'party',
      title: 'HOJE! Minha Festa com os Amigos! 🎉',
      subtitle: 'Momentos Ao Vivo da Festa',
      images: [
        'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
        'https://images.unsplash.com/photo-1464047736614-af63643285bf',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
        'https://images.unsplash.com/photo-1581391528803-54df1f6e4e92',
        'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
        'https://images.unsplash.com/photo-1587616211892-06957b6d8b8d',
        'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643'
      ],
      description: 'Fotos incríveis tiradas agora pelos amigos e familiares durante a festa!',
      timestamp: 'Agora mesmo'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = containerRef.current.scrollTop;
        const height = containerRef.current.scrollHeight - containerRef.current.clientHeight;
        const progress = (scrolled / height) * 100;
        setScrollProgress(progress);
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'hero':
        return 'from-purple-600 via-pink-500 to-red-500';
      case 'personal':
        return 'from-blue-500 via-purple-500 to-pink-500';
      case 'friends':
        return 'from-green-500 via-teal-500 to-blue-500';
      case 'adventures':
        return 'from-orange-500 via-red-500 to-pink-500';
      case 'party':
        return 'from-yellow-400 via-pink-500 to-purple-600';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'personal':
        return Heart;
      case 'friends':
        return Users;
      case 'adventures':
        return PartyPopper;
      case 'party':
        return Camera;
      default:
        return Star;
    }
  };

  const renderHeroSection = (story: TimelineStory) => (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 opacity-50"></div>
      
      <div className="relative z-10 text-center animate-fade-in">
        <div className="mb-8">
          <div className="relative inline-block">
            <img 
              src={story.images[0]}
              alt={story.title}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-white/30 shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 animate-pulse">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-4 drop-shadow-2xl">
          {story.title}
        </h1>
        
        <p className="text-3xl md:text-4xl bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-bold mb-6">
          {story.subtitle}
        </p>

        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
          {story.description}
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 flex items-center space-x-2">
            <Camera className="w-5 h-5 text-pink-300" />
            <span className="text-white font-semibold">Meus Momentos</span>
          </div>
          <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 flex items-center space-x-2">
            <Book className="w-5 h-5 text-blue-300" />
            <span className="text-white font-semibold">Minha História</span>
          </div>
        </div>

        <div className="animate-bounce mt-16">
          <ChevronDown className="w-12 h-12 text-white/70 mx-auto" />
          <p className="text-white/70 text-sm mt-2">Role para começar</p>
        </div>
      </div>
    </div>
  );

  const renderStorySection = (story: TimelineStory, index: number) => {
    const isLeft = index % 2 === 0;
    const SectionIcon = getSectionIcon(story.section);
    
    return (
      <div className="min-h-screen flex items-center justify-center py-20 px-4">
        <div 
          className={`max-w-7xl w-full flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-fade-in`}
        >
          {/* Galeria de fotos lado esquerdo/direito */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Foto principal */}
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-xl"></div>
                <img 
                  src={story.images[0]}
                  alt={story.title}
                  className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl border-4 border-white/30"
                />
                {story.year && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full text-white font-bold">
                    {story.year}
                  </div>
                )}
              </div>

              {/* Fotos secundárias */}
              {story.images.length > 1 && (
                <div className="flex gap-4 mt-4">
                  {story.images.slice(1, 3).map((img, idx) => (
                    <div 
                      key={idx}
                      className="flex-1 relative transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    >
                      <img 
                        src={img}
                        alt={`${story.title} ${idx + 2}`}
                        className="w-full aspect-square object-cover rounded-2xl shadow-xl border-2 border-white/20"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Conteúdo texto lado direito/esquerdo */}
          <div className="flex-1 space-y-6">
            <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${getSectionColor(story.section)} px-6 py-3 rounded-full`}>
              <SectionIcon className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                {story.section === 'personal' && 'Minha História'}
                {story.section === 'friends' && 'Meus Amigos'}
                {story.section === 'adventures' && 'Aventuras'}
              </span>
            </div>

            <h2 className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${getSectionColor(story.section)} bg-clip-text text-transparent leading-tight`}>
              {story.title}
            </h2>

            <h3 className="text-2xl md:text-3xl text-white/80 font-bold">
              {story.subtitle}
            </h3>

            <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
              {story.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                <span className="text-white/80 text-sm">💫 Especial</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                <span className="text-white/80 text-sm">❤️ Inesquecível</span>
              </div>
              <div className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                <span className="text-white/80 text-sm">⭐ Único</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSuspenseSection = (story: TimelineStory) => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"></div>
        
        {/* Efeitos de luz pulsantes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          {/* Ícones girando */}
          <div className="flex justify-center space-x-8 mb-12">
            <Sparkles className="w-16 h-16 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            <Star className="w-20 h-20 text-pink-400 animate-pulse" />
            <Sparkles className="w-16 h-16 text-purple-400 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl animate-pulse">
            {story.title}
          </h1>
          
          <div className="space-y-6 mb-12">
            <p className="text-4xl md:text-5xl bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-black animate-bounce">
              {story.subtitle}
            </p>
            
            <p className="text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto">
              {story.description}
            </p>
          </div>

          {/* Contagem regressiva visual */}
          <div className="flex justify-center space-x-4 mb-8">
            {[3, 2, 1].map((num, idx) => (
              <div 
                key={num}
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-2xl animate-pulse"
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                {num}
              </div>
            ))}
          </div>

          {/* Emojis animados */}
          <div className="flex justify-center space-x-6 text-6xl animate-bounce">
            <span style={{ animationDelay: '0s' }}>🎉</span>
            <span style={{ animationDelay: '0.2s' }}>🎊</span>
            <span style={{ animationDelay: '0.4s' }}>🎈</span>
            <span style={{ animationDelay: '0.6s' }}>✨</span>
            <span style={{ animationDelay: '0.8s' }}>🎁</span>
          </div>

          {/* Mensagem final */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-1 rounded-3xl inline-block animate-pulse">
              <div className="bg-black px-12 py-6 rounded-3xl">
                <p className="text-2xl md:text-3xl text-white font-bold">
                  Prepare-se para ver momentos INCRÍVEIS! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPartySection = (story: TimelineStory) => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4">
        {/* Header Ao Vivo */}
        <div className="w-full max-w-7xl mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 rounded-full flex items-center space-x-2 animate-pulse">
                  <CircleDot className="w-5 h-5 text-white animate-pulse" />
                  <span className="text-white font-black text-lg uppercase">AO VIVO</span>
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border-2 border-white/30">
                <span className="text-white font-bold text-lg">{story.images.length} Fotos</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full">
              <PartyPopper className="w-5 h-5 text-white" />
              <span className="text-white font-bold">Festa Acontecendo!</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-4 text-center">
            {story.title}
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/80 text-center mb-2">
            {story.subtitle}
          </p>
          
          <p className="text-lg text-white/60 text-center">
            {story.description}
          </p>
        </div>

        {/* Grid de Fotos Tipo Polaroid/Instagram */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {story.images.map((img, idx) => (
              <div 
                key={idx}
                className="group relative animate-scale-in"
                style={{
                  animationDelay: `${idx * 150}ms`
                }}
              >
                {/* Efeito Polaroid */}
                <div className="relative bg-white p-3 md:p-4 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-pink-500/50">
                  {/* Flash effect no hover */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-150 rounded-2xl pointer-events-none"></div>
                  
                  {/* Foto */}
                  <div className="aspect-square overflow-hidden rounded-xl bg-gray-200">
                    <img 
                      src={img}
                      alt={`Momento ${idx + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Badge de novo */}
                  {idx < 3 && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 px-3 py-1 rounded-full shadow-lg animate-pulse">
                      <span className="text-white font-bold text-xs uppercase">Novo!</span>
                    </div>
                  )}

                  {/* Timestamp simulado */}
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-gray-600 text-xs font-medium">Há {idx + 1} min</span>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <Zap className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </div>

                {/* Efeito de câmera flash */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-yellow-400 animate-bounce" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer com mensagem especial */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-1 rounded-3xl">
              <div className="bg-black px-8 py-6 rounded-3xl">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  <span className="text-2xl">✨</span>
                  <Sparkles className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent mb-2">
                  Momentos Inesquecíveis!
                </h3>
                <p className="text-white/70 text-lg">
                  Cada foto conta uma história especial deste dia mágico! 🎈
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingKidsElements />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Main content */}
      <div 
        ref={containerRef}
        className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        {timelineStories.map((story, index) => (
          <div key={story.id} className="snap-start">
            {story.section === 'hero' ? (
              renderHeroSection(story)
            ) : story.section === 'suspense' ? (
              renderSuspenseSection(story)
            ) : story.section === 'party' ? (
              renderPartySection(story)
            ) : (
              renderStorySection(story, index)
            )}
          </div>
        ))}
      </div>

      {/* Navigation hint */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-white/50 text-sm flex items-center space-x-2">
        <Smile className="w-4 h-4" />
        <span>Role para explorar a história</span>
      </div>
    </div>
  );
};

export default KidMovie;

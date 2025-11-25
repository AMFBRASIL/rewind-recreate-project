
import { useState, useEffect } from "react";
import HeroTimeline from "../components/HeroTimeline";
import HeroMemoryCard from "../components/HeroMemoryCard";
import FloatingSuperheroElements from "../components/FloatingSuperheroElements";
import { Star, Zap, Shield, Trophy, Sparkles, Crown, Heart, Rocket } from "lucide-react";

const ChildrenRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const memories = [
    {
      id: 1,
      title: "Primeira Grande Aventura",
      date: "Missão Completa",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
      description: "O dia em que descobri meu primeiro superpoder: fazer todos sorrirem!",
      badge: "ÉPICO"
    },
    {
      id: 2,
      title: "Treinamento de Herói",
      date: "Level Up",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
      description: "Aprendendo novas habilidades todo dia na academia dos heróis!",
      badge: "LENDÁRIO"
    },
    {
      id: 3,
      title: "Aliados Especiais",
      date: "Equipe Formada",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      description: "Encontrei meus parceiros de aventura! Juntos somos imbatíveis!",
      badge: "SUPER"
    },
    {
      id: 4,
      title: "Conquista Máxima",
      date: "Boss Derrotado",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
      description: "Venci o desafio mais difícil e ganhei o troféu de ouro!",
      badge: "INCRÍVEL"
    },
    {
      id: 5,
      title: "Poderes do Coração",
      date: "Amor Infinito",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19",
      description: "Descobri que o maior superpoder é o amor da família!",
      badge: "ESPECIAL"
    },
    {
      id: 6,
      title: "Missão Galáctica",
      date: "Exploração Espacial",
      image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2",
      description: "Explorando novos mundos com imaginação sem limites!",
      badge: "CÓSMICO"
    }
  ];

  const slides = [
    { id: 1, content: 'intro' },
    { id: 2, content: 'timeline' },
    { id: 3, content: 'memories' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

  const renderSlide = () => {
    const currentContent = slides[currentSlide].content;

    if (currentContent === 'intro') {
      return (
        <div className="min-h-screen relative overflow-hidden">
          {/* Fundo com gradiente de super-herói */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-red-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620287341260-ab5759f9fc54?w=1920')] bg-cover bg-center opacity-10"></div>
          <FloatingSuperheroElements />
          
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
            {/* Logo de super-herói */}
            <div className="mb-8 relative animate-fade-in">
              <div className="absolute inset-0 bg-yellow-400/30 blur-3xl animate-pulse"></div>
              <Shield className="w-32 h-32 text-yellow-400 relative z-10" />
              <Star className="absolute top-0 right-0 w-12 h-12 text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              Super-Herói em Ação!
            </h1>

            <p className="text-2xl md:text-4xl text-yellow-200 mb-8 animate-fade-in font-bold" style={{ animationDelay: '0.2s' }}>
              Uma Jornada Épica de Aventuras
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: Zap, text: "Energia Máxima", color: "from-yellow-400 to-orange-500" },
                { icon: Heart, text: "Poder do Amor", color: "from-pink-400 to-red-500" },
                { icon: Trophy, text: "Campeão", color: "from-blue-400 to-purple-500" },
                { icon: Rocket, text: "Sem Limites", color: "from-green-400 to-blue-500" }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-r ${item.color} px-6 py-3 rounded-full flex items-center space-x-2 transform hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                  <span className="text-white font-bold">{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-bold px-12 py-6 rounded-full text-xl hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-110 transition-all duration-300 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Sparkles className="w-6 h-6" />
                <span>Iniciar Aventura</span>
                <Zap className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Navegação */}
          <div className="absolute bottom-8 right-8 flex space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-lg text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-yellow-400/50"
              disabled={currentSlide === 0}
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-full hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110"
            >
              →
            </button>
          </div>
        </div>
      );
    }

    if (currentContent === 'timeline') {
      return (
        <div className="min-h-screen relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920')] bg-cover bg-center opacity-10"></div>
          <FloatingSuperheroElements />
          
          <div className="relative z-10 py-16">
            <HeroTimeline />
          </div>

          {/* Navegação */}
          <div className="fixed bottom-8 right-8 flex space-x-4 z-20">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-lg text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-yellow-400/50"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-full hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110"
            >
              →
            </button>
          </div>
        </div>
      );
    }

    if (currentContent === 'memories') {
      return (
        <div className="min-h-screen relative overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=1920')] bg-cover bg-center opacity-10"></div>
          <FloatingSuperheroElements />
          
          <div className="relative z-10 py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex justify-center mb-6">
                <Crown className="w-20 h-20 text-yellow-400 animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
                Galeria de Conquistas
              </h2>
              <p className="text-xl text-gray-200">Momentos épicos da minha saga</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {memories.map((memory, index) => (
                <HeroMemoryCard key={memory.id} memory={memory} index={index} />
              ))}
            </div>

            {/* Final épico */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 rounded-2xl">
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl px-12 py-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-4">
                      <Trophy className="w-12 h-12 text-yellow-400" />
                      <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                        Legado do Herói
                      </h3>
                      <Trophy className="w-12 h-12 text-yellow-400" />
                    </div>
                    <p className="text-xl text-gray-200 max-w-2xl">
                      Esta é apenas o começo da saga! Novos capítulos e aventuras ainda mais incríveis estão por vir. O futuro é brilhante para nosso pequeno super-herói!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div className="fixed bottom-8 right-8 flex space-x-4 z-20">
            <button
              onClick={prevSlide}
              className="bg-white/10 backdrop-blur-lg text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-yellow-400/50"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentSlide(0)}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-full hover:shadow-xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110 font-bold"
            >
              Recomeçar
            </button>
          </div>
        </div>
      );
    }
  };

  return <div className="relative">{renderSlide()}</div>;
};

export default ChildrenRetrospective;

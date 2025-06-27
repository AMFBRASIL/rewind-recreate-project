
import { useState, useEffect } from "react";
import { Gift, Play, Star, Calendar, Camera, Music, Users, Heart, TreePine, X, Snowflake, Bell, Sparkles, Crown, Candy } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import RewindHeader from "@/components/RewindHeader";
import PhotoMemory from "@/components/PhotoMemory";
import TimelineEvent from "@/components/TimelineEvent";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingChristmasElements from "@/components/FloatingChristmasElements";
import ChristmasRetrospective from "./ChristmasRetrospective";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ChristmasLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrospectiveOpen, setIsRetrospectiveOpen] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const navigate = useNavigate();

  const titles = [
    "🎅 Crie uma retrospectiva mágica de Natal",
    "🎄 Celebre os momentos mais especiais do ano",
    "✨ A magia do Natal em uma retrospectiva única",
    "🎁 Transforme suas memórias natalinas em magia",
    "❄️ Uma retrospectiva cheia de amor e alegria natalina"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 6000);

    return () => clearInterval(titleInterval);
  }, [titles.length]);

  const christmasMemories = [
    {
      id: 1,
      title: "Ceia de Natal em Família",
      date: "24 de Dezembro, 2024",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543",
      description: "Uma noite especial com todos reunidos"
    },
    {
      id: 2,
      title: "Abertura dos Presentes",
      date: "25 de Dezembro, 2024",
      image: "https://images.unsplash.com/photo-1607344645866-009c7d0435c8",
      description: "A alegria das crianças ao abrir os presentes"
    },
    {
      id: 3,
      title: "Decoração da Casa",
      date: "15 de Dezembro, 2024",
      image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be",
      description: "Preparando a casa para o Natal"
    }
  ];

  const christmasTimelineEvents = [
    { date: "Dez 1", event: "Início do Advento", icon: Calendar },
    { date: "Dez 15", event: "Decoração da casa", icon: TreePine },
    { date: "Dez 20", event: "Compra dos presentes", icon: Gift },
    { date: "Dez 24", event: "Ceia de Natal", icon: Heart },
    { date: "Dez 25", event: "Natal mágico", icon: Star }
  ];

  const christmasTestimonials = [
    {
      name: "Família Santos",
      testimony: "Nossa retrospectiva de Natal ficou incrível! As crianças ficaram encantadas ao ver todos os momentos especiais do ano reunidos. Foi o presente mais emocionante que demos para a família.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543"
    },
    {
      name: "Família Silva",
      testimony: "Que ideia maravilhosa! Conseguimos capturar toda a magia do Natal da nossa família. Agora temos uma lembrança eterna dos nossos momentos mais especiais.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1607344645866-009c7d0435c8"
    },
    {
      name: "Família Costa",
      testimony: "A retrospectiva de Natal superou todas as expectativas! Ver a alegria das crianças e a emoção dos avós foi inesquecível. Recomendamos para todas as famílias.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be"
    }
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Background pattern similar to Index page */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Christmas overlay for festive feeling */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-green-900/10 to-red-900/20"></div>
      
      {/* Floating Christmas Elements */}
      <FloatingChristmasElements />

      <div className="relative z-10">
        <RewindHeader />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-red-200 via-green-200 to-yellow-200 bg-clip-text text-transparent transition-all duration-1000 drop-shadow-lg">
              {titles[currentTitleIndex]}
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              Crie uma retrospectiva natalina única e emocionante! 
              Transforme fotos, vídeos e momentos especiais do Natal em uma experiência digital mágica e inesquecível.
            </p>
            
            {/* Video Section */}
            <div className="mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">
                🎬 Veja como será sua retrospectiva natalina
              </h2>
              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-white/30 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-red-500 via-green-600 to-red-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="group relative z-10 bg-white/30 backdrop-blur-md hover:bg-white/40 text-white p-8 rounded-full transition-all duration-300 transform hover:scale-110 animate-pulse">
                        <Play className="w-16 h-16 group-hover:animate-bounce" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                      <DialogHeader className="p-6 pb-0">
                        <DialogTitle className="text-center text-2xl font-bold">
                          🎅 Retrospectiva de Natal - Preview
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-6 pt-4 h-full">
                        <iframe
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="Retrospectiva de Natal - Preview"
                          className="w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-semibold">🎄 Preview da Retrospectiva Natalina</p>
                    <p className="text-sm opacity-90">Veja como a magia do Natal ganha vida!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isRetrospectiveOpen} onOpenChange={setIsRetrospectiveOpen}>
                <DialogTrigger asChild>
                  <button className="group bg-gradient-to-r from-red-500 to-green-600 hover:from-red-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                    <Star className="inline-block mr-2 group-hover:animate-spin" size={20} />
                    🎅 Ver Exemplo Completo
                  </button>
                </DialogTrigger>
                <DialogContent className="w-full h-full max-w-none max-h-none p-0 border-0">
                  <button 
                    onClick={() => setIsRetrospectiveOpen(false)}
                    className="absolute top-4 right-4 z-50 bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg"
                  >
                    <X size={16} />
                    FECHAR
                  </button>
                  <ChristmasRetrospective />
                </DialogContent>
              </Dialog>
              
              <button 
                onClick={() => navigate('/create')}
                className="group bg-gradient-to-r from-green-500 to-red-600 hover:from-green-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <Gift className="inline-block mr-2 group-hover:animate-bounce" size={20} />
                🎁 Criar Nossa Retrospectiva
              </button>
            </div>
          </div>

          {/* Por que é perfeito para o Natal */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-md">
              🎄 Por que é perfeito para o Natal?
            </h2>
            <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto drop-shadow-sm">
              Uma retrospectiva feita especialmente para celebrar a magia e o amor do Natal
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-500 to-green-600 p-8 rounded-3xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-white/20">
                <TreePine className="w-16 h-16 mx-auto mb-6 animate-bounce" />
                <h3 className="font-bold text-2xl mb-4">🎅 Momentos Mágicos</h3>
                <p className="text-lg opacity-90 leading-relaxed">Cada sorriso, cada abraço, cada momento especial do Natal eternizado</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-red-600 p-8 rounded-3xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-white/20">
                <Camera className="w-16 h-16 mx-auto mb-6 animate-pulse" />
                <h3 className="font-bold text-2xl mb-4">📸 Álbum Festivo</h3>
                <p className="text-lg opacity-90 leading-relaxed">Das primeiras decorações até a ceia, tudo em cores natalinas vibrantes</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-600 to-green-500 p-8 rounded-3xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-white/20">
                <Music className="w-16 h-16 mx-auto mb-6 animate-spin" />
                <h3 className="font-bold text-2xl mb-4">🎵 Canções Natalinas</h3>
                <p className="text-lg opacity-90 leading-relaxed">Adicione as músicas de Natal que marcaram seus momentos especiais</p>
              </div>
            </div>
          </div>

          {/* Music Player */}
          <div className="mb-16">
            <MusicPlayer />
          </div>

          {/* Photo Memories Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-md">
              🎁 Memórias Natalinas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {christmasMemories.map((memory, index) => (
                <PhotoMemory 
                  key={memory.id} 
                  memory={memory} 
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-md">
              ❄️ Linha do Tempo do Natal
            </h2>
            <div className="max-w-4xl mx-auto">
              {christmasTimelineEvents.map((event, index) => (
                <TimelineEvent 
                  key={index} 
                  event={event} 
                  index={index}
                  isLast={index === christmasTimelineEvents.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Famílias Satisfeitas */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-md">
              👨‍👩‍👧‍👦 Famílias Felizes
            </h2>
            <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto drop-shadow-sm">
              Veja o que outras famílias estão dizendo sobre suas retrospectivas natalinas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {christmasTestimonials.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-lg p-8 rounded-3xl border-4 border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white/30"
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">{client.name}</h3>
                      <div className="flex items-center">
                        {[...Array(client.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-sm leading-relaxed italic">
                    "{client.testimony}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/20 backdrop-blur-lg rounded-3xl p-12 border-4 border-white/30 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-md">
              🎅 Comece a Criar Sua Retrospectiva Natalina
            </h3>
            <p className="text-white text-xl mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Transforme os momentos mais especiais do seu Natal em uma retrospectiva cheia de magia, amor e alegria festiva
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/create')}
                className="bg-gradient-to-r from-red-500 to-green-600 hover:from-red-600 hover:to-green-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <TreePine className="mr-3" size={24} />
                🎄 Criar Nossa Retrospectiva
              </button>
              <button 
                onClick={() => setIsRetrospectiveOpen(true)}
                className="bg-gradient-to-r from-green-500 to-red-600 hover:from-green-600 hover:to-red-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Play className="mr-3" size={24} />
                ✨ Ver Exemplo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasLanding;

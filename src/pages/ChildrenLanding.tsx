import { useState, useEffect } from "react";
import { Baby, Play, Star, Calendar, Camera, Music, Users, Heart, Gift, X, Palette, Sparkles, Sun, Moon, Rainbow } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import RewindHeader from "@/components/RewindHeader";
import PhotoMemory from "@/components/PhotoMemory";
import TimelineEvent from "@/components/TimelineEvent";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingKidsElements from "@/components/FloatingKidsElements";
import ChildrenRetrospective from "./ChildrenRetrospective";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ChildrenLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrospectiveOpen, setIsRetrospectiveOpen] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const navigate = useNavigate();

  const titles = [
    "Celebre cada momento mágico da infância",
    "Uma retrospectiva cheia de sorrisos e aventuras",
    "Transforme memórias em pura diversão",
    "Cada foto conta uma história especial",
    "Preserve os momentos mais doces da vida"
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

  const childMemories = [
    {
      id: 1,
      title: "Primeiro Dia de Escola",
      date: "15 de Março, 2024",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
      description: "O grande dia chegou com muita animação"
    },
    {
      id: 2,
      title: "Aniversário de 5 Anos",
      date: "22 de Junho, 2024",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643",
      description: "Festa com bolo, doces e muita alegria"
    },
    {
      id: 3,
      title: "Férias na Praia",
      date: "10 de Julho, 2024",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
      description: "Brincando na areia e fazendo castelos"
    }
  ];

  const childTimelineEvents = [
    { date: "Jan 2024", event: "Primeiros passos", icon: Baby },
    { date: "Mar 2024", event: "Escola nova", icon: Star },
    { date: "Jun 2024", event: "Aniversário", icon: Gift },
    { date: "Jul 2024", event: "Férias divertidas", icon: Sun },
    { date: "Dez 2024", event: "Final do ano", icon: Sparkles }
  ];

  const childTestimonials = [
    {
      name: "Família Silva",
      testimony: "Nossa filha ficou encantada ao ver todas as memórias dela reunidas! Foi emocionante reviver cada momento especial do crescimento dela.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
    },
    {
      name: "Família Costa",
      testimony: "A retrospectiva do nosso pequeno ficou perfeita! Ele riu muito vendo as próprias aventuras. Um presente que vamos guardar para sempre.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643"
    },
    {
      name: "Família Santos",
      testimony: "Que ideia maravilhosa! Conseguimos capturar toda a personalidade da nossa filha em uma retrospectiva cheia de cores e alegria.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1"
    }
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      {/* Background pattern similar to Index page */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Floating Kids Elements */}
      <FloatingKidsElements />

      <div className="relative z-10">
        <RewindHeader />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent transition-all duration-1000 drop-shadow-lg">
              {titles[currentTitleIndex]}
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              Crie uma retrospectiva super divertida e colorida da infância! 
              Transforme fotos, vídeos e momentos especiais em uma aventura digital cheia de alegria.
            </p>
            
            {/* Video Section */}
            <div className="mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">
                🎬 Veja como será a retrospectiva do seu pequeno
              </h2>
              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 border-4 border-white/30 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
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
                          🌟 Retrospectiva Infantil - Preview
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-6 pt-4 h-full">
                        <iframe
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="Retrospectiva Infantil - Preview"
                          className="w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-semibold">🎈 Preview da Retrospectiva</p>
                    <p className="text-sm opacity-90">Veja como as memórias ganham vida!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isRetrospectiveOpen} onOpenChange={setIsRetrospectiveOpen}>
                <DialogTrigger asChild>
                  <button className="group bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                    <Star className="inline-block mr-2 group-hover:animate-spin" size={20} />
                    ✨ Ver Exemplo Completo
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
                  <ChildrenRetrospective />
                </DialogContent>
              </Dialog>
              
              <button 
                onClick={() => navigate('/create')}
                className="group bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <Baby className="inline-block mr-2 group-hover:animate-bounce" size={20} />
                🎨 Criar Nossa Retrospectiva
              </button>
            </div>
          </div>

          {/* Por que é perfeito para crianças */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-md">
              🌈 Por que é perfeito para crianças?
            </h2>
            <p className="text-xl text-white text-center mb-12 max-w-3xl mx-auto drop-shadow-sm">
              Uma retrospectiva feita especialmente para celebrar a magia da infância
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-white/20">
                <Baby className="w-16 h-16 mx-auto mb-6 animate-bounce" />
                <h3 className="font-bold text-2xl mb-4">🎈 Momentos Mágicos</h3>
                <p className="text-lg opacity-90 leading-relaxed">Cada sorriso, cada descoberta, cada momento especial da infância eternizado</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-8 rounded-3xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-white/20">
                <Camera className="w-16 h-16 mx-auto mb-6 animate-pulse" />
                <h3 className="font-bold text-2xl mb-4">📸 Álbum Divertido</h3>
                <p className="text-lg opacity-90 leading-relaxed">Das primeiras fotos aos momentos mais recentes, tudo em cores vibrantes</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 p-8 rounded-3xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-4 border-white/20">
                <Music className="w-16 h-16 mx-auto mb-6 animate-spin" />
                <h3 className="font-bold text-2xl mb-4">🎵 Músicas Infantis</h3>
                <p className="text-lg opacity-90 leading-relaxed">Adicione as canções favoritas que marcaram a infância</p>
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
              🎨 Memórias Coloridas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {childMemories.map((memory, index) => (
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
              🚀 Linha do Tempo da Aventura
            </h2>
            <div className="max-w-4xl mx-auto">
              {childTimelineEvents.map((event, index) => (
                <TimelineEvent 
                  key={index} 
                  event={event} 
                  index={index}
                  isLast={index === childTimelineEvents.length - 1}
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
              Veja o que outras famílias estão dizendo sobre as retrospectivas dos seus pequenos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {childTestimonials.map((client, index) => (
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
              🎉 Comece a Criar a História do Seu Pequeno
            </h3>
            <p className="text-white text-xl mb-8 max-w-3xl mx-auto drop-shadow-sm">
              Transforme os momentos mais especiais da infância em uma retrospectiva cheia de cores, alegria e diversão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/create')}
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Palette className="mr-3" size={24} />
                🎨 Criar Nossa Retrospectiva
              </button>
              <button 
                onClick={() => setIsRetrospectiveOpen(true)}
                className="bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
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

export default ChildrenLanding;

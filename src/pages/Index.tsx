
import { useState, useEffect } from "react";
import { Heart, Play, Star, Calendar, Camera, Music } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import RewindHeader from "@/components/RewindHeader";
import PhotoMemory from "@/components/PhotoMemory";
import TimelineEvent from "@/components/TimelineEvent";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const memories = [
    {
      id: 1,
      title: "Nosso Primeiro Encontro",
      date: "14 de Fevereiro, 2023",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      description: "O dia que mudou nossas vidas para sempre"
    },
    {
      id: 2,
      title: "Nossa Primeira Viagem",
      date: "15 de Junho, 2023",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      description: "Descobrindo o mundo juntos"
    },
    {
      id: 3,
      title: "Adotamos nosso Gatinho",
      date: "20 de Setembro, 2023",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      description: "Nossa pequena família cresceu"
    }
  ];

  const timelineEvents = [
    { date: "Jan 2023", event: "Nos conhecemos", icon: Heart },
    { date: "Fev 2023", event: "Primeiro encontro", icon: Star },
    { date: "Jun 2023", event: "Primeira viagem", icon: Calendar },
    { date: "Set 2023", event: "Adotamos o gatinho", icon: Camera },
    { date: "Dez 2023", event: "Um ano juntos", icon: Music }
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart 
            key={i}
            className={`absolute text-pink-300 opacity-30 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
            size={12 + Math.random() * 20}
          />
        ))}
      </div>

      <div className="relative z-10">
        <RewindHeader />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Nossa História de Amor
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-8">
              Reviva os momentos mais especiais da nossa jornada juntos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/retrospective'}
                className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Play className="inline-block mr-2 group-hover:animate-pulse" size={20} />
                Ver Retrospectiva Completa
              </button>
              <button className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20">
                <Heart className="inline-block mr-2 group-hover:animate-pulse" size={20} />
                Criar Sua Retrospectiva
              </button>
            </div>
          </div>

          {/* Music Player */}
          <div className="mb-16">
            <MusicPlayer />
          </div>

          {/* Photo Memories Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Nossas Memórias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {memories.map((memory, index) => (
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
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Nossa Linha do Tempo
            </h2>
            <div className="max-w-4xl mx-auto">
              {timelineEvents.map((event, index) => (
                <TimelineEvent 
                  key={index} 
                  event={event} 
                  index={index}
                  isLast={index === timelineEvents.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Crie Sua Própria Retrospectiva
            </h3>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              Transforme seus momentos especiais em uma linda história digital
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

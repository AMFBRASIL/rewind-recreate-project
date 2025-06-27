
import { useState, useEffect } from "react";
import { Heart, Play, Star, Calendar, Camera, Music, Users, User, Baby, Flower, Video, FileText, Plus, Palette, Share2, Archive, MousePointer, Gift, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import RewindHeader from "@/components/RewindHeader";
import PhotoMemory from "@/components/PhotoMemory";
import TimelineEvent from "@/components/TimelineEvent";
import MusicPlayer from "@/components/MusicPlayer";
import CoupleRetrospective from "./CoupleRetrospective";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CouplesLanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrospectiveOpen, setIsRetrospectiveOpen] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const navigate = useNavigate();

  const titles = [
    "Eternize o amor de vocês",
    "Uma retrospectiva feita com o coração",
    "Momentos únicos que merecem ser celebrados",
    "A história de amor mais linda é a de vocês",
    "Transforme memórias em magia"
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
    }, 8000);

    return () => clearInterval(titleInterval);
  }, [titles.length]);

  const coupleMemories = [
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
      title: "Aniversário de Namoro",
      date: "20 de Setembro, 2023",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      description: "Celebrando nosso amor"
    }
  ];

  const coupleTimelineEvents = [
    { date: "Jan 2023", event: "Nos conhecemos", icon: Heart },
    { date: "Fev 2023", event: "Primeiro encontro", icon: Star },
    { date: "Jun 2023", event: "Primeira viagem", icon: Calendar },
    { date: "Set 2023", event: "Aniversário de namoro", icon: Camera },
    { date: "Dez 2023", event: "Um ano juntos", icon: Music }
  ];

  const coupleTestimonials = [
    {
      name: "Ana & Carlos",
      testimony: "A retrospectiva ficou perfeita! Meu namorado chorou de emoção quando viu todas as nossas memórias reunidas. Foi o presente mais especial que já demos um para o outro.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Marina & João",
      testimony: "Criamos nossa retrospectiva para o aniversário de 2 anos. Ficou incrível! Conseguimos reviver cada momento especial da nossa história de amor.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      name: "Lucia & Pedro",
      testimony: "O presente perfeito existe! Meu namorado ficou emocionado ao ver nossa retrospectiva. Agora fazemos uma todo ano para celebrar nosso amor.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    }
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
        {[...Array(30)].map((_, i) => (
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
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent transition-all duration-1000">
              {titles[currentTitleIndex]}
            </h1>
            <p className="text-2xl text-purple-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Crie uma retrospectiva única e emocionante da história de amor de vocês. 
              Transforme fotos, vídeos e memórias em uma experiência digital inesquecível.
            </p>
            
            {/* Video Section */}
            <div className="mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Veja como será sua retrospectiva
              </h2>
              <div className="relative bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="group relative z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110">
                        <Play className="w-12 h-12 group-hover:animate-pulse" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                      <DialogHeader className="p-6 pb-0">
                        <DialogTitle className="text-center text-2xl font-bold">
                          Retrospectiva de Casal - Preview
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-6 pt-4 h-full">
                        <iframe
                          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                          title="Retrospectiva de Casal - Preview"
                          className="w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-lg font-semibold">Preview da Retrospectiva</p>
                    <p className="text-sm opacity-80">Veja como suas memórias ganham vida</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isRetrospectiveOpen} onOpenChange={setIsRetrospectiveOpen}>
                <DialogTrigger asChild>
                  <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                    <Heart className="inline-block mr-2 group-hover:animate-pulse" size={20} />
                    Ver Exemplo Completo
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
                  <CoupleRetrospective />
                </DialogContent>
              </Dialog>
              
              <button 
                onClick={() => navigate('/create')}
                className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <Plus className="inline-block mr-2 group-hover:animate-pulse" size={20} />
                Criar Nossa Retrospectiva
              </button>
            </div>
          </div>

          {/* Por que é perfeito para casais */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Por que é perfeito para casais?
            </h2>
            <p className="text-xl text-purple-200 text-center mb-12 max-w-3xl mx-auto">
              Uma retrospectiva feita especialmente para celebrar o amor de vocês
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-500 to-pink-500 p-8 rounded-2xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm">
                <Heart className="w-16 h-16 mx-auto mb-6" />
                <h3 className="font-bold text-2xl mb-4">Momentos de Amor</h3>
                <p className="text-lg opacity-90 leading-relaxed">Cada beijo, cada abraço, cada olhar apaixonado eternizado em uma linda retrospectiva</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm">
                <Camera className="w-16 h-16 mx-auto mb-6" />
                <h3 className="font-bold text-2xl mb-4">Fotos Especiais</h3>
                <p className="text-lg opacity-90 leading-relaxed">Desde a primeira foto juntos até os momentos mais recentes, tudo em um só lugar</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-8 rounded-2xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm">
                <Music className="w-16 h-16 mx-auto mb-6" />
                <h3 className="font-bold text-2xl mb-4">Trilha Sonora</h3>
                <p className="text-lg opacity-90 leading-relaxed">Adicione as músicas que marcaram momentos especiais da relação de vocês</p>
              </div>
            </div>
          </div>

          {/* Music Player */}
          <div className="mb-16">
            <MusicPlayer />
          </div>

          {/* Photo Memories Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Suas Memórias de Amor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coupleMemories.map((memory, index) => (
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
              Linha do Tempo do Amor
            </h2>
            <div className="max-w-4xl mx-auto">
              {coupleTimelineEvents.map((event, index) => (
                <TimelineEvent 
                  key={index} 
                  event={event} 
                  index={index}
                  isLast={index === coupleTimelineEvents.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Casais Satisfeitos */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Casais Apaixonados
            </h2>
            <p className="text-xl text-purple-200 text-center mb-12 max-w-3xl mx-auto">
              Veja o que outros casais estão dizendo sobre suas retrospectivas de amor
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coupleTestimonials.map((client, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white/20"
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">{client.name}</h3>
                      <div className="flex items-center">
                        {[...Array(client.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-purple-200 text-sm leading-relaxed italic">
                    "{client.testimony}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-800/40 to-pink-800/40 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h3 className="text-4xl font-bold text-white mb-6">
              Comece a Criar Sua História de Amor
            </h3>
            <p className="text-purple-200 text-xl mb-8 max-w-3xl mx-auto">
              Transforme os momentos mais especiais da sua relação em uma retrospectiva emocionante que vocês vão guardar para sempre
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/create')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Heart className="mr-3" size={24} />
                Criar Nossa Retrospectiva
              </button>
              <button 
                onClick={() => setIsRetrospectiveOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Play className="mr-3" size={24} />
                Ver Exemplo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouplesLanding;

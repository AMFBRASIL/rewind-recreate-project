import { useState, useEffect } from "react";
import { Heart, Play, Star, Calendar, Camera, Music, Users, User, Baby, Flower, Video, FileText, Plus, Palette, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import RewindHeader from "@/components/RewindHeader";
import PhotoMemory from "@/components/PhotoMemory";
import TimelineEvent from "@/components/TimelineEvent";
import MusicPlayer from "@/components/MusicPlayer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

  const retrospectiveTypes = [
    { value: 'namorado', label: 'Namorado', icon: Heart, gradient: 'from-pink-500 to-red-500' },
    { value: 'namorada', label: 'Namorada', icon: Heart, gradient: 'from-pink-500 to-purple-500' },
    { value: 'marido', label: 'Marido', icon: Users, gradient: 'from-blue-500 to-indigo-500' },
    { value: 'esposa', label: 'Esposa', icon: Users, gradient: 'from-purple-500 to-pink-500' },
    { value: 'amigo', label: 'Amigo', icon: User, gradient: 'from-green-500 to-teal-500' },
    { value: 'amiga', label: 'Amiga', icon: User, gradient: 'from-teal-500 to-cyan-500' },
    { value: 'mae', label: 'Mãe', icon: Heart, gradient: 'from-rose-500 to-pink-500' },
    { value: 'pai', label: 'Pai', icon: Star, gradient: 'from-amber-500 to-orange-500' },
    { value: 'filho', label: 'Filho', icon: Baby, gradient: 'from-sky-500 to-blue-500' },
    { value: 'falecido', label: 'Falecido', icon: Flower, gradient: 'from-gray-500 to-slate-500' },
    { value: 'outros', label: 'Outros', icon: Heart, gradient: 'from-violet-500 to-purple-500' }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Escolha o Template",
      description: "Selecione o tipo de retrospectiva perfeita para sua pessoa especial",
      icon: FileText,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Adicione Conteúdo",
      description: "Inclua fotos, vídeos, músicas e memórias que fazem sua história única",
      icon: Plus,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Personalize",
      description: "Customize cores, fontes e layouts para criar uma experiência única",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      step: 4,
      title: "Compartilhe",
      description: "Gere um QR Code e compartilhe sua retrospectiva com quem importa",
      icon: Share2,
      gradient: "from-orange-500 to-red-500"
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
              <Link 
                to="/retrospective"
                className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <Play className="inline-block mr-2 group-hover:animate-pulse" size={20} />
                Ver Retrospectiva Completa
              </Link>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                    <Video className="inline-block mr-2 group-hover:animate-pulse" size={20} />
                    Assistir Vídeo
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-center text-2xl font-bold">
                      Como Criar Sua Retrospectiva
                    </DialogTitle>
                  </DialogHeader>
                  <div className="p-6 pt-4 h-full">
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Vídeo Tutorial"
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Como Funciona Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-purple-200 text-center mb-12 max-w-3xl mx-auto">
              Crie sua retrospectiva em apenas 4 passos simples
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {howItWorksSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.step}
                    className={`relative bg-gradient-to-br ${step.gradient} p-6 rounded-2xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm`}
                  >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <IconComponent className="w-12 h-12 mx-auto mb-4 mt-2" />
                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Retrospective Types Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Escolha o Tipo de Retrospectiva
            </h2>
            <p className="text-xl text-purple-200 text-center mb-12 max-w-3xl mx-auto">
              Crie uma retrospectiva personalizada para alguém especial
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {retrospectiveTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <Link
                    key={type.value}
                    to="/create"
                    className={`group bg-gradient-to-br ${type.gradient} p-6 rounded-2xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm`}
                  >
                    <IconComponent className="w-8 h-8 mx-auto mb-3 group-hover:animate-pulse" />
                    <h3 className="font-semibold text-lg">{type.label}</h3>
                  </Link>
                );
              })}
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
            <Link 
              to="/create"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

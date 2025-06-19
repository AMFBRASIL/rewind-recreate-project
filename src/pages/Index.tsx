import { useState, useEffect } from "react";
import { Heart, Play, Star, Calendar, Camera, Music, Users, User, Baby, Flower, Video, FileText, Plus, Palette, Share2, Archive, MousePointer, Gift, X, GraduationCap, TreePine, Cross } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import RewindHeader from "@/components/RewindHeader";
import PhotoMemory from "@/components/PhotoMemory";
import TimelineEvent from "@/components/TimelineEvent";
import MusicPlayer from "@/components/MusicPlayer";
import CoupleRetrospective from "./CoupleRetrospective";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isRetrospectiveOpen, setIsRetrospectiveOpen] = useState(false);
  const navigate = useNavigate();

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
    { value: 'namorados', label: 'Namorados', icon: Heart, gradient: 'from-pink-500 to-red-500' },
    { value: 'casamento', label: 'Casamento', icon: Users, gradient: 'from-purple-500 to-pink-500' },
    { value: 'amigos', label: 'Amigos', icon: User, gradient: 'from-green-500 to-teal-500' },
    { value: 'pais', label: 'Pais', icon: Heart, gradient: 'from-amber-500 to-orange-500' },
    { value: 'filhos', label: 'Filhos', icon: Baby, gradient: 'from-sky-500 to-blue-500' },
    { value: 'formatura', label: 'Formatura', icon: GraduationCap, gradient: 'from-indigo-500 to-purple-500' },
    { value: 'natal', label: 'Papai Noel Natal', icon: TreePine, gradient: 'from-red-500 to-green-600' },
    { value: 'hospitalizado', label: 'Hospitalizado', icon: Cross, gradient: 'from-blue-600 to-cyan-600' }
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

  const whyTheyWillLoveIt = [
    {
      title: "Memórias Eternizadas",
      description: "Todos os momentos especiais guardados para sempre em um formato único e emocionante",
      icon: Archive,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Experiência Interativa",
      description: "Uma jornada envolvente com música, fotos e vídeos que torna cada memória viva",
      icon: MousePointer,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Presente Romântico",
      description: "O presente mais personalizado e carinhoso que você pode dar para alguém especial",
      icon: Gift,
      gradient: "from-red-500 to-rose-500"
    }
  ];

  const satisfiedClients = [
    {
      name: "Ana & Carlos",
      testimony: "A retrospectiva ficou perfeita! Meu namorado chorou de emoção quando viu todas as nossas memórias juntas. Foi o presente mais especial que já demos um para o outro.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Maria Silva",
      testimony: "Criei uma retrospectiva para minha mãe no Dia das Mães. Ela ficou tão emocionada que não parava de mostrar para todas as vizinhas. Recomendo muito!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      name: "João & Pedro",
      testimony: "Fizemos uma retrospectiva da nossa amizade de 10 anos. Foi incrível relembrar todos os momentos especiais. A qualidade e a facilidade de uso são excepcionais!",
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
              Suas Memórias Especiais
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-8">
              Crie retrospectivas únicas para celebrar momentos importantes com quem você ama
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isRetrospectiveOpen} onOpenChange={setIsRetrospectiveOpen}>
                <DialogTrigger asChild>
                  <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center">
                    <Play className="inline-block mr-2 group-hover:animate-pulse" size={20} />
                    Ver Retrospectiva Completa
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

          {/* Por que vão adorar Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Por que vão adorar?
            </h2>
            <p className="text-xl text-purple-200 text-center mb-12 max-w-3xl mx-auto">
              Três razões que tornam sua retrospectiva inesquecível
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyTheyWillLoveIt.map((reason, index) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${reason.gradient} p-8 rounded-2xl text-white text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10 backdrop-blur-sm`}
                  >
                    <IconComponent className="w-16 h-16 mx-auto mb-6" />
                    <h3 className="font-bold text-2xl mb-4">{reason.title}</h3>
                    <p className="text-lg opacity-90 leading-relaxed">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Types Section */}
          <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Tipos de Retrospectiva
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Escolha o tipo perfeito para sua ocasião especial
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* Namorados Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Namorados</h3>
                  <p className="text-gray-600 mb-6">Memórias íntimas e românticas</p>
                  <button 
                    onClick={() => navigate('/create')}
                    className="w-full bg-gradient-to-r from-pink-400 to-red-500 text-white py-3 rounded-xl font-semibold hover:from-pink-500 hover:to-red-600 transition-all duration-300"
                  >
                    Começar
                  </button>
                </div>

                {/* Casamento Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Casamento</h3>
                  <p className="text-gray-600 mb-6">Celebração especial do casal</p>
                  <button 
                    onClick={() => navigate('/create')}
                    className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-600 transition-all duration-300"
                  >
                    Começar
                  </button>
                </div>

                {/* Amigos Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Amigos</h3>
                  <p className="text-gray-600 mb-6">Memórias de amizade especial</p>
                  <button 
                    onClick={() => navigate('/create')}
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-500 hover:to-emerald-700 transition-all duration-300"
                  >
                    Começar
                  </button>
                </div>

                {/* Pais Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Pais</h3>
                  <p className="text-gray-600 mb-6">Homenagem especial para seus pais queridos</p>
                  <button 
                    onClick={() => navigate('/parents')}
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-500 hover:to-emerald-700 transition-all duration-300"
                  >
                    Começar
                  </button>
                </div>

                {/* Filhos Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Filhos</h3>
                  <p className="text-gray-600 mb-6">Celebre o crescimento dos seus pequenos</p>
                  <button 
                    onClick={() => navigate('/children')}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
                  >
                    Começar
                  </button>
                </div>

                {/* Formatura Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Formatura</h3>
                  <p className="text-gray-600 mb-6">Celebre essa conquista importante</p>
                  <button 
                    onClick={() => navigate('/create')}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                  >
                    Começar
                  </button>
                </div>

                {/* Natal/Papai Noel Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Papai Noel</h3>
                  <p className="text-gray-600 mb-6">Mensagem mágica do Papai Noel</p>
                  <button 
                    onClick={() => navigate('/christmas')}
                    className="w-full bg-gradient-to-r from-red-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-red-600 hover:to-green-700 transition-all duration-300"
                  >
                    Ho Ho Ho!
                  </button>
                </div>

                {/* Hospitalizado Card */}
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Cross className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Hospitalizado</h3>
                  <p className="text-gray-600 mb-6">Palavras de carinho e esperança</p>
                  <button 
                    onClick={() => navigate('/create')}
                    className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-cyan-600 transition-all duration-300"
                  >
                    Começar
                  </button>
                </div>
              </div>
            </div>
          </section>

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

          {/* Clientes Satisfeitos Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Clientes Satisfeitos
            </h2>
            <p className="text-xl text-purple-200 text-center mb-12 max-w-3xl mx-auto">
              Veja o que nossos clientes estão dizendo sobre suas retrospectivas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {satisfiedClients.map((client, index) => (
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

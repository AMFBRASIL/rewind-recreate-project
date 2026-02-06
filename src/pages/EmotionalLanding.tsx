import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles, Film, Music, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmotionalParticles from "@/components/EmotionalParticles";

const EmotionalLanding = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Film,
      title: "Transições Cinematográficas",
      description: "Efeitos suaves e elegantes que contam sua história como um filme"
    },
    {
      icon: Heart,
      title: "Profundamente Emocional",
      description: "Cada slide foi pensado para tocar o coração de quem assiste"
    },
    {
      icon: Sparkles,
      title: "Efeitos Mágicos",
      description: "Partículas flutuantes, textos que aparecem letra por letra"
    },
    {
      icon: Music,
      title: "Narrativa Envolvente",
      description: "Uma jornada emocional do começo ao fim"
    },
    {
      icon: Star,
      title: "Ken Burns Effect",
      description: "Suas fotos ganham vida com movimento cinematográfico"
    },
    {
      icon: Play,
      title: "Experiência Imersiva",
      description: "Fullscreen, controles intuitivos, navegação suave"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Particles Background */}
      <EmotionalParticles mood="romantic" intensity={40} />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8 relative inline-block">
            <div className="absolute -inset-8 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="relative inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-2xl">
              <Heart className="w-14 h-14 text-white fill-white animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-200 via-white to-rose-200 bg-clip-text text-transparent drop-shadow-2xl">
              Retrospectiva
            </span>
            <br />
            <span className="text-white">
              Emocional
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-100/90 max-w-3xl mx-auto leading-relaxed mb-12">
            Uma experiência cinematográfica que vai fazer seu coração transbordar. 
            Cada momento, cada palavra, cada transição foi pensada para 
            <span className="text-white font-semibold"> emocionar profundamente</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => navigate('/emotional')}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-12 py-6 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-pink-500/30"
            >
              <Play className="w-6 h-6 mr-3" />
              Iniciar Experiência
            </Button>
            
            <Button
              onClick={() => navigate('/create')}
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl rounded-full backdrop-blur-sm"
            >
              Criar a Minha
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              
              <p className="text-pink-100/70 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-lg rounded-3xl p-12 border border-white/10 max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i}
                  className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prepare-se para se Emocionar
            </h2>
            
            <p className="text-pink-100/80 text-lg mb-8 max-w-xl mx-auto">
              Esta retrospectiva foi criada para fazer você sentir cada momento no fundo da alma. 
              Tenha lenços por perto.
            </p>
            
            <Button
              onClick={() => navigate('/emotional')}
              className="bg-white text-pink-600 hover:bg-pink-50 px-10 py-4 text-xl rounded-full font-bold transform hover:scale-110 transition-all duration-300 shadow-xl"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Assistir Agora
            </Button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-pink-200/50 text-sm">
          <p>💕 Feito com amor para quem ama de verdade 💕</p>
        </div>
      </div>
    </div>
  );
};

export default EmotionalLanding;

import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Star, Moon, Camera, Gamepad2, Laugh } from "lucide-react";
import { Button } from "@/components/ui/button";

const FatherLanding = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Heart,
      title: "Amor Incondicional",
      description: "Uma homenagem cheia de amor do filho para o pai"
    },
    {
      icon: Camera,
      title: "Momentos Únicos",
      description: "Fotos e memórias especiais entre pai e filho"
    },
    {
      icon: Star,
      title: "Nossos Códigos",
      description: "Piadas internas e códigos secretos só de vocês"
    },
    {
      icon: Gamepad2,
      title: "Hobbies Compartilhados",
      description: "Futebol, videogame e todas as diversões juntos"
    },
    {
      icon: Moon,
      title: "Signo e Lua",
      description: "Conexão astrológica especial entre vocês"
    },
    {
      icon: Laugh,
      title: "Memórias Engraçadas",
      description: "Momentos hilários que só vocês viveram"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 animate-bounce">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Para o Melhor
            </span>
            <br />
            <span className="text-white">Pai do Mundo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Uma retrospectiva especial criada com muito amor pelo seu filho. 
            Momentos únicos, memórias divertidas e toda a trajetória de vocês juntos!
          </p>

          <Button
            onClick={() => navigate('/father')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl animate-pulse"
          >
            Ver Retrospectiva
            <Heart className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-300/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              
              <p className="text-blue-200 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para se emocionar?
            </h2>
            <p className="text-blue-200 text-lg mb-6">
              Esta retrospectiva foi criada com muito carinho para celebrar a relação única entre vocês dois.
            </p>
            <Button
              onClick={() => navigate('/father')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-xl"
            >
              Começar Agora
              <Star className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FatherLanding;
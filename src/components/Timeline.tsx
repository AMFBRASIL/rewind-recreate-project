
import { Heart, Calendar, Home, Star, Music, Camera, Clock } from "lucide-react";

const Timeline = () => {
  // Dados da linha do tempo baseados nos slides existentes
  const timelineEvents = [
    {
      year: 2023,
      month: "Fevereiro",
      date: "14 de Fevereiro",
      title: "O Início de Tudo",
      description: "Nosso primeiro encontro",
      icon: Heart,
      color: "from-pink-500 to-red-500"
    },
    {
      year: 2023,
      month: "Fevereiro", 
      date: "20 de Fevereiro",
      title: "Primeiro Beijo",
      description: "O momento que mudou tudo",
      icon: Heart,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: 2023,
      month: "Junho",
      date: "15 de Junho", 
      title: "Primeira Viagem",
      description: "Descobrindo novos lugares juntos",
      icon: Star,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: 2023,
      month: "Setembro",
      date: "20 de Setembro",
      title: "Nossa Casa",
      description: "Construindo nosso lar",
      icon: Home,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: 2023,
      month: "Dezembro",
      date: "10 de Dezembro",
      title: "Família Cresceu", 
      description: "Adotamos nosso gatinho",
      icon: Heart,
      color: "from-orange-500 to-yellow-500"
    },
    {
      year: 2024,
      month: "Fevereiro",
      date: "14 de Fevereiro",
      title: "Primeiro Ano",
      description: "Celebrando cada momento",
      icon: Calendar,
      color: "from-indigo-500 to-purple-500"
    },
    {
      year: 2025,
      month: "Hoje",
      date: "Agora",
      title: "Para Sempre",
      description: "Nosso futuro juntos",
      icon: Clock,
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <div className="relative max-w-4xl mx-auto px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-4">
          Nossa Linha do Tempo
        </h2>
        <p className="text-xl text-gray-300">
          De 2023 até hoje - A jornada do nosso amor
        </p>
      </div>

      {/* Linha central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 h-full opacity-30"></div>

      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} animate-fade-in`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Ponto da timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${event.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Card do evento */}
              <div className={`w-5/12 ${isLeft ? 'mr-8' : 'ml-8'}`}>
                <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-300/50 transition-all duration-300 transform hover:scale-105 ${isLeft ? 'text-right' : 'text-left'}`}>
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${event.color} text-white`}>
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-purple-300 text-sm mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-300">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicador "Continua..." */}
      <div className="flex justify-center mt-12">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-2">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <p className="text-pink-300 font-semibold">Continua...</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

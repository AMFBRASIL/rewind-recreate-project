import { Calendar, Heart, Star, Zap } from "lucide-react";

interface Memory {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  badge: string;
}

interface HeroMemoryCardProps {
  memory: Memory;
  index: number;
}

const HeroMemoryCard = ({ memory, index }: HeroMemoryCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/60 via-purple-900/60 to-pink-900/60 backdrop-blur-xl border-2 border-yellow-400/30 hover:border-yellow-400/80 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 animate-fade-in"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Badge de super-herói */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1 rounded-full text-xs flex items-center space-x-1 animate-pulse">
          <Star className="w-3 h-3 fill-current" />
          <span>{memory.badge}</span>
        </div>
      </div>

      {/* Raio de energia */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={memory.image}
          alt={memory.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay com efeito de energia */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        
        {/* Efeito de raios */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <Zap className="absolute top-4 left-4 w-6 h-6 text-yellow-400 animate-pulse" />
          <Zap className="absolute bottom-4 right-4 w-6 h-6 text-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center space-x-2 text-yellow-300 mb-2">
            <Calendar size={16} />
            <span className="text-sm font-bold">{memory.date}</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-lg">
            {memory.title}
          </h3>
          
          <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
            {memory.description}
          </p>

          {/* Barra de poder */}
          <div className="mt-4 h-2 bg-black/40 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-pulse" style={{ width: '90%' }}></div>
          </div>
        </div>
        
        {/* Ícone de coração animado */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
        </div>
      </div>

      {/* Efeito de brilho nas bordas */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400/20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-orange-500/20 blur-2xl"></div>
      </div>
    </div>
  );
};

export default HeroMemoryCard;

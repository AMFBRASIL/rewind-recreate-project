
import { Calendar, Heart } from "lucide-react";

interface Memory {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

interface PhotoMemoryProps {
  memory: Memory;
  index: number;
}

const PhotoMemory = ({ memory, index }: PhotoMemoryProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-pink-300/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 200}ms`
      }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={memory.image}
          alt={memory.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center space-x-2 text-pink-300 mb-2">
            <Calendar size={16} />
            <span className="text-sm font-medium">{memory.date}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
            {memory.title}
          </h3>
          
          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {memory.description}
          </p>
        </div>
        
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-6 h-6 text-pink-400" />
        </div>
      </div>
    </div>
  );
};

export default PhotoMemory;

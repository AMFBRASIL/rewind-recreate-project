
import { Heart } from "lucide-react";

const Timeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-4">
          Timeline Removida
        </h2>
        <p className="text-xl text-gray-300">
          A linha do tempo agora está apenas na primeira página
        </p>
      </div>

      {/* Indicador simples */}
      <div className="flex justify-center mt-12">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mb-2">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <p className="text-pink-300 font-semibold">Volte aos slides...</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

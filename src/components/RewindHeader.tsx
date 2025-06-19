
import { Heart, Share2, Download } from "lucide-react";

const RewindHeader = () => {
  return (
    <header className="relative z-20 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-full">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Momentus | Click</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
            <Share2 size={18} />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
            <Download size={18} />
            <span className="hidden sm:inline">Download</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default RewindHeader;


import { Heart } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-purple-900 to-indigo-900 overflow-hidden">
      <div className="text-center animate-fade-in">
        <div className="relative mb-8">
          <Heart className="w-16 h-16 text-pink-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 mx-auto">
            <Heart className="w-16 h-16 text-pink-300 animate-ping" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Carregando...
        </h1>
        
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
        </div>
        
        <p className="text-purple-200 text-xl animate-pulse">
          Preparando sua retrospectiva de amor...
        </p>
        
        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart 
              key={i}
              className="absolute text-pink-300 opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
              size={8 + Math.random() * 16}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

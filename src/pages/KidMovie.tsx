import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Film, Star, Heart, Sparkles } from "lucide-react";
import FloatingKidsElements from "@/components/FloatingKidsElements";

interface MovieScene {
  id: number;
  type: 'photo' | 'video' | 'text';
  title: string;
  content: string;
  media?: string;
  caption?: string;
  emotion?: 'happy' | 'exciting' | 'touching' | 'funny';
}

const KidMovie = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCountdown, setShowCountdown] = useState(true);
  const [countdown, setCountdown] = useState(3);

  // Dados de exemplo - em produção viriam do backend
  const movieScenes: MovieScene[] = [
    {
      id: 1,
      type: 'text',
      title: 'Era uma vez...',
      content: 'Uma incrível aventura está prestes a começar!',
      emotion: 'exciting'
    },
    {
      id: 2,
      type: 'photo',
      title: 'Primeiro Dia de Escola',
      content: 'O grande dia chegou! Mochila nas costas e um sorriso enorme!',
      media: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
      caption: 'Setembro 2024',
      emotion: 'happy'
    },
    {
      id: 3,
      type: 'photo',
      title: 'Festa de Aniversário',
      content: 'Mais um ano cheio de alegria e amor!',
      media: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
      caption: 'A melhor festa do mundo!',
      emotion: 'exciting'
    },
    {
      id: 4,
      type: 'photo',
      title: 'Viagem em Família',
      content: 'Aventuras inesquecíveis juntos!',
      media: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a',
      caption: 'Momentos mágicos',
      emotion: 'touching'
    },
    {
      id: 5,
      type: 'text',
      title: 'E a história continua...',
      content: 'Porque toda grande aventura é apenas o começo de algo ainda mais especial!',
      emotion: 'touching'
    }
  ];

  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (showCountdown && countdown === 0) {
      setTimeout(() => {
        setShowCountdown(false);
        setIsPlaying(true);
      }, 500);
    }
  }, [countdown, showCountdown]);

  useEffect(() => {
    if (isPlaying && currentScene < movieScenes.length - 1) {
      const timer = setTimeout(() => {
        setCurrentScene(prev => prev + 1);
      }, 5000); // 5 segundos por cena
      return () => clearTimeout(timer);
    } else if (isPlaying && currentScene === movieScenes.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentScene, movieScenes.length]);

  const nextScene = () => {
    if (currentScene < movieScenes.length - 1) {
      setCurrentScene(prev => prev + 1);
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setCurrentScene(prev => prev - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const getEmotionColors = (emotion?: string) => {
    switch (emotion) {
      case 'happy':
        return 'from-yellow-400 via-orange-400 to-pink-400';
      case 'exciting':
        return 'from-purple-400 via-pink-400 to-red-400';
      case 'touching':
        return 'from-blue-400 via-purple-400 to-pink-400';
      case 'funny':
        return 'from-green-400 via-yellow-400 to-orange-400';
      default:
        return 'from-pink-400 via-purple-400 to-blue-400';
    }
  };

  const renderScene = () => {
    const scene = movieScenes[currentScene];

    if (scene.type === 'text') {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center px-8 animate-fade-in">
          <div className={`bg-gradient-to-r ${getEmotionColors(scene.emotion)} bg-clip-text text-transparent`}>
            <h2 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl">
              {scene.title}
            </h2>
          </div>
          <p className="text-2xl md:text-4xl text-white font-bold max-w-3xl leading-relaxed">
            {scene.content}
          </p>
          <div className="mt-8 flex space-x-4">
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
            <Star className="w-12 h-12 text-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-12 h-12 text-red-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      );
    }

    if (scene.type === 'photo') {
      return (
        <div className="flex flex-col items-center justify-center h-full animate-fade-in">
          <div className="relative max-w-4xl w-full mx-auto">
            {/* Frame de foto polaroid */}
            <div className="bg-white p-4 md:p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={scene.media} 
                alt={scene.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="mt-4 text-center">
                <h3 className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${getEmotionColors(scene.emotion)} bg-clip-text text-transparent mb-2`}>
                  {scene.title}
                </h3>
                <p className="text-gray-700 text-lg md:text-xl font-semibold">
                  {scene.caption}
                </p>
              </div>
            </div>
            
            {/* Descrição flutuante */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-xl">
                <p className="text-white text-center text-lg font-semibold">
                  {scene.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  if (showCountdown) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30"></div>
        <FloatingKidsElements />
        
        <div className="relative z-10 text-center">
          <Film className="w-32 h-32 text-yellow-400 mx-auto mb-8 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-fade-in">
            {countdown > 0 ? countdown : '🎬'}
          </h1>
          <p className="text-3xl text-yellow-400 font-bold animate-fade-in">
            {countdown > 0 ? 'Preparando o filme...' : 'Ação!'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Letterbox bars - barras pretas cinematográficas */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-20"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"></div>
      
      {/* Floating elements */}
      <FloatingKidsElements />
      
      {/* Main content area */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header com título do filme */}
        <div className="pt-20 pb-8 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 p-1 rounded-2xl">
            <div className="bg-black px-8 py-4 rounded-2xl">
              <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent flex items-center justify-center space-x-3">
                <Film className="w-8 h-8 text-yellow-400" />
                <span>Meu Filme Especial</span>
                <Star className="w-8 h-8 text-pink-400" />
              </h1>
            </div>
          </div>
        </div>

        {/* Scene display */}
        <div className="flex-1 flex items-center justify-center px-4 pb-32">
          {renderScene()}
        </div>

        {/* Controls */}
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-black/80 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 shadow-2xl">
            <div className="flex items-center space-x-6">
              <button
                onClick={prevScene}
                disabled={currentScene === 0}
                className="text-white hover:text-yellow-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110 transition-transform"
              >
                <SkipBack className="w-8 h-8" />
              </button>

              <button
                onClick={togglePlay}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full p-4 hover:from-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>

              <button
                onClick={nextScene}
                disabled={currentScene === movieScenes.length - 1}
                className="text-white hover:text-yellow-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-110 transition-transform"
              >
                <SkipForward className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="fixed bottom-8 left-0 right-0 px-8 z-30">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 h-full transition-all duration-500 rounded-full"
                style={{ width: `${((currentScene + 1) / movieScenes.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-center mt-2 text-white text-sm font-semibold">
              Cena {currentScene + 1} de {movieScenes.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidMovie;


import { Star, Moon, Heart, Music, Clock, Image } from "lucide-react";
import { SlideData } from '../types/slideTypes';
import MusicPlayer from './MusicPlayer';
import { useState, useEffect } from 'react';

interface SlideContentProps {
  slide: SlideData;
}

const SlideContent = ({ slide }: SlideContentProps) => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [childAge, setChildAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0
  });

  const [showHearts, setShowHearts] = useState(false);

  const handleHeartClick = () => {
    setShowHearts(true);
    // Remove os corações após 3 segundos
    setTimeout(() => {
      setShowHearts(false);
    }, 3000);
  };

  useEffect(() => {
    if (slide.title === 'Tempo Juntos') {
      const startDate = new Date('2023-02-14T00:00:00'); // Data do primeiro encontro
      
      const updateCounter = () => {
        const now = new Date();
        const difference = now.getTime() - startDate.getTime();
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeElapsed({ days, hours, minutes, seconds });
      };
      
      updateCounter();
      const interval = setInterval(updateCounter, 1000);
      
      return () => clearInterval(interval);
    }

    // Contador especial para crianças
    if (slide.title === 'Contador da Idade') {
      const birthDate = new Date('2018-05-15T00:00:00'); // Data de nascimento da criança
      
      const updateChildAge = () => {
        const now = new Date();
        const difference = now.getTime() - birthDate.getTime();
        
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        setChildAge({ years, months, days, hours });
      };
      
      updateChildAge();
      const interval = setInterval(updateChildAge, 1000);
      
      return () => clearInterval(interval);
    }
  }, [slide.title]);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />;
      case 'moon':
        return <Moon className="w-8 h-8 text-blue-300 mx-auto mb-4 animate-pulse" />;
      case 'music':
        return <Music className="w-8 h-8 text-purple-400 mx-auto mb-4 animate-pulse" />;
      case 'clock':
        return <Clock className="w-8 h-8 text-green-400 mx-auto mb-4 animate-pulse" />;
      case 'image':
        return <Image className="w-8 h-8 text-orange-400 mx-auto mb-4 animate-pulse" />;
      default:
        return <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4 animate-pulse" />;
    }
  };

  // Fotos de exemplo para o mural de memórias
  const examplePhotos = [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
  ];

  // Fotos especiais para crianças
  const childrenPhotos = [
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
    'https://images.unsplash.com/photo-1544717297-fa95b6ee9643',
    'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
    'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
    'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2'
  ];

  return (
    <div className="relative z-10 h-full flex items-center justify-center">
      {/* Corações flutuantes quando ativados */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-400 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                fontSize: `${16 + Math.random() * 24}px`
              }}
              size={16 + Math.random() * 24}
            />
          ))}
        </div>
      )}

      <div className="text-center text-white px-8 max-w-4xl">
        <div className="mb-4">
          {getIcon(slide.icon || 'heart')}
          <p className="text-pink-300 text-lg font-medium mb-2">{slide.date}</p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent animate-fade-in">
          {slide.title}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-200 animate-fade-in">
          {slide.subtitle}
        </h2>
        
        {/* Player de música especial para o slide de música */}
        {slide.title === 'Nossa Música' ? (
          <div className="mb-8">
            <MusicPlayer />
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in mt-6">
              {slide.description}
            </p>
          </div>
        ) : /* Contador especial da idade da criança */
        slide.title === 'Contador da Idade' ? (
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-yellow-300/30">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                  {childAge.years}
                </div>
                <div className="text-sm text-gray-300">Anos</div>
              </div>
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-green-300/30" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">
                  {childAge.months}
                </div>
                <div className="text-sm text-gray-300">Meses</div>
              </div>
              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-blue-300/30" style={{ animationDelay: '400ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                  {childAge.days}
                </div>
                <div className="text-sm text-gray-300">Dias</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in border border-purple-300/30" style={{ animationDelay: '600ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">
                  {childAge.hours}
                </div>
                <div className="text-sm text-gray-300">Horas</div>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : /* Mural especial de fotos para crianças */
        slide.title === 'Mural de Memórias' ? (
          <div className="mb-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 max-w-3xl mx-auto mb-6">
              {childrenPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden transform hover:scale-110 transition-all duration-300 animate-fade-in border-2 border-rainbow-gradient"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    borderImage: `linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3) 1`
                  }}
                >
                  <img
                    src={photo}
                    alt={`Memória ${index + 1}`}
                    className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-white text-xs font-semibold">📸</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : // ... keep existing code (mural de fotos e outros slides especiais)
        slide.title === 'Mural de Memórias' && !slide.title.includes('criança') ? (
          <div className="mb-8">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 max-w-2xl mx-auto mb-6">
              {examplePhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden transform hover:scale-110 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img
                    src={photo}
                    alt={`Memória ${index + 1}`}
                    className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : /* Foto especial para o slide do primeiro ano */
        slide.title === 'Nosso Primeiro Ano' ? (
          <div className="mb-8">
            <div className="max-w-md mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                alt="Nosso Primeiro Ano"
                className="w-full h-64 object-cover"
              />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : /* Contador especial para o slide Tempo Juntos */
        slide.title === 'Tempo Juntos' ? (
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-2">
                  {timeElapsed.days}
                </div>
                <div className="text-sm text-gray-300">Dias</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">
                  {timeElapsed.hours}
                </div>
                <div className="text-sm text-gray-300">Horas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">
                  {timeElapsed.minutes}
                </div>
                <div className="text-sm text-gray-300">Minutos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">
                  {timeElapsed.seconds}
                </div>
                <div className="text-sm text-gray-300">Segundos</div>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : /* Botão especial para o slide Para Sempre */
        slide.title === 'Para Sempre' ? (
          <div className="mb-8">
            <div className="flex flex-col items-center">
              <p className="text-yellow-300 text-lg font-semibold mb-3 animate-bounce">
                CLIQUE AQUI
              </p>
              <button
                onClick={handleHeartClick}
                className="mb-6 p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full hover:from-pink-600 hover:to-red-600 transform hover:scale-110 transition-all duration-300 animate-pulse"
              >
                <Heart className="w-12 h-12 text-white fill-white" />
              </button>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : (
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
            {slide.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SlideContent;

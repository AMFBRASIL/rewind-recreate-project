
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

  // Ícone especial do signo de Aquário - corrigido
  const AquariusIcon = () => (
    <div className="w-24 h-24 mx-auto mb-6 relative flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-blue-300 animate-pulse"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Símbolo de Aquário - duas ondas horizontais */}
        <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
          <path d="M15 35 Q25 30 35 35 T55 35 T75 35 T85 35" />
          <path d="M15 50 Q25 45 35 50 T55 50 T75 50 T85 50" />
        </g>
        
        {/* Estrelas ao redor do símbolo */}
        <circle cx="20" cy="20" r="1.5" fill="currentColor" className="animate-twinkle" />
        <circle cx="80" cy="25" r="1" fill="currentColor" className="animate-twinkle" style={{animationDelay: '0.5s'}} />
        <circle cx="25" cy="70" r="1.5" fill="currentColor" className="animate-twinkle" style={{animationDelay: '1s'}} />
        <circle cx="75" cy="75" r="1" fill="currentColor" className="animate-twinkle" style={{animationDelay: '1.5s'}} />
        <circle cx="50" cy="15" r="1.2" fill="currentColor" className="animate-twinkle" style={{animationDelay: '2s'}} />
        <circle cx="50" cy="85" r="1.2" fill="currentColor" className="animate-twinkle" style={{animationDelay: '2.5s'}} />
      </svg>
      
      {/* Efeito de brilho ao redor */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
    </div>
  );

  // Ícone especial da lua em 3D
  const MoonIcon3D = () => (
    <div className="w-32 h-32 mx-auto mb-6 relative">
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full text-blue-200 animate-pulse"
        fill="currentColor"
      >
        {/* Lua principal com gradiente 3D */}
        <defs>
          <radialGradient id="moonGradient" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="30%" stopColor="#e2e8f0" />
            <stop offset="70%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </radialGradient>
          <radialGradient id="craterGradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </radialGradient>
          <filter id="moonShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#1e293b" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Lua principal */}
        <circle 
          cx="60" 
          cy="60" 
          r="45" 
          fill="url(#moonGradient)"
          filter="url(#moonShadow)"
          className="animate-pulse"
        />
        
        {/* Crateras da lua */}
        <circle cx="45" cy="40" r="4" fill="url(#craterGradient)" opacity="0.7" />
        <circle cx="70" cy="35" r="2.5" fill="url(#craterGradient)" opacity="0.6" />
        <circle cx="40" cy="65" r="3" fill="url(#craterGradient)" opacity="0.8" />
        <circle cx="75" cy="70" r="2" fill="url(#craterGradient)" opacity="0.5" />
        <circle cx="55" cy="80" r="1.5" fill="url(#craterGradient)" opacity="0.6" />
        
        {/* Brilho da lua */}
        <ellipse 
          cx="50" 
          cy="45" 
          rx="8" 
          ry="12" 
          fill="rgba(255,255,255,0.3)" 
          transform="rotate(-20 50 45)"
        />
        
        {/* Estrelas ao redor */}
        <circle cx="20" cy="25" r="1" fill="#fbbf24" className="animate-twinkle" />
        <circle cx="100" cy="30" r="1.5" fill="#fbbf24" className="animate-twinkle" style={{animationDelay: '0.5s'}} />
        <circle cx="25" cy="85" r="1" fill="#fbbf24" className="animate-twinkle" style={{animationDelay: '1s'}} />
        <circle cx="95" cy="90" r="1.5" fill="#fbbf24" className="animate-twinkle" style={{animationDelay: '1.5s'}} />
        <circle cx="15" cy="60" r="1" fill="#fbbf24" className="animate-twinkle" style={{animationDelay: '2s'}} />
        <circle cx="105" cy="60" r="1" fill="#fbbf24" className="animate-twinkle" style={{animationDelay: '2.5s'}} />
      </svg>
      
      {/* Efeito de brilho ao redor da lua */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-white/10 to-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute inset-4 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );

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

  // Timeline simples para "O Início de Tudo"
  const SimpleTimeline = () => {
    const timelineEvents = [
      { year: '2023', label: 'Primeiro Olhar', color: 'from-pink-400 to-red-400' },
      { year: '2023', label: 'Primeiro Encontro', color: 'from-purple-400 to-pink-400' },
      { year: '2023', label: 'Primeiro Beijo', color: 'from-blue-400 to-purple-400' },
      { year: '2024', label: 'Primeiro Ano', color: 'from-green-400 to-blue-400' },
      { year: '2025', label: 'Para Sempre', color: 'from-yellow-400 to-pink-400' }
    ];

    return (
      <div className="mt-8 mb-6">
        <div className="flex items-center justify-center space-x-4 md:space-x-8 overflow-x-auto pb-4">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex flex-col items-center min-w-max">
              <div 
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${event.color} mb-2 animate-pulse`}
                style={{ animationDelay: `${index * 300}ms` }}
              />
              <div className="text-center">
                <div className="text-sm font-bold text-white mb-1">{event.year}</div>
                <div className="text-xs text-gray-300 whitespace-nowrap">{event.label}</div>
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="hidden md:block absolute w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent mt-1.5"
                     style={{ left: '50%', transform: 'translateX(100%)' }} />
              )}
            </div>
          ))}
        </div>
        {/* Linha conectora para mobile */}
        <div className="md:hidden flex justify-center mt-2">
          <div className="w-64 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-30" />
        </div>
      </div>
    );
  };

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
          {/* Ícone especial para o slide do signo */}
          {slide.title === 'Nosso Signo' ? (
            <AquariusIcon />
          ) : /* Ícone especial para o slide da lua */
          slide.title === 'Nossa Lua' ? (
            <MoonIcon3D />
          ) : (
            getIcon(slide.icon || 'heart')
          )}
          <p className="text-pink-300 text-lg font-medium mb-2">{slide.date}</p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent animate-fade-in">
          {slide.title}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-200 animate-fade-in">
          {slide.subtitle}
        </h2>
        
        {/* Linha do tempo simples para "O Início de Tudo" */}
        {slide.title === 'O Início de Tudo' ? (
          <div className="mb-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in mb-6">
              {slide.description}
            </p>
            <SimpleTimeline />
          </div>
        ) : /* Player de música especial para o slide de música */
        slide.title === 'Nossa Música' ? (
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
        ) :
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


import { Heart, Star, Clock, Image, Baby, Users } from "lucide-react";
import { SlideData } from '../types/slideTypes';
import { useState, useEffect } from 'react';

interface ParentSlideContentProps {
  slide: SlideData;
  formData?: {
    email: string;
    gender: string;
    recipient: string;
    birthDate: string;
    title: string;
    photos: File[];
    backgroundMusic: string;
  };
}

const ParentSlideContent = ({ slide, formData }: ParentSlideContentProps) => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0
  });

  const [showHearts, setShowHearts] = useState(false);

  const handleHeartClick = () => {
    setShowHearts(true);
    setTimeout(() => {
      setShowHearts(false);
    }, 3000);
  };

  useEffect(() => {
    if (slide.title === 'Crescendo Juntos') {
      const birthDate = formData?.birthDate 
        ? new Date(formData.birthDate) 
        : new Date('2020-01-01T00:00:00');
      
      const updateCounter = () => {
        const now = new Date();
        const years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();
        
        if (days < 0) {
          months--;
          days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }
        
        if (months < 0) {
          months += 12;
        }
        
        setTimeElapsed({ years, months, days });
      };
      
      updateCounter();
      const interval = setInterval(updateCounter, 1000 * 60 * 60 * 24); // Update daily
      
      return () => clearInterval(interval);
    }
  }, [slide.title, formData?.birthDate]);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return <Star className="w-8 h-8 text-yellow-400 mx-auto mb-4 animate-pulse" />;
      case 'clock':
        return <Clock className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-pulse" />;
      case 'image':
        return <Image className="w-8 h-8 text-purple-400 mx-auto mb-4 animate-pulse" />;
      case 'baby':
        return <Baby className="w-8 h-8 text-pink-400 mx-auto mb-4 animate-pulse" />;
      case 'users':
        return <Users className="w-8 h-8 text-green-400 mx-auto mb-4 animate-pulse" />;
      default:
        return <Heart className="w-8 h-8 text-pink-400 mx-auto mb-4 animate-pulse" />;
    }
  };

  // Fotos de família para momentos especiais
  const familyPhotos = [
    'https://images.unsplash.com/photo-1511895426328-dc8714aecd42',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    'https://images.unsplash.com/photo-1476703993599-0035a21b17a9',
    'https://images.unsplash.com/photo-1609220136736-443140cffec6',
    'https://images.unsplash.com/photo-1522771930-78848d9293e8'
  ];

  return (
    <div className="relative z-10 h-full flex items-center justify-center">
      {/* Corações flutuantes */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(15)].map((_, i) => (
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
          <p className="text-blue-300 text-lg font-medium mb-2">{slide.date}</p>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent animate-fade-in">
          {slide.title}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-200 animate-fade-in">
          {slide.subtitle}
        </h2>
        
        {/* Contador especial para Crescendo Juntos */}
        {slide.title === 'Crescendo Juntos' ? (
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                  {timeElapsed.years}
                </div>
                <div className="text-sm text-gray-300">Anos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-purple-300 mb-2">
                  {timeElapsed.months}
                </div>
                <div className="text-sm text-gray-300">Meses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl md:text-5xl font-bold text-pink-300 mb-2">
                  {timeElapsed.days}
                </div>
                <div className="text-sm text-gray-300">Dias</div>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : /* Galeria especial para Momentos Especiais */
        slide.title === 'Momentos Especiais' ? (
          <div className="mb-8">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 max-w-2xl mx-auto mb-6">
              {familyPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden transform hover:scale-110 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img
                    src={photo}
                    alt={`Momento ${index + 1}`}
                    className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
          </div>
        ) : /* Botão especial para Amor Eterno */
        slide.title === 'Amor Eterno' ? (
          <div className="mb-8">
            <div className="flex flex-col items-center">
              <p className="text-yellow-300 text-lg font-semibold mb-3 animate-bounce">
                NOSSO AMOR POR VOCÊ
              </p>
              <button
                onClick={handleHeartClick}
                className="mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 animate-pulse"
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

export default ParentSlideContent;

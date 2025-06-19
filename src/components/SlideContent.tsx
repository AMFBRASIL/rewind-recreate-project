
import { Star, Moon, Heart, Music, Clock, Image } from "lucide-react";
import { SlideData } from '../types/slideTypes';
import MusicPlayer from './MusicPlayer';

interface SlideContentProps {
  slide: SlideData;
}

const SlideContent = ({ slide }: SlideContentProps) => {
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

  return (
    <div className="relative z-10 h-full flex items-center justify-center">
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
        ) : /* Mural de fotos especial para o slide de memórias */
        slide.title === 'Mural de Memórias' ? (
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

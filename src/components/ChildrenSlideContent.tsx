
import { SlideData } from '../types/slideTypes';
import { Heart, Star, Moon, Music, Clock, Image, Sparkles, Smile } from 'lucide-react';
import PhotoMemory from './PhotoMemory';

interface ChildrenSlideContentProps {
  slide: SlideData;
  formData?: any;
}

const ChildrenSlideContent = ({ slide, formData }: ChildrenSlideContentProps) => {
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'heart': return <Heart className="w-8 h-8" />;
      case 'star': return <Star className="w-8 h-8" />;
      case 'moon': return <Moon className="w-8 h-8" />;
      case 'music': return <Music className="w-8 h-8" />;
      case 'clock': return <Clock className="w-8 h-8" />;
      case 'image': return <Image className="w-8 h-8" />;
      case 'sparkles': return <Sparkles className="w-8 h-8" />;
      default: return <Smile className="w-8 h-8" />;
    }
  };

  const calculateChildAge = () => {
    if (!formData?.birthDate) return null;
    
    const birthDate = new Date(formData.birthDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    return { years, months, days: diffDays };
  };

  const renderSpecialContent = () => {
    switch (slide.id) {
      case 3: // Brincadeiras e Diversão - Galeria de fotos
        return (
          <div className="mt-8">
            <h4 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <span>🎨</span>
              Nossas Aventuras Divertidas
              <span>🎈</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {formData?.photos?.slice(0, 6).map((photo: File, index: number) => (
                <PhotoMemory
                  key={index}
                  memory={{
                    id: index,
                    title: `Diversão ${index + 1} 🎉`,
                    date: "Momento mágico",
                    image: URL.createObjectURL(photo),
                    description: "Uma aventura super divertida!"
                  }}
                  index={index}
                />
              )) || (
                // Fotos placeholder com tema infantil
                <>
                  <PhotoMemory
                    memory={{
                      id: 1,
                      title: "Brincando Juntos 🧸",
                      date: "Diversão garantida",
                      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
                      description: "Momentos especiais de brincadeira"
                    }}
                    index={0}
                  />
                  <PhotoMemory
                    memory={{
                      id: 2,
                      title: "Sorriso Lindo 😊",
                      date: "Alegria pura",
                      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
                      description: "Esse sorriso ilumina meu dia"
                    }}
                    index={1}
                  />
                  <PhotoMemory
                    memory={{
                      id: 3,
                      title: "Aventuras 🚀",
                      date: "Explorando o mundo",
                      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
                      description: "Descobrindo coisas novas juntos"
                    }}
                    index={2}
                  />
                </>
              )}
            </div>
          </div>
        );
      
      case 5: // Crescendo Forte - Contador de idade
        const childAge = calculateChildAge();
        return childAge ? (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto border-4 border-yellow-300/30">
              <h4 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <span>🎂</span>
                Meu Pequeno Gigante
                <span>✨</span>
              </h4>
              <div className="text-5xl font-bold text-yellow-300 mb-4">
                {childAge.years > 0 && `${childAge.years} ${childAge.years === 1 ? 'aninho' : 'aninhos'}`}
                {childAge.years > 0 && childAge.months > 0 && ' e '}
                {childAge.months > 0 && `${childAge.months} ${childAge.months === 1 ? 'mês' : 'meses'}`}
              </div>
              <p className="text-orange-200 text-lg">
                {childAge.days} dias de pura alegria na nossa vida! 🌈
              </p>
              <div className="mt-4 flex justify-center gap-4 text-2xl">
                <span>🎈</span>
                <span>🎨</span>
                <span>🧸</span>
                <span>🚀</span>
                <span>⭐</span>
              </div>
            </div>
          </div>
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 py-12">
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">🌟</div>
      <div className="absolute top-20 right-20 text-3xl animate-pulse">🎈</div>
      <div className="absolute bottom-20 left-20 text-3xl animate-bounce delay-1000">🦄</div>
      <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-500">🌈</div>
      
      <div className="max-w-4xl mx-auto">
        {/* Icon com estilo infantil */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-md rounded-full p-6 border-4 border-yellow-300/30 shadow-2xl">
            <div className="text-yellow-300">
              {getIcon(slide.icon)}
            </div>
          </div>
        </div>

        {/* Title com emojis */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          {slide.title}
        </h1>

        {/* Subtitle colorida */}
        <h2 className="text-xl md:text-2xl text-yellow-300 mb-6 font-light">
          {slide.subtitle}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          {slide.description}
        </p>

        {/* Date com estilo divertido */}
        <div className="bg-gradient-to-r from-pink-400/20 to-purple-400/20 backdrop-blur-md rounded-full px-8 py-4 border-4 border-yellow-300/30">
          <span className="text-yellow-200 font-bold text-lg">{slide.date}</span>
        </div>

        {/* Special Content */}
        {renderSpecialContent()}
      </div>
    </div>
  );
};

export default ChildrenSlideContent;

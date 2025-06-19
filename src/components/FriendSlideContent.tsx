
import { SlideData } from '../types/slideTypes';
import { Heart, Star, Moon, Music, Clock, Image } from 'lucide-react';
import PhotoMemory from './PhotoMemory';

interface FriendSlideContentProps {
  slide: SlideData;
  formData?: any;
}

const FriendSlideContent = ({ slide, formData }: FriendSlideContentProps) => {
  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'heart': return <Heart className="w-8 h-8" />;
      case 'star': return <Star className="w-8 h-8" />;
      case 'moon': return <Moon className="w-8 h-8" />;
      case 'music': return <Music className="w-8 h-8" />;
      case 'clock': return <Clock className="w-8 h-8" />;
      case 'image': return <Image className="w-8 h-8" />;
      default: return <Heart className="w-8 h-8" />;
    }
  };

  const calculateFriendshipTime = () => {
    if (!formData?.birthDate) return null;
    
    const startDate = new Date(formData.birthDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    return { years, months, days: diffDays };
  };

  const renderSpecialContent = () => {
    switch (slide.id) {
      case 3: // Aventuras Juntos - Galeria de fotos
        return (
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">
              Nossas Aventuras
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {formData?.photos?.slice(0, 6).map((photo: File, index: number) => (
                <PhotoMemory
                  key={index}
                  memory={{
                    id: index,
                    title: `Aventura ${index + 1}`,
                    date: "Momento especial",
                    image: URL.createObjectURL(photo),
                    description: "Uma aventura inesquecível"
                  }}
                  index={index}
                />
              )) || (
                // Fotos placeholder se não há fotos do usuário
                <>
                  <PhotoMemory
                    memory={{
                      id: 1,
                      title: "Nossa Amizade",
                      date: "Sempre juntos",
                      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
                      description: "Momentos especiais de nossa amizade"
                    }}
                    index={0}
                  />
                  <PhotoMemory
                    memory={{
                      id: 2,
                      title: "Diversão",
                      date: "Risos garantidos",
                      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
                      description: "Sempre nos divertindo juntos"
                    }}
                    index={1}
                  />
                  <PhotoMemory
                    memory={{
                      id: 3,
                      title: "Aventuras",
                      date: "Criando memórias",
                      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8",
                      description: "Cada aventura é única"
                    }}
                    index={2}
                  />
                </>
              )}
            </div>
          </div>
        );
      
      case 5: // Crescendo Juntos - Tempo de amizade
        const friendshipTime = calculateFriendshipTime();
        return friendshipTime ? (
          <div className="mt-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">
                Nossa Amizade
              </h4>
              <div className="text-4xl font-bold text-pink-300 mb-2">
                {friendshipTime.years > 0 && `${friendshipTime.years} ${friendshipTime.years === 1 ? 'ano' : 'anos'}`}
                {friendshipTime.years > 0 && friendshipTime.months > 0 && ' e '}
                {friendshipTime.months > 0 && `${friendshipTime.months} ${friendshipTime.months === 1 ? 'mês' : 'meses'}`}
              </div>
              <p className="text-purple-200">
                {friendshipTime.days} dias de amizade verdadeira
              </p>
            </div>
          </div>
        ) : null;
      
      default:
        return null;
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
            <div className="text-pink-300">
              {getIcon(slide.icon)}
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          {slide.title}
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-pink-300 mb-6 font-light">
          {slide.subtitle}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          {slide.description}
        </p>

        {/* Date */}
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <span className="text-pink-200 font-medium">{slide.date}</span>
        </div>

        {/* Special Content */}
        {renderSpecialContent()}
      </div>
    </div>
  );
};

export default FriendSlideContent;

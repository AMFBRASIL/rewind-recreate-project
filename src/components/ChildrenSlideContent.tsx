import { SlideData } from '../types/slideTypes';
import { Heart, Star, Moon, Music, Clock, Image, Sparkles, Smile } from 'lucide-react';
import PhotoMemory from './PhotoMemory';
import MusicPlayer from './MusicPlayer';

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

  const calculateDetailedChildAge = () => {
    if (!formData?.birthDate) return null;
    
    const birthDate = new Date(formData.birthDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    
    // Cálculos mais precisos
    const totalSeconds = Math.floor(diffTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalDays / 30.44); // Média de dias por mês
    const years = Math.floor(totalDays / 365.25); // Considerando anos bissextos
    const remainingDays = totalDays - (years * 365);
    const months = Math.floor(remainingDays / 30.44);
    
    return { 
      years, 
      months, 
      totalDays, 
      totalWeeks,
      totalHours, 
      totalMinutes,
      totalSeconds
    };
  };

  const getMusicName = (musicKey: string) => {
    const musicMap: { [key: string]: string } = {
      'perfect': 'Perfect - Ed Sheeran',
      'all-of-me': 'All of Me - John Legend',
      'thinking-out-loud': 'Thinking Out Loud - Ed Sheeran',
      'a-thousand-years': 'A Thousand Years - Christina Perri',
      'make-you-feel-my-love': 'Make You Feel My Love - Adele',
      'can-help-myself': "Can't Help Myself - Four Tops",
      'at-last': 'At Last - Etta James',
      'stand-by-me': 'Stand By Me - Ben E. King'
    };
    return musicMap[musicKey] || 'Música Especial';
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

      case 6: // Nossa Música Especial
        return (
          <div className="mt-8">
            <div className="max-w-lg mx-auto">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 border-4 border-yellow-300/30">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🎵</div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {getMusicName(formData?.backgroundMusic || 'perfect')}
                  </h4>
                  <p className="text-purple-200">Nossa canção do coração</p>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Music className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-bold">Tocando agora</div>
                      <div className="text-purple-300 text-sm">Para minha criança especial</div>
                    </div>
                  </div>
                  
                  <div className="relative bg-white/20 rounded-full h-2 mb-2">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all duration-300 w-1/3"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-purple-300">
                    <span>1:30</span>
                    <span>3:45</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-purple-200 text-sm italic">
                    "Esta música sempre me lembra de você! 💕"
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Mural de Memórias
        return (
          <div className="mt-8">
            <h4 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <span>📸</span>
              Nosso Mural de Memórias
              <span>🌈</span>
            </h4>
            
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md rounded-3xl p-6 border-4 border-yellow-300/30 mb-8">
                <p className="text-white text-lg text-center leading-relaxed">
                  <span className="text-2xl">💝</span> Cada foto aqui é um pedacinho do nosso amor guardado para sempre! 
                  São momentos únicos que vivemos juntos, cheios de risadas, aventuras e muito carinho. 
                  Olhando essas fotos, meu coração se enche de gratidão por ter você na minha vida! <span className="text-2xl">🥰</span>
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {formData?.photos?.map((photo: File, index: number) => (
                <PhotoMemory
                  key={index}
                  memory={{
                    id: index,
                    title: `Memória ${index + 1} 💖`,
                    date: "Momento especial",
                    image: URL.createObjectURL(photo),
                    description: "Um tesouro guardado no meu coração!"
                  }}
                  index={index}
                />
              )) || (
                // Fotos placeholder
                <>
                  <PhotoMemory
                    memory={{
                      id: 1,
                      title: "Felicidade Pura 😄",
                      date: "Alegria infinita",
                      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
                      description: "Seu sorriso é minha luz"
                    }}
                    index={0}
                  />
                  <PhotoMemory
                    memory={{
                      id: 2,
                      title: "Aventura Juntos 🚀",
                      date: "Explorando",
                      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
                      description: "Descobrindo o mundo"
                    }}
                    index={1}
                  />
                  <PhotoMemory
                    memory={{
                      id: 3,
                      title: "Brincadeiras 🎈",
                      date: "Diversão total",
                      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
                      description: "Momentos mágicos"
                    }}
                    index={2}
                  />
                  <PhotoMemory
                    memory={{
                      id: 4,
                      title: "Carinho 💕",
                      date: "Amor puro",
                      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
                      description: "Você é meu tesouro"
                    }}
                    index={3}
                  />
                </>
              )}
            </div>
          </div>
        );

      case 8: // Tempo de Vida Juntos
        const childAge = calculateDetailedChildAge();
        return childAge ? (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto border-4 border-yellow-300/30">
              <h4 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-2">
                <span>⏰</span>
                Calculadora do Nosso Tempo Juntos
                <span>✨</span>
              </h4>
              
              <div className="mb-6">
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-4 mb-4">
                  <p className="text-white text-lg">
                    Desde <span className="font-bold text-yellow-300">{new Date(formData.birthDate).toLocaleDateString('pt-BR')}</span> até hoje:
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">{childAge.years}</div>
                  <div className="text-purple-200">{childAge.years === 1 ? 'Aninho' : 'Aninhos'}</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-4xl font-bold text-pink-300 mb-2">{childAge.months}</div>
                  <div className="text-purple-200">{childAge.months === 1 ? 'Mês' : 'Meses'}</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-green-300 mb-2">{childAge.totalDays.toLocaleString()}</div>
                  <div className="text-purple-200">Dias</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-3xl font-bold text-blue-300 mb-2">{childAge.totalWeeks.toLocaleString()}</div>
                  <div className="text-purple-200">Semanas</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-orange-300 mb-2">{childAge.totalHours.toLocaleString()}</div>
                  <div className="text-purple-200">Horas</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-red-300 mb-2">{childAge.totalMinutes.toLocaleString()}</div>
                  <div className="text-purple-200">Minutos</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 mb-4">
                <p className="text-white text-xl mb-2">
                  🎉 <span className="font-bold text-yellow-300">{childAge.totalDays.toLocaleString()}</span> dias de alegria pura!
                </p>
                <p className="text-purple-200 text-lg">
                  Isso são <span className="font-bold text-pink-300">{childAge.totalSeconds.toLocaleString()}</span> segundos de amor! 💖
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-4">
                <p className="text-white text-base italic">
                  "Cada segundo ao seu lado é um presente! Obrigado por tornar minha vida tão especial! 
                  Que venham muitos mais dias, semanas, meses e anos de aventuras juntos! 🌈✨"
                </p>
              </div>
              
              <div className="mt-6 flex justify-center gap-4 text-3xl">
                <span className="animate-bounce">🎈</span>
                <span className="animate-pulse">🎨</span>
                <span className="animate-bounce delay-100">🧸</span>
                <span className="animate-pulse delay-200">🚀</span>
                <span className="animate-bounce delay-300">⭐</span>
                <span className="animate-pulse delay-400">🌟</span>
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

import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import CinematicTransition from "./CinematicTransition";
import EmotionalParticles from "./EmotionalParticles";
import { Heart, Quote } from "lucide-react";

export interface EmotionalSlideData {
  id: number;
  type: "intro" | "photo" | "quote" | "milestone" | "dedication" | "finale";
  backgroundImage?: string;
  backgroundColor?: string;
  title?: string;
  subtitle?: string;
  text?: string;
  quote?: string;
  quoteAuthor?: string;
  date?: string;
  mood: "romantic" | "nostalgic" | "joyful" | "bittersweet";
}

interface EmotionalSlideProps {
  slide: EmotionalSlideData;
  isActive: boolean;
}

const EmotionalSlide = ({ slide, isActive }: EmotionalSlideProps) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    if (isActive) {
      setShowTitle(false);
      setShowSubtitle(false);
      setShowText(false);
      setShowQuote(false);
      
      const timer1 = setTimeout(() => setShowTitle(true), 500);
      const timer2 = setTimeout(() => setShowSubtitle(true), 1500);
      const timer3 = setTimeout(() => setShowText(true), 2500);
      const timer4 = setTimeout(() => setShowQuote(true), 1000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isActive, slide.id]);

  const getMoodGradient = () => {
    switch (slide.mood) {
      case "romantic":
        return "from-rose-900/90 via-pink-900/80 to-purple-900/90";
      case "nostalgic":
        return "from-amber-900/90 via-orange-900/80 to-rose-900/90";
      case "joyful":
        return "from-yellow-900/80 via-amber-900/70 to-orange-900/80";
      case "bittersweet":
        return "from-purple-900/90 via-indigo-900/80 to-blue-900/90";
      default:
        return "from-gray-900/90 via-gray-800/80 to-gray-900/90";
    }
  };

  const renderIntroSlide = () => (
    <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
      <EmotionalParticles mood={slide.mood} intensity={40} />
      
      <CinematicTransition isActive={showTitle} direction="zoom">
        <div className="mb-8">
          <Heart className="w-20 h-20 text-pink-400 mx-auto animate-pulse drop-shadow-2xl" />
        </div>
      </CinematicTransition>
      
      <CinematicTransition isActive={showTitle} direction="slide">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
          {slide.title && (
            <TypewriterText 
              text={slide.title} 
              delay={80} 
              className="bg-gradient-to-r from-pink-200 via-white to-pink-200 bg-clip-text text-transparent"
            />
          )}
        </h1>
      </CinematicTransition>
      
      {showSubtitle && slide.subtitle && (
        <CinematicTransition isActive={showSubtitle} direction="fade">
          <p className="text-2xl md:text-3xl text-pink-200 max-w-3xl leading-relaxed">
            <TypewriterText text={slide.subtitle} delay={40} startDelay={500} />
          </p>
        </CinematicTransition>
      )}
    </div>
  );

  const renderPhotoSlide = () => (
    <div className="relative h-full flex items-center justify-center">
      <EmotionalParticles mood={slide.mood} intensity={20} />
      
      <div className="relative max-w-4xl mx-auto px-8">
        <CinematicTransition isActive={showTitle} direction="zoom">
          <div className="relative group">
            {/* Photo Frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
              <img 
                src={slide.backgroundImage} 
                alt={slide.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  animation: isActive ? "kenBurns 15s ease-in-out infinite alternate" : "none"
                }}
              />
            </div>
          </div>
        </CinematicTransition>
        
        <CinematicTransition isActive={showSubtitle} direction="slide">
          <div className="text-center mt-8">
            {slide.date && (
              <span className="text-pink-300 text-lg font-medium tracking-wider uppercase">
                {slide.date}
              </span>
            )}
            {slide.title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 drop-shadow-lg">
                <TypewriterText text={slide.title} delay={60} />
              </h2>
            )}
          </div>
        </CinematicTransition>
        
        {showText && slide.text && (
          <CinematicTransition isActive={showText} direction="fade">
            <p className="text-xl text-pink-100 text-center mt-6 max-w-2xl mx-auto leading-relaxed italic">
              <TypewriterText text={slide.text} delay={30} />
            </p>
          </CinematicTransition>
        )}
      </div>
      
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1) translateX(0); }
          100% { transform: scale(1.1) translateX(-2%); }
        }
      `}</style>
    </div>
  );

  const renderQuoteSlide = () => (
    <div className="relative h-full flex items-center justify-center px-8">
      <EmotionalParticles mood={slide.mood} intensity={25} />
      
      <CinematicTransition isActive={showQuote} direction="zoom">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-pink-400/50 mx-auto mb-8 rotate-180" />
          
          <blockquote className="text-3xl md:text-5xl font-light text-white leading-relaxed mb-8 italic">
            {slide.quote && <TypewriterText text={slide.quote} delay={50} />}
          </blockquote>
          
          {slide.quoteAuthor && (
            <CinematicTransition isActive={showSubtitle} direction="fade">
              <cite className="text-xl text-pink-300 not-italic">
                — {slide.quoteAuthor}
              </cite>
            </CinematicTransition>
          )}
          
          <Quote className="w-16 h-16 text-pink-400/50 mx-auto mt-8" />
        </div>
      </CinematicTransition>
    </div>
  );

  const renderMilestoneSlide = () => (
    <div className="relative h-full flex items-center justify-center">
      <EmotionalParticles mood={slide.mood} intensity={30} />
      
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {slide.backgroundImage && (
            <CinematicTransition isActive={showTitle} direction="slide">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full opacity-50 blur-2xl animate-pulse" />
                <img 
                  src={slide.backgroundImage}
                  alt={slide.title}
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
            </CinematicTransition>
          )}
          
          <CinematicTransition isActive={showSubtitle} direction="fade">
            <div className="text-center md:text-left">
              {slide.date && (
                <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full mb-6">
                  <span className="text-white font-semibold tracking-wider">{slide.date}</span>
                </div>
              )}
              
              {slide.title && (
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                  <TypewriterText text={slide.title} delay={70} />
                </h2>
              )}
              
              {slide.text && (
                <p className="text-xl text-pink-100 leading-relaxed">
                  <TypewriterText text={slide.text} delay={25} startDelay={1000} />
                </p>
              )}
            </div>
          </CinematicTransition>
        </div>
      </div>
    </div>
  );

  const renderDedicationSlide = () => (
    <div className="relative h-full flex items-center justify-center px-8">
      <EmotionalParticles mood="romantic" intensity={50} />
      
      <div className="max-w-3xl mx-auto text-center">
        <CinematicTransition isActive={showTitle} direction="zoom">
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-pink-500/30 rounded-full blur-3xl animate-pulse" />
              <Heart className="relative w-24 h-24 text-pink-400 fill-pink-400 animate-heartbeat drop-shadow-2xl" />
            </div>
          </div>
        </CinematicTransition>
        
        <CinematicTransition isActive={showSubtitle} direction="slide">
          {slide.title && (
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              <TypewriterText text={slide.title} delay={100} />
            </h2>
          )}
        </CinematicTransition>
        
        {showText && slide.text && (
          <CinematicTransition isActive={showText} direction="fade">
            <p className="text-2xl md:text-3xl text-pink-100 leading-relaxed italic">
              <TypewriterText text={slide.text} delay={40} />
            </p>
          </CinematicTransition>
        )}
      </div>
      
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.15); }
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );

  const renderFinaleSlide = () => (
    <div className="relative h-full flex items-center justify-center px-8">
      <EmotionalParticles mood="romantic" intensity={60} />
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <CinematicTransition isActive={showTitle} direction="zoom">
          <div className="mb-8 flex justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i}
                className="w-8 h-8 text-pink-400 fill-pink-400 animate-pulse drop-shadow-lg"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </CinematicTransition>
        
        <CinematicTransition isActive={showSubtitle} direction="slide">
          {slide.title && (
            <h2 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl">
              <TypewriterText 
                text={slide.title} 
                delay={120}
                className="bg-gradient-to-r from-pink-300 via-white to-pink-300 bg-clip-text text-transparent"
              />
            </h2>
          )}
        </CinematicTransition>
        
        {showText && slide.text && (
          <CinematicTransition isActive={showText} direction="fade">
            <p className="text-2xl md:text-3xl text-pink-100 leading-relaxed max-w-2xl mx-auto">
              <TypewriterText text={slide.text} delay={35} />
            </p>
          </CinematicTransition>
        )}
        
        <CinematicTransition isActive={showText} direction="slide">
          <div className="mt-12 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i}
                className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </CinematicTransition>
      </div>
    </div>
  );

  const renderSlideContent = () => {
    switch (slide.type) {
      case "intro":
        return renderIntroSlide();
      case "photo":
        return renderPhotoSlide();
      case "quote":
        return renderQuoteSlide();
      case "milestone":
        return renderMilestoneSlide();
      case "dedication":
        return renderDedicationSlide();
      case "finale":
        return renderFinaleSlide();
      default:
        return renderPhotoSlide();
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image with Ken Burns */}
      {slide.backgroundImage && slide.type !== "photo" && slide.type !== "milestone" && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out"
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            transform: isActive ? "scale(1.1)" : "scale(1)",
          }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getMoodGradient()}`} />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {renderSlideContent()}
      </div>
    </div>
  );
};

export default EmotionalSlide;

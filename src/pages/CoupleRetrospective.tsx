
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { slides } from "../data/slidesData";
import SlideBackground from "../components/SlideBackground";
import SlideContent from "../components/SlideContent";
import SlideNavigation from "../components/SlideNavigation";
import SlideProgressBar from "../components/SlideProgressBar";
import ScrollHint from "../components/ScrollHint";
import FloatingHearts from "../components/FloatingHearts";
import Timeline from "../components/Timeline";

const CoupleRetrospective = () => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTimeline, setShowTimeline] = useState(false);
  
  // Get form data from navigation state
  const formData = location.state?.formData;

  useEffect(() => {
    // If form data exists, you can use it to customize the retrospective
    if (formData) {
      console.log('Retrospective created with data:', formData);
      // Here you could customize slides based on formData.recipient, formData.title, etc.
    }
  }, [formData]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleTimeline = () => {
    setShowTimeline(!showTimeline);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowUp') prevSlide();
      if (e.key === 't' || e.key === 'T') toggleTimeline();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlideData = slides[currentSlide];

  if (showTimeline) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full overflow-y-auto">
          <Timeline />
          
          {/* Botão para voltar aos slides */}
          <div className="fixed top-8 left-8 z-20">
            <button
              onClick={toggleTimeline}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ← Voltar aos Slides
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SlideBackground slide={currentSlideData} />
      <SlideContent slide={currentSlideData} />
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onGoToSlide={goToSlide}
      />
      
      <SlideProgressBar
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
      
      {/* Botão para mostrar timeline */}
      <div className="fixed top-8 right-8 z-20">
        <button
          onClick={toggleTimeline}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          📅 Linha do Tempo
        </button>
      </div>
      
      <ScrollHint show={currentSlide === 0} />
      <FloatingHearts />
    </div>
  );
};

export default CoupleRetrospective;

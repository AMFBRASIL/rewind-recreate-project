
import { useState, useEffect } from "react";
import { slides } from "../data/slidesData";
import SlideBackground from "../components/SlideBackground";
import SlideContent from "../components/SlideContent";
import SlideNavigation from "../components/SlideNavigation";
import SlideProgressBar from "../components/SlideProgressBar";
import ScrollHint from "../components/ScrollHint";
import FloatingHearts from "../components/FloatingHearts";

const CoupleRetrospective = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowUp') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlideData = slides[currentSlide];

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
      
      <ScrollHint show={currentSlide === 0} />
      <FloatingHearts />
    </div>
  );
};

export default CoupleRetrospective;

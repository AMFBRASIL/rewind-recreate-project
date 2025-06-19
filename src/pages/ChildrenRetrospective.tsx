
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { childrenSlides } from "../data/childrenSlidesData";
import SlideBackground from "../components/SlideBackground";
import ChildrenSlideContent from "../components/ChildrenSlideContent";
import SlideNavigation from "../components/SlideNavigation";
import SlideProgressBar from "../components/SlideProgressBar";
import ScrollHint from "../components/ScrollHint";
import FloatingHearts from "../components/FloatingHearts";

const ChildrenRetrospective = () => {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get form data from navigation state
  const formData = location.state?.formData;

  useEffect(() => {
    if (formData) {
      console.log('Children retrospective created with data:', formData);
    }
  }, [formData]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % childrenSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + childrenSlides.length) % childrenSlides.length);
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

  const currentSlideData = childrenSlides[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SlideBackground slide={currentSlideData} />
      <ChildrenSlideContent slide={currentSlideData} formData={formData} />
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={childrenSlides.length}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onGoToSlide={goToSlide}
      />
      
      <SlideProgressBar
        currentSlide={currentSlide}
        totalSlides={childrenSlides.length}
      />
      
      <ScrollHint show={currentSlide === 0} />
      <FloatingHearts />
    </div>
  );
};

export default ChildrenRetrospective;

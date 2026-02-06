import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditorCanvas from "@/components/editor/EditorCanvas";
import EditorRightSidebar from "@/components/editor/EditorRightSidebar";

export interface CanvasElement {
  id: string;
  type: 'text' | 'image' | 'youtube' | 'emoji' | 'counter' | 'sticker';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  content: string;
  style?: {
    fontSize?: number;
    fontFamily?: string;
    color?: string;
    backgroundColor?: string;
    borderRadius?: number;
    opacity?: number;
    borderStyle?: string;
  };
}

export interface Slide {
  id: string;
  elements: CanvasElement[];
  background: string;
}

const TemplateEditor = () => {
  const [slides, setSlides] = useState<Slide[]>([
    { 
      id: '1', 
      elements: [], 
      background: '#0f172a'
    }
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const currentSlide = slides[currentSlideIndex];

  // Element counts for sidebar badges
  const elementCounts = {
    text: currentSlide.elements.filter(e => e.type === 'text').length,
    image: currentSlide.elements.filter(e => e.type === 'image').length,
    youtube: currentSlide.elements.filter(e => e.type === 'youtube').length,
    counter: currentSlide.elements.filter(e => e.type === 'counter').length,
    emoji: currentSlide.elements.filter(e => e.type === 'emoji' || e.type === 'sticker').length,
  };

  const maxCounts = {
    text: 30,
    image: 7,
    youtube: 2,
    audio: 1,
    counter: 1,
    emoji: 50,
  };

  const addElement = (element: Omit<CanvasElement, 'id' | 'x' | 'y'>) => {
    const newElement: CanvasElement = {
      ...element,
      id: `el-${Date.now()}`,
      x: 100 + Math.random() * 300,
      y: 100 + Math.random() * 200,
    };

    setSlides(prev => prev.map((slide, idx) => 
      idx === currentSlideIndex 
        ? { ...slide, elements: [...slide.elements, newElement] }
        : slide
    ));
    setSelectedElement(newElement.id);
  };

  const updateElement = (id: string, updates: Partial<CanvasElement>) => {
    setSlides(prev => prev.map((slide, idx) => 
      idx === currentSlideIndex 
        ? { 
            ...slide, 
            elements: slide.elements.map(el => 
              el.id === id ? { ...el, ...updates } : el
            )
          }
        : slide
    ));
  };

  const deleteElement = (id: string) => {
    setSlides(prev => prev.map((slide, idx) => 
      idx === currentSlideIndex 
        ? { ...slide, elements: slide.elements.filter(el => el.id !== id) }
        : slide
    ));
    setSelectedElement(null);
  };

  return (
    <div className="h-screen flex flex-col bg-[#0a0e1a] text-white overflow-hidden">
      {/* Header */}
      <header className="h-14 flex items-center justify-center relative z-10">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
          <span className="font-semibold text-lg">LoveYuu</span>
          <span className="text-zinc-500">▾</span>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        {/* Canvas */}
        <EditorCanvas 
          slide={currentSlide}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
          updateElement={updateElement}
          deleteElement={deleteElement}
        />

        {/* Right Sidebar */}
        <EditorRightSidebar 
          onAddElement={addElement}
          elementCounts={elementCounts}
          maxCounts={maxCounts}
        />
      </div>

      {/* Finalizar Button */}
      <div className="absolute bottom-6 right-6 z-20">
        <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-pink-500/30">
          Finalizar e criar
        </Button>
      </div>
    </div>
  );
};

export default TemplateEditor;

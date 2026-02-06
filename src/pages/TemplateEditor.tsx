import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Type, Image, Youtube, Smile, Square, Circle, 
  Triangle, Star, Heart, Trash2, Copy, Layers,
  ZoomIn, ZoomOut, Undo, Redo, Download, Eye,
  Move, RotateCw, Palette, Plus, GripVertical,
  Play, Music, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditorCanvas from "@/components/editor/EditorCanvas";
import EditorSidebar from "@/components/editor/EditorSidebar";
import EditorToolbar from "@/components/editor/EditorToolbar";
import SlidePanel from "@/components/editor/SlidePanel";

export interface CanvasElement {
  id: string;
  type: 'text' | 'image' | 'youtube' | 'emoji' | 'shape' | 'sticker';
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
  };
}

export interface Slide {
  id: string;
  elements: CanvasElement[];
  background: string;
}

const TemplateEditor = () => {
  const [slides, setSlides] = useState<Slide[]>([
    { id: '1', elements: [], background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);

  const currentSlide = slides[currentSlideIndex];

  const addElement = (element: Omit<CanvasElement, 'id' | 'x' | 'y'>) => {
    const newElement: CanvasElement = {
      ...element,
      id: `el-${Date.now()}`,
      x: 100 + Math.random() * 200,
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

  const addSlide = () => {
    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      elements: [],
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    };
    setSlides(prev => [...prev, newSlide]);
    setCurrentSlideIndex(slides.length);
  };

  const duplicateSlide = (index: number) => {
    const slideToCopy = slides[index];
    const newSlide: Slide = {
      ...slideToCopy,
      id: `slide-${Date.now()}`,
      elements: slideToCopy.elements.map(el => ({ ...el, id: `el-${Date.now()}-${Math.random()}` }))
    };
    setSlides(prev => [...prev.slice(0, index + 1), newSlide, ...prev.slice(index + 1)]);
  };

  const deleteSlide = (index: number) => {
    if (slides.length === 1) return;
    setSlides(prev => prev.filter((_, idx) => idx !== index));
    if (currentSlideIndex >= slides.length - 1) {
      setCurrentSlideIndex(Math.max(0, slides.length - 2));
    }
  };

  const updateSlideBackground = (background: string) => {
    setSlides(prev => prev.map((slide, idx) => 
      idx === currentSlideIndex 
        ? { ...slide, background }
        : slide
    ));
  };

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white overflow-hidden">
      {/* Top Toolbar */}
      <EditorToolbar 
        zoom={zoom}
        setZoom={setZoom}
        onPreview={() => console.log('Preview')}
        onExport={() => console.log('Export')}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Modules */}
        <EditorSidebar 
          onAddElement={addElement}
          onChangeBackground={updateSlideBackground}
        />

        {/* Center - Canvas */}
        <div className="flex-1 flex flex-col">
          <EditorCanvas 
            slide={currentSlide}
            selectedElement={selectedElement}
            setSelectedElement={setSelectedElement}
            updateElement={updateElement}
            deleteElement={deleteElement}
            zoom={zoom}
          />
        </div>

        {/* Right - Slides Panel */}
        <SlidePanel 
          slides={slides}
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
          addSlide={addSlide}
          duplicateSlide={duplicateSlide}
          deleteSlide={deleteSlide}
        />
      </div>
    </div>
  );
};

export default TemplateEditor;

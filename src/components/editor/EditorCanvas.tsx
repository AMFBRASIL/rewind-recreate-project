import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Trash2, Copy, RotateCw, Move } from "lucide-react";
import { CanvasElement, Slide } from "@/pages/TemplateEditor";
import DraggableElement from "./DraggableElement";

interface EditorCanvasProps {
  slide: Slide;
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
  updateElement: (id: string, updates: Partial<CanvasElement>) => void;
  deleteElement: (id: string) => void;
  zoom: number;
}

const EditorCanvas = ({ 
  slide, 
  selectedElement, 
  setSelectedElement, 
  updateElement, 
  deleteElement,
  zoom 
}: EditorCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current || (e.target as HTMLElement).classList.contains('canvas-area')) {
      setSelectedElement(null);
    }
  };

  return (
    <div 
      className="flex-1 bg-zinc-950 flex items-center justify-center p-8 overflow-auto"
      onClick={handleCanvasClick}
    >
      {/* Canvas Container with zoom */}
      <div 
        className="relative transition-transform duration-200"
        style={{ transform: `scale(${zoom / 100})` }}
      >
        {/* Canvas (9:16 aspect ratio for mobile-first) */}
        <div
          ref={canvasRef}
          className="canvas-area relative w-[360px] h-[640px] rounded-2xl shadow-2xl overflow-hidden"
          style={{ background: slide.background }}
        >
          {/* Grid overlay for alignment */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="w-full h-full" 
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
          </div>

          {/* Center guides */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500/20" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-purple-500/20" />
          </div>

          {/* Elements */}
          {slide.elements.map((element) => (
            <DraggableElement
              key={element.id}
              element={element}
              isSelected={selectedElement === element.id}
              onSelect={() => setSelectedElement(element.id)}
              onUpdate={(updates) => updateElement(element.id, updates)}
              onDelete={() => deleteElement(element.id)}
            />
          ))}

          {/* Empty state */}
          {slide.elements.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center text-white/30">
                <Move className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Arraste elementos aqui</p>
                <p className="text-xs mt-1">ou clique na barra lateral</p>
              </div>
            </div>
          )}
        </div>

        {/* Canvas shadow */}
        <div className="absolute -inset-4 bg-gradient-to-b from-purple-500/5 to-pink-500/5 rounded-3xl -z-10 blur-xl" />
      </div>
    </div>
  );
};

export default EditorCanvas;

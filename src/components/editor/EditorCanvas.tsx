import { useRef } from "react";
import { Move } from "lucide-react";
import { CanvasElement, Slide } from "@/pages/TemplateEditor";
import DraggableElement from "./DraggableElement";

interface EditorCanvasProps {
  slide: Slide;
  selectedElement: string | null;
  setSelectedElement: (id: string | null) => void;
  updateElement: (id: string, updates: Partial<CanvasElement>) => void;
  deleteElement: (id: string) => void;
}

const EditorCanvas = ({ 
  slide, 
  selectedElement, 
  setSelectedElement, 
  updateElement, 
  deleteElement,
}: EditorCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current || (e.target as HTMLElement).classList.contains('canvas-area')) {
      setSelectedElement(null);
    }
  };

  return (
    <div 
      ref={canvasRef}
      className="flex-1 relative overflow-hidden canvas-area"
      onClick={handleCanvasClick}
      style={{ background: slide.background }}
    >
      {/* Dot Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

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

      {/* Empty state hint */}
      {slide.elements.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white/20">
            <Move className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg">Clique nos ícones à direita</p>
            <p className="text-sm mt-1">para adicionar elementos</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorCanvas;

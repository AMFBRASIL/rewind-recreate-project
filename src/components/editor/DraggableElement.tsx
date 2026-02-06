import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, X, Youtube } from "lucide-react";
import { CanvasElement } from "@/pages/TemplateEditor";
import CounterWidget from "./widgets/CounterWidget";
import YouTubeWidget from "./widgets/YouTubeWidget";
import ImageWidget from "./widgets/ImageWidget";
import TextWidget from "./widgets/TextWidget";

interface DraggableElementProps {
  element: CanvasElement;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (updates: Partial<CanvasElement>) => void;
  onDelete: () => void;
}

const DraggableElement = ({ 
  element, 
  isSelected, 
  onSelect, 
  onUpdate, 
  onDelete 
}: DraggableElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    onUpdate({
      x: element.x + info.offset.x,
      y: element.y + info.offset.y,
    });
  };

  const renderContent = () => {
    switch (element.type) {
      case 'text':
        return (
          <TextWidget 
            element={element} 
            onUpdate={onUpdate} 
            isSelected={isSelected}
          />
        );

      case 'image':
        return (
          <ImageWidget 
            element={element} 
            onUpdate={onUpdate}
          />
        );

      case 'youtube':
        return (
          <YouTubeWidget 
            element={element} 
            onUpdate={onUpdate}
          />
        );

      case 'counter':
        return <CounterWidget />;

      case 'emoji':
      case 'sticker':
        return (
          <div 
            className="w-full h-full flex items-center justify-center select-none"
            style={{ fontSize: element.style?.fontSize || 80 }}
          >
            {element.content}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={elementRef}
      className={`absolute cursor-move ${isSelected ? 'z-50' : 'z-10'}`}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        rotate: element.rotation,
      }}
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      whileDrag={{ scale: 1.02, cursor: 'grabbing' }}
    >
      {/* Delete button */}
      {isSelected && !isDragging && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 -right-3 w-7 h-7 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg z-10"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <X className="w-4 h-4 text-white" />
        </motion.button>
      )}

      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute -inset-1 border-2 border-pink-500 rounded-xl pointer-events-none" />
      )}

      {/* Content */}
      <div className="w-full h-full">
        {renderContent()}
      </div>
    </motion.div>
  );
};

export default DraggableElement;

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, Copy, RotateCw, GripVertical } from "lucide-react";
import { CanvasElement } from "@/pages/TemplateEditor";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState(element.content);

  useEffect(() => {
    setEditableContent(element.content);
  }, [element.content]);

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    onUpdate({
      x: element.x + info.offset.x,
      y: element.y + info.offset.y,
    });
  };

  const handleDoubleClick = () => {
    if (element.type === 'text') {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate({ content: editableContent });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setEditableContent(element.content);
      setIsEditing(false);
    }
  };

  const renderContent = () => {
    switch (element.type) {
      case 'text':
        if (isEditing) {
          return (
            <textarea
              value={editableContent}
              onChange={(e) => setEditableContent(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full h-full bg-transparent border-none outline-none resize-none text-center"
              style={{
                fontSize: element.style?.fontSize || 24,
                fontFamily: element.style?.fontFamily || 'Inter',
                color: element.style?.color || '#ffffff',
              }}
            />
          );
        }
        return (
          <div 
            className="w-full h-full flex items-center justify-center text-center cursor-text"
            style={{
              fontSize: element.style?.fontSize || 24,
              fontFamily: element.style?.fontFamily || 'Inter',
              color: element.style?.color || '#ffffff',
            }}
          >
            {element.content}
          </div>
        );

      case 'image':
        return (
          <img 
            src={element.content} 
            alt="" 
            className="w-full h-full object-cover rounded-lg"
            draggable={false}
          />
        );

      case 'youtube':
        return (
          <div className="w-full h-full bg-black rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${element.content}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="pointer-events-none"
            />
          </div>
        );

      case 'emoji':
      case 'sticker':
        return (
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ fontSize: element.style?.fontSize || 48 }}
          >
            {element.content}
          </div>
        );

      case 'shape':
        const shapeStyles: React.CSSProperties = {
          width: '100%',
          height: '100%',
          backgroundColor: element.style?.backgroundColor || '#8b5cf6',
        };

        if (element.content === 'círculo' || element.content === 'circle') {
          shapeStyles.borderRadius = '50%';
        } else if (element.content === 'triângulo' || element.content === 'triangle') {
          return (
            <div 
              className="w-0 h-0"
              style={{
                borderLeft: `${element.width / 2}px solid transparent`,
                borderRight: `${element.width / 2}px solid transparent`,
                borderBottom: `${element.height}px solid ${element.style?.backgroundColor || '#8b5cf6'}`,
              }}
            />
          );
        } else if (element.content === 'estrela' || element.content === 'star') {
          return (
            <div 
              className="flex items-center justify-center text-6xl"
              style={{ color: element.style?.backgroundColor || '#8b5cf6' }}
            >
              ★
            </div>
          );
        } else if (element.content === 'coração' || element.content === 'heart') {
          return (
            <div 
              className="flex items-center justify-center text-6xl"
              style={{ color: element.style?.backgroundColor || '#8b5cf6' }}
            >
              ❤️
            </div>
          );
        }

        return <div style={shapeStyles} className="rounded-lg" />;

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
      onDoubleClick={handleDoubleClick}
      whileHover={{ scale: isSelected ? 1 : 1.02 }}
      whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
    >
      {/* Selection border */}
      {isSelected && (
        <div className="absolute -inset-1 border-2 border-purple-500 rounded-lg pointer-events-none">
          {/* Resize handles */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white rounded-full border-2 border-purple-500 cursor-nw-resize" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white rounded-full border-2 border-purple-500 cursor-ne-resize" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white rounded-full border-2 border-purple-500 cursor-sw-resize" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white rounded-full border-2 border-purple-500 cursor-se-resize" />
          
          {/* Rotation handle */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-purple-500 flex items-center justify-center cursor-pointer">
            <RotateCw className="w-3 h-3 text-purple-500" />
          </div>
        </div>
      )}

      {/* Toolbar */}
      {isSelected && !isDragging && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-zinc-800 rounded-lg p-1 shadow-xl"
        >
          <button 
            className="p-1.5 hover:bg-zinc-700 rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Duplicate logic would go here
            }}
          >
            <Copy className="w-4 h-4 text-zinc-300" />
          </button>
          <button 
            className="p-1.5 hover:bg-red-500/20 rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash2 className="w-4 h-4 text-red-400" />
          </button>
        </motion.div>
      )}

      {/* Content */}
      <div className="w-full h-full">
        {renderContent()}
      </div>
    </motion.div>
  );
};

export default DraggableElement;

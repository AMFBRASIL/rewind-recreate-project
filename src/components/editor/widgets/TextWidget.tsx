import { useState, useEffect } from "react";
import { CanvasElement } from "@/pages/TemplateEditor";

interface TextWidgetProps {
  element: CanvasElement;
  onUpdate: (updates: Partial<CanvasElement>) => void;
  isSelected: boolean;
}

const TextWidget = ({ element, onUpdate, isSelected }: TextWidgetProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState(element.content);

  useEffect(() => {
    setEditableContent(element.content);
  }, [element.content]);

  const handleDoubleClick = () => {
    setIsEditing(true);
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

  const hasDashedBorder = element.style?.borderStyle === 'dashed';

  return (
    <div 
      className={`w-full h-full rounded-xl flex items-center justify-center px-4 ${
        hasDashedBorder 
          ? 'border-2 border-dashed border-zinc-600 bg-transparent' 
          : 'bg-[#1e2433]'
      }`}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <textarea
          value={editableContent}
          onChange={(e) => setEditableContent(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="w-full h-full bg-transparent border-none outline-none resize-none text-center flex items-center justify-center"
          style={{
            fontSize: element.style?.fontSize || 18,
            fontFamily: element.style?.fontFamily || 'Inter',
            color: element.style?.color || '#f472b6',
          }}
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <span 
          className="text-center cursor-text select-none"
          style={{
            fontSize: element.style?.fontSize || 18,
            fontFamily: element.style?.fontFamily || 'Inter',
            color: element.style?.color || '#f472b6',
          }}
        >
          {element.content}
        </span>
      )}
    </div>
  );
};

export default TextWidget;

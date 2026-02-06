import { useState, useRef } from "react";
import { Image, Upload, X } from "lucide-react";
import { CanvasElement } from "@/pages/TemplateEditor";

interface ImageWidgetProps {
  element: CanvasElement;
  onUpdate: (updates: Partial<CanvasElement>) => void;
}

const ImageWidget = ({ element, onUpdate }: ImageWidgetProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onUpdate({ content: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // If no image, show placeholder
  if (!element.content) {
    return (
      <div 
        className="w-full h-full bg-[#1e2433] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#252a3d] transition-colors border-2 border-dashed border-zinc-700"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <Upload className="w-8 h-8 text-zinc-500 mb-2" />
        <span className="text-zinc-400 text-sm">Clique para upload</span>
      </div>
    );
  }

  // Show image
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-[#1e2433]">
      <img 
        src={element.content} 
        alt="" 
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
};

export default ImageWidget;

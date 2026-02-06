import { useState } from "react";
import { Youtube } from "lucide-react";
import { CanvasElement } from "@/pages/TemplateEditor";

interface YouTubeWidgetProps {
  element: CanvasElement;
  onUpdate: (updates: Partial<CanvasElement>) => void;
}

const YouTubeWidget = ({ element, onUpdate }: YouTubeWidgetProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(element.content);

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^&?\s]+)/);
    return match ? match[1] : url;
  };

  const handleSubmit = () => {
    const videoId = extractVideoId(inputValue);
    onUpdate({ content: videoId });
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setInputValue(element.content);
    }
  };

  // If no video ID, show placeholder
  if (!element.content) {
    return (
      <div 
        className="w-full h-full bg-[#1e2433] rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#252a3d] transition-colors"
        onClick={() => setIsEditing(true)}
      >
        {isEditing ? (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={handleKeyDown}
            placeholder="Cole o link aqui..."
            autoFocus
            className="w-[90%] bg-[#0f1219] border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-pink-500"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <>
            <Youtube className="w-8 h-8 text-zinc-500 mb-2" />
            <span className="text-zinc-400 text-sm">Cola um link do YouTube</span>
          </>
        )}
      </div>
    );
  }

  // Show video preview
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
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
};

export default YouTubeWidget;

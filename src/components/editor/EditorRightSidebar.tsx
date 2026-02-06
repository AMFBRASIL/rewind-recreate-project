import { 
  Type, Image, Youtube, Mic, Timer, Smile
} from "lucide-react";
import { CanvasElement } from "@/pages/TemplateEditor";

interface EditorRightSidebarProps {
  onAddElement: (element: Omit<CanvasElement, 'id' | 'x' | 'y'>) => void;
  elementCounts: {
    text: number;
    image: number;
    youtube: number;
    counter: number;
    emoji: number;
  };
  maxCounts: {
    text: number;
    image: number;
    youtube: number;
    audio: number;
    counter: number;
    emoji: number;
  };
}

const EditorRightSidebar = ({ onAddElement, elementCounts, maxCounts }: EditorRightSidebarProps) => {
  const addTextElement = () => {
    if (elementCounts.text >= maxCounts.text) return;
    onAddElement({
      type: 'text',
      width: 250,
      height: 60,
      rotation: 0,
      content: 'Digite seu texto',
      style: {
        fontSize: 18,
        fontFamily: 'Inter',
        color: '#f472b6',
        borderStyle: 'dashed',
      }
    });
  };

  const addImageElement = () => {
    if (elementCounts.image >= maxCounts.image) return;
    onAddElement({
      type: 'image',
      width: 220,
      height: 160,
      rotation: 0,
      content: '',
    });
  };

  const addYoutubeElement = () => {
    if (elementCounts.youtube >= maxCounts.youtube) return;
    onAddElement({
      type: 'youtube',
      width: 250,
      height: 160,
      rotation: 0,
      content: '',
    });
  };

  const addCounterElement = () => {
    if (elementCounts.counter >= maxCounts.counter) return;
    onAddElement({
      type: 'counter',
      width: 280,
      height: 100,
      rotation: 0,
      content: 'counter',
    });
  };

  const addEmojiElement = () => {
    if (elementCounts.emoji >= maxCounts.emoji) return;
    onAddElement({
      type: 'emoji',
      width: 150,
      height: 150,
      rotation: 0,
      content: '🥰',
      style: {
        fontSize: 100,
      }
    });
  };

  const sidebarItems = [
    { 
      icon: <span className="text-lg font-bold">Aa</span>, 
      count: elementCounts.text, 
      max: maxCounts.text, 
      onClick: addTextElement,
      label: 'Texto'
    },
    { 
      icon: <Image className="w-5 h-5" />, 
      count: elementCounts.image, 
      max: maxCounts.image, 
      onClick: addImageElement,
      label: 'Imagem'
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      count: elementCounts.youtube, 
      max: maxCounts.youtube, 
      onClick: addYoutubeElement,
      label: 'YouTube'
    },
    { 
      icon: <Mic className="w-5 h-5" />, 
      count: 0, 
      max: maxCounts.audio, 
      onClick: () => {},
      label: 'Áudio'
    },
    { 
      icon: <Timer className="w-5 h-5" />, 
      count: elementCounts.counter, 
      max: maxCounts.counter, 
      onClick: addCounterElement,
      label: 'Contador'
    },
    { 
      icon: <Smile className="w-5 h-5" />, 
      count: elementCounts.emoji, 
      max: maxCounts.emoji, 
      onClick: addEmojiElement,
      label: 'Emoji'
    },
  ];

  return (
    <aside className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
      <div className="flex flex-col gap-3">
        {sidebarItems.map((item, idx) => (
          <button
            key={idx}
            onClick={item.onClick}
            className="relative group flex flex-col items-center"
            title={item.label}
          >
            <div className="w-12 h-12 rounded-xl bg-[#1a1f2e]/80 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#252a3a] hover:border-zinc-600 transition-all">
              {item.icon}
            </div>
            <span className="text-[10px] text-zinc-500 mt-1">
              {item.count}/{item.max}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default EditorRightSidebar;

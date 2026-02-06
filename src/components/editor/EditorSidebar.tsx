import { useState } from "react";
import { 
  Type, Image, Youtube, Smile, Square, Circle, 
  Triangle, Star, Heart, Music, Sparkles, Sticker,
  Palette, Upload, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CanvasElement } from "@/pages/TemplateEditor";

interface EditorSidebarProps {
  onAddElement: (element: Omit<CanvasElement, 'id' | 'x' | 'y'>) => void;
  onChangeBackground: (background: string) => void;
}

const EMOJIS = ['❤️', '😍', '🥰', '💕', '💖', '💗', '💘', '💝', '✨', '🌟', '⭐', '💫', '🎉', '🎊', '🎁', '🎈', '🌹', '🌸', '💐', '🌺', '😂', '🤣', '😊', '🥳', '🤩', '😎', '🔥', '💯', '👏', '🙌', '💪', '🤝', '👍', '🎵', '🎶', '🎤', '🎧', '📸', '🎬', '🎭', '🎨'];

const SHAPES = [
  { icon: Square, name: 'Quadrado' },
  { icon: Circle, name: 'Círculo' },
  { icon: Triangle, name: 'Triângulo' },
  { icon: Star, name: 'Estrela' },
  { icon: Heart, name: 'Coração' },
];

const BACKGROUNDS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(180deg, #2e1065 0%, #1e1b4b 50%, #0f172a 100%)',
  'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)',
  '#ffffff',
  '#000000',
];

const STICKERS = ['🦋', '🌈', '☀️', '🌙', '⚡', '🍀', '🎀', '👑', '💎', '🦄', '🐱', '🐶', '🐰', '🦊', '🐻', '🐼'];

const EditorSidebar = ({ onAddElement, onChangeBackground }: EditorSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const addTextElement = () => {
    onAddElement({
      type: 'text',
      width: 200,
      height: 50,
      rotation: 0,
      content: 'Digite seu texto',
      style: {
        fontSize: 24,
        fontFamily: 'Inter',
        color: '#ffffff',
      }
    });
  };

  const addImageElement = () => {
    onAddElement({
      type: 'image',
      width: 200,
      height: 200,
      rotation: 0,
      content: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400',
    });
  };

  const addYoutubeElement = () => {
    onAddElement({
      type: 'youtube',
      width: 320,
      height: 180,
      rotation: 0,
      content: 'dQw4w9WgXcQ', // YouTube video ID
    });
  };

  const addEmojiElement = (emoji: string) => {
    onAddElement({
      type: 'emoji',
      width: 80,
      height: 80,
      rotation: 0,
      content: emoji,
      style: {
        fontSize: 48,
      }
    });
  };

  const addShapeElement = (shape: string) => {
    onAddElement({
      type: 'shape',
      width: 100,
      height: 100,
      rotation: 0,
      content: shape,
      style: {
        backgroundColor: '#8b5cf6',
        borderRadius: shape === 'circle' ? 50 : 0,
      }
    });
  };

  const addStickerElement = (sticker: string) => {
    onAddElement({
      type: 'sticker',
      width: 100,
      height: 100,
      rotation: 0,
      content: sticker,
      style: {
        fontSize: 64,
      }
    });
  };

  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-900 flex flex-col">
      <Tabs defaultValue="elementos" className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-4 bg-zinc-800 m-2 rounded-lg">
          <TabsTrigger value="elementos" className="text-xs data-[state=active]:bg-purple-600">
            Elementos
          </TabsTrigger>
          <TabsTrigger value="midia" className="text-xs data-[state=active]:bg-purple-600">
            Mídia
          </TabsTrigger>
          <TabsTrigger value="stickers" className="text-xs data-[state=active]:bg-purple-600">
            Stickers
          </TabsTrigger>
          <TabsTrigger value="fundo" className="text-xs data-[state=active]:bg-purple-600">
            Fundo
          </TabsTrigger>
        </TabsList>

        <div className="px-2 mb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input 
              placeholder="Buscar..." 
              className="pl-9 bg-zinc-800 border-zinc-700 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <TabsContent value="elementos" className="mt-0 px-2 space-y-4">
            {/* Text */}
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Texto</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-3 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                  onClick={addTextElement}
                >
                  <Type className="h-5 w-5 text-purple-400" />
                  <div className="text-left">
                    <div className="font-medium">Adicionar Texto</div>
                    <div className="text-xs text-zinc-500">Título, parágrafo...</div>
                  </div>
                </Button>
              </div>
            </div>

            {/* Shapes */}
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Formas</h3>
              <div className="grid grid-cols-5 gap-2">
                {SHAPES.map((shape, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="icon"
                    className="h-12 w-12 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-purple-500"
                    onClick={() => addShapeElement(shape.name.toLowerCase())}
                  >
                    <shape.icon className="h-6 w-6 text-purple-400" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Emojis */}
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Emojis</h3>
              <div className="grid grid-cols-8 gap-1">
                {EMOJIS.map((emoji, idx) => (
                  <button
                    key={idx}
                    className="h-9 w-9 flex items-center justify-center text-xl hover:bg-zinc-700 rounded-lg transition-colors"
                    onClick={() => addEmojiElement(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="midia" className="mt-0 px-2 space-y-4">
            {/* Upload Image */}
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Imagens</h3>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 border-dashed"
                onClick={addImageElement}
              >
                <Upload className="h-5 w-5 text-purple-400" />
                <div className="text-left">
                  <div className="font-medium">Upload de Imagem</div>
                  <div className="text-xs text-zinc-500">JPG, PNG, GIF</div>
                </div>
              </Button>
              
              {/* Sample Images */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                {[
                  'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=200',
                  'https://images.unsplash.com/photo-1529636798458-92182e662485?w=200',
                  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200',
                  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200',
                ].map((url, idx) => (
                  <button
                    key={idx}
                    className="aspect-square rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all"
                    onClick={() => onAddElement({
                      type: 'image',
                      width: 200,
                      height: 200,
                      rotation: 0,
                      content: url,
                    })}
                  >
                    <img src={url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* YouTube */}
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Vídeo</h3>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                onClick={addYoutubeElement}
              >
                <Youtube className="h-5 w-5 text-red-500" />
                <div className="text-left">
                  <div className="font-medium">YouTube</div>
                  <div className="text-xs text-zinc-500">Cole o link do vídeo</div>
                </div>
              </Button>
            </div>

            {/* Music */}
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Música</h3>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              >
                <Music className="h-5 w-5 text-green-500" />
                <div className="text-left">
                  <div className="font-medium">Adicionar Música</div>
                  <div className="text-xs text-zinc-500">MP3, WAV</div>
                </div>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="stickers" className="mt-0 px-2 space-y-4">
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Stickers Populares</h3>
              <div className="grid grid-cols-4 gap-2">
                {STICKERS.map((sticker, idx) => (
                  <button
                    key={idx}
                    className="h-16 w-16 flex items-center justify-center text-4xl hover:bg-zinc-700 rounded-xl transition-all hover:scale-110"
                    onClick={() => addStickerElement(sticker)}
                  >
                    {sticker}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Efeitos</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                  <span className="text-xs">Brilhos</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                >
                  <Heart className="h-6 w-6 text-pink-400" />
                  <span className="text-xs">Corações</span>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fundo" className="mt-0 px-2 space-y-4">
            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Gradientes</h3>
              <div className="grid grid-cols-3 gap-2">
                {BACKGROUNDS.map((bg, idx) => (
                  <button
                    key={idx}
                    className="aspect-square rounded-lg hover:ring-2 hover:ring-purple-500 transition-all"
                    style={{ background: bg }}
                    onClick={() => onChangeBackground(bg)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wider">Cor Personalizada</h3>
              <Button 
                variant="outline" 
                className="w-full justify-start gap-3 bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
              >
                <Palette className="h-5 w-5 text-purple-400" />
                <span>Escolher Cor</span>
              </Button>
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </aside>
  );
};

export default EditorSidebar;

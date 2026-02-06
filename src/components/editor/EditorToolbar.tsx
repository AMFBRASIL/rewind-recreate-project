import { 
  ZoomIn, ZoomOut, Undo, Redo, Download, Eye, 
  Save, Share2, Settings, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditorToolbarProps {
  zoom: number;
  setZoom: (zoom: number) => void;
  onPreview: () => void;
  onExport: () => void;
}

const EditorToolbar = ({ zoom, setZoom, onPreview, onExport }: EditorToolbarProps) => {
  return (
    <header className="h-14 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-4">
      {/* Left - Logo & Name */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-semibold text-lg">Rewind Editor</span>
        </div>
        
        <div className="h-6 w-px bg-zinc-700" />
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Center - Zoom Controls */}
      <div className="flex items-center gap-2 bg-zinc-800 rounded-lg px-2 py-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-7 w-7 text-zinc-400 hover:text-white"
          onClick={() => setZoom(Math.max(25, zoom - 25))}
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-sm text-zinc-300 w-12 text-center">{zoom}%</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-7 w-7 text-zinc-400 hover:text-white"
          onClick={() => setZoom(Math.min(200, zoom + 25))}
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white gap-2">
          <Eye className="h-4 w-4" />
          Preview
        </Button>
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white gap-2">
          <Share2 className="h-4 w-4" />
          Compartilhar
        </Button>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 gap-2">
          <Save className="h-4 w-4" />
          Salvar
        </Button>
      </div>
    </header>
  );
};

export default EditorToolbar;

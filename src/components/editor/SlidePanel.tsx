import { Plus, Copy, Trash2, GripVertical } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slide } from "@/pages/TemplateEditor";

interface SlidePanelProps {
  slides: Slide[];
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
  addSlide: () => void;
  duplicateSlide: (index: number) => void;
  deleteSlide: (index: number) => void;
}

const SlidePanel = ({ 
  slides, 
  currentSlideIndex, 
  setCurrentSlideIndex,
  addSlide,
  duplicateSlide,
  deleteSlide
}: SlidePanelProps) => {
  return (
    <aside className="w-48 border-l border-zinc-800 bg-zinc-900 flex flex-col">
      <div className="p-3 border-b border-zinc-800">
        <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Slides</h3>
      </div>

      <ScrollArea className="flex-1 p-2">
        <div className="space-y-2">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`group relative cursor-pointer rounded-lg overflow-hidden transition-all ${
                currentSlideIndex === index 
                  ? 'ring-2 ring-purple-500' 
                  : 'hover:ring-2 hover:ring-zinc-600'
              }`}
              onClick={() => setCurrentSlideIndex(index)}
            >
              {/* Slide preview */}
              <div 
                className="aspect-[9/16] w-full rounded-lg"
                style={{ background: slide.background }}
              >
                {/* Mini preview of elements */}
                <div className="relative w-full h-full transform scale-[0.2] origin-top-left">
                  {slide.elements.slice(0, 5).map((element) => (
                    <div
                      key={element.id}
                      className="absolute bg-white/20 rounded"
                      style={{
                        left: element.x * 0.4,
                        top: element.y * 0.4,
                        width: element.width * 0.4,
                        height: element.height * 0.4,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Slide number */}
              <div className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                {index + 1}
              </div>

              {/* Hover actions */}
              <div className="absolute top-1 right-1 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  className="p-1 bg-zinc-800/80 hover:bg-zinc-700 rounded transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    duplicateSlide(index);
                  }}
                >
                  <Copy className="w-3 h-3 text-zinc-300" />
                </button>
                {slides.length > 1 && (
                  <button 
                    className="p-1 bg-zinc-800/80 hover:bg-red-500/50 rounded transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSlide(index);
                    }}
                  >
                    <Trash2 className="w-3 h-3 text-zinc-300" />
                  </button>
                )}
              </div>

              {/* Drag handle */}
              <div className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                <GripVertical className="w-3 h-3 text-zinc-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>

      {/* Add slide button */}
      <div className="p-2 border-t border-zinc-800">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 gap-2"
          onClick={addSlide}
        >
          <Plus className="w-4 h-4" />
          Novo Slide
        </Button>
      </div>
    </aside>
  );
};

export default SlidePanel;

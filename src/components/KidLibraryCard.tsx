import { Calendar, Tag, Image as ImageIcon, Video, FileText, Palette, Trash2, X } from "lucide-react";
import { KidMoment } from "@/types/kidLibraryTypes";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";

interface KidLibraryCardProps {
  moment: KidMoment;
  onDelete: (id: string) => void;
}

const KidLibraryCard = ({ moment, onDelete }: KidLibraryCardProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getTypeIcon = () => {
    switch (moment.type) {
      case 'photo':
        return <ImageIcon className="w-5 h-5" />;
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'text':
        return <FileText className="w-5 h-5" />;
      case 'mural':
        return <Palette className="w-5 h-5" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header com gradiente */}
      <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"></div>

      <div className="p-6">
        {/* Cabeçalho do Card */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
              {getTypeIcon()}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{moment.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(moment.date)}</span>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(moment.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Descrição */}
        {moment.description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{moment.description}</p>
        )}

        {/* Preview de Mídia - Fotos */}
        {moment.photos && moment.photos.length > 0 && (
          <div className="mb-4">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2">
                {moment.photos.map((photo, index) => (
                  <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                    <div 
                      className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <img
                        src={photo}
                        alt={`${moment.title} - ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {moment.photos.length > 3 && (
                <>
                  <CarouselPrevious className="-left-4 bg-white shadow-lg hover:bg-gray-50" />
                  <CarouselNext className="-right-4 bg-white shadow-lg hover:bg-gray-50" />
                </>
              )}
            </Carousel>
            {moment.photos.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-3">
                <ImageIcon className="w-4 h-4 text-purple-600" />
                <p className="text-sm font-medium text-gray-700">
                  {moment.photos.length} fotos
                </p>
              </div>
            )}
          </div>
        )}

        {/* Preview de Mídia - Vídeos */}
        {moment.videoUrl && (
          <div className="mb-4">
            {Array.isArray(moment.videoUrl) ? (
              <>
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2">
                    {moment.videoUrl.map((video, index) => (
                      <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                        <div 
                          className="relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setSelectedVideo(video)}
                        >
                          <video
                            src={video}
                            className="w-full h-48 object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <Video className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {moment.videoUrl.length > 3 && (
                    <>
                      <CarouselPrevious className="-left-4 bg-white shadow-lg hover:bg-gray-50" />
                      <CarouselNext className="-right-4 bg-white shadow-lg hover:bg-gray-50" />
                    </>
                  )}
                </Carousel>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <Video className="w-4 h-4 text-purple-600" />
                  <p className="text-sm font-medium text-gray-700">
                    {moment.videoUrl.length} vídeos
                  </p>
                </div>
              </>
            ) : (
              <div 
                className="relative rounded-xl overflow-hidden bg-gray-900 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedVideo(moment.videoUrl as string)}
              >
                <video
                  src={moment.videoUrl}
                  className="w-full h-48 object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Video className="w-12 h-12 text-white" />
                </div>
              </div>
            )}
          </div>
        )}

        {moment.textContent && (
          <div className="mb-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <p className="text-gray-700 line-clamp-3 italic">{moment.textContent}</p>
          </div>
        )}

        {/* Footer com Categoria e Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {moment.category && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium">
              {moment.category}
            </span>
          )}
          {moment.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs flex items-center gap-1"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {moment.tags.length > 3 && (
            <span className="text-xs text-gray-400">+{moment.tags.length - 3}</span>
          )}
        </div>
      </div>

      {/* Modal de Visualização de Foto */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/90 p-2 hover:bg-white transition-colors">
            <X className="h-6 w-6 text-gray-900" />
          </DialogClose>
          {selectedPhoto && (
            <img
              src={selectedPhoto}
              alt="Visualização em tela cheia"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de Visualização de Vídeo */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-none">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-white/90 p-2 hover:bg-white transition-colors">
            <X className="h-6 w-6 text-gray-900" />
          </DialogClose>
          {selectedVideo && (
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KidLibraryCard;

import { Calendar, Tag, Image as ImageIcon, Video, FileText, Palette, Trash2 } from "lucide-react";
import { KidMoment } from "@/types/kidLibraryTypes";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface KidLibraryCardProps {
  moment: KidMoment;
  onDelete: (id: string) => void;
}

const KidLibraryCard = ({ moment, onDelete }: KidLibraryCardProps) => {
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
                  <CarouselItem key={index} className="pl-2">
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={photo}
                        alt={`${moment.title} - ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {moment.photos.length > 1 && (
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
                      <CarouselItem key={index} className="pl-2">
                        <div className="relative rounded-xl overflow-hidden bg-gray-900">
                          <video
                            src={video}
                            controls
                            className="w-full h-64 object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {moment.videoUrl.length > 1 && (
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
              <div className="relative rounded-xl overflow-hidden bg-gray-900">
                <video
                  src={moment.videoUrl}
                  controls
                  className="w-full h-64 object-contain"
                />
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
    </div>
  );
};

export default KidLibraryCard;

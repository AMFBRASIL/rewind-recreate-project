import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { KidMoment } from "@/types/kidLibraryTypes";

const CreateKidMovie = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Recuperar momentos do sessionStorage
  const storedMoments = sessionStorage.getItem('kidLibraryMoments');
  const allMoments: KidMoment[] = storedMoments ? JSON.parse(storedMoments) : [];
  
  const [selectedMoments, setSelectedMoments] = useState<string[]>([]);
  const [livePhotos, setLivePhotos] = useState(false);
  
  const MAX_MOMENTS = 5;

  const toggleMoment = (momentId: string) => {
    if (selectedMoments.includes(momentId)) {
      setSelectedMoments(selectedMoments.filter(id => id !== momentId));
    } else {
      if (selectedMoments.length >= MAX_MOMENTS) {
        toast({
          title: "Limite atingido",
          description: `Você pode escolher no máximo ${MAX_MOMENTS} momentos`,
          variant: "destructive"
        });
        return;
      }
      setSelectedMoments([...selectedMoments, momentId]);
    }
  };

  const handleCreateMovie = () => {
    if (selectedMoments.length === 0) {
      toast({
        title: "Selecione momentos",
        description: "Escolha pelo menos 1 momento para criar o filme",
        variant: "destructive"
      });
      return;
    }

    const filteredMoments = allMoments.filter(m => selectedMoments.includes(m.id));
    
    // Salvar configuração
    sessionStorage.setItem('kidMovieMoments', JSON.stringify(filteredMoments));
    sessionStorage.setItem('kidMovieLivePhotos', livePhotos.toString());
    
    toast({
      title: "Criando seu filme!",
      description: `${selectedMoments.length} momentos selecionados${livePhotos ? ' + fotos ao vivo' : ''}`,
    });

    setTimeout(() => {
      navigate('/kidmovie');
    }, 500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/kid-library')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Criar Meu Filme
                </h1>
                <p className="text-gray-600 mt-2">
                  Escolha até {MAX_MOMENTS} momentos especiais
                </p>
              </div>
            </div>
            <Button
              onClick={handleCreateMovie}
              disabled={selectedMoments.length === 0}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              size="lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Criar Filme ({selectedMoments.length}/{MAX_MOMENTS})
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Opção de Fotos ao Vivo */}
        <Card className="p-6 mb-8 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <Label htmlFor="live-photos" className="text-lg font-bold text-gray-800 cursor-pointer">
                  Ativar Fotos ao Vivo
                </Label>
                <p className="text-sm text-gray-600">
                  Permita que amigos tirem fotos durante a festa e elas apareçam no filme em tempo real
                </p>
              </div>
            </div>
            <Switch
              id="live-photos"
              checked={livePhotos}
              onCheckedChange={setLivePhotos}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-600 data-[state=checked]:to-pink-600"
            />
          </div>
        </Card>

        {/* Grid de Momentos */}
        {allMoments.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 mb-4">Nenhum momento na biblioteca ainda.</p>
            <Button onClick={() => navigate('/kid-library')}>
              Voltar para a Biblioteca
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allMoments.map((moment) => {
              const isSelected = selectedMoments.includes(moment.id);
              
              return (
                <Card
                  key={moment.id}
                  onClick={() => toggleMoment(moment.id)}
                  className={`cursor-pointer transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? 'ring-4 ring-purple-500 shadow-2xl scale-105'
                      : 'hover:shadow-lg hover:scale-102'
                  }`}
                >
                  {/* Preview Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100">
                    {moment.photos && moment.photos.length > 0 ? (
                      <img
                        src={moment.photos[0]}
                        alt={moment.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-purple-400" />
                      </div>
                    )}
                    
                    {/* Checkbox de Seleção */}
                    <div className={`absolute top-4 right-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-purple-600 border-purple-600'
                        : 'bg-white/80 border-gray-300'
                    }`}>
                      {isSelected && <Check className="w-5 h-5 text-white" />}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {moment.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {formatDate(moment.date)}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {moment.description}
                    </p>
                    
                    {/* Categoria */}
                    <div className="mt-3">
                      <span className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium">
                        {moment.category}
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateKidMovie;

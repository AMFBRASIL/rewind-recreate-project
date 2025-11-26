import { useState } from "react";
import { Plus, Sparkles, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import KidLibraryCard from "@/components/KidLibraryCard";
import AddMomentModal from "@/components/AddMomentModal";
import { KidMoment, MovieTemplate, MovieTemplateConfig } from "@/types/kidLibraryTypes";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const KidLibrary = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [moments, setMoments] = useState<KidMoment[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const templates: MovieTemplateConfig[] = [
    {
      id: 'birthday',
      name: 'Festa de Aniversário',
      description: 'Crie um filme especial com os momentos do aniversário',
      icon: '🎂',
      categories: ['aniversario']
    },
    {
      id: 'school-year',
      name: 'Ano Escolar',
      description: 'Retrospectiva do ano na escola',
      icon: '📚',
      categories: ['escola', 'conquistas']
    },
    {
      id: 'summer',
      name: 'Férias de Verão',
      description: 'Aventuras e diversão das férias',
      icon: '🏖️',
      categories: ['ferias', 'familia']
    },
    {
      id: 'all-moments',
      name: 'Todos os Momentos',
      description: 'Um filme com todos os momentos especiais',
      icon: '✨',
      categories: []
    }
  ];

  const handleAddMoment = (moment: KidMoment) => {
    setMoments([moment, ...moments]);
    toast({
      title: "Momento adicionado!",
      description: "Seu momento foi salvo na biblioteca.",
    });
  };

  const handleDeleteMoment = (id: string) => {
    setMoments(moments.filter(m => m.id !== id));
    toast({
      title: "Momento removido",
      description: "O momento foi excluído da biblioteca.",
      variant: "destructive"
    });
  };

  const handleGenerateMovie = (template: MovieTemplate) => {
    const selectedTemplate = templates.find(t => t.id === template);
    
    if (moments.length === 0) {
      toast({
        title: "Biblioteca vazia",
        description: "Adicione alguns momentos antes de criar o filme!",
        variant: "destructive"
      });
      return;
    }

    // Filtrar momentos baseado no template
    let filteredMoments = moments;
    if (selectedTemplate && selectedTemplate.categories.length > 0) {
      filteredMoments = moments.filter(m => 
        selectedTemplate.categories.includes(m.category)
      );
    }

    if (filteredMoments.length === 0) {
      toast({
        title: "Nenhum momento encontrado",
        description: `Não há momentos da categoria "${selectedTemplate?.name}"`,
        variant: "destructive"
      });
      return;
    }

    // Salvar dados no sessionStorage para usar no KidMovie
    sessionStorage.setItem('kidMovieMoments', JSON.stringify(filteredMoments));
    sessionStorage.setItem('kidMovieTemplate', template);

    toast({
      title: "Gerando seu filme!",
      description: `${filteredMoments.length} momentos selecionados`,
    });

    // Navegar para o KidMovie
    setIsTemplateModalOpen(false);
    setTimeout(() => {
      navigate('/kidmovie');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Biblioteca de Momentos
              </h1>
              <p className="text-gray-600 mt-2">
                Organize fotos, vídeos e memórias especiais da criança
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => setIsTemplateModalOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                disabled={moments.length === 0}
              >
                <Film className="w-4 h-4 mr-2" />
                Criar Filme
              </Button>
              <Button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Momento
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {moments.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mb-6">
              <Sparkles className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Nenhum momento ainda
            </h2>
            <p className="text-gray-600 mb-8">
              Comece adicionando fotos, vídeos e memórias especiais!
            </p>
            <Button
              onClick={() => setIsAddModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Plus className="w-5 h-5 mr-2" />
              Adicionar Primeiro Momento
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                {moments.length} {moments.length === 1 ? 'momento' : 'momentos'} na biblioteca
              </p>
            </div>

            {/* Timeline Vertical */}
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-pink-300 to-orange-300 rounded-full"></div>

              {/* Cards */}
              <div className="space-y-8 relative">
                {moments.map((moment, index) => (
                  <div key={moment.id} className="flex items-start gap-6">
                    {/* Bolinha na linha do tempo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg z-10 relative">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Card do momento */}
                    <div className="flex-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <KidLibraryCard moment={moment} onDelete={handleDeleteMoment} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal para adicionar momento */}
      <AddMomentModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddMoment}
      />

      {/* Modal de Templates */}
      <Dialog open={isTemplateModalOpen} onOpenChange={setIsTemplateModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Escolha um Template
            </DialogTitle>
            <DialogDescription>
              Selecione o tipo de filme que deseja criar
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleGenerateMovie(template.id)}
                className="p-6 rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all text-left group"
              >
                <div className="text-5xl mb-4">{template.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600">{template.description}</p>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KidLibrary;

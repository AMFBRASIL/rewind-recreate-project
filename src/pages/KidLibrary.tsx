import { useState } from "react";
import { Plus, Sparkles, Film, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import KidLibraryCard from "@/components/KidLibraryCard";
import AddMomentModal from "@/components/AddMomentModal";
import { KidMoment } from "@/types/kidLibraryTypes";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const KidLibrary = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Dados de exemplo para visualização
  const mockMoments: KidMoment[] = [
    {
      id: '1',
      type: 'photo',
      title: 'Primeiro Dia de Aula',
      date: '2024-02-01',
      description: 'O grande dia finalmente chegou! Muita animação e um pouquinho de nervosismo.',
      category: 'escola',
      tags: ['escola', 'conquistas', 'amigos'],
      photos: [
        'https://picsum.photos/seed/escola1/400/400',
        'https://picsum.photos/seed/escola2/400/400',
        'https://picsum.photos/seed/escola3/400/400',
        'https://picsum.photos/seed/escola4/400/400',
        'https://picsum.photos/seed/escola5/400/400',
        'https://picsum.photos/seed/escola6/400/400',
        'https://picsum.photos/seed/escola7/400/400',
        'https://picsum.photos/seed/escola8/400/400'
      ],
      createdAt: '2024-02-01T10:00:00Z'
    },
    {
      id: '2',
      type: 'video',
      title: 'Festa de Aniversário de 7 Anos',
      date: '2024-03-15',
      description: 'Festa incrível com tema de super-heróis! Muitos amigos, bolo delicioso e presentes especiais.',
      category: 'aniversario',
      tags: ['aniversário', 'festa', 'amigos', 'super-heróis'],
      videoUrl: 'https://example.com/video1.mp4',
      photos: [
        'https://picsum.photos/seed/party1/400/400',
        'https://picsum.photos/seed/party2/400/400',
        'https://picsum.photos/seed/party3/400/400',
        'https://picsum.photos/seed/party4/400/400',
        'https://picsum.photos/seed/party5/400/400',
        'https://picsum.photos/seed/party6/400/400',
        'https://picsum.photos/seed/party7/400/400'
      ],
      createdAt: '2024-03-15T14:00:00Z'
    },
    {
      id: '3',
      type: 'text',
      title: 'Primeira Redação Nota 10',
      date: '2024-04-10',
      description: 'Orgulho demais! A professora elogiou muito a criatividade.',
      category: 'escola',
      tags: ['escola', 'conquistas', 'escrita'],
      textContent: 'Era uma vez um dragão que não sabia cuspir fogo. Todos os outros dragões riam dele, mas um dia ele descobriu que podia fazer algo muito mais especial: ele podia fazer florescer flores por onde passava...',
      createdAt: '2024-04-10T16:30:00Z'
    },
    {
      id: '4',
      type: 'photo',
      title: 'Férias na Praia',
      date: '2024-07-20',
      description: 'Dias incríveis de sol, mar e muita diversão! Castelos de areia e mergulhos inesquecíveis.',
      category: 'ferias',
      tags: ['férias', 'praia', 'família', 'verão'],
      photos: [
        'https://picsum.photos/seed/beach1/400/400',
        'https://picsum.photos/seed/beach2/400/400',
        'https://picsum.photos/seed/beach3/400/400',
        'https://picsum.photos/seed/beach4/400/400',
        'https://picsum.photos/seed/beach5/400/400',
        'https://picsum.photos/seed/beach6/400/400',
        'https://picsum.photos/seed/beach7/400/400',
        'https://picsum.photos/seed/beach8/400/400'
      ],
      createdAt: '2024-07-20T12:00:00Z'
    },
    {
      id: '5',
      type: 'mural',
      title: 'Desenho do Dia das Mães',
      date: '2024-05-12',
      description: 'Um presente feito com muito amor e dedicação!',
      category: 'familia',
      tags: ['família', 'arte', 'presente'],
      photos: [
        'https://picsum.photos/seed/art1/400/400',
        'https://picsum.photos/seed/art2/400/400',
        'https://picsum.photos/seed/art3/400/400',
        'https://picsum.photos/seed/art4/400/400',
        'https://picsum.photos/seed/art5/400/400',
        'https://picsum.photos/seed/art6/400/400'
      ],
      createdAt: '2024-05-12T09:00:00Z'
    },
    {
      id: '6',
      type: 'photo',
      title: 'Apresentação de Dança na Escola',
      date: '2024-06-05',
      description: 'Meses de ensaio valeram a pena! A apresentação foi um sucesso total.',
      category: 'escola',
      tags: ['escola', 'dança', 'apresentação', 'conquistas'],
      photos: [
        'https://picsum.photos/seed/dance1/400/400',
        'https://picsum.photos/seed/dance2/400/400',
        'https://picsum.photos/seed/dance3/400/400',
        'https://picsum.photos/seed/dance4/400/400',
        'https://picsum.photos/seed/dance5/400/400',
        'https://picsum.photos/seed/dance6/400/400',
        'https://picsum.photos/seed/dance7/400/400'
      ],
      createdAt: '2024-06-05T18:00:00Z'
    },
    {
      id: '7',
      type: 'photo',
      title: 'Passeio no Parque de Diversões',
      date: '2024-08-14',
      description: 'Dia cheio de aventuras e emoções! Montanha-russa, roda gigante e muitos sorrisos.',
      category: 'ferias',
      tags: ['férias', 'diversão', 'aventura'],
      photos: [
        'https://picsum.photos/seed/park1/400/400',
        'https://picsum.photos/seed/park2/400/400',
        'https://picsum.photos/seed/park3/400/400',
        'https://picsum.photos/seed/park4/400/400',
        'https://picsum.photos/seed/park5/400/400',
        'https://picsum.photos/seed/park6/400/400',
        'https://picsum.photos/seed/park7/400/400',
        'https://picsum.photos/seed/park8/400/400'
      ],
      createdAt: '2024-08-14T15:00:00Z'
    },
    {
      id: '8',
      type: 'text',
      title: 'Carta para o Papai Noel',
      date: '2024-11-20',
      description: 'Os pedidos e sonhos para o Natal deste ano.',
      category: 'familia',
      tags: ['natal', 'família', 'sonhos'],
      textContent: 'Querido Papai Noel, este ano eu fui uma criança muito boa! Eu queria ganhar uma bicicleta nova, livros de aventura e também queria que você trouxesse muita saúde para toda minha família. Prometo continuar me esforçando na escola!',
      createdAt: '2024-11-20T20:00:00Z'
    }
  ];
  
  const [moments, setMoments] = useState<KidMoment[]>(mockMoments);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

  const handleGenerateMovie = () => {
    if (moments.length === 0) {
      toast({
        title: "Biblioteca vazia",
        description: "Adicione alguns momentos antes de criar o filme!",
        variant: "destructive"
      });
      return;
    }

    // Salvar momentos no sessionStorage
    sessionStorage.setItem('kidLibraryMoments', JSON.stringify(moments));

    // Navegar para tela de criação
    navigate('/create-kidmovie');
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
                onClick={() => navigate('/dashboard-movies')}
                variant="outline"
                className="border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button
                onClick={handleGenerateMovie}
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
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col items-center justify-center shadow-lg z-10 relative">
                        <span className="text-white text-xs font-semibold">
                          {new Date(moment.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).replace('.', '').toUpperCase()}
                        </span>
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

    </div>
  );
};

export default KidLibrary;

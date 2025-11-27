import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import RewindHeader from "@/components/RewindHeader";
import { 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2, 
  TrendingUp,
  Calendar,
  Film,
  Users,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Dados mockados para demonstração
const mockMovies = [
  {
    id: "1",
    title: "Aniversário do Lucas - 7 Anos",
    createdAt: "2024-03-15",
    views: 234,
    likes: 89,
    comments: 23,
    shares: 12,
    thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
    link: "https://meusmomentos.com/movie/abc123",
    status: "ativo"
  },
  {
    id: "2", 
    title: "Festa na Escola - Dia das Crianças",
    createdAt: "2024-03-10",
    views: 567,
    likes: 234,
    comments: 67,
    shares: 45,
    thumbnail: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=400",
    link: "https://meusmomentos.com/movie/def456",
    status: "ativo"
  },
  {
    id: "3",
    title: "Viagem para a Praia - Férias de Verão",
    createdAt: "2024-02-28",
    views: 892,
    likes: 456,
    comments: 134,
    shares: 89,
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
    link: "https://meusmomentos.com/movie/ghi789",
    status: "ativo"
  }
];

const mockComments = [
  {
    id: "1",
    movieTitle: "Aniversário do Lucas - 7 Anos",
    author: "Maria Silva",
    comment: "Que lindo! A festa ficou incrível! 🎉",
    timestamp: "Há 2 horas",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
  },
  {
    id: "2",
    movieTitle: "Viagem para a Praia - Férias de Verão",
    author: "João Santos",
    comment: "Adorei as fotos! Que saudade dessa viagem! 🏖️",
    timestamp: "Há 5 horas",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao"
  },
  {
    id: "3",
    movieTitle: "Festa na Escola - Dia das Crianças",
    author: "Ana Costa",
    comment: "As crianças se divertiram muito! Parabéns! 🎈",
    timestamp: "Há 1 dia",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"
  }
];

const DashboardMovies = () => {
  const navigate = useNavigate();
  
  const totalViews = mockMovies.reduce((sum, movie) => sum + movie.views, 0);
  const totalLikes = mockMovies.reduce((sum, movie) => sum + movie.likes, 0);
  const totalComments = mockMovies.reduce((sum, movie) => sum + movie.comments, 0);
  const totalShares = mockMovies.reduce((sum, movie) => sum + movie.shares, 0);

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    // Toast notification would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
      <RewindHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Dashboard de Movies
          </h1>
          <p className="text-white/80">
            Acompanhe o desempenho e interação dos seus filmes criados
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Eye className="w-6 h-6 text-blue-300" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-white/70 text-sm mb-1">Total de Visualizações</p>
            <p className="text-3xl font-bold text-white">{totalViews.toLocaleString()}</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Heart className="w-6 h-6 text-pink-300" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-white/70 text-sm mb-1">Total de Curtidas</p>
            <p className="text-3xl font-bold text-white">{totalLikes.toLocaleString()}</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <MessageCircle className="w-6 h-6 text-purple-300" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-white/70 text-sm mb-1">Total de Comentários</p>
            <p className="text-3xl font-bold text-white">{totalComments.toLocaleString()}</p>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Share2 className="w-6 h-6 text-green-300" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-white/70 text-sm mb-1">Compartilhamentos</p>
            <p className="text-3xl font-bold text-white">{totalShares.toLocaleString()}</p>
          </Card>
        </div>

        {/* Movies List */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Film className="w-6 h-6" />
              Meus Movies Criados
            </h2>
            <Button 
              onClick={() => navigate('/create-kidmovie')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Criar Novo Movie
            </Button>
          </div>

          <div className="space-y-4">
            {mockMovies.map((movie) => (
              <Card key={movie.id} className="bg-white/5 border-white/10 p-4 hover:bg-white/10 transition-all">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Thumbnail */}
                  <div className="w-full md:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={movie.thumbnail} 
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Movie Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{movie.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-white/60">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(movie.createdAt).toLocaleDateString('pt-BR')}
                          </span>
                          <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                            {movie.status}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-blue-300" />
                        <div>
                          <p className="text-xs text-white/60">Visualizações</p>
                          <p className="text-sm font-bold text-white">{movie.views}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-pink-300" />
                        <div>
                          <p className="text-xs text-white/60">Curtidas</p>
                          <p className="text-sm font-bold text-white">{movie.likes}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-purple-300" />
                        <div>
                          <p className="text-xs text-white/60">Comentários</p>
                          <p className="text-sm font-bold text-white">{movie.comments}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-green-300" />
                        <div>
                          <p className="text-xs text-white/60">Compartilh.</p>
                          <p className="text-sm font-bold text-white">{movie.shares}</p>
                        </div>
                      </div>
                    </div>

                    {/* Engagement Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-white/60">Taxa de Engajamento</span>
                        <span className="text-xs text-white font-medium">
                          {((movie.likes + movie.comments + movie.shares) / movie.views * 100).toFixed(1)}%
                        </span>
                      </div>
                      <Progress 
                        value={(movie.likes + movie.comments + movie.shares) / movie.views * 100} 
                        className="h-2"
                      />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open(movie.link, '_blank')}
                      >
                        Ver Movie
                      </Button>
                      <Button 
                        size="sm"
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                        onClick={() => handleCopyLink(movie.link)}
                      >
                        Copiar Link
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Recent Comments */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Comentários Recentes
          </h2>

          <div className="space-y-4">
            {mockComments.map((comment) => (
              <Card key={comment.id} className="bg-white/5 border-white/10 p-4">
                <div className="flex gap-4">
                  <img 
                    src={comment.avatar} 
                    alt={comment.author}
                    className="w-12 h-12 rounded-full bg-white/10"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-white">{comment.author}</p>
                      <span className="text-xs text-white/60 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-white/80 mb-2">{comment.comment}</p>
                    <p className="text-xs text-white/60">em: {comment.movieTitle}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardMovies;
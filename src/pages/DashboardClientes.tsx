
import { useState } from "react";
import { Plus, User, Eye, Calendar, CreditCard, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import RewindHeader from "@/components/RewindHeader";

const DashboardClientes = () => {
  const navigate = useNavigate();
  
  // Dados mock - em produção viriam de uma API/banco de dados
  const [clienteData] = useState({
    nome: "João Silva",
    email: "joao@email.com",
    dataCadastro: "2024-01-15",
    totalRetrospectivas: 3
  });

  const [retrospectivas] = useState([
    {
      id: 1,
      titulo: "Nossa Jornada de Amor",
      destinatario: "Namorada",
      dataCriacao: "2024-06-15",
      status: "pago",
      valor: "R$ 29,90"
    },
    {
      id: 2,
      titulo: "Momentos Especiais com Mamãe",
      destinatario: "Mãe",
      dataCriacao: "2024-05-20",
      status: "pendente",
      valor: "R$ 29,90"
    },
    {
      id: 3,
      titulo: "Amizade Eterna",
      destinatario: "Amigo",
      dataCriacao: "2024-04-10",
      status: "pago",
      valor: "R$ 29,90"
    }
  ]);

  const handleNovaRetrospectiva = () => {
    navigate('/create');
  };

  const handlePerfil = () => {
    // Em produção, navegar para página de perfil
    console.log('Abrir página de perfil');
  };

  const handleVisualizarRetrospectiva = (id: number) => {
    // Em produção, navegar para visualizar a retrospectiva específica
    console.log('Visualizar retrospectiva:', id);
  };

  const getStatusBadge = (status: string) => {
    if (status === 'pago') {
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          <CheckCircle className="w-3 h-3 mr-1" />
          Pago
        </Badge>
      );
    }
    return (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
        <XCircle className="w-3 h-3 mr-1" />
        Pendente
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      <RewindHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header do Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Olá, {clienteData.nome}! 👋
            </h1>
            <p className="text-purple-200">
              Gerencie suas retrospectivas e acompanhe seu histórico
            </p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button
              onClick={handlePerfil}
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <User className="w-4 h-4 mr-2" />
              Perfil
            </Button>
            <Button
              onClick={handleNovaRetrospectiva}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova Retrospectiva
            </Button>
          </div>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-pink-400" />
                Data de Cadastro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-pink-300">
                {new Date(clienteData.dataCadastro).toLocaleDateString('pt-BR')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-purple-400" />
                Total de Retrospectivas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-300">
                {clienteData.totalRetrospectivas}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                Pagas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-300">
                {retrospectivas.filter(r => r.status === 'pago').length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabela de Retrospectivas */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Suas Retrospectivas
            </CardTitle>
            <CardDescription className="text-purple-200">
              Acompanhe todas as suas retrospectivas criadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20 hover:bg-white/5">
                  <TableHead className="text-white font-semibold">Título</TableHead>
                  <TableHead className="text-white font-semibold">Destinatário</TableHead>
                  <TableHead className="text-white font-semibold">Data de Criação</TableHead>
                  <TableHead className="text-white font-semibold">Status</TableHead>
                  <TableHead className="text-white font-semibold">Valor</TableHead>
                  <TableHead className="text-white font-semibold">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {retrospectivas.map((retrospectiva) => (
                  <TableRow 
                    key={retrospectiva.id}
                    className="border-white/20 hover:bg-white/5"
                  >
                    <TableCell className="text-white font-medium">
                      {retrospectiva.titulo}
                    </TableCell>
                    <TableCell className="text-purple-200">
                      {retrospectiva.destinatario}
                    </TableCell>
                    <TableCell className="text-purple-200">
                      {new Date(retrospectiva.dataCriacao).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(retrospectiva.status)}
                    </TableCell>
                    <TableCell className="text-white">
                      {retrospectiva.valor}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleVisualizarRetrospectiva(retrospectiva.id)}
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        Ver
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {retrospectivas.length === 0 && (
              <div className="text-center py-8">
                <p className="text-white/70 mb-4">
                  Você ainda não criou nenhuma retrospectiva
                </p>
                <Button
                  onClick={handleNovaRetrospectiva}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Primeira Retrospectiva
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardClientes;

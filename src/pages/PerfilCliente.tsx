
import { useState } from "react";
import { ArrowLeft, User, Mail, Calendar, Edit3, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import RewindHeader from "@/components/RewindHeader";

const PerfilCliente = () => {
  const navigate = useNavigate();
  
  // Dados mock - em produção viriam de uma API/banco de dados
  const [clienteData, setClienteData] = useState({
    nome: "João Silva",
    email: "joao@email.com",
    dataCadastro: "2024-01-15",
    telefone: "(11) 99999-9999"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(clienteData);

  const handleVoltar = () => {
    navigate('/dashboard-clientes');
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(clienteData);
  };

  const handleSave = () => {
    setClienteData(editData);
    setIsEditing(false);
    // Em produção, aqui faria a chamada para API para salvar os dados
    console.log('Dados salvos:', editData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(clienteData);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      <RewindHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            onClick={handleVoltar}
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Meu Perfil
            </h1>
            <p className="text-purple-200">
              Gerencie suas informações pessoais
            </p>
          </div>
        </div>

        {/* Card do Perfil */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <User className="w-6 h-6 text-white mr-3" />
                  <div>
                    <CardTitle className="text-white text-xl">Informações Pessoais</CardTitle>
                    <CardDescription className="text-purple-200">
                      Seus dados cadastrais na plataforma
                    </CardDescription>
                  </div>
                </div>
                {!isEditing ? (
                  <Button
                    onClick={handleEdit}
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Salvar
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white font-medium">
                  Nome Completo
                </Label>
                {isEditing ? (
                  <Input
                    id="nome"
                    value={editData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/50"
                  />
                ) : (
                  <p className="text-purple-200 text-lg">{clienteData.nome}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  E-mail
                </Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={editData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/50"
                  />
                ) : (
                  <p className="text-purple-200 text-lg">{clienteData.email}</p>
                )}
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-white font-medium">
                  Telefone
                </Label>
                {isEditing ? (
                  <Input
                    id="telefone"
                    value={editData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder-white/50"
                  />
                ) : (
                  <p className="text-purple-200 text-lg">{clienteData.telefone}</p>
                )}
              </div>

              {/* Data de Cadastro */}
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Data de Cadastro
                </Label>
                <p className="text-purple-200 text-lg">
                  {new Date(clienteData.dataCadastro).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PerfilCliente;

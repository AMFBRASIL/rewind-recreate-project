
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Baby, Sparkles } from "lucide-react";
import RetrospectiveForm from "../components/RetrospectiveForm";

const CreateRetrospective = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  const retrospectiveTypes = [
    {
      id: "couple",
      title: "Para Casal",
      description: "Uma retrospectiva romântica para você e seu amor",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      route: "/retrospective"
    },
    {
      id: "parent",
      title: "Para Pais/Mães",
      description: "Celebre os momentos especiais com seus filhos",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      route: "/parent-retrospective"
    },
    {
      id: "friend",
      title: "Para Amigos",
      description: "Uma homenagem especial para sua amizade",
      icon: Users,
      color: "from-purple-500 to-violet-500",
      route: "/friend-retrospective"
    },
    {
      id: "children",
      title: "Para Crianças",
      description: "Uma retrospectiva colorida e divertida para os pequenos",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
      route: "/children-retrospective"
    }
  ];

  const handleCreateRetrospective = (type: any) => {
    setSelectedType(type);
    setShowForm(true);
  };

  const handleFormSubmit = (formData: any) => {
    const selectedRetrospective = retrospectiveTypes.find(t => t.id === selectedType);
    if (selectedRetrospective) {
      navigate(selectedRetrospective.route, { state: { formData } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Criar Retrospectiva
          </h1>
          <p className="text-xl text-purple-200">
            Escolha o tipo de retrospectiva que deseja criar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {retrospectiveTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Card
                key={type.id}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleCreateRetrospective(type.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-200 text-center">
                    {type.description}
                  </CardDescription>
                  <Button
                    className={`w-full mt-4 bg-gradient-to-r ${type.color} hover:opacity-90 text-white border-none`}
                  >
                    Criar Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <RetrospectiveForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleFormSubmit}
        selectedType={selectedType}
      />
    </div>
  );
};

export default CreateRetrospective;

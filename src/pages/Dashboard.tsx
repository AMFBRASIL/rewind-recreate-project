import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  FileText, 
  UserX, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  MapPin,
  BarChart3
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("retrospectives");

  // Mock data - em produção, estes dados viriam de uma API
  const [metrics] = useState({
    retrospectivesCreated: 1247,
    registeredUsers: 3542,
    usersWithoutRetrospective: 2295,
    revenue: 45670.50,
    marketingSpent: 12340.75
  });

  const usersByCountry = [
    { country: "Brasil", users: 2100, fill: "#8884d8" },
    { country: "Portugal", users: 543, fill: "#82ca9d" },
    { country: "EUA", users: 432, fill: "#ffc658" },
    { country: "Argentina", users: 287, fill: "#ff7300" },
    { country: "Outros", users: 180, fill: "#00ff88" }
  ];

  const monthlyRevenue = [
    { month: "Jan", revenue: 3200, marketing: 800 },
    { month: "Fev", revenue: 4100, marketing: 950 },
    { month: "Mar", revenue: 3800, marketing: 1100 },
    { month: "Abr", revenue: 5200, marketing: 1300 },
    { month: "Mai", revenue: 6100, marketing: 1450 },
    { month: "Jun", revenue: 5800, marketing: 1200 }
  ];

  const userGrowth = [
    { month: "Jan", total: 1200, active: 800 },
    { month: "Fev", total: 1650, active: 1100 },
    { month: "Mar", total: 2100, active: 1400 },
    { month: "Abr", total: 2800, active: 1850 },
    { month: "Mai", total: 3200, active: 2100 },
    { month: "Jun", total: 3542, active: 2295 }
  ];

  const chartConfig = {
    revenue: {
      label: "Receita",
      color: "#8884d8",
    },
    marketing: {
      label: "Marketing",
      color: "#82ca9d",
    },
    total: {
      label: "Total de Usuários",
      color: "#8884d8",
    },
    active: {
      label: "Usuários Ativos",
      color: "#82ca9d",
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "retrospectives":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Retrospectivas</h2>
              <p className="text-purple-200">Gerencie todas as retrospectivas criadas</p>
            </div>
            
            {/* Métricas das Retrospectivas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Total Criadas
                  </CardTitle>
                  <FileText className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metrics.retrospectivesCreated.toLocaleString()}</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% desde o mês passado
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Ativas Este Mês
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">387</div>
                  <p className="text-xs text-green-400">
                    +23% comparado ao mês anterior
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Taxa de Conversão
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">35.2%</div>
                  <p className="text-xs text-purple-400">
                    Visitantes que criam retrospectivas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        
      case "users":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Usuários</h2>
              <p className="text-purple-200">Gerencie todos os usuários da plataforma</p>
            </div>
            
            {/* Métricas dos Usuários */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Total de Usuários
                  </CardTitle>
                  <Users className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metrics.registeredUsers.toLocaleString()}</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18% desde o mês passado
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Usuários Ativos
                  </CardTitle>
                  <Users className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2,295</div>
                  <p className="text-xs text-blue-400">
                    Últimos 30 dias
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Novos Usuários
                  </CardTitle>
                  <UserX className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">124</div>
                  <p className="text-xs text-purple-400">
                    Esta semana
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Gráfico de Crescimento de Usuários */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Crescimento de Usuários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userGrowth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="month" stroke="#ffffff80" />
                      <YAxis stroke="#ffffff80" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="total" 
                        stroke="#8884d8" 
                        strokeWidth={3}
                        name="Total de Usuários"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="active" 
                        stroke="#82ca9d" 
                        strokeWidth={3}
                        name="Usuários Ativos"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        );
        
      case "financial":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Financeiro</h2>
              <p className="text-purple-200">Acompanhe receitas e gastos da plataforma</p>
            </div>
            
            {/* Métricas Financeiras */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Receita Total
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    R$ {metrics.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +24% desde o mês passado
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Gasto com Marketing
                  </CardTitle>
                  <TrendingDown className="h-4 w-4 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    R$ {metrics.marketingSpent.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-red-400 flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -8% desde o mês passado
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Gráfico Receita vs Marketing */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Receita vs Gastos com Marketing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyRevenue}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="month" stroke="#ffffff80" />
                      <YAxis stroke="#ffffff80" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="revenue" fill="#8884d8" name="Receita" />
                      <Bar dataKey="marketing" fill="#82ca9d" name="Marketing" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        );
        
      case "settings":
        return (
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Configurações</h2>
              <p className="text-purple-200">Configure parâmetros da plataforma</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Configurações Gerais</CardTitle>
                </CardHeader>
                <CardContent className="text-white space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Manutenção da Plataforma</span>
                    <span className="text-green-400">Ativo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Notificações por Email</span>
                    <span className="text-green-400">Habilitado</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Backup Automático</span>
                    <span className="text-green-400">Diário</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Estatísticas do Sistema</CardTitle>
                </CardHeader>
                <CardContent className="text-white space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Uptime</span>
                    <span className="text-green-400">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Uso de Armazenamento</span>
                    <span className="text-yellow-400">76%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Última Atualização</span>
                    <span className="text-blue-400">2 dias atrás</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="space-y-6">
            {/* Métricas principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Retrospectivas Criadas
                  </CardTitle>
                  <FileText className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metrics.retrospectivesCreated.toLocaleString()}</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% desde o mês passado
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Usuários Cadastrados
                  </CardTitle>
                  <Users className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metrics.registeredUsers.toLocaleString()}</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18% desde o mês passado
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Usuários Sem Retrospectiva
                  </CardTitle>
                  <UserX className="h-4 w-4 text-orange-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metrics.usersWithoutRetrospective.toLocaleString()}</div>
                  <p className="text-xs text-orange-400">
                    {((metrics.usersWithoutRetrospective / metrics.registeredUsers) * 100).toFixed(1)}% do total
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Receita Total
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    R$ {metrics.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +24% desde o mês passado
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">
                    Gasto com Marketing
                  </CardTitle>
                  <TrendingDown className="h-4 w-4 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    R$ {metrics.marketingSpent.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                  <p className="text-xs text-red-400 flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    -8% desde o mês passado
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Receita vs Marketing */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Receita vs Gastos com Marketing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyRevenue}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                        <XAxis dataKey="month" stroke="#ffffff80" />
                        <YAxis stroke="#ffffff80" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="revenue" fill="#8884d8" name="Receita" />
                        <Bar dataKey="marketing" fill="#82ca9d" name="Marketing" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Mapa de Usuários */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Distribuição de Usuários por País
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={usersByCountry}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="users"
                          label={({ country, percent }) => `${country} ${(percent * 100).toFixed(0)}%`}
                        >
                          {usersByCountry.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Crescimento de Usuários */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Crescimento de Usuários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={userGrowth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="month" stroke="#ffffff80" />
                      <YAxis stroke="#ffffff80" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="total" 
                        stroke="#8884d8" 
                        strokeWidth={3}
                        name="Total de Usuários"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="active" 
                        stroke="#82ca9d" 
                        strokeWidth={3}
                        name="Usuários Ativos"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <SidebarProvider>
        <div className="flex w-full">
          <DashboardSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <SidebarInset className="flex-1">
            <div className="container mx-auto p-6">
              <div className="flex items-center gap-4 mb-8">
                <SidebarTrigger className="text-white hover:bg-white/10" />
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
                  <p className="text-purple-200">Visão geral dos indicadores da plataforma</p>
                </div>
              </div>

              {renderContent()}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;

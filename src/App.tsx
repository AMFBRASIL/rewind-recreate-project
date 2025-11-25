
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminAuthProvider } from "@/hooks/useAdminAuth";
import AdminRoute from "@/components/AdminRoute";
import Index from "./pages/Index";
import CoupleRetrospective from "./pages/CoupleRetrospective";
import CouplesLanding from "./pages/CouplesLanding";
import CreateRetrospective from "./pages/CreateRetrospective";
import PaymentPix from "./pages/PaymentPix";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import ParentsRetrospective from "./pages/ParentsRetrospective";
import FatherRetrospective from "./pages/FatherRetrospective";
import FatherLanding from "./pages/FatherLanding";
import ChildrenRetrospective from "./pages/ChildrenRetrospective";
import ChristmasRetrospective from "./pages/ChristmasRetrospective";
import KidMovie from "./pages/KidMovie";
import Dashboard from "./pages/Dashboard";
import DashboardClientes from "./pages/DashboardClientes";
import PerfilCliente from "./pages/PerfilCliente";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/NotFound";
import ChildrenLanding from "./pages/ChildrenLanding";
import ChristmasLanding from "./pages/ChristmasLanding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AdminAuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/casais" element={<CouplesLanding />} />
            <Route path="/criancas" element={<ChildrenLanding />} />
            <Route path="/natal" element={<ChristmasLanding />} />
            <Route path="/retrospective" element={<CoupleRetrospective />} />
            <Route path="/parents" element={<ParentsRetrospective />} />
            <Route path="/pai" element={<FatherLanding />} />
            <Route path="/father" element={<FatherRetrospective />} />
            <Route path="/children" element={<ChildrenRetrospective />} />
            <Route path="/christmas" element={<ChristmasRetrospective />} />
            <Route path="/kidmovie" element={<KidMovie />} />
            <Route path="/create" element={<CreateRetrospective />} />
            <Route path="/payment" element={<PaymentPix />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
            <Route path="/dashboard-clientes" element={<DashboardClientes />} />
            <Route path="/perfil-cliente" element={<PerfilCliente />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route 
              path="/dashboard" 
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AdminAuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

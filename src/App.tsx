
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CoupleRetrospective from "./pages/CoupleRetrospective";
import CreateRetrospective from "./pages/CreateRetrospective";
import PaymentPix from "./pages/PaymentPix";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import ParentsRetrospective from "./pages/ParentsRetrospective";
import ChildrenRetrospective from "./pages/ChildrenRetrospective";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/retrospective" element={<CoupleRetrospective />} />
          <Route path="/parents" element={<ParentsRetrospective />} />
          <Route path="/children" element={<ChildrenRetrospective />} />
          <Route path="/create" element={<CreateRetrospective />} />
          <Route path="/payment" element={<PaymentPix />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CoupleRetrospective from "./pages/CoupleRetrospective";
import ParentRetrospective from "./pages/ParentRetrospective";
import FriendRetrospective from "./pages/FriendRetrospective";
import CreateRetrospective from "./pages/CreateRetrospective";
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
          <Route path="/parent-retrospective" element={<ParentRetrospective />} />
          <Route path="/friend-retrospective" element={<FriendRetrospective />} />
          <Route path="/create" element={<CreateRetrospective />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

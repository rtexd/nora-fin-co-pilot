import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { PermissionPage } from "./pages/PermissionPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { GoalsPage } from "./pages/GoalsPage";
import { CompletionPage } from "./pages/CompletionPage";
import { ChatPage } from "./pages/ChatPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/permission" element={<PermissionPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/completion" element={<CompletionPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

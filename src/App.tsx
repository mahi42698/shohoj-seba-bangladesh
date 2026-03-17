import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FamilyCardPage from "./pages/FamilyCardPage.tsx";
import NidScannerPage from "./pages/NidScannerPage.tsx";
import PassportPhotoPage from "./pages/PassportPhotoPage.tsx";
import BirthCertPage from "./pages/BirthCertPage.tsx";
import ApplicationLetterPage from "./pages/ApplicationLetterPage.tsx";
import IdCardPdfPage from "./pages/IdCardPdfPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/family-card" element={<FamilyCardPage />} />
          <Route path="/nid-scanner" element={<NidScannerPage />} />
          <Route path="/passport-photo" element={<PassportPhotoPage />} />
          <Route path="/birth-certificate" element={<BirthCertPage />} />
          <Route path="/application-letter" element={<ApplicationLetterPage />} />
          <Route path="/id-card-pdf" element={<IdCardPdfPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

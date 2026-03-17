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
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import ContactUsPage from "./pages/ContactUsPage.tsx";
import BlogIndexPage from "./pages/blog/BlogIndexPage.tsx";
import NidCardCheckOnlinePage from "./pages/blog/NidCardCheckOnlinePage.tsx";
import BirthCertificateVerificationPage from "./pages/blog/BirthCertificateVerificationPage.tsx";
import FamilyCardApplyPage from "./pages/blog/FamilyCardApplyPage.tsx";
import PassportApplicationPage from "./pages/blog/PassportApplicationPage.tsx";
import PoliceClearanceCertificatePage from "./pages/blog/PoliceClearanceCertificatePage.tsx";
import DrivingLicenseApplicationPage from "./pages/blog/DrivingLicenseApplicationPage.tsx";
import ETinCertificatePage from "./pages/blog/ETinCertificatePage.tsx";
import LandRecordCheckOnlinePage from "./pages/blog/LandRecordCheckOnlinePage.tsx";
import CovidVaccineCertificateDownloadPage from "./pages/blog/CovidVaccineCertificateDownloadPage.tsx";
import VgdVgfCardApplicationPage from "./pages/blog/VgdVgfCardApplicationPage.tsx";
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

          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/nid-card-check-online" element={<NidCardCheckOnlinePage />} />
          <Route path="/blog/birth-certificate-verification" element={<BirthCertificateVerificationPage />} />
          <Route path="/blog/family-card-apply" element={<FamilyCardApplyPage />} />
          <Route path="/blog/passport-application" element={<PassportApplicationPage />} />
          <Route path="/blog/police-clearance-certificate" element={<PoliceClearanceCertificatePage />} />
          <Route path="/blog/driving-license-application" element={<DrivingLicenseApplicationPage />} />
          <Route path="/blog/e-tin-certificate" element={<ETinCertificatePage />} />
          <Route path="/blog/land-record-check-online" element={<LandRecordCheckOnlinePage />} />
          <Route path="/blog/covid-vaccine-certificate-download" element={<CovidVaccineCertificateDownloadPage />} />
          <Route path="/blog/vgd-vgf-card-application" element={<VgdVgfCardApplicationPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

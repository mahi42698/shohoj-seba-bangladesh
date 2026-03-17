import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import OfficialWebsiteCard from "@/components/OfficialWebsiteCard";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <div id="services">
        <ServiceCards />
      </div>
      <OfficialWebsiteCard />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;

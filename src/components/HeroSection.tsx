import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-primary text-primary-foreground py-20 px-4">
      <div className="container text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          বাংলাদেশের নাগরিক সেবা সহজ করুন
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90">
          সহজে ফরম তৈরি করুন, ডাউনলোড করুন এবং প্রিন্ট করুন
        </p>
        <Button
          variant="hero"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          <ArrowDown className="w-5 h-5" />
          ফরম তৈরি শুরু করুন
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;

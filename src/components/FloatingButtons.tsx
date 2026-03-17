import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
          aria-label="উপরে যান"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <a
        href="https://wa.me/8801726553185"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-success text-success-foreground shadow-lg flex items-center justify-center hover:bg-success/90 transition-colors"
        aria-label="WhatsApp চ্যাট"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;

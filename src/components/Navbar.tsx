import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16 flex-wrap">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold text-primary">
            সহজ সেবা বাংলাদেশ
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            🏠 হোম
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/about-us" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            আমাদের সম্পর্কে
          </Link>
          <Link to="/contact-us" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            যোগাযোগ
          </Link>
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            গোপনীয়তা
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

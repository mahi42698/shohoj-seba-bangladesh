import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary">
          সহজ সেবা বাংলাদেশ
        </Link>
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-base">
          🏠 হোম
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

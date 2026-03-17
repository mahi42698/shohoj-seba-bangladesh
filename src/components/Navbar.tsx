"use client";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/blog", label: "তথ্য" },
    { href: "/about-us", label: "আমাদের সম্পর্কে" },
    { href: "/contact-us", label: "যোগাযোগ" },
    { href: "/privacy-policy", label: "গোপনীয়তা" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-white/60 backdrop-blur-md shadow-sm"
          }`}
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center gap-2 group"
              aria-label="Shohoj Seba Bangladesh"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-white font-bold text-lg">স</span>
              </div>
              <span
                className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent hidden sm:block transition-all duration-300 group-hover:scale-105 origin-left"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                সহজ সেবা
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 text-base ${isActive(link.href)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    }`}
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    style={{
                      width: isActive(link.href) ? "100%" : "0%",
                    }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden border-t border-gray-100/50 bg-white/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-300"
            style={{
              WebkitBackdropFilter: "blur(12px)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(link.href)
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20" />

      {/* Add Poppins font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        /* Smooth mobile menu animation */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: slideDown 0.3s ease-out;
        }
        
        /* Enhanced Bangla typography */
        [style*="fontFamily: 'Hind Siliguri'"] {
          letter-spacing: 0.3px;
          line-height: 1.6;
        }
      `}</style>
    </>
  );
};

export default Navbar;

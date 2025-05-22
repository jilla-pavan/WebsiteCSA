import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();

    // Special handling for placements page
    if (sectionId === "placements") {
      navigate("/placements");
      setMobileMenuOpen(false);
      return;
    }

    // If we're on a different page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-5 transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="/assets/csa_Logo.png"
            alt="CareerSure Academy Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block mx-auto flex-grow max-w-2xl">
          <ul className="flex items-center justify-center gap-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "courses", label: "Courses" },
              { id: "placements", label: "Placements" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleLinkClick(e, id)}
                  className="text-gray-700 font-bold hover:text-primary px-2 py-2 rounded-lg transition-all relative group inline-block tracking-wide text-sm"
                >
                  {label}
                  <span className="absolute bottom-1 left-2 right-2 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-all origin-left"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() =>
              (window.location.href = "https://csa-dashboard.vercel.app/")
            }
            className="text-gray-700 font-bold hover:text-primary px-3 py-1.5 rounded-lg transition-all text-sm hover:bg-gray-50/80 tracking-wide border border-transparent hover:border-gray-200"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/enroll")}
            className="bg-primary text-white font-extrabold py-1.5 px-4 rounded-lg hover:bg-primary-dark transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 hover:bg-gray-50/80 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700 transition-all duration-300"
            style={{
              transform: mobileMenuOpen ? "rotate(180deg)" : "rotate(0)",
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="w-full px-4 sm:px-6 py-4">
          <ul className="flex flex-col space-y-1">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "placements", label: "Placements" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleLinkClick(e, id)}
                  className="block py-2.5 px-4 text-gray-700 font-bold hover:text-[#FF6B00] rounded-md transition-all duration-300 hover:bg-gray-50/80 tracking-wide"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-3 space-y-2">
              <button
                onClick={() =>
                  (window.location.href = "https://csa-dashboard.vercel.app/")
                }
                className="w-full text-gray-700 font-bold hover:text-[#FF6B00] py-2.5 px-4 rounded-md transition-all duration-300 hover:bg-gray-50/80 border border-gray-200 tracking-wide"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/enroll")}
                className="w-full bg-[#FF6B00] text-white font-extrabold py-2.5 px-4 rounded-md hover:bg-[#FF6B00]/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 shadow-sm hover:shadow-md tracking-wide"
              >
                Enroll Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

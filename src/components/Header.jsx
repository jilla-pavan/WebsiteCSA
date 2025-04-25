import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-3 border-b border-gray-100' 
          : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        {/* Logo Section - Enhanced spacing and sizing */}
        <div className="flex items-center flex-shrink-0">
          <div 
            className="text-2xl font-extrabold cursor-pointer text-[#FF6B00] hover:text-[#FF6B00]/90 transition-colors duration-200 flex items-center gap-2"
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            {/* Logo text with better responsive behavior */}
            <span className="hidden sm:inline">Career Sure</span>
            <span className="sm:hidden">CSA</span>
            <span className="hidden lg:inline">Academy</span>
          </div>
        </div>

        {/* Desktop Navigation - Improved spacing and hover effects */}
        <nav className="hidden md:block mx-6 flex-grow">
          <ul className="flex items-center justify-center gap-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'placements', label: 'Placements' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <li key={id}>
                <a 
                  href={`#${id}`}
                  onClick={(e) => handleLinkClick(e, id)}
                  className="text-[#333333] font-semibold hover:text-[#FF6B00] px-5 py-2.5 rounded-md transition-all duration-200 text-sm relative group inline-block"
                >
                  {label}
                  <span className="absolute bottom-1.5 left-0 w-full h-0.5 bg-[#FF6B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons (Desktop) - Enhanced spacing and visual hierarchy */}
        <div className="hidden md:flex items-center gap-5 flex-shrink-0">
          <button 
            onClick={(e) => handleLinkClick(e, 'login')}
            className="text-[#333333] font-semibold hover:text-[#FF6B00] px-5 py-2.5 rounded-md transition-all duration-200 text-sm hover:bg-gray-50"
          >
            Log In
          </button>
          <button 
            onClick={(e) => handleLinkClick(e, 'enrollment')}
            className="bg-[#FF6B00] text-white font-semibold py-2.5 px-6 rounded-md hover:bg-[#FF6B00]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button - Enhanced touch target and visual feedback */}
        <button 
          className="md:hidden p-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-[#FF6B00] transition-transform duration-300"
            style={{ transform: mobileMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Enhanced spacing and transitions */}
      <div 
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <ul className="flex flex-col space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'placements', label: 'Placements' },
              { id: 'contact', label: 'Contact' }
            ].map(({ id, label }) => (
              <li key={id}>
                <a 
                  href={`#${id}`}
                  onClick={(e) => handleLinkClick(e, id)}
                  className="block py-3 px-4 text-[#333333] font-semibold hover:text-[#FF6B00] rounded-md transition-all duration-200 hover:bg-gray-50/80"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4 space-y-3">
              <button 
                onClick={(e) => handleLinkClick(e, 'login')}
                className="w-full text-[#333333] font-semibold hover:text-[#FF6B00] py-3 px-4 rounded-md transition-all duration-200 hover:bg-gray-50 border border-gray-200"
              >
                Log In
              </button>
              <button 
                onClick={(e) => handleLinkClick(e, 'enrollment')}
                className="w-full bg-[#FF6B00] text-white font-semibold py-3 px-4 rounded-md hover:bg-[#FF6B00]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-offset-2 shadow-md"
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
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();

    // Special handling for placements page
    if (sectionId === "placements") {
      navigate("/placements");
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
  };

  return (
    <footer className="bg-gray-900 py-8 sm:py-12 md:py-16 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6">
              <span className="text-white">Career</span>
              <span className="text-primary">Sure</span>
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base max-w-xl">
              Your gateway to a successful tech career. High-quality education,
              expert faculty, and excellent placement opportunities.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/company/101997741/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/careersure.academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556598703801"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.231 0-4.185 1.237-4.185 4.015v2.985z" />
                </svg>
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.38 10.08 22 2h-1.82l-6.53 7.17L8.4 2H2l8.02 11.4L2 22h1.82l6.96-7.65L15.6 22H22l-7.62-11.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              Quick Links
            </h3>
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "courses", label: "Courses" },
              { id: "placements", label: "Placements" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={(e) => handleLinkClick(e, id)}
                className="text-gray-400 block mb-3 sm:mb-4 text-sm sm:text-base transition-all hover:text-primary hover:translate-x-2 font-medium"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">
              Contact Us
            </h3>
            {[
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                text: "LIG-B/F-67/4, 4th Phase, KPHB, Hyderabad, Telangana 500072",
              },
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                text: "contact@careersureacademy.com",
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                text: "+91 8919734391, +91 6301046346",
              },
            ].map((contact, index) => (
              <div key={index} className="flex items-center mb-3 sm:mb-4 group">
                <div className="min-w-[2rem] sm:min-w-[2.5rem] h-8 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-primary transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={contact.icon}
                    />
                  </svg>
                </div>
                {
                  contact.text === "contact@careersureacademy.com" ? (
                    <a href={`mailto:${contact.text}`} className="text-gray-400 text-sm sm:text-base group-hover:text-primary transition-all break-words leading-relaxed flex-1">
                      {contact.text}
                    </a>
                  ) : contact.text.startsWith("+91") ? (
                    <span className="text-gray-400 text-sm sm:text-base group-hover:text-primary transition-all break-words leading-relaxed flex-1">
                      {contact.text.split(', ').map((number, numIndex) => (
                        <React.Fragment key={numIndex}>
                          <a href={`https://api.whatsapp.com/send/?phone=${number.replace(/\s|\+/g, '')}&text=Hi%21+I%E2%80%99m+very+interested+%E2%80%94+can+you+send+me+more+info+as+soon+as+possible%3F&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {number}
                          </a>{numIndex < contact.text.split(', ').length - 1 && ', '}
                        </React.Fragment>
                      ))}
                    </span>
                  ) : contact.text === "LIG-B/F-67/4, 4th Phase, KPHB, Hyderabad, Telangana 500072" ? (
                    <a href="https://www.google.com/maps/@17.4735796,78.3881738,16z?entry=ttu&g_ep=EgoyMDUxNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm sm:text-base group-hover:text-primary transition-all break-words leading-relaxed flex-1 hover:underline">
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm sm:text-base group-hover:text-primary transition-all break-words leading-relaxed flex-1">
                  {contact.text}
                </span>
                  )
                }
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Career Sure Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 

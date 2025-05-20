import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-extrabold mb-4">
              <span className="text-white">Career</span>
              <span className="text-primary">Sure</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              Your gateway to a successful tech career. High-quality education, expert faculty, and excellent placement opportunities.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Courses</h3>
            {[
              "MERN Stack",
              "Java Full Stack",
              "Python Full Stack",
              "View All Courses"
            ].map((course) => (
              <a
                key={course}
                href="#courses"
                className="text-gray-400 block mb-3 text-sm transition-all hover:text-primary hover:translate-x-2"
              >
                {course}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            {[
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                text: "LIG-B/F-67/4, 4th Phase, KPHB, Hyderabad, Telangana 500072"
              },
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                text: "contact@careersureacademy.com"
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                text: "+91 8919734391, +91 6301046346"
              }
            ].map((contact, index) => (
              <div key={index} className="flex items-center mb-3 group">
                <div className="min-w-[2.25rem] h-8 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-primary transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-primary transition-all break-words leading-snug">
                  {contact.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Career Sure Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 py-20 text-white">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold mb-6">
              <span className="text-white">Career</span>
              <span className="text-primary">Sure</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your gateway to a successful tech career. High-quality education, expert faculty, and excellent placement opportunities.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { title: "Twitter", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { title: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { title: "Instagram", icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z" },
                { title: "LinkedIn", icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" }
              ].map((social) => (
                <a
                  key={social.title}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg"
                  title={social.title}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Courses</h3>
            {[
              "Web Development",
              "Data Science",
              "Mobile App Development",
              "Cloud Computing",
              "View All Courses"
            ].map((course) => (
              <a
                key={course}
                href="#courses"
                className="text-gray-400 block mb-4 transition-all hover:text-primary hover:translate-x-2"
              >
                {course}
              </a>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
            {[
              "Blog",
              "Free Tutorials",
              "Webinars",
              "Success Stories",
              "Career Guidance"
            ].map((resource) => (
              <a
                key={resource}
                href="#resources"
                className="text-gray-400 block mb-4 transition-all hover:text-primary hover:translate-x-2"
              >
                {resource}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            {[
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                text: "123 Education Street, Tech City, TC 12345"
              },
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                text: "info@careersureacademy.com"
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                text: "(123) 456-7890"
              }
            ].map((contact, index) => (
              <div key={index} className="flex items-start mb-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-primary transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                  </svg>
                </div>
                <span className="text-gray-400 group-hover:text-primary transition-all">
                  {contact.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Career Sure Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
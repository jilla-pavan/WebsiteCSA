import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ThemeToggle from './components/ThemeToggle';
import GetInTouch from './components/GetInTouch';
import PlacementsPage from './pages/PlacementsPage';
import PlacementsPreview from './components/PlacementsPreview';
import EnrollPage from './pages/EnrollPage';
import './styles/theme.css';

function HomePage() {
  return (
    <>
      <section id="home" className="min-h-screen">
        <HeroSection />
      </section>
      <section id="about" className="bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto">
          <AboutUs />
        </div>
      </section>
      <section id="placements-preview" className="bg-white">
        <PlacementsPreview />
      </section>
      <section id="contact" className="py-20 bg-gradient-to-b from-[#FF6B00] to-[#FF8533] text-white">
        <div className="mx-auto px-4">
          <div className="card bg-white/10 backdrop-blur-sm hover:shadow-2xl p-8 rounded-2xl transition-all duration-300">
            <GetInTouch />
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-['Poppins',Arial,sans-serif]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
          </Routes>
        </main>
        
        {/* Enhanced Footer */}
        <footer className="bg-gray-900 py-20 text-white">
          <div className="mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-extrabold mb-6">
                  <span className="text-white">Career</span>
                  <span className="text-[#FF6B00]">Sure</span>
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Your gateway to a successful tech career. High-quality education, expert faculty, and excellent placement opportunities.
                </p>
                {/* Social Links - Enhanced with consistent hover effects */}
                <div className="flex gap-4">
                  {[
                    { title: "Facebook", icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                    { title: "Twitter", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                    { title: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                    { title: "LinkedIn", icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" }
                  ].map((social) => (
                    <a
                      key={social.title}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/10 text-white 
                               flex items-center justify-center transition-all duration-300 
                               hover:bg-[#FF6B00] hover:text-white hover:-translate-y-1 hover:shadow-lg"
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
                    className="text-gray-400 block mb-4 transition-all duration-300 hover:text-[#FF6B00] hover:translate-x-2"
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
                    className="text-gray-400 block mb-4 transition-all duration-300 hover:text-[#FF6B00] hover:translate-x-2"
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
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#FF6B00] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                      </svg>
                    </div>
                    <span className="text-gray-400 group-hover:text-[#FF6B00] transition-colors duration-300">
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

        <div className="fixed bottom-5 right-5 z-50">
          <ThemeToggle />
        </div>
      </div>
    </Router>
  );
}

export default App;

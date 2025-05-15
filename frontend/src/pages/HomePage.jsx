import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import GetInTouch from '../components/GetInTouch';
import PlacementsPreview from '../components/PlacementsPreview';

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
      <section id="contact" className="py-20 bg-gradient-to-b from-primary to-primary-light text-white">
        <div className="mx-auto px-4">
          <div className="card bg-white/10 backdrop-blur-sm hover:shadow-2xl p-8 rounded-2xl transition-all">
            <GetInTouch />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage; 
import React, { useEffect } from 'react';
import Placements from '../components/Placements';
import Header from '../components/Header';
import ThemeToggle from '../components/ThemeToggle';

function PlacementsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--gray-50)] font-['Poppins',Arial,sans-serif]">
      <Header />
      <main className="pt-20">
        <Placements />
      </main>
      <div className="fixed bottom-5 right-5 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default PlacementsPage; 
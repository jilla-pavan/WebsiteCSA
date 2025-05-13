import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PlacementsPage from './pages/PlacementsPage';
import EnrollPage from './pages/EnrollPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

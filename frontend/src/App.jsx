import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PlacementsPage from "./pages/PlacementsPage";
import EnrollPage from "./pages/EnrollPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import "./styles/theme.css";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import MentorApply from "./components/MentorApply";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/mentor-apply" element={<MentorApply />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

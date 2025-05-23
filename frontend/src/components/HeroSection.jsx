import React, { useState, useEffect, useRef } from "react";
import CourseDetailsModal from "./CourseDetailsModal";
import Courses from "./Courses";
import TopPlacements from "./TopPlacements";
import CompaniesHire from "./CompaniesHire";
import ExpertTrainers from "./ExpertTrainers";
import { Testimonial } from "./Testimonial";
import { FAQs } from "./FAQs";
import AboutUs from "./AboutUs";
import GetInTouch from "./GetInTouch";
import CareerAdvisorModal from "./CareerAdvisorModal";
import RoadmapSection from "./RoadmapSection";
import StudentReels from "./StudentReels";

function HeroSection() {
  const [showAdvisorModal, setShowAdvisorModal] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Show the modal after 5 seconds on first load
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowAdvisorModal(true);
    }, 5000);
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  // When modal is closed, set up interval to show it again after 30 seconds
  const handleCloseModal = () => {
    setShowAdvisorModal(false);
    // Clear any existing interval to avoid stacking
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setShowAdvisorModal(true);
      clearInterval(intervalRef.current); // Only show once, reset on next close
    }, 30000); // 30 seconds
  };

  // Add custom CSS for auto-scrolling animations
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes scrollRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      
      .scroll-left {
        animation: scrollLeft 20s linear infinite;
        will-change: transform;
      }
      
      .scroll-right {
        animation: scrollRight 20s linear infinite;
        will-change: transform;
      }
      
      .animate-marquee {
        animation: marquee 10s linear infinite;
      }
      .animate-marquee-reverse {
        animation: marquee-reverse 10s linear infinite;
      }
      .animate-marquee-fast {
        animation: marquee 10s linear infinite;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-reverse {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      
      .testimonial-container {
        display: flex;
      }
      
      .testimonial-container > div {
        flex-shrink: 0;
      }
      
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .testimonial-slider-container:hover .scroll-left,
      .testimonial-slider-container:hover .scroll-right,
      .scroll-left:hover,
      .scroll-right:hover {
        animation-play-state: paused;
      }
      
      .testimonial-card {
        transition: all 0.3s ease;
        transform: translateY(0);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      
      .testimonial-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-color: rgba(249, 115, 22, 0.5);
      }
      
      .testimonial-card:focus-within {
        outline: none;
        box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        border-color: rgba(249, 115, 22, 0.8);
      }
      
      .testimonial-card .quote-icon {
        opacity: 0.15;
        transition: all 0.3s ease;
      }
      
      .testimonial-card:hover .quote-icon {
        opacity: 0.25;
        transform: translateY(-3px);
      }
      
      .testimonial-card .company-logo {
        filter: grayscale(100%);
        opacity: 0.7;
        transition: all 0.3s ease;
      }
      
      .testimonial-card:hover .company-logo {
        filter: grayscale(0%);
        opacity: 1;
      }
      
      .testimonial-card .testimonial-text {
        position: relative;
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .pulse-animation {
        animation: pulse 2s infinite;
      }
      
      .company-logo-container {
        transition: all 0.3s ease;
        filter: grayscale(100%);
        opacity: 0.6;
      }
      
      .company-logo-container:hover {
        filter: grayscale(0%);
        opacity: 1;
        transform: scale(1.05);
      }
      
      .gradient-text {
        background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .hero-section {
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      }
      
      .hero-content {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.8s ease forwards;
      }
      
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .hero-image {
        opacity: 0;
        transform: translateX(20px);
        animation: fadeInRight 0.8s ease 0.3s forwards;
      }
      
      @keyframes fadeInRight {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .feature-card {
        transition: all 0.3s ease;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        border-color: #FF6B00;
      }
      
      .feature-icon {
        transition: all 0.3s ease;
      }
      
      .feature-card:hover .feature-icon {
        transform: scale(1.1);
        color: #FF6B00;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section id="home" className="pt-24 bg-gradient-to-b from-white to-gray-50">
      {/* Career Advisor Modal */}
      <CareerAdvisorModal
        isOpen={showAdvisorModal}
        onClose={handleCloseModal}
      />
      <div className="w-full">
        <StudentReels />
        <TopPlacements />
        <CompaniesHire />
        <RoadmapSection />
        <ExpertTrainers />
        <Courses />
        <Testimonial />
        <FAQs />
        <AboutUs />
        <GetInTouch />
      </div>
    </section>
  );
}

export default HeroSection;

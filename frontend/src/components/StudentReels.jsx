import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudentReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Updated video testimonials with more professional data structure
  const videoTestimonials = [
    {
      id: 1,
      name: "Udhay Kaitha",
      role: "Software Developer",
      company: "Multiplier AI",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
      thumbnail: "https://randomuser.me/api/portraits/men/28.jpg",
      course: "Full Stack Development",
      batch: "2023",
      likes: "2.5K",
      comments: "245",
      date: "March 15, 2024",
      achievement: "Secured 4.5 LPA Package",
      duration: "6 months",
      previousRole: "Fresher",
      previousCompany: "Career Sure Academy",
      skills: ["React", "Node.js", "JavaScript", "MongoDB"],
      project: "Built E-commerce Platform",
      interviewRounds: "3 rounds cleared",
      preparationTime: "4 months",
      testimonial:
        "Career Sure Academy transformed my career journey. The practical approach and industry-focused curriculum helped me land my dream job at Multiplier AI.",
    },
    {
      id: 2,
      name: "Dileep",
      role: "Software Tester",
      company: "Wipro",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
      thumbnail: "https://randomuser.me/api/portraits/men/36.jpg",
      course: "Software Testing",
      batch: "2023",
      likes: "1.8K",
      comments: "189",
      date: "February 28, 2024",
      achievement: "Secured 4 LPA Package",
      duration: "5 months",
      previousRole: "Fresher",
      previousCompany: "Career Sure Academy",
      skills: ["Manual Testing", "Automation", "Selenium", "JIRA"],
      project: "Automated Testing Framework",
      interviewRounds: "3 rounds cleared",
      preparationTime: "4 months",
      testimonial:
        "The hands-on training and real-time project experience at Career Sure Academy gave me the confidence to excel in my interviews.",
    },
    {
      id: 3,
      name: "Jagadeesh",
      role: "Software Developer",
      company: "Sconex Software",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
      thumbnail: "https://randomuser.me/api/portraits/men/65.jpg",
      course: "Full Stack Development",
      batch: "2023",
      likes: "3.2K",
      comments: "312",
      date: "January 20, 2024",
      achievement: "Secured 4 LPA Package",
      duration: "6 months",
      previousRole: "Fresher",
      previousCompany: "Career Sure Academy",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      project: "Real-time Chat Application",
      interviewRounds: "4 rounds cleared",
      preparationTime: "5 months",
      testimonial:
        "The mentorship and placement support at Career Sure Academy was exceptional. They helped me build a strong portfolio and prepare for interviews.",
    },
  ];

  // Updated animated blocks with more relevant metrics
  const animatedBlocks = [
    {
      id: 1,
      count: "97%",
      label: "Placement Rate",
      color: "from-blue-500/80 to-blue-600/80",
      textColor: "text-white",
      delay: 0.2,
      shape: "rounded-2xl",
    },
    {
      id: 2,
      count: "100+",
      label: "Students Placed",
      color: "from-emerald-500/80 to-emerald-600/80",
      textColor: "text-white",
      delay: 0.4,
      shape: "rounded-2xl",
    },
    {
      id: 3,
      count: "6 LPA",
      label: "Avg. Package",
      color: "from-violet-500/80 to-violet-600/80",
      textColor: "text-white",
      delay: 0.6,
      shape: "rounded-2xl",
    },
    {
      id: 4,
      count: "150+",
      label: "Hiring Partners",
      color: "from-rose-500/80 to-rose-600/80",
      textColor: "text-white",
      delay: 0.8,
      shape: "rounded-2xl",
    },
  ];

  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Updated drag handlers for smoother reel-like experience
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartY(e.type === "mousedown" ? e.clientY : e.touches[0].clientY);
    setCurrentY(e.type === "mousedown" ? e.clientY : e.touches[0].clientY);
    setIsPlaying(false);
    setIframeLoading(true);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition =
      e.type === "mousemove" ? e.clientY : e.touches[0].clientY;
    setCurrentY(currentPosition);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = currentY - startY;
    const threshold = 80; // Adjusted threshold for smoother navigation

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (
        dragDistance < 0 &&
        currentIndex < videoTestimonials.length - 1
      ) {
        setCurrentIndex(currentIndex + 1);
      } else if (dragDistance > 0 && currentIndex === 0) {
        setCurrentIndex(videoTestimonials.length - 1);
      } else if (
        dragDistance < 0 &&
        currentIndex === videoTestimonials.length - 1
      ) {
        setCurrentIndex(0);
      }
    }

    setCurrentY(startY);
    // setIsPlaying(true); // Re-enable autoplay after a short delay if needed
  };

  // Add useEffect for currentIndex change to manage loading state and autoplay
  useEffect(() => {
    setIframeLoading(true);
    const timer = setTimeout(() => {
      setIframeLoading(false);
    }, 500); // Simulate loading delay

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    if (isPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIframeLoading(true);
      }, 10000); // Change video every 10 seconds
    }

    return () => {
      clearTimeout(timer);
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [currentIndex, isPlaying, videoTestimonials.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mouse events
    container.addEventListener("mousedown", handleDragStart);
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);

    // Touch events
    container.addEventListener("touchstart", handleDragStart);
    window.addEventListener("touchmove", handleDragMove);
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      container.removeEventListener("mousedown", handleDragStart);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      container.removeEventListener("touchstart", handleDragStart);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, startY, currentY]); // Removed currentIndex from deps as it's handled in the new effect

  // Animation variants for consistent animations
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  // Variants for text/badge entrance
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Variants for stats block highlight
  const statVariants = {
    initial: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)" },
    active: {
      scale: 1.02,
      borderColor: "rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    inactive: {
      scale: 1,
      borderColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Diagonal Line Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #ffffff1a 8%, transparent 8%, transparent 92%, #ffffff1a 92%), linear-gradient(-45deg, #ffffff1a 8%, transparent 8%, transparent 92%, #ffffff1a 92%)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* Left Stats Panel */}
        <motion.div
          className="hidden lg:block absolute left-8 top-8 w-64"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {animatedBlocks.map((block, index) => (
              <motion.div
                key={block.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 p-6 hover:border-blue-500/50 transition-all duration-300"
                variants={statVariants}
                initial="initial"
                animate={index === currentIndex ? "active" : "inactive"}
                transition={{ delay: block.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <span className="text-3xl font-bold text-white block mb-2">
                    {block.count}
                  </span>
                  <span className="text-gray-400 font-medium">
                    {block.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center Video Player */}
        <div className="relative w-full max-w-sm mx-auto">
          <motion.div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-3xl bg-gray-900/50 backdrop-blur-xl cursor-grab active:cursor-grabbing"
            style={{
              aspectRatio: "9/16",
              maxHeight: "calc(100vh - 100px)",
              minHeight: "500px",
              boxShadow: `
                0 0 0 1px rgba(255, 255, 255, 0.1),
                0 0 30px rgba(59, 130, 246, 0.2),
                0 0 60px rgba(59, 130, 246, 0.1)
              `,
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glass Border Effect */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"></div>

            <AnimatePresence mode="wait">
              {videoTestimonials.map((testimonial, index) => {
                if (index !== currentIndex) return null;

                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <div className="relative w-full h-full">
                      {iframeLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                          <motion.div
                            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </div>
                      )}
                      <iframe
                        src={testimonial.videoUrl}
                        title={`${testimonial.name}'s Success Story`}
                        className={`w-full h-full object-cover ${
                          iframeLoading ? "invisible" : "visible"
                        }`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => setIframeLoading(false)}
                      ></iframe>

                      {/* Content Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={contentVariants}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          {/* Student Info */}
                          <motion.div
                            className="mb-4"
                            variants={contentVariants}
                            transition={{ delay: 0.2 }}
                          >
                            <h6 className="text-2xl font-bold text-white mb-1">
                              {testimonial.name}
                            </h6>
                            <p className="text-blue-400 font-medium">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </motion.div>

                          {/* Achievement Badge */}
                          <motion.div
                            className="mb-4"
                            variants={contentVariants}
                            transition={{ delay: 0.3 }}
                          >
                            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              {testimonial.achievement}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Video Navigation */}
          <motion.div
            className="flex justify-center gap-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 w-8"
                    : "bg-gray-600 w-4 hover:bg-gray-500"
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Right Side Guide */}
        <motion.div
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Swipe to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default StudentReels;

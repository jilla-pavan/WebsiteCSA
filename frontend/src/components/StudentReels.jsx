import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const StudentReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  // Sample data for student video testimonials (keeping existing data for now, can be replaced later)
  const videoTestimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1", // Replace with actual YouTube ID
      thumbnail: "https://randomuser.me/api/portraits/women/28.jpg",
      course: "Full Stack Development",
      batch: "2023",
      likes: "2.5K",
      comments: "245",
      date: "March 15, 2024",
      achievement: "Secured 32 LPA Package",
      duration: "6 months",
      previousRole: "Frontend Developer",
      previousCompany: "TCS",
      skills: ["React", "Node.js", "AWS", "System Design"],
      project: "Built scalable microservices architecture",
      interviewRounds: "5 rounds cleared",
      preparationTime: "4 months",
    },
    {
      id: 2,
      name: "Rahul Singh",
      role: "Data Scientist",
      company: "Amazon",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2", // Replace with actual YouTube ID
      thumbnail: "https://randomuser.me/api/portraits/men/36.jpg",
      course: "Data Science & ML",
      batch: "2023",
      likes: "1.8K",
      comments: "189",
      date: "February 28, 2024",
      achievement: "Secured 28 LPA Package",
      duration: "8 months",
      previousRole: "Business Analyst",
      previousCompany: "Infosys",
      skills: ["Python", "TensorFlow", "SQL", "MLOps"],
      project: "Implemented ML pipeline for fraud detection",
      interviewRounds: "4 rounds cleared",
      preparationTime: "6 months",
    },
    {
      id: 3,
      name: "Neha Patel",
      role: "Full Stack Developer",
      company: "Microsoft",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3", // Replace with actual YouTube ID
      thumbnail: "https://randomuser.me/api/portraits/women/65.jpg",
      course: "MERN Stack Development",
      batch: "2023",
      likes: "3.2K",
      comments: "312",
      date: "January 20, 2024",
      achievement: "Secured 25 LPA Package",
      duration: "7 months",
      previousRole: "UI Developer",
      previousCompany: "Wipro",
      skills: ["React", "Node.js", "MongoDB", "Docker"],
      project: "Developed real-time collaboration platform",
      interviewRounds: "5 rounds cleared",
      preparationTime: "5 months",
    },
  ];

  // Animated blocks data (updated to match image content)
  const animatedBlocks = [
    {
      id: 1,
      count: "1600+",
      label: "Hiring Partners",
      color: "from-yellow-300/70 to-yellow-400/70",
      textColor: "text-black",
      delay: 0.2,
      shape: "rounded-tr-[4rem] rounded-bl-[4rem]",
    },
    {
      id: 2,
      count: "2500+",
      label: "Placements",
      color: "from-purple-500/70 to-purple-600/70",
      textColor: "text-black",
      delay: 0.4,
      shape: "rounded-tl-[4rem] rounded-br-[4rem]",
    },
    {
      id: 3,
      count: "Dedicated",
      label: "Placement Teams",
      color: "from-orange-300/70 to-orange-400/70",
      textColor: "text-black",
      delay: 0.6,
      shape: "rounded-bl-[4rem] rounded-tr-[4rem]",
    },
    {
      id: 4,
      count: "4.2",
      label: "Avg. Package",
      color: "from-green-500/70 to-green-600/70",
      textColor: "text-black",
      delay: 0.8,
      shape: "rounded-br-[4rem] rounded-tl-[4rem]",
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

  // Existing drag handlers and effects
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartY(e.type === "mousedown" ? e.clientY : e.touches[0].clientY);
    setCurrentY(e.type === "mousedown" ? e.clientY : e.touches[0].clientY);
    setIsPlaying(false);
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
    const threshold = 100;

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (
        dragDistance < 0 &&
        currentIndex < videoTestimonials.length - 1
      ) {
        setCurrentIndex(currentIndex + 1);
      } else if (dragDistance > 0 && currentIndex === 0) {
        // Loop to last video
        setCurrentIndex(videoTestimonials.length - 1);
      } else if (
        dragDistance < 0 &&
        currentIndex === videoTestimonials.length - 1
      ) {
        // Loop to first video
        setCurrentIndex(0);
      }
    }

    setCurrentY(startY);
    setIsPlaying(true);
  };

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
  }, [isDragging, currentIndex, startY, currentY]);

  // Autoplay effect
  useEffect(() => {
    if (isPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000); // Change video every 10 seconds
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPlaying, currentIndex, videoTestimonials.length]);

  return (
    <div className="py-16 bg-black overflow-hidden relative flex justify-center items-center">
      {/* Academy Showcase Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90">
        <div className="absolute inset-0 bg-[url('/images/academy-bg.jpg')] bg-cover bg-center opacity-20"></div>
      </div>

      {/* Main Content Area - Video and Blocks */}
      <div className="relative w-full max-w-5xl mx-auto py-16">
        {/* Animated Blocks positioned around the center video container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Block 1: Top Left */}
          <motion.div
            key={animatedBlocks[0].id}
            className={`absolute w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br ${animatedBlocks[0].color} backdrop-blur-sm border border-white/10 p-4 flex flex-col items-center justify-center ${animatedBlocks[0].textColor} ${animatedBlocks[0].shape} text-center`}
            style={{
              top: "0%",
              left: "0%",
              transform: "translate(-20%, -20%)",
            }}
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            transition={{ delay: animatedBlocks[0].delay }}
          >
            <span className="text-3xl font-bold mb-1">
              {animatedBlocks[0].count}
            </span>
            <span className="text-sm font-medium leading-tight">
              {animatedBlocks[0].label}
            </span>
          </motion.div>

          {/* Block 2: Bottom Left */}
          <motion.div
            key={animatedBlocks[1].id}
            className={`absolute w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br ${animatedBlocks[1].color} backdrop-blur-sm border border-white/10 p-4 flex flex-col items-center justify-center ${animatedBlocks[1].textColor} ${animatedBlocks[1].shape} text-center`}
            style={{
              bottom: "0%",
              left: "0%",
              transform: "translate(-20%, 20%)",
            }}
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            transition={{ delay: animatedBlocks[1].delay }}
          >
            <span className="text-3xl font-bold mb-1">
              {animatedBlocks[1].count}
            </span>
            <span className="text-sm font-medium leading-tight">
              {animatedBlocks[1].label}
            </span>
          </motion.div>

          {/* Block 3: Top Right */}
          <motion.div
            key={animatedBlocks[2].id}
            className={`absolute w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br ${animatedBlocks[2].color} backdrop-blur-sm border border-white/10 p-4 flex flex-col items-center justify-center ${animatedBlocks[2].textColor} ${animatedBlocks[2].shape} text-center`}
            style={{
              top: "0%",
              right: "0%",
              transform: "translate(20%, -20%)",
            }}
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            transition={{ delay: animatedBlocks[2].delay }}
          >
            <span className="text-2xl font-bold mb-1 leading-tight">
              {animatedBlocks[2].count}
            </span>
            <span className="text-sm font-medium leading-tight">
              {animatedBlocks[2].label}
            </span>
          </motion.div>

          {/* Block 4: Bottom Right */}
          <motion.div
            key={animatedBlocks[3].id}
            className={`absolute w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br ${animatedBlocks[3].color} backdrop-blur-sm border border-white/10 p-4 flex flex-col items-center justify-center ${animatedBlocks[3].textColor} ${animatedBlocks[3].shape} text-center`}
            style={{
              bottom: "0%",
              right: "0%",
              transform: "translate(20%, 20%)",
            }}
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            transition={{ delay: animatedBlocks[3].delay }}
          >
            <span className="text-3xl font-bold mb-1">
              {animatedBlocks[3].count}
            </span>
            <span className="text-sm font-medium leading-tight">
              {animatedBlocks[3].label}
            </span>
          </motion.div>
        </div>

        {/* Center - Video Player */}
        <div className="relative max-w-md mx-auto">
          {/* Video Container with 9:16 Aspect Ratio */}
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-2xl bg-gray-900 cursor-grab active:cursor-grabbing"
            style={{ aspectRatio: "9/16" }}
          >
            {videoTestimonials.map((testimonial, index) => {
              const offset = index - currentIndex;
              const translateY = isDragging
                ? `${
                    offset * 100 +
                    ((currentY - startY) / containerRef.current?.offsetHeight) *
                      100
                  }%`
                : `${offset * 100}%`;

              return (
                <div
                  key={testimonial.id}
                  className="absolute w-full h-full transition-transform duration-300"
                  style={{
                    transform: `translateY(${translateY})`,
                    zIndex: videoTestimonials.length - Math.abs(offset),
                  }}
                >
                  {/* Video Content (iframe, overlay, etc.) */}
                  <div className="relative w-full h-full">
                    <iframe
                      src={testimonial.videoUrl}
                      title={`${testimonial.name}'s Testimonial`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                    {/* Overlay with User Info and Actions */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.thumbnail}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border-2 border-orange-500"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-orange-500 font-medium">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                          {testimonial.course}
                        </span>
                        <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                          Batch {testimonial.batch}
                        </span>
                      </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6">
                      <button className="flex flex-col items-center text-white hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span className="text-sm">{testimonial.likes}</span>
                      </button>
                      <button className="flex flex-col items-center text-white hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                        </svg>
                        <span className="text-sm">{testimonial.comments}</span>
                      </button>
                      <button className="flex flex-col items-center text-white hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                        </svg>
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                      <div
                        className="h-full bg-orange-500 transition-all duration-300"
                        style={{
                          width: isPlaying ? "100%" : "0%",
                          transition: isPlaying ? "width 10s linear" : "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentReels;

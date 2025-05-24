import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudentReels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const containerRef = useRef(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const playerRefs = useRef([]);
  const [playerReady, setPlayerReady] = useState(false);
  const [error, setError] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const controlsTimeoutRef = useRef(null);
  const dragTimeoutRef = useRef(null);

  // Updated video testimonials with relevant data structure
  const videoTestimonials = [
    {
      id: 1,
      name: "Dileep",
      role: "Software Developer",
      company: "Wipro",
      videoUrl: "https://www.youtube.com/embed/XsPbphv-0H4",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 2,
      name: "Barenkala Guru Charan",
      role: "Software Tester",
      company: "Amplelogic",
      videoUrl: "https://www.youtube.com/embed/ETOGGjsHTEo",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 3,
      name: "Archana Vusa",
      role: "Software Developer",
      company: "V&V Technologies",
      videoUrl: "https://www.youtube.com/embed/25uxEDvDlfM",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 4,
      name: "Udhay kaitha",
      role: "Software Developer",
      company: "Multiplier Ai",
      videoUrl: "https://www.youtube.com/embed/1PFjrhqpcQk",
      achievement: "Secured 4 LPA Package",
    },
    {
      id: 5,
      name: "Tirumala teja",
      role: "Software Developer",
      company: "Multiplier Ai",
      videoUrl: "https://www.youtube.com/embed/jFbrJB-PEjM",
      achievement: "Secured 4 LPA Package",
    },
  ];

  // Updated animated blocks with more relevant metrics
  const animatedBlocks = [
    {
      id: 1,
      count: "90%",
      label: "Placement Rate",
      color: "from-blue-500/80 to-blue-600/80",
      textColor: "text-white",
      delay: 0.2,
      shape: "rounded-2xl",
    },
    {
      id: 2,
      count: "1000+",
      label: "Students Placed",
      color: "from-emerald-500/80 to-emerald-600/80",
      textColor: "text-white",
      delay: 0.4,
      shape: "rounded-2xl",
    },
    {
      id: 3,
      count: "4 LPA",
      label: "Avg. Package",
      color: "from-violet-500/80 to-violet-600/80",
      textColor: "text-white",
      delay: 0.6,
      shape: "rounded-2xl",
    },
    {
      id: 4,
      count: "500+",
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

  // Improved drag handlers
  const handleDragStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.type === "mousedown" ? e.clientY : e.touches[0].clientY);
    setCurrentY(e.type === "mousedown" ? e.clientY : e.touches[0].clientY);
    
    // Pause video when starting to drag
    const currentPlayer = playerRefs.current[currentIndex];
    if (currentPlayer && typeof currentPlayer.pauseVideo === 'function') {
      currentPlayer.pauseVideo();
    setIsPlaying(false);
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentPosition = e.type === "mousemove" ? e.clientY : e.touches[0].clientY;
    setCurrentY(currentPosition);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setIsDragging(false);

    const dragDistance = currentY - startY;
    const threshold = 50; // Reduced threshold for easier navigation

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (dragDistance < 0 && currentIndex < videoTestimonials.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (dragDistance > 0 && currentIndex === 0) {
        setCurrentIndex(videoTestimonials.length - 1);
      } else if (dragDistance < 0 && currentIndex === videoTestimonials.length - 1) {
        setCurrentIndex(0);
      }
    }

    setCurrentY(startY);
  };

  // Initialize YouTube API
  useEffect(() => {
    const initYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        setPlayerReady(true);
      } else {
        setTimeout(initYouTubeAPI, 100);
      }
    };

    initYouTubeAPI();

    return () => {
      playerRefs.current.forEach((player) => {
        if (player && typeof player.destroy === 'function') {
          player.destroy();
        }
      });
    };
  }, []);

  // Effect to handle video changes
  useEffect(() => {
    if (!playerReady) return;

    setIframeLoading(true);
    setError(null);

    // Pause all other videos
    playerRefs.current.forEach((player, index) => {
      if (index !== currentIndex && player && typeof player.pauseVideo === 'function') {
        player.pauseVideo();
      }
    });

    // Play current video
    const currentPlayer = playerRefs.current[currentIndex];
    if (currentPlayer && typeof currentPlayer.playVideo === 'function') {
      const playTimer = setTimeout(() => {
        try {
          currentPlayer.playVideo();
          setIsPlaying(true);
        } catch (err) {
          console.error('Error playing video:', err);
          setError('Failed to play video. Please try again.');
        }
      }, 100);
      return () => clearTimeout(playTimer);
    }
  }, [currentIndex, playerReady]);

  // Effect to handle viewport visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const currentPlayer = playerRefs.current[currentIndex];
          if (currentPlayer && typeof currentPlayer.playVideo === 'function') {
            currentPlayer.playVideo();
            setIsPlaying(true);
          }
        } else {
          const currentPlayer = playerRefs.current[currentIndex];
          if (currentPlayer && typeof currentPlayer.pauseVideo === 'function') {
            currentPlayer.pauseVideo();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.75 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [currentIndex]);

  // Toggle play/pause on video click
  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const currentPlayer = playerRefs.current[currentIndex];
    if (currentPlayer) {
      try {
    if (isPlaying) {
          currentPlayer.pauseVideo();
        } else {
          currentPlayer.playVideo();
        }
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.error('Error toggling play/pause:', err);
        setError('Failed to control video. Please try again.');
      }
    }
  };

  // Show/hide controls on mouse move
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  // Handle video end
  const handleVideoEnd = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIframeLoading(true);
  };

  // Add event listeners for drag
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventDefault = (e) => e.preventDefault();

    // Mouse events
    container.addEventListener("mousedown", handleDragStart);
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    container.addEventListener("touchstart", handleDragStart, { passive: false });
    window.addEventListener("touchmove", handleDragMove, { passive: false });
    window.addEventListener("touchend", handleDragEnd);

    // Prevent default touch behavior
    container.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      container.removeEventListener("mousedown", handleDragStart);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      container.removeEventListener("touchstart", handleDragStart);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
      container.removeEventListener("touchmove", preventDefault);
    };
  }, [isDragging, startY, currentY, currentIndex]);

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
    <div className="min-h-screen bg-black overflow-hidden relative"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
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
            className="relative w-full overflow-hidden rounded-3xl bg-black cursor-pointer touch-none"
            style={{
              aspectRatio: "9/16",
              maxHeight: "calc(100vh - 100px)",
              minHeight: "500px",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleVideoClick}
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 left-4 right-4 bg-red-500/90 text-white p-3 rounded-lg text-sm"
              >
                {error}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setError(null);
                  }}
                  className="absolute top-2 right-2 text-white hover:text-gray-200"
                >
                  ×
                </button>
              </motion.div>
            )}

            {iframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
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
                      <motion.iframe
                        key={testimonial.id}
                        id={`youtube-player-${testimonial.id}`}
                        src={
                          testimonial.videoUrl.includes('shorts') 
                            ? `https://www.youtube.com/embed/${testimonial.videoUrl.split('/').pop().split('?')[0]}?enablejsapi=1&origin=${window.location.origin}&playsinline=1&rel=0&autoplay=1&mute=0&controls=0`
                            : `${testimonial.videoUrl}?enablejsapi=1&origin=${window.location.origin}&playsinline=1&rel=0&autoplay=1&mute=0&controls=0`
                        }
                        title={`${testimonial.name}'s Success Story`}
                        className={`w-full h-full object-cover ${
                          iframeLoading ? "opacity-0" : "opacity-100"
                        } transition-opacity duration-500`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => {
                          setIframeLoading(false);
                          if (!playerRefs.current[index] && window.YT && window.YT.Player) {
                            try {
                              playerRefs.current[index] = new window.YT.Player(`youtube-player-${testimonial.id}`, {
                                events: {
                                  'onReady': (event) => {
                                    if (isPlaying) {
                                      event.target.playVideo();
                                    }
                                  },
                                  'onStateChange': (event) => {
                                    const playerState = event.data;
                                    if (playerState === window.YT.PlayerState.PLAYING) {
                                      setIsPlaying(true);
                                    } else if (playerState === window.YT.PlayerState.PAUSED || 
                                             playerState === window.YT.PlayerState.ENDED) {
                                      setIsPlaying(false);
                                    }
                                    if (playerState === window.YT.PlayerState.ENDED) {
                                      handleVideoEnd();
                                    }
                                  },
                                  'onError': (event) => {
                                    console.error('YouTube Player Error:', event.data);
                                    setError('Failed to load video. Please try again.');
                                  }
                                },
                              });
                            } catch (err) {
                              console.error('Error creating YouTube player:', err);
                              setError('Failed to initialize video player. Please refresh the page.');
                            }
                          }
                        }}
                      />

                      {/* Play/Pause Overlay */}
                      <AnimatePresence>
                        {showControls && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/30"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVideoClick(e);
                            }}
                          >
                            <motion.div
                              className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {isPlaying ? (
                                <svg
                                  className="w-8 h-8 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                </svg>
                              ) : (
                                <svg
                                  className="w-8 h-8 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              )}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Content Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={contentVariants}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <motion.div
                            className="mb-4"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <h6 className="text-2xl font-bold text-white mb-1">
                              {testimonial.name}
                            </h6>
                            <p className="text-blue-400 font-medium">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </motion.div>

                          <motion.div
                            className="mb-4"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ delay: 0.1 }}
                          >
                            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-sm font-medium">
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

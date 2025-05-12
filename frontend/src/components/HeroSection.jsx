import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CourseDetailsModal from "./CourseDetailsModal";

function HeroSection() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("left");
  const scrollContainerRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Top placement profiles data
  const topPlacements = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Software Engineer",
      company: "Google",
      salary: "₹32 LPA",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 2,
      name: "Rahul Singh",
      position: "Data Scientist",
      company: "Amazon",
      salary: "₹28 LPA",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 3,
      name: "Neha Patel",
      position: "Full Stack Developer",
      company: "Microsoft",
      salary: "₹30 LPA",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      color: "from-orange-500 to-orange-600",
    },
  ];

  // First row of company logos
  const companyLogosRow1 = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png",
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    },
  ];

  // Second row of company logos (scrolling in opposite direction)
  const companyLogosRow2 = [
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    },
    {
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1280px-Intel_logo_%282006-2020%29.svg.png",
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png",
    },
    {
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png",
    },
  ];

  // Third row of company logos
  const companyLogosRow3 = [
    {
      name: "Capgemini",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Capgemini_logo.svg/2560px-Capgemini_logo.svg.png",
    },
    {
      name: "Cognizant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Cognizant_logo.svg/2560px-Cognizant_logo.svg.png",
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png",
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png",
    },
    {
      name: "Nvidia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
    },
    {
      name: "Uber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    },
  ];

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
        animation: scrollLeft 30s linear infinite;
      }
      
      .scroll-right {
        animation: scrollRight 30s linear infinite;
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
      .testimonial-slider-container:hover .scroll-right {
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

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -340 : 340;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Ananya Verma",
      role: "Full Stack Developer",
      company: "Google",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      testimonial:
        "Career Sure Academy transformed my career. The practical approach and industry-relevant curriculum helped me land my dream job.",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Data Scientist",
      company: "Microsoft",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      testimonial:
        "The mentorship and guidance I received were exceptional. I went from a beginner to a confident data scientist.",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "ML Engineer",
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      testimonial:
        "The hands-on projects and real-world applications made learning complex concepts much easier. Highly recommended!",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Cloud Architect",
      company: "Netflix",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      testimonial:
        "The cloud computing course was exactly what I needed to advance my career. The instructors were amazing!",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "DevOps Engineer",
      company: "Meta",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      testimonial:
        "The DevOps course helped me understand modern deployment practices. I got multiple job offers after completion!",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    },
  ];

  // Add smooth scroll behavior for navigation links
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add animation variants for elements
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Add loading state animation
  const loadingAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const courses = [
    {
      id: "mern",
      title: "MERN Full Stack",
      description:
        "Master modern web development with MongoDB, Express.js, React.js, and Node.js",
      price: "₹65,000",
      emi: "₹5,417",
      features: [
        "Build full-stack applications from scratch",
        "Learn industry best practices",
        "Hands-on projects and assignments",
        "Live coding sessions",
        "Career guidance and support",
      ],
      curriculum: [
        {
          title: "Frontend Development",
          topics: [
            "HTML5 & CSS3 Fundamentals",
            "JavaScript ES6+",
            "React.js Core Concepts",
            "State Management with Redux",
            "Advanced React Patterns",
          ],
        },
        {
          title: "Backend Development",
          topics: [
            "Node.js Fundamentals",
            "Express.js Framework",
            "MongoDB & Mongoose",
            "RESTful API Design",
            "Authentication & Authorization",
          ],
        },
      ],
    },
    {
      id: "java",
      title: "Java Full Stack",
      description:
        "Enterprise-grade development with Java, Spring Boot, and MySQL",
      price: "₹75,000",
      emi: "₹6,250",
      features: [
        "Enterprise application development",
        "Spring Framework mastery",
      ],
      curriculum: [
        {
          title: "Core Java",
          topics: [
            "Java Fundamentals",
            "Object-Oriented Programming",
            "Collections Framework",
            "Multithreading",
            "Exception Handling",
          ],
        },
        {
          title: "Spring Framework",
          topics: [
            "Spring Core",
            "Spring Boot",
            "Spring Security",
            "Spring Data JPA",
            "RESTful Services",
          ],
        },
      ],
    },
    {
      id: "python",
      title: "Python Full Stack",
      description:
        "Modern Python development with Django, React, and PostgreSQL",
      price: "₹70,000",
      emi: "₹5,833",
      features: [
        "Python programming mastery",
        "Django framework expertise",
        "Frontend integration",
        "Database management",
        "Deployment strategies",
      ],
      curriculum: [
        {
          title: "Python Development",
          topics: [
            "Python Fundamentals",
            "Data Structures",
            "Object-Oriented Python",
            "Django Framework",
            "Django REST Framework",
          ],
        },
        {
          title: "Frontend & Database",
          topics: [
            "React.js Basics",
            "State Management",
            "PostgreSQL",
            "API Integration",
            "Deployment",
          ],
        },
      ],
    },
    {
      id: "data-science",
      title: "Data Science",
      description:
        "Master AI & Machine Learning with Python, TensorFlow, and PyTorch",
      price: "₹85,000",
      emi: "₹7,083",
      features: [
        "Machine Learning fundamentals",
        "Deep Learning with TensorFlow",
        "Data analysis and visualization",
        "Model deployment",
        "Industry projects",
      ],
      curriculum: [
        {
          title: "Data Science Fundamentals",
          topics: [
            "Python for Data Science",
            "Statistics & Probability",
            "Data Visualization",
            "Data Preprocessing",
            "Exploratory Data Analysis",
          ],
        },
        {
          title: "Machine Learning",
          topics: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Computer Vision",
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-16 px-6">
          {/* Left Side - Top Placement Boxes */}
          <div className="lg:w-1/2">
            <div
              className={`transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              aria-live="polite"
            >
              {!isLoaded ? (
                // Enhanced loading skeleton
                <div className="animate-pulse grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl"
                    >
                      <div className="h-full w-full animate-shimmer"></div>
                    </div>
                  ))}
                </div>
              ) : (
                // Enhanced placement cards
                <div className="grid grid-cols-3 gap-5">
                  {topPlacements.map((profile) => (
                    <div
                      key={profile.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 group"
                    >
                      <div className="h-full flex flex-col">
                        {/* Package banner */}
                        <div className="bg-[#FF6B00] py-1.5 px-4 text-right">
                          <span className="text-white text-sm font-bold">
                            {profile.salary}
                          </span>
                        </div>

                        {/* Profile info - Adjusted for better name visibility */}
                        <div className="p-4">
                          <div className="flex flex-col items-start">
                            {/* Image and name in separate rows */}
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 mb-3">
                              <img
                                src={profile.image}
                                alt={profile.name}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div className="w-full">
                              <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2">
                                {profile.name}
                              </h3>
                              <p className="text-[#FF6B00] font-medium text-sm mb-2">
                                {profile.position}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Company info */}
                        <div className="px-4 pb-3">
                          <div className="flex items-center gap-2 py-2 px-3 bg-gray-50 rounded-md">
                            <img
                              src={profile.logo}
                              alt={profile.company}
                              className="w-5 h-5 object-contain"
                              loading="lazy"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {profile.company}
                            </span>
                          </div>
                        </div>

                        {/* Verification badge */}
                        <div className="mt-auto px-4 pb-3">
                          <div className="flex items-center gap-1.5 text-green-600">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xs font-medium">
                              Verified Placement
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats Section */}
              {isLoaded && (
                <div className="grid grid-cols-3 gap-5 mt-8">
                  <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm">
                    <div className="text-2xl font-bold text-[#FF6B00] mb-1">95%</div>
                    <p className="text-sm text-gray-600 font-medium">Placement Rate</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm">
                    <div className="text-2xl font-bold text-[#FF6B00] mb-1">₹18L</div>
                    <p className="text-sm text-gray-600 font-medium">Avg. Package</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm">
                    <div className="text-2xl font-bold text-[#FF6B00] mb-1">500+</div>
                    <p className="text-sm text-gray-600 font-medium">Students Placed</p>
                  </div>
                </div>
              )}

              {/* View All Button */}
              {isLoaded && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => navigate('/placements')}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FF6B00] text-white font-medium text-sm rounded-lg hover:bg-[#FF6B00]/90 transition-colors duration-200"
                  >
                    View All Placements
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced right side content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Start Your Tech Career Journey Today
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join Career Sure Academy and gain the skills, knowledge, and
              confidence to succeed in the tech industry. Transform your career
              with our industry-leading programs.
            </p>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-TFPS1co0mS1lrmb-7-0Ffln-LLKDKN8UzXr6Y7XSG8l1vw/viewform?usp=header', '_blank')}
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:from-orange-600 hover:to-orange-700"
              >
                <span className="relative flex items-center">
                  Fill the form
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="group relative inline-flex items-center justify-center bg-white border-2 border-orange-500 text-orange-500 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-orange-50"
              >
                <span className="relative flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Companies Hiring - Enhanced Professional Scrolling Logos Section */}
        <div className="w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="text-[#FF6B00]">Industry Partners</span>
            </h1>
          </div>

          {/* Logos Container */}
          <div className="relative rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100">
            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 right-0 h-12 z-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-12 z-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

            {/* Left Gradient Fade */}
            <div className="absolute top-0 left-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

            {/* Right Gradient Fade */}
            <div className="absolute top-0 right-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

            {/* Scrolling logos container */}
            <div className="py-12 px-6">
              {/* First row */}
              <div className="relative overflow-hidden mb-8">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                  {/* Double the logos for continuous scrolling */}
                  {[...companyLogosRow1, ...companyLogosRow1].map(
                    (company, index) => (
                      <div
                        key={index}
                        className="mx-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-h-10 max-w-[160px] object-contain transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Subtle divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30 my-6"></div>

              {/* Second row */}
              <div className="relative overflow-hidden mb-8">
                <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
                  {/* Double the logos for continuous scrolling */}
                  {[...companyLogosRow2, ...companyLogosRow2].map(
                    (company, index) => (
                      <div
                        key={index}
                        className="mx-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-h-10 max-w-[160px] object-contain transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Subtle divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30 my-6"></div>

              {/* Third row */}
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee-fast whitespace-nowrap items-center">
                  {/* Double the logos for continuous scrolling */}
                  {[...companyLogosRow3, ...companyLogosRow3].map(
                    (company, index) => (
                      <div
                        key={index}
                        className="mx-12 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-h-10 max-w-[160px] object-contain transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Statistics about hiring partners */}
          <div className="grid grid-cols-3 gap-6 mt-10 px-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                100+
              </div>
              <p className="text-gray-400 text-sm">Hiring Partners</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">85%</div>
              <p className="text-gray-400 text-sm">Fortune 500 Companies</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                1000+
              </div>
              <p className="text-gray-400 text-sm">Open Positions</p>
            </div>
          </div>
        </div>

        {/* Meet Our Expert Trainers Section */}
        <div className="mt-16 mb-16 relative px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="text-[#FF6B00]">Expert Trainers</span>
            </h1>
          </div>

          {/* Trainers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                role: "Senior Software Engineer",
                company: "Google",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
                description:
                  "Ex-Google tech lead with 12+ years of experience in scalable systems and cloud architecture. Specializes in distributed systems and microservices.",
                skills: ["System Design", "Cloud Architecture", "Java"],
                students: "1000+",
                rating: "4.9",
                badge: "Tech Lead",
                badgeColor: "from-blue-500 to-blue-600",
              },
              {
                name: "Priya Sharma",
                role: "Data Science Lead",
                company: "Amazon",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
                description:
                  "Former Amazon ML expert with 8+ years of experience in building production-scale AI/ML solutions. Published researcher in deep learning.",
                skills: ["Machine Learning", "Python", "Deep Learning"],
                students: "800+",
                rating: "4.8",
                badge: "ML Expert",
                badgeColor: "from-green-500 to-green-600",
              },
              {
                name: "Arun Patel",
                role: "Full Stack Expert",
                company: "Microsoft",
                image: "https://randomuser.me/api/portraits/men/76.jpg",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
                description:
                  "Microsoft veteran with 10+ years specializing in modern web technologies and cloud-native applications. Azure certified architect.",
                skills: ["React", "Node.js", "Azure"],
                students: "1200+",
                rating: "4.9",
                badge: "Senior Dev",
                badgeColor: "from-purple-500 to-purple-600",
              },
            ].map((trainer, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-visible shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 min-h-[380px] flex flex-col justify-between relative pt-20 border-2 border-orange-100"
              >
                {/* Avatar Overlap, centered on card */}
                <div className="absolute left-1/2 -top-12 transform -translate-x-1/2 z-20 flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover object-center bg-gray-100"
                    />
                    {/* Badge on Avatar, bottom center */}
                    <span
                      className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full text-white bg-gradient-to-r ${trainer.badgeColor} shadow-lg whitespace-nowrap`}
                    >
                      {trainer.badge}
                    </span>
                  </div>
                </div>
                {/* Card Content */}
                <div className="flex-1 flex flex-col px-4 pb-4 pt-2">
                  {/* Name, Company Logo, Role */}
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors flex items-center">
                      {trainer.name}
                      <img
                        src={trainer.logo}
                        alt={trainer.company}
                        className="h-6 w-6 object-contain rounded bg-white border border-gray-100 shadow ml-2"
                      />
                    </h3>
                  </div>
                  <p className="text-orange-500 text-sm mb-2 font-semibold">{trainer.role}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{trainer.description}</p>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trainer.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4 mt-auto">
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      {trainer.students} Students
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-600">
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {trainer.rating}/5
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trainer Statistics */}
          <div className="grid grid-cols-4 gap-6 mt-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-gray-400 text-sm">Industry Projects</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                3000+
              </div>
              <p className="text-gray-400 text-sm">Students Mentored</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                100%
              </div>
              <p className="text-gray-400 text-sm">Expert Support</p>
            </div>
          </div>
        </div>

        {/* Our Courses Section */}
        <div className="mt-16 mb-16 relative px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="text-[#FF6B00]">Courses</span>
            </h1>
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent z-10"></div>
                  <img
                    src={
                      course.id === "mern"
                        ? "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png"
                        : course.id === "java"
                        ? "https://cdn.pixabay.com/photo/2018/08/06/21/32/darknet-3588402_1280.jpg"
                        : course.id === "python"
                        ? "https://cdn.pixabay.com/photo/2017/01/29/13/21/mobile-devices-2017980_1280.png"
                        : "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png"
                    }
                    alt={course.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Course Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span
                      className={`px-2.5 py-1 text-white text-xs font-semibold rounded-full backdrop-blur-sm bg-gradient-to-r
                      ${
                        course.id === "mern"
                          ? "from-orange-500 to-orange-600"
                          : course.id === "java"
                          ? "from-blue-500 to-blue-600"
                          : course.id === "python"
                          ? "from-green-500 to-green-600"
                          : "from-purple-500 to-purple-600"
                      }`}
                    >
                      {course.id === "mern"
                        ? "Popular"
                        : course.id === "java"
                        ? "Enterprise"
                        : course.id === "python"
                        ? "New"
                        : "Advanced"}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4">
                  {/* Title and Description */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {course.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        EMI from {course.emi}/month
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Course Statistics */}
          <div className="grid grid-cols-4 gap-6 mt-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
              <p className="text-gray-400 text-sm">Industry Projects</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                100%
              </div>
              <p className="text-gray-400 text-sm">Practical Learning</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                24/7
              </div>
              <p className="text-gray-400 text-sm">Mentor Support</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-400 mb-2">1:1</div>
              <p className="text-gray-400 text-sm">Career Guidance</p>
            </div>
          </div>
        </div>

        {/* Student Testimonials Section */}
        <div className="mt-16 mb-16 px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="text-[#FF6B00]">Student Testimonials</span>
            </h1>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-4 min-w-max px-4">
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={`${testimonial.id}-${index}`}
                      className="testimonial-card bg-white rounded-xl p-4 border border-gray-100 shadow-lg w-[300px] flex-shrink-0"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full border-2 border-orange-500"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-0.5">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-gray-900 font-bold text-base">
                            {testimonial.name}
                          </h3>
                          <p className="text-orange-400 text-xs">
                            {testimonial.role}
                          </p>
                          <div className="flex gap-0.5 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-3 h-3 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 italic text-sm mb-4 line-clamp-3">
                        "{testimonial.testimonial}"
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="bg-white p-1 rounded h-6 w-16 flex items-center justify-center">
                            <img
                              src={testimonial.companyLogo}
                              alt={testimonial.company}
                              className="h-full w-auto object-contain"
                            />
                          </div>
                          <span className="text-gray-600 text-xs">
                            {testimonial.company}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs">
                          {testimonial.batch}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Statistics */}
        <div className="grid grid-cols-4 gap-4 mt-12 px-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">4.9/5</div>
            <p className="text-gray-400 text-sm">Average Student Rating</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">
              15,000+
            </div>
            <p className="text-gray-400 text-sm">Enrolled Students</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">92%</div>
            <p className="text-gray-400 text-sm">Would Recommend Us</p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-5 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">250+</div>
            <p className="text-gray-400 text-sm">Video Testimonials</p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-16 mb-16 px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Our </span>
              <span className="text-[#FF6B00]">Frequently Asked Questions</span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What are the prerequisites for joining the courses?",
                answer:
                  "Our courses are designed for students with varying skill levels. Basic computer knowledge and a strong willingness to learn are essential. Specific prerequisites vary by course - Web Development requires basic HTML/CSS knowledge, while Data Science needs basic mathematics and statistics understanding.",
              },
              {
                question: "How is the placement assistance provided?",
                answer:
                  "We offer comprehensive placement support including resume building, mock interviews, soft skills training, and direct connections with hiring partners. Our dedicated placement cell works with 100+ companies to ensure maximum placement opportunities. We also provide lifetime placement assistance for alumni.",
              },
              {
                question: "What is the course duration and schedule?",
                answer:
                  "Course durations range from 16-24 weeks depending on the program. We offer flexible scheduling options including weekday batches (Monday-Friday) and weekend batches (Saturday-Sunday). Live classes are typically 2-3 hours long with additional hands-on practice sessions.",
              },
              {
                question: "Is there an EMI or scholarship option available?",
                answer:
                  "Yes, we offer flexible EMI options starting from ₹5,999/month through our banking partners. Merit-based scholarships up to 50% are available for deserving candidates. We also provide special discounts for women candidates and early birds.",
              },
              {
                question:
                  "What kind of projects will I work on during the course?",
                answer:
                  "You'll work on real-world projects provided by our industry partners. These include e-commerce platforms, social media apps, data analytics dashboards, and machine learning models. All projects are designed to give you practical experience and build a strong portfolio.",
              },
              {
                question: "Do you provide internship opportunities?",
                answer:
                  "Yes, we facilitate internship opportunities with our partner companies for top-performing students. These are typically 2-3 month paid internships that often convert into full-time roles. We also help students find relevant internships based on their interests and skills.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:border-[#FF6B00]/30"
              >
                <details className="group">
                  <summary className="flex items-center justify-between gap-6 w-full px-6 py-4 text-left cursor-pointer focus:outline-none">
                    <span className="text-lg font-semibold text-gray-900 group-hover:text-[#FF6B00]">
                      {faq.question}
                    </span>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity duration-300 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity duration-300 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 12H4"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
      />

      {/* Add this style block at the top of your component, after the imports */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * ${testimonials.length}));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;

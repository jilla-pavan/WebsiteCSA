import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopPlacements = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    {
      id: 4,
      name: "Vikram Reddy",
      position: "ML Engineer",
      company: "Meta",
      salary: "₹34 LPA",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      name: "Anjali Gupta",
      position: "DevOps Engineer",
      company: "IBM",
      salary: "₹26 LPA",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 6,
      name: "Karthik Nair",
      position: "Cloud Architect",
      company: "Oracle",
      salary: "₹36 LPA",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-12 mb-16 px-6">
      {/* Left Side - Top Placement Boxes */}
      <div className="md:w-1/2">
        <div
          className={`transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          aria-live="polite"
        >
          {/* Enhanced placement cards with horizontal scrolling */}
          <div
            className="relative overflow-hidden mb-8 w-full max-w-full md:max-w-none mx-auto"
            style={{ maxWidth: "100vw" }}
          >
            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div
              className="flex whitespace-nowrap overflow-hidden w-full"
              style={{ minHeight: "100%" }}
            >
              <div
                className="inline-flex scroll-left whitespace-nowrap gap-4 md:gap-5 py-4 px-1 md:px-2"
                style={{ minHeight: "100%" }}
              >
                {/* First set of cards */}
                {topPlacements.map((profile) => (
                  <div
                    key={profile.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 group w-60 md:w-64 flex-shrink-0 mx-1 md:mx-0"
                    style={{ minWidth: "220px", maxWidth: "90vw" }}
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
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-xs font-medium">
                            Verified Placement
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate cards for infinite scroll effect */}
                {topPlacements.map((profile) => (
                  <div
                    key={`dup-${profile.id}`}
                    className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 group w-60 md:w-64 flex-shrink-0 mx-1 md:mx-0"
                    style={{ minWidth: "220px", maxWidth: "90vw" }}
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
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
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
            </div>
          </div>

          {/* Additional CSS for hover pause */}
          <style jsx>{`
            .scroll-left:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Stats Section */}
          {isLoaded && (
            <div className="grid grid-cols-3 gap-5 mt-8 w-full">
              <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-[#FF6B00] mb-1">
                  97%
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Placement Rate
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-[#FF6B00] mb-1">
                  6LPA
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Avg. Package
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-[#FF6B00] mb-1">
                  100+
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Students Placed
                </p>
              </div>
            </div>
          )}
          {/* View All Button */}
          {isLoaded && (
            <div className="text-center mt-8">
              <button
                onClick={() => navigate("/placements")}
                className="inline-flex font-bold items-center justify-center px-6 py-2.5 bg-[#FF6B00] text-white text-sm rounded-lg hover:bg-[#FF6B00]/90 transition-colors duration-200"
              >
                View All Placements
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced right side content */}
      <div className="lg:w-1/2">
        <div className="w-full max-w-xl mx-auto px-4 py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
            Start Your Tech <span className="text-primary">Career</span> Journey Today
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Join Career Sure Academy and gain the skills, knowledge, and
            confidence to succeed in the tech industry. Transform your career
            with our industry-leading programs.
          </p>
          <div className="flex flex-col gap-4">
            <button
              className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-3 rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSf-TFPS1co0mS1lrmb-7-0Ffln-LLKDKN8UzXr6Y7XSG8l1vw/viewform?usp=header",
                  "_blank"
                )
              }
            >
              Fill the form &rarr;
            </button>
            <button
              className="w-full border-2 border-orange-500 text-orange-500 font-bold py-3 rounded-lg transition-all hover:bg-orange-50"
              onClick={() => scrollToSection("about")}
            >
              Learn More &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlacements;

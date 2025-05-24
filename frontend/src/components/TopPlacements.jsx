import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Udhay,
  Teja,
  Rambabu,
  Dileep,
  Jagadeesh,
  Rushikesh,
  Shahil,
  Dasthagiri,
  Navneeth,
  Nikhil,
  Sachin,
  Vinay,
} from "../../public/assets/placements";
import { Nova } from "../../public/assets/company_Logos";

const TopPlacements = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Top placement profiles data
  const topPlacements = [
    {
      id: 1,
      name: "Dasthagiri",
      position: "Software Developer",
      company: "Saven Technologies",
      salary: "₹8 LPA",
      image: Dasthagiri,
      logo: "https://saventech.com/wp-content/uploads/2024/07/Saven-Website-logo-2.png",
    },
    {
      id: 2,
      name: "Nikhil",
      position: "Software Developer",
      company: "TCS",
      salary: "₹7.5 LPA",
      image: Nikhil,
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services.svg/250px-Tata_Consultancy_Services.svg.png",
    },
    {
      id: 3,
      name: "Navneeth",
      position: "Software Developer",
      company: "Unify",
      salary: "₹7.5 LPA",
      image: Navneeth,
      logo: "https://media.licdn.com/dms/image/v2/D560BAQEHF-p9txVvDw/company-logo_200_200/company-logo_200_200/0/1708606546779/unifytech_logo?e=2147483647&v=beta&t=ydp-QL3wDOCP84ieMzblbTrH_-p-46wSNIamYWbesgQ",
    },
    {
      id: 4,
      name: "Vinay",
      position: "Software Developer",
      company: "Msys Technologies",
      salary: "₹7 LPA",
      image: Vinay,
      logo: "https://www.msystechnologies.com/wp-content/uploads/2020/01/MSys-Standard-Logo-1.png",
    },
    {
      id: 5,
      name: "Sachin",
      position: "Software Developer",
      company: "Mobinis Msys Digital",
      salary: "₹5.5 LPA",
      image: Sachin,
      logo: "https://www.msystechnologies.com/wp-content/uploads/2020/01/MSys-Standard-Logo-1.png",
    },
    {
      id: 6,
      name: "Udhay Kaitha",
      position: "Software Developer",
      company: "Multiplier AI",
      salary: "₹4.5 LPA",
      image: Udhay,
      logo: "https://multiplierai.co/wp-content/uploads/2022/06/multiplier_logo.png",
    },
    {
      id: 7,
      name: "Dileep",
      position: "Testing Engineer",
      company: "Wipro",
      salary: "₹4 LPA",
      image: Dileep,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/330px-Wipro_new_logo.svg.png",
    },
    {
      id: 8,
      name: "Jagadeesh",
      position: "Software Developer",
      company: "Sconex Software",
      salary: "₹4 LPA",
      image: Jagadeesh,
      logo: "https://media.licdn.com/dms/image/v2/D560BAQFnAOeChCHW-Q/company-logo_200_200/company-logo_200_200/0/1729242362993/sconexit_logo?e=2147483647&v=beta&t=lxiLsl70uulj0KYdk2B8tj9-8jxOZQDEZ8MKkuJ62zY",
    },
    {
      id: 9,
      name: "Rambabu",
      position: "Data Analyst",
      company: "Nova Web Innovations",
      salary: "₹4 LPA",
      image: Rambabu,
      logo: Nova,
    },
    {
      id: 10,
      name: "Tirumala Teja",
      position: "Software Developer",
      company: "Kapil Technogles",
      salary: "₹3.5 LPA",
      image: Teja,
      logo: "https://kcs-tech.com/static/media/ptkcs%20logo%20png%20total.cf3b714d11854610e992.png",
    },
    {
      id: 11,
      name: "Rushikesh",
      position: "Software Developer",
      company: "Stalcon",
      salary: "₹3 LPA",
      image: Rushikesh,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFJn_SHIfzEBfw5XjGGpFfF92PSHDbA4lanew_bnbDQ&s",
    },
    {
      id: 12,
      name: "Shahil",
      position: "Software Developer",
      company: "Stalcon",
      salary: "₹3 LPA",
      image: Shahil,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFJn_SHIfzEBfw5XjGGpFfF92PSHDbA4lanew_bnbDQ&s",
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
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 group w-60 md:w-64 flex-shrink-0 mx-1 md:mx-0"
                    style={{ minWidth: "220px", maxWidth: "90vw" }}
                  >
                    <div className="h-full flex flex-col">
                      {/* Package banner */}
                      <div className="bg-primary py-1.5 px-4 text-right">
                        <span className="text-white text-2xl font-bold">
                          {profile.salary}
                        </span>
                      </div>
                      {/* Profile info - Adjusted for better name visibility */}
                      <div className="p-5 pb-4">
                        <div className="flex flex-col items-start">
                          {/* Image and name in separate rows */}
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-lg mb-3 transform transition-transform duration-300 group-hover:scale-105">
                            <img
                              src={profile.image}
                              alt={profile.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="w-full">
                            <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                              {profile.name}
                            </h3>
                            <p className="text-primary font-medium text-sm mb-2">
                              {profile.position}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Company info */}
                      <div className="px-5 pb-4">
                        <div className="flex items-center gap-2 py-2 px-3 bg-gray-50 rounded-md border border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                          <img
                            src={profile.logo}
                            alt={profile.company}
                            className="w-5 h-5 object-contain"
                            loading="lazy"
                          />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                            {profile.company}
                          </span>
                        </div>
                      </div>
                      {/* Verification badge */}
                      <div className="mt-auto px-5 pb-4">
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
                    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 group w-60 md:w-64 flex-shrink-0 mx-1 md:mx-0"
                    style={{ minWidth: "220px", maxWidth: "90vw" }}
                  >
                    <div className="h-full flex flex-col">
                      {/* Package banner */}
                      <div className="bg-primary py-1.5 px-4 text-right">
                        <span className="text-2xl text-white font-bold">
                          {profile.salary}
                        </span>
                      </div>
                      {/* Profile info - Adjusted for better name visibility */}
                      <div className="p-5 pb-4">
                        <div className="flex flex-col items-start">
                          {/* Image and name in separate rows */}
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary shadow-lg mb-3 transform transition-transform duration-300 group-hover:scale-105">
                            <img
                              src={profile.image}
                              alt={profile.name}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="w-full">
                            <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                              {profile.name}
                            </h3>
                            <p className="text-primary font-medium text-sm mb-2">
                              {profile.position}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Company info */}
                      <div className="px-5 pb-4">
                        <div className="flex items-center gap-2 py-2 px-3 bg-gray-50 rounded-md border border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
                          <img
                            src={profile.logo}
                            alt={profile.company}
                            className="w-5 h-5 object-contain"
                            loading="lazy"
                          />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors duration-300">
                            {profile.company}
                          </span>
                        </div>
                      </div>
                      {/* Verification badge */}
                      <div className="mt-auto px-5 pb-4">
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
                <div className="text-2xl font-bold text-primary mb-1">90%</div>
                <p className="text-sm text-gray-600 font-medium">
                  Placement Rate
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-1">
                  4 LPA
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Avg. Package
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-primary mb-1">
                  1000+
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
                className="inline-flex font-bold items-center justify-center px-6 py-2.5 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors duration-200"
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
            Start Your Journey <span className="text-primary">Today</span> In
            Fullstack with AI
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Join Career Sure Academy and gain the skills, knowledge, and
            confidence to succeed in the tech industry. Transform your career
            with our industry-leading programs.
          </p>
          <div className="flex flex-col gap-4">
            <button
              className="w-full font-bold py-3 rounded-lg shadow-lg bg-gradient-to-r from-primary to-primary-light text-white mb-3 hover:-translate-y-1 hover:shadow-xl transition-all"
              onClick={() => navigate("/enroll")}
            >
              Kick Start Your Journey &rarr;
            </button>
            <button
              className="w-full font-bold py-3 rounded-lg shadow-lg bg-gradient-to-r from-primary to-primary-light text-white hover:-translate-y-1 hover:shadow-xl transition-all"
              onClick={() =>
                navigate("/enroll", {
                  state: { postSubmitDownloadType: "brochure" },
                })
              }
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPlacements;

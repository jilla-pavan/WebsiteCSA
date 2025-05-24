import React from "react";
import aditya from "/assets/trainers/aditya.png?url";
import ravi from "/assets/trainers/ravi.png?url";
import vamshi from "/assets/trainers/vamshi.png?url";

const trainers = [
  {
    name: "Aditya Dasari",
    role: "Senior Software Engineer",
    company: "Google",
    image: aditya,
    logo: "https://cdn.cookielaw.org/logos/e284b633-79d3-4bca-a80b-44a064e50ed5/018fdf26-f19b-7589-94d3-5162bb5794f1/ab76e42b-078d-4600-85dd-3903270f08be/ic-mrc-logo.png",
    description:
      "MERN Stack expert with hands-on experience in building high-performance web applications.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    students: "200+",
    rating: "4.9",
    badge: "Tech Lead",
    badgeColor: "from-blue-500 to-blue-600",
    linkedinUrl: "https://www.linkedin.com/in/aditya-dnvks/",
  },
  {
    name: "Ravi Kumar",
    role: "Python Full Stack Developer",
    company: "Accenture",
    image: ravi,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png",
    description:
      "Experienced Python Full Stack Developer with strong expertise in building scalable web applications. Skilled in both frontend and backend development",
    skills: ["Python", "Django", "React", "REST APIs", "SQL"],
    students: "500+",
    rating: "4.8",
    badge: "Full Stack Mentor",
    badgeColor: "from-yellow-500 to-yellow-600",
    linkedinUrl: "https://www.linkedin.com/in/ravi-kumar-boya-7497aa187/",
  },
  {
    name: "Vamshi",
    role: "Lead Engineer",
    company: "Infosys",
    image: vamshi,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    description:
      "Experienced Java Full Stack Developer with 5+ years of expertise in building enterprise-grade web applications.",
    skills: ["Java", "Spring Boot", "Angular", "REST APIs", "MySQL"],
    students: "500+",
    rating: "4.9",
    badge: "Java Expert",
    badgeColor: "from-orange-500 to-orange-600",
    linkedinUrl:
      "https://www.linkedin.com/in/vamsi-uppuluri-630b14163?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const ExpertTrainers = () => {
  return (
    <div className="mt-16 mb-16 relative px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">Our </span>
          <span className="text-[#FF6B00]">Expert Trainers</span>
        </h1>
      </div>

      {/* Trainers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-visible shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[380px] flex flex-col justify-between relative pt-16"
          >
            {/* Avatar half out, half in */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover object-center bg-gray-100 ring-2 ring-[#FF6B00]"
                />
                {/* Minimal badge below avatar */}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full text-white bg-[#FF6B00] shadow whitespace-nowrap">
                  {trainer.badge}
                </span>
              </div>
            </div>
            {/* Card Content */}
            <div className="flex-1 flex flex-col px-6 pb-6 pt-2">
              {/* Name, Company Logo, Role */}
              <div className="flex items-center gap-2 mb-1 justify-center">
                {/* LinkedIn Icon */}
                {trainer.linkedinUrl && (
                  <a
                    href={trainer.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#0077B5] transition-colors duration-200 ml-1"
                    aria-label={`LinkedIn profile of ${trainer.name}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.529-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
                {/* Make Name clickable */}
                {trainer.linkedinUrl ? (
                  <a
                    href={trainer.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-gray-900 flex items-center hover:underline hover:text-[#0077B5] transition-colors duration-200"
                    aria-label={`LinkedIn profile of ${trainer.name}`}
                  >
                    {trainer.name}
                    <img
                      src={trainer.logo}
                      alt={trainer.company}
                      className="h-6 w-6 object-contain rounded bg-white border border-gray-200 shadow ml-2"
                    />
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    {trainer.name}
                    <img
                      src={trainer.logo}
                      alt={trainer.company}
                      className="h-6 w-6 object-contain rounded bg-white border border-gray-200 shadow ml-2"
                    />
                  </h3>
                )}
              </div>
              <p className="text-[#FF6B00] text-sm mb-2 font-semibold text-center">
                {trainer.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 text-center">
                {trainer.description}
              </p>
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
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
              <div className="flex items-center justify-between text-xs border-t border-gray-100 pt-4 mt-auto">
                <span className="flex items-center gap-1.5 text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  {trainer.students} Students
                </span>
                <span className="flex items-center gap-1.5 text-gray-500">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            5+
          </div>
          <p className="text-gray-400 text-sm md:text-base">Years Experience</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            50+
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Industry Projects
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            500+
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Students Mentored
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            100%
          </div>
          <p className="text-gray-400 text-sm md:text-base">Expert Support</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertTrainers;

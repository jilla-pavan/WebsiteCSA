import React, { useEffect, useRef } from "react";
import {
  FaUserGraduate,
  FaBrain,
  FaCode,
  FaComments,
  FaLaptopCode,
  FaClipboardCheck,
  FaBriefcase,
  FaChalkboardTeacher,
  FaEye,
  FaTasks,
  FaUserTie,
} from "react-icons/fa";

const learningProcessData = [
  {
    title: "Daily Technical Classes",
    description: "Master programming fundamentals through daily interactive sessions.",
    icon: <FaChalkboardTeacher size={24} />,
  },
  {
    title: "Daily Monitoring Classes",
    description: "Track your progress with regular feedback sessions.",
    icon: <FaEye size={24} />,
  },
  {
    title: "Tasks and Projects",
    description: "Build real-world projects to apply your learning.",
    icon: <FaTasks size={24} />,
  },
  {
    title: "Weekly Mocks",
    description: "Prepare for interviews with weekly mock assessments.",
    icon: <FaUserTie size={24} />,
  },
];

const roadmapData = [
  {
    title: "Technical Skills",
    description: "Master programming, data analysis, and software development through hands-on projects.",
    color: "from-rose-600 to-red-600",
    icon: <FaLaptopCode size={50} />,
    textColor: "text-rose-700",
  },
  {
    title: "Aptitude",
    description: "Develop problem-solving and critical thinking skills for academic and professional success.",
    color: "from-indigo-600 to-purple-600",
    icon: <FaBrain size={50} />,
    textColor: "text-indigo-700",
  },
  {
    title: "Softskills",
    description: "Enhance communication, leadership, and teamwork abilities for professional growth.",
    color: "from-pink-600 to-rose-600",
    icon: <FaComments size={50} />,
    textColor: "text-pink-700",
  },
  {
    title: "Problem Solving in JS",
    description: "Master JavaScript problem-solving techniques and logical thinking.",
    color: "from-purple-600 to-pink-600",
    icon: <FaCode size={50} />,
    textColor: "text-purple-700",
  },
  {
    title: "Interview Preparation",
    description: "Prepare for technical interviews with mock sessions and problem-solving practice.",
    color: "from-red-600 to-orange-600",
    icon: <FaClipboardCheck size={50} />,
    textColor: "text-red-700",
  },
  {
    title: "Internships",
    description: "Gain real-world experience through industry internships and mentorship.",
    color: "from-blue-600 to-indigo-600",
    icon: <FaUserGraduate size={50} />,
    textColor: "text-blue-700",
  },
  {
    title: "Placements",
    description: "Secure your dream job with our comprehensive placement support.",
    color: "from-orange-600 to-amber-600",
    icon: <FaBriefcase size={50} />,
    textColor: "text-orange-700",
  },
];

const RoadmapSection = () => {
  const roadmapRefs = useRef([]);
  const processRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          } else {
            entry.target.classList.remove("animate-in");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    [...roadmapRefs.current, ...processRefs.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 mt-10 py-8 sm:py-12 lg:py-16">
      <div className="max-w-8xl mx-auto">
        {/* Learning Process Section */}
        <div className="md:p-12 text-center bg-gray-900 text-white px-6 py-4">
          <h2 className="text-4xl md:text-4xl font-bold mb-12 tracking-tight">
            Our Learning <span className="text-[#FF6B00]">Process</span>
          </h2>
          <div className="relative flex flex-row items-center justify-center">
            <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-center items-center">
              {learningProcessData.map((item, idx) => (
                <div
                  key={item.title}
                  ref={(el) => (processRefs.current[idx] = el)}
                  className="process-item opacity-0 translate-y-4 relative flex-1"
                  style={{ "--delay": `${idx * 200}ms` }}
                >
                  <div className="bg-gray-800 p-6 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center relative z-10 rounded-xl">
                    <div className="flex flex-col items-center mb-4">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-md bg-purple-600 text-white mb-3 text-2xl">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold capitalize text-white mb-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-normal text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="bg-gray-900 text-white shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-4xl font-bold mb-12 tracking-tight">
            Our Career <span className="text-[#FF6B00]">Roadmap</span>
          </h2>
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-screen-xl">
              {roadmapData.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={item.title}
                    className="relative w-full overflow-hidden"
                  >
                    <div className="flex items-center justify-center max-w-full">
                      {/* Timeline Item Content */}
                      <div
                        ref={(el) => (roadmapRefs.current[idx] = el)}
                        className={`w-full roadmap-item opacity-0 translate-y-8 text-center px-6 flex justify-center items-center flex-col m-10`}
                        style={{ "--delay": `${idx * 200}ms` }}
                      >
                        {item.icon}
                        <h3 className="text-4xl md:text-7xl font-bold capitalize text-white mb-2 max-w-full">
                          {item.title}
                        </h3>
                        <h4 className="max-w-full">{item.description}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .roadmap-item,
        .process-item {
          transition-property: opacity, transform, filter, color;
          transition-duration: 0.8s;
          transition-timing-function: ease-out;
          will-change: transform, opacity, filter, color;
          opacity: 0.4;
          filter: blur(4px);
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .roadmap-item.opacity-0 {
          transform: translateY(30px) scale(1.2);
        }

        .process-item.opacity-0 {
          transform: translateY(20px) scale(1.2);
        }

        .roadmap-item.opacity-0 h3 {
          color: #a0a0a0;
        }

        .roadmap-item.opacity-0 p,
        .roadmap-item.opacity-0 h4 {
          color: #606060;
        }

        .roadmap-item.animate-in,
        .process-item.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1) !important;
          filter: blur(0);
          transition-delay: var(--delay);
        }

        .roadmap-item.animate-in h3 {
          color: #ffffff;
        }

        .roadmap-item.animate-in p,
        .roadmap-item.animate-in h4 {
          color: #d1d5db;
        }

        @media (max-width: 768px) {
          .roadmap-item.opacity-0 {
            transform: translateY(20px) scale(1.2) !important;
          }
          
          .roadmap-item h4,
          .process-item p {
            font-size: 0.875rem;
            line-height: 1.25rem;
            padding: 0 0.5rem;
            max-width: 100%;
            overflow-wrap: break-word;
            word-wrap: break-word;
            hyphens: auto;
          }

          .roadmap-item h3 {
            font-size: 2rem;
            line-height: 2.5rem;
            padding: 0 0.5rem;
            max-width: 100%;
            overflow-wrap: break-word;
            word-wrap: break-word;
          }

          .process-item h3 {
            font-size: 1.125rem;
            line-height: 1.5rem;
            padding: 0 0.5rem;
          }

          h2.text-4xl {
            font-size: 2rem;
            line-height: 2.5rem;
          }

          .roadmap-item {
            padding: 1rem 0.5rem;
          }

          .process-item {
            padding: 0.5rem;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;

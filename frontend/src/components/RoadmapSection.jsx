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
    description: "Learn core concepts and programming daily.",
    icon: <FaChalkboardTeacher size={24} />,
  },
  {
    title: "Monitoring Classes",
    description: "Get regular feedback and progress checks.",
    icon: <FaEye size={24} />,
  },
  {
    title: "Tasks and Projects",
    description: "Apply skills with hands-on tasks and projects.",
    icon: <FaTasks size={24} />,
  },
  {
    title: "Mocks",
    description: "Practice with mock interviews and assessments.",
    icon: <FaUserTie size={24} />,
  },
];

const roadmapData = [
  {
    title: "Internships",
    description:
      "Our internships offer invaluable opportunities for career growth, providing hands-on experience and mentorship to develop essential skills and propel professional advancement.",
    color: "from-blue-600 to-indigo-600",
    icon: <FaUserGraduate size={20} />,
    textColor: "text-blue-700",
  },
  {
    title: "Aptitude",
    description:
      "Our course integrates aptitude training to equip students with essential problem-solving and critical thinking skills, enhancing their overall academic and professional success.",
    color: "from-indigo-600 to-purple-600",
    icon: <FaBrain size={20} />,
    textColor: "text-indigo-700",
  },
  {
    title: "Problem Solving in JS",
    description:
      "Problem solving in JavaScript entails using logical thinking and programming skills to address issues within code efficiently.",
    color: "from-purple-600 to-pink-600",
    icon: <FaCode size={20} />,
    textColor: "text-purple-700",
  },
  {
    title: "Softskills",
    description:
      "Soft skills involve interpersonal, communication, problem-solving, leadership, and time management abilities critical for effective teamwork and professional success.",
    color: "from-pink-600 to-rose-600",
    icon: <FaComments size={20} />,
    textColor: "text-pink-700",
  },
  {
    title: "Technical Skills",
    description:
      "Develop cutting-edge technical skills in programming, data analysis, and software development. Master industry-relevant tools and technologies through hands-on projects.",
    color: "from-rose-600 to-red-600",
    icon: <FaLaptopCode size={20} />,
    textColor: "text-rose-700",
  },
  {
    title: "Interview Preparation",
    description:
      "Interview preparation involves practicing problem-solving questions, refining communication skills, and researching potential employers to effectively showcase one's qualifications.",
    color: "from-red-600 to-orange-600",
    icon: <FaClipboardCheck size={20} />,
    textColor: "text-red-700",
  },
  {
    title: "Placements",
    description:
      "At the culmination of our course, students secure placements through our comprehensive support system, ensuring successful transitions into their desired careers.",
    color: "from-orange-600 to-amber-600",
    icon: <FaBriefcase size={20} />,
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
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Learning Process Section */}
        <div className="p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Our Learning <span className="text-[#FF6B00]">Process</span>
          </h2>
          <div className="relative">
            {/* Connecting line for learning process */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningProcessData.map((item, idx) => (
                <div
                  key={item.title}
                  ref={(el) => (processRefs.current[idx] = el)}
                  className="process-item opacity-0 translate-y-4 relative"
                >
                  <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center relative z-10">
                    <div className="flex flex-col items-center mb-4">
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-full shadow-md bg-[#FF6B00] text-white mb-3 text-2xl"
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold capitalize text-gray-800 mb-1">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-normal text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 text-center border-2 border-[#FF6B00]">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Our Career <span className="text-[#FF6B00]">Roadmap</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

            <div className="space-y-8">
              {roadmapData.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={item.title} className="relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div
                        ref={(el) => (roadmapRefs.current[idx] = el)}
                        className={`w-full md:w-1/2 text-center ${
                          isLeft ? "order-2 md:order-1" : "order-2 md:order-3"
                        } roadmap-item opacity-0 ${
                          isLeft ? "translate-x-[-50px]" : "translate-x-[50px]"
                        }`}
                      >
                        <div className="bg-white rounded-xl border-2 border-[#FF6B00] shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mx-auto max-w-2xl flex flex-col items-center relative">
                          <span className={`absolute -top-4 ${idx % 2 === 0 ? '-right-4' : '-left-4'} w-12 h-12 flex items-center justify-center rounded-full shadow-lg ring-4 ring-white/80 text-2xl font-extrabold z-10 bg-white text-[#FF6B00]`}>
                            {idx + 1}
                          </span>
                          <div className="flex flex-col items-center mb-4">
                            <div
                              className="flex items-center justify-center w-16 h-16 rounded-full shadow-md bg-[#FF6B00] text-white mb-3 text-3xl"
                            >
                              {item.icon}
                            </div>
                            <h3 className="text-xl font-bold capitalize text-gray-800 mb-2">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-base leading-relaxed text-center">
                            {item.description}
                          </p>
                        </div>
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
        .roadmap-item, .process-item {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          filter: blur(4px);
          will-change: transform, opacity, filter;
        }

        .roadmap-item.animate-in, .process-item.animate-in {
          opacity: 1;
          transform: translateX(0) translateY(0) !important;
          filter: blur(0);
        }

        @media (max-width: 768px) {
          .roadmap-item {
            transform: translateY(20px) !important;
          }
          
          .roadmap-item.animate-in {
            transform: translateY(0) !important;
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

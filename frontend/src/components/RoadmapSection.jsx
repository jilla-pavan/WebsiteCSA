import React, { useEffect, useRef } from "react";
import {
  FaUserGraduate,
  FaBrain,
  FaCode,
  FaComments,
  FaLaptopCode,
  FaClipboardCheck,
  FaBriefcase,
} from "react-icons/fa";

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

    roadmapRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Your Career <span className="text-[#FF6B00]">Roadmap</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>

            <div className="space-y-6">
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
                        <div className="bg-white rounded-md border border-gray-100 shadow p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 mx-auto max-w-2xl flex flex-col items-center relative">
                          <span className={`absolute -top-3 ${idx % 2 === 0 ? '-right-3' : '-left-3'} w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg ring-2 ring-white/80 text-lg font-bold z-10`}>
                            {idx + 1}
                          </span>
                          <div className="flex flex-col items-center mb-3">
                            <div
                              className={`flex items-center justify-center w-12 h-12 rounded-md shadow-sm bg-gradient-to-br ${item.color} text-white ring-2 ring-white/20 mb-2 text-2xl`}
                            >
                              {item.icon}
                            </div>
                            <h3
                              className={`text-xl font-semibold capitalize ${item.textColor} mb-1`}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-500 text-base leading-relaxed text-center max-w-3xl mx-auto font-normal">
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
        .roadmap-item {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          filter: blur(4px);
          will-change: transform, opacity, filter;
        }

        .roadmap-item.animate-in {
          opacity: 1;
          transform: translateX(0) !important;
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

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
    title: "Daily Monitoring Classes",
    description: "Get regular feedback and progress checks.",
    icon: <FaEye size={24} />,
  },
  {
    title: "Tasks and Projects",
    description: "Apply skills with hands-on tasks and projects.",
    icon: <FaTasks size={24} />,
  },
  {
    title: "Weekly Mocks",
    description: "Practice with mock interviews and assessments.",
    icon: <FaUserTie size={24} />,
  },
];

const roadmapData = [
  {
    title: "Technical Skills",
    description:
      "Develop cutting-edge technical skills in programming, data analysis, and software development. Master industry-relevant tools and technologies through hands-on projects.",
    color: "from-rose-600 to-red-600",
    icon: <FaLaptopCode size={50} />,
    textColor: "text-rose-700",
  },
  {
    title: "Aptitude",
    description:
      "Our course integrates aptitude training to equip students with essential problem-solving and critical thinking skills, enhancing their overall academic and professional success.",
    color: "from-indigo-600 to-purple-600",
    icon: <FaBrain size={50} />,
    textColor: "text-indigo-700",
  },
  {
    title: "Softskills",
    description:
      "Soft skills involve interpersonal, communication, problem-solving, leadership, and time management abilities critical for effective teamwork and professional success.",
    color: "from-pink-600 to-rose-600",
    icon: <FaComments size={50} />,
    textColor: "text-pink-700",
  },
  {
    title: "Problem Solving in JS",
    description:
      "Problem solving in JavaScript entails using logical thinking and programming skills to address issues within code efficiently.",
    color: "from-purple-600 to-pink-600",
    icon: <FaCode size={50} />,
    textColor: "text-purple-700",
  },
  {
    title: "Interview Preparation",
    description:
      "Interview preparation involves practicing problem-solving questions, refining communication skills, and researching potential employers to effectively showcase one's qualifications.",
    color: "from-red-600 to-orange-600",
    icon: <FaClipboardCheck size={50} />,
    textColor: "text-red-700",
  },
  {
    title: "Internships",
    description:
      "Our internships offer invaluable opportunities for career growth, providing hands-on experience and mentorship to develop essential skills and propel professional advancement.",
    color: "from-blue-600 to-indigo-600",
    icon: <FaUserGraduate size={50} />,
    textColor: "text-blue-700",
  },
  {
    title: "Placements",
    description:
      "At the culmination of our course, students secure placements through our comprehensive support system, ensuring successful transitions into their desired careers.",
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
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default RoadmapSection;

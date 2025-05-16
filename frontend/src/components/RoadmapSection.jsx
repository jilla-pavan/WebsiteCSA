import React from "react";
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
    color: "from-blue-500 to-indigo-500",
    icon: <FaUserGraduate size={24} />,
    textColor: "text-blue-600",
  },
  {
    title: "Aptitude",
    description:
      "Our course integrates aptitude training to equip students with essential problem-solving and critical thinking skills, enhancing their overall academic and professional success.",
    color: "from-indigo-500 to-purple-500",
    icon: <FaBrain size={24} />,
    textColor: "text-indigo-600",
  },
  {
    title: "Problem Solving in JS",
    description:
      "Problem solving in JavaScript entails using logical thinking and programming skills to address issues within code efficiently.",
    color: "from-purple-500 to-pink-500",
    icon: <FaCode size={24} />,
    textColor: "text-purple-600",
  },
  {
    title: "Softskills",
    description:
      "Soft skills involve interpersonal, communication, problem-solving, leadership, and time management abilities critical for effective teamwork and professional success.",
    color: "from-pink-500 to-rose-500",
    icon: <FaComments size={24} />,
    textColor: "text-pink-600",
  },
  {
    title: "Technical Skills",
    description:
      "Develop cutting-edge technical skills in programming, data analysis, and software development. Master industry-relevant tools and technologies through hands-on projects.",
    color: "from-rose-500 to-red-500",
    icon: <FaLaptopCode size={24} />,
    textColor: "text-rose-600",
  },
  {
    title: "Interview Preparation",
    description:
      "Interview preparation involves practicing problem-solving questions, refining communication skills, and researching potential employers to effectively showcase one's qualifications.",
    color: "from-red-500 to-orange-500",
    icon: <FaClipboardCheck size={24} />,
    textColor: "text-red-600",
  },
  {
    title: "Placements",
    description:
      "At the culmination of our course, students secure placements through our comprehensive support system, ensuring successful transitions into their desired careers.",
    color: "from-orange-500 to-amber-500",
    icon: <FaBriefcase size={24} />,
    textColor: "text-orange-600",
  },
];

const RoadmapSection = () => (
  <section className="py-8 bg-gradient-to-b from-white to-gray-50">
    <div className="w-4/5 mx-auto px-4">
      <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-10 text-center mt-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Your Career <span className="text-[#FF6B00]">Roadmap</span>
        </h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 rounded-full"></div>

          <div className="space-y-6">
            {roadmapData.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={item.title} className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Left card (desktop only) */}
                    <div
                      className={`w-full md:w-1/2 text-center ${
                        isLeft ? "order-2 md:order-1" : "order-2 md:order-3"
                      }`}
                    >
                      {isLeft && (
                        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mx-auto">
                          <div className="flex flex-col items-center mb-2">
                            <div
                              className={`flex items-center justify-center w-16 h-16 rounded-full shadow-sm bg-gradient-to-br ${item.color} text-white ring-2 ring-white`}
                            >
                              {item.icon}
                            </div>
                            <h3
                              className={`mt-2 text-xl font-bold capitalize ${item.textColor}`}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed text-center">
                            {item.description}
                          </p>
                        </div>
                      )}
                      {!isLeft && (
                        <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mx-auto">
                          <div className="flex flex-col items-center mb-2">
                            <div
                              className={`flex items-center justify-center w-16 h-16 rounded-full shadow-sm bg-gradient-to-br ${item.color} text-white ring-2 ring-white`}
                            >
                              {item.icon}
                            </div>
                            <h3
                              className={`mt-2 text-lg font-semibold capitalize ${item.textColor}`}
                            >
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed text-center">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center mx-2 order-1 md:order-2">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-sm ring-2 ring-white text-xl font-bold`}
                      >
                        {idx + 1}
                      </div>
                      {idx !== roadmapData.length - 1 && (
                        <div className="w-0.5 h-8 bg-gray-200"></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;

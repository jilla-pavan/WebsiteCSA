import React from "react";

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
            className="group bg-white rounded-2xl overflow-visible shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 min-h-[380px] flex flex-col justify-between relative pt-16 border-2 border-orange-100"
          >
            {/* Avatar Overlap, centered on card */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
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
              <p className="text-orange-500 text-sm mb-2 font-semibold">
                {trainer.role}
              </p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {trainer.description}
              </p>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            20+
          </div>
          <p className="text-gray-400 text-sm md:text-base">Years Experience</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            50+
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Industry Projects
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            3000+
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Students Mentored
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50">
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

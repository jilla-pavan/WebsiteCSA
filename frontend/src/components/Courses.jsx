import React, { useState } from "react";
import CourseDetailsModal from "./CourseDetailsModal";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
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

  return (
    <div id="courses" className="mt-16 mb-16 relative px-6">
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
              <div className="absolute inset-0 from-gray-900/90 via-gray-900/50 to-transparent z-10"></div>
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
              <div className="absolute top-3 right-3">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
            15+
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Industry Projects
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
            100%
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Practical Learning
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
            24/7
          </div>
          <p className="text-gray-400 text-sm md:text-base">Mentor Support</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-6 text-center border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">
            1:1
          </div>
          <p className="text-gray-400 text-sm md:text-base">Career Guidance</p>
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
      />
    </div>
  );
};

export default Courses;

import React, { useState, useEffect, useRef } from "react";
import CourseDetailsModal from "./CourseDetailsModal";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import mernSyllabusUrl from "/assets/related_PDFs/mern-syllabus.pdf?url"
import javafullstackSyllabusUrl from "/assets/related_PDFs/java-full-stack-syllabus.pdf?url"
import pythonfullstackSyllabusUrl from "/assets/related_PDFs/python-full-stack-syllabus.pdf?url"

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseForDownload, setCourseForDownload] = useState(null);
  const [showEnrollPrompt, setShowEnrollPrompt] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEnrollClick = () => {
    setShowEnrollPrompt(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setFormError("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      // Add to Firestore 'enrollments' collection
      await addDoc(collection(db, "enrollments"), {
        name: form.name,
        email: form.email,
        mobile: form.phone,
        course: courseForDownload.title,
        timestamp: new Date(),
        status: "new",
        source: "CourseCard",
      });
      setShowEnrollPrompt(false);
      setForm({ name: "", email: "", phone: "" });
      
      // Download the syllabus after successful enrollment
      const syllabusPaths = {
        mern: mernSyllabusUrl,
        java: javafullstackSyllabusUrl,
        python: pythonfullstackSyllabusUrl
      };

      const syllabusPath = syllabusPaths[courseForDownload.id];
      if (syllabusPath) {
        const link = document.createElement('a');
        link.href = syllabusPath;
        link.download = `${courseForDownload.title}-Syllabus.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      setFormError(
        "There was an error submitting your registration. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadSyllabus = (course) => {
    setCourseForDownload(course);
    setShowEnrollPrompt(true);
  };

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
  };

  const courses = [
    {
      id: "mern",
      title: "MERN Full Stack",
      description:
        "Master modern web development with MongoDB, Express.js, React.js, and Node.js",
      price: "₹30,000",
      score: 4.8,
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
      price: "₹30,000",
      score: 4.6,
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
      price: "₹30,000",
      score: 4.5,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[480px]"
          >
            {/* Course Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 from-gray-900/90 via-gray-900/50 to-transparent z-10"></div>
              <img
                src={
                  course.id === "mern"
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/330px-MERN-logo.png"
                    : course.id === "java"
                    ? "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png"
                    : course.id === "python"
                    ? "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/150px-Python-logo-notext.svg.png"
                    : "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_1280.png"
                }
                alt={course.title}
                className="w-full h-full object-contain object-center bg-black transform group-hover:scale-105 transition-transform duration-300"
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
            <div className="p-4 flex flex-col flex-1 justify-between h-full">
              <div>
                {/* Title and Description */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Course Score */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.score)
                              ? "text-yellow-400"
                              : i < Math.ceil(course.score)
                              ? "text-yellow-400/50"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {course.score.toFixed(1)}/5
                    </span>
                  </div>
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
              </div>
              {/* Price and CTA */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    {course.price}
                  </div>
                  <div className="text-xs text-gray-500">
                    Pay in two installments
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDownloadSyllabus(course)}
                    className="px-3 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Syllabus
                  </button>
                  <button
                    onClick={() => handleLearnMore(course)}
                    className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
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

      {/* Enrollment Form Modal */}
      {showEnrollPrompt && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowEnrollPrompt(false)}></div>
          <div className="relative bg-white rounded-xl p-8 w-full max-w-md mx-4 z-10">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setShowEnrollPrompt(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-center text-[#FF6B00]">
              Enroll to Download Syllabus
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                disabled={isSubmitting}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
                disabled={isSubmitting}
              />
              {formError && (
                <div className="text-red-500 text-sm text-center">
                  {formError}
                </div>
              )}
              <button
                type="submit"
                className="bg-[#FF6B00] text-white font-bold py-2 rounded-lg hover:bg-[#FF6B00]/90 transition-all disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register & Download"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;

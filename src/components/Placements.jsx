import React from 'react';
import { useNavigate } from 'react-router-dom';

function Placements() {
  const navigate = useNavigate();

  // Sample data for placed students
  const placedStudents = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Google",
      package: "₹32 LPA",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
      course: "Full Stack Development",
      batch: "2023",
      testimonial: "The comprehensive curriculum and hands-on projects helped me land my dream job at Google!"
    },
    {
      id: 2,
      name: "Rahul Singh",
      role: "Data Scientist",
      company: "Amazon",
      package: "₹28 LPA",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      course: "Data Science",
      batch: "2023",
      testimonial: "The industry-relevant projects and expert mentorship were key to my success."
    },
    {
      id: 3,
      name: "Neha Patel",
      role: "Full Stack Developer",
      company: "Microsoft",
      package: "₹30 LPA",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      course: "MERN Stack",
      batch: "2023",
      testimonial: "The placement support team helped me prepare thoroughly for interviews."
    },
    {
      id: 4,
      name: "Arun Kumar",
      role: "DevOps Engineer",
      company: "IBM",
      package: "₹25 LPA",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
      course: "Cloud Computing",
      batch: "2023",
      testimonial: "The practical training in cloud technologies was exactly what I needed."
    }
  ];

  return (
    <div className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="text-gradient-to-r from-orange-500 to-orange-400">Success Stories</span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "95%", label: "Placement Rate" },
            { value: "₹28L", label: "Average Package" },
            { value: "500+", label: "Students Placed" },
            { value: "50+", label: "Partner Companies" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-[#FF6B00] mb-2">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Placed Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {placedStudents.map((student) => (
            <div key={student.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Student Image and Company Logo */}
              <div className="relative h-48">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2">
                    <img
                      src={student.companyLogo}
                      alt={student.company}
                      className="w-8 h-8 rounded-lg bg-white p-1"
                    />
                    <span className="text-white font-semibold">{student.company}</span>
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                <p className="text-[#FF6B00] font-semibold mb-2">{student.role}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-sm font-medium">
                    {student.package}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {student.course}
                  </span>
                </div>
                <p className="text-gray-600 text-sm italic">"{student.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of successful professionals and take the first step towards your dream career
          </p>
          <button
            className="bg-[#FF6B00] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#FF6B00]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={() => navigate('/enroll')}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Placements;
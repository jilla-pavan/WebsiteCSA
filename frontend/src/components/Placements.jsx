import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Udhay,
  Teja,
  Rambabu,
  Dileep,
  Jagadeesh,
  Rushikesh,
  Shahil,
} from "../../public/assets/placements";
import { Nova } from "../../public/assets/company_Logos";

function Placements() {
  const navigate = useNavigate();

  // Real data for placed students
  const placedStudents = [
    {
      id: 1,
      name: "Udhay Kaitha",
      role: "Software Developer",
      company: "Multiplier AI",
      package: "₹4.5 LPA",
      image: Udhay,
      companyLogo: "https://multiplierai.co/wp-content/uploads/2022/06/multiplier_logo.png",
      course: "Full Stack Development",
      batch: "2023",
      testimonial: "The comprehensive curriculum and hands-on projects at CSA helped me secure my dream role at Multiplier AI!"
    },
    {
      id: 2,
      name: "Dileep",
      role: "Testing Engineer",
      company: "Wipro",
      package: "₹4 LPA",
      image: Dileep,
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/330px-Wipro_new_logo.svg.png",
      course: "Software Testing",
      batch: "2023",
      testimonial: "The practical training and industry exposure at CSA prepared me well for my role at Wipro."
    },
    {
      id: 3,
      name: "Jagadeesh",
      role: "Software Developer",
      company: "Sconex Software",
      package: "₹4 LPA",
      image: Jagadeesh,
      companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQFnAOeChCHW-Q/company-logo_200_200/company-logo_200_200/0/1729242362993/sconexit_logo?e=2147483647&v=beta&t=lxiLsl70uulj0KYdk2B8tj9-8jxOZQDEZ8MKkuJ62zY",
      course: "MERN Stack",
      batch: "2023",
      testimonial: "The mentorship and project-based learning approach at CSA was instrumental in my success."
    },
    {
      id: 4,
      name: "Rambabu",
      role: "Data Analyst",
      company: "Nova Web Innovations",
      package: "₹4 LPA",
      image: Rambabu,
      companyLogo: Nova,
      course: "Data Science",
      batch: "2023",
      testimonial: "CSA's data science program provided me with the perfect foundation for my career in analytics."
    },
    {
      id: 5,
      name: "Tirumala Teja",
      role: "Software Developer",
      company: "Kapil Technogles",
      package: "₹3.5 LPA",
      image: Teja,
      companyLogo: "https://kcs-tech.com/static/media/ptkcs%20logo%20png%20total.cf3b714d11854610e992.png",
      course: "Full Stack Development",
      batch: "2023",
      testimonial: "The industry-relevant curriculum and placement support at CSA helped me land my first tech role."
    },
    {
      id: 6,
      name: "Rushikesh",
      role: "Software Developer",
      company: "Stalcon",
      package: "₹3 LPA",
      image: Rushikesh,
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFJn_SHIfzEBfw5XjGGpFfF92PSHDbA4lanew_bnbDQ&s",
      course: "MERN Stack",
      batch: "2023",
      testimonial: "The hands-on projects and mock interviews at CSA were crucial for my placement success."
    },
    {
      id: 7,
      name: "Shahil",
      role: "Software Developer",
      company: "Stalcon",
      package: "₹3 LPA",
      image: Shahil,
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFJn_SHIfzEBfw5XjGGpFfF92PSHDbA4lanew_bnbDQ&s",
      course: "Full Stack Development",
      batch: "2023",
      testimonial: "CSA's comprehensive training program helped me transition into a successful software developer role."
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
            { value: "97%", label: "Placement Rate" },
            { value: "₹6LPA", label: "Average Package" },
            { value: "100+", label: "Students Placed" },
            { value: "50+", label: "Partner Companies" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Placed Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placedStudents.map((student) => (
            <div key={student.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border-2 border-gray-100 hover:border-primary/30">
              {/* Student Image and Company Logo */}
              <div className="relative h-48 flex items-center justify-center bg-gray-50 border-b border-gray-100">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-lg bg-white p-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                      <img
                        src={student.companyLogo}
                        alt={student.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white font-semibold text-lg">{student.company}</span>
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{student.name}</h3>
                <p className="text-primary font-semibold mb-3">{student.role}</p>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                    {student.package}
                  </span>
                  <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm border border-gray-200">
                    {student.course}
                  </span>
                </div>
                <div className="relative">
                  <p className="text-gray-600 text-sm italic leading-relaxed">"{student.testimonial}"</p>
                  <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">"</div>
                </div>
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
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-primary hover:border-primary/80"
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
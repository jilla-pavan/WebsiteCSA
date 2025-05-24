import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Udhay,
  Teja,
  Rambabu,
  Dileep,
  Jagadeesh,
  Rushikesh,
  Shahil,
  Vinay,
  Nikhil,
  Navneeth,
  Sachin,
  Dasthagiri,
  Archana
} from "../../public/assets/placements";
import { Nova } from "../../public/assets/company_Logos";

function Placements() {
  const navigate = useNavigate();

  // Real data for placed students
  const placedStudents = [
    {
      id: 1,
      name: "Dasthagiri",
      role: "Software Developer",
      company: "Saven Technologies",
      package: "₹8 LPA",
      image: Dasthagiri,
      companyLogo:
        "https://saventech.com/wp-content/uploads/2024/07/Saven-Website-logo-2.png",
      course: "Full Stack Development",
      batch: "2024",
      testimonial:
        "The comprehensive training and industry exposure at CSA helped me secure an amazing package at Saven Technologies!",
    },
    {
      id: 2,
      name: "Nikhil",
      role: "Software Developer",
      company: "TCS",
      package: "₹7.5 LPA",
      image: Nikhil,
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services.svg/250px-Tata_Consultancy_Services.svg.png",
      course: "Full Stack Development",
      batch: "2024",
      testimonial:
        "CSA's structured curriculum and mock interviews prepared me well for my role at TCS.",
    },
    {
      id: 3,
      name: "Navneeth",
      role: "Software Developer",
      company: "Unify",
      package: "₹7.5 LPA",
      image: Navneeth,
      companyLogo:
        "https://media.licdn.com/dms/image/v2/D560BAQEHF-p9txVvDw/company-logo_200_200/company-logo_200_200/0/1708606546779/unifytech_logo?e=2147483647&v=beta&t=ydp-QL3wDOCP84ieMzblbTrH_-p-46wSNIamYWbesgQ",
      course: "MERN Stack",
      batch: "2024",
      testimonial:
        "The hands-on projects and mentorship at CSA were crucial for my success at Unify.",
    },
    {
      id: 4,
      name: "Vinay",
      role: "Software Developer",
      company: "Msys Technologies",
      package: "₹7 LPA",
      image: Vinay,
      companyLogo:
        "https://www.msystechnologies.com/wp-content/uploads/2020/01/MSys-Standard-Logo-1.png",
      course: "Full Stack Development",
      batch: "2024",
      testimonial:
        "CSA's industry-aligned curriculum helped me secure a great position at Msys Technologies.",
    },
    {
      id: 5,
      name: "Sachin",
      role: "Software Developer",
      company: "Mobinis Msys Digital",
      package: "₹5.5 LPA",
      image: Sachin,
      companyLogo:
        "https://www.msystechnologies.com/wp-content/uploads/2020/01/MSys-Standard-Logo-1.png",
      course: "MERN Stack",
      batch: "2024",
      testimonial:
        "The practical training and placement support at CSA was instrumental in my career growth.",
    },
    {
      id: 6,
      name: "Udhay Kaitha",
      role: "Software Developer",
      company: "Multiplier AI",
      package: "₹4.5 LPA",
      image: Udhay,
      companyLogo:
        "https://multiplierai.co/wp-content/uploads/2022/06/multiplier_logo.png",
      course: "Full Stack Development",
      batch: "2023",
      testimonial:
        "The comprehensive curriculum and hands-on projects at CSA helped me secure my dream role at Multiplier AI!",
    },
    {
      id: 7,
      name: "Dileep",
      role: "Testing Engineer",
      company: "Wipro",
      package: "₹4 LPA",
      image: Dileep,
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/330px-Wipro_new_logo.svg.png",
      course: "Software Testing",
      batch: "2023",
      testimonial:
        "The practical training and industry exposure at CSA prepared me well for my role at Wipro.",
    },
    {
      id: 8,
      name: "Jagadeesh",
      role: "Software Developer",
      company: "Sconex Software",
      package: "₹4 LPA",
      image: Jagadeesh,
      companyLogo:
        "https://media.licdn.com/dms/image/v2/D560BAQFnAOeChCHW-Q/company-logo_200_200/company-logo_200_200/0/1729242362993/sconexit_logo?e=2147483647&v=beta&t=lxiLsl70uulj0KYdk2B8tj9-8jxOZQDEZ8MKkuJ62zY",
      course: "MERN Stack",
      batch: "2023",
      testimonial:
        "The mentorship and project-based learning approach at CSA was instrumental in my success.",
    },
    {
      id: 9,
      name: "Rambabu",
      role: "Data Analyst",
      company: "Nova Web Innovations",
      package: "₹4 LPA",
      image: Rambabu,
      companyLogo: Nova,
      course: "Data Science",
      batch: "2023",
      testimonial:
        "CSA's data science program provided me with the perfect foundation for my career in analytics.",
    },
    {
      id: 10,
      name: "Tirumala Teja",
      role: "Software Developer",
      company: "Kapil Technogles",
      package: "₹3.5 LPA",
      image: Teja,
      companyLogo:
        "https://kcs-tech.com/static/media/ptkcs%20logo%20png%20total.cf3b714d11854610e992.png",
      course: "Full Stack Development",
      batch: "2023",
      testimonial:
        "The industry-relevant curriculum and placement support at CSA helped me land my first tech role.",
    },
    {
      id: 11,
      name: "Rushikesh",
      role: "Software Developer",
      company: "Stalcon",
      package: "₹3 LPA",
      image: Rushikesh,
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFJn_SHIfzEBfw5XjGGpFfF92PSHDbA4lanew_bnbDQ&s",
      course: "MERN Stack",
      batch: "2023",
      testimonial:
        "The hands-on projects and mock interviews at CSA were crucial for my placement success.",
    },
    {
      id: 12,
      name: "Shahil",
      role: "Software Developer",
      company: "Stalcon",
      package: "₹3 LPA",
      image: Shahil,
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFJn_SHIfzEBfw5XjGGpFfF92PSHDbA4lanew_bnbDQ&s",
      course: "Full Stack Development",
      batch: "2023",
      testimonial:
        "CSA's comprehensive training program helped me transition into a successful software developer role.",
    },
    {
      id: 12,
      name: "Archana Vusa",
      role: "Software Developer",
      company: "V&V Technologies",
      package: "₹4 LPA",
      image: Archana,
      companyLogo:
        "https://vandvtechnologies.com/wp-content/uploads/2022/04/cropped-vv-photo.png",
      course: "Full Stack Development",
      batch: "2023",
      testimonial:
        "The comprehensive training and mentorship at CSA helped me secure my role at V&V Technologies. The practical projects and industry exposure were invaluable.",
    },
  ];

  return (
    <div className="py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">Our </span>
            <span className="text-gradient-to-r from-orange-500 to-orange-400">
              Success Stories
            </span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "90%", label: "Placement Rate" },
            { value: "₹4LPA", label: "Average Package" },
            { value: "1000+", label: "Students Placed" },
            { value: "500+", label: "Partner Companies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Placed Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placedStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 hover:border-primary/30"
            >
              {/* Student Image and Company Logo */}
              <div className="relative h-52 flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 border-b border-gray-100">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-xl bg-white p-1.5 shadow-xl transform group-hover:scale-110 transition-transform duration-500 border border-gray-100 flex items-center justify-center">
                      <img
                        src={student.companyLogo}
                        alt={student.company}
                        className="w-full h-full object-contain"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                      />
                    </div>
                    <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-extrabold text-xl drop-shadow-lg tracking-wide">
                      {student.company}
                    </span>
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
                  {student.name}
                </h3>
                <p className="text-primary font-semibold text-base mb-3">
                  {student.role}
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full text-xl font-extrabold shadow-lg transform hover:scale-105 transition-transform duration-300">
                    {student.package}
                  </span>
                  <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium border border-gray-200">
                    {student.course}
                  </span>
                </div>
                <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-gray-600 text-xs leading-relaxed">
                    "{student.testimonial}"
                  </p>
                  <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">
                    "
                  </div>
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
            Join our community of successful professionals and take the first
            step towards your dream career
          </p>
          <button
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-primary hover:border-primary/80"
            onClick={() => navigate("/enroll")}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Placements;

import React from "react";

export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ananya Verma",
      role: "Full Stack Developer",
      company: "Google",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      testimonial:
        "Career Sure Academy transformed my career. The practical approach and industry-relevant curriculum helped me land my dream job.",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      role: "Data Scientist",
      company: "Microsoft",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      testimonial:
        "The mentorship and guidance I received were exceptional. I went from a beginner to a confident data scientist.",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "ML Engineer",
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      testimonial:
        "The hands-on projects and real-world applications made learning complex concepts much easier. Highly recommended!",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Cloud Architect",
      company: "Netflix",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      testimonial:
        "The cloud computing course was exactly what I needed to advance my career. The instructors were amazing!",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    },
    {
      id: 5,
      name: "Neha Gupta",
      role: "DevOps Engineer",
      company: "Meta",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      testimonial:
        "The DevOps course helped me understand modern deployment practices. I got multiple job offers after completion!",
      rating: 5,
      batch: "2023",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    },
  ];

  return (
    <>
      <div className="mt-16 mb-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="text-[#FF6B00]">Student Testimonials</span>
          </h1>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-4 min-w-max px-4">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="testimonial-card bg-white rounded-xl p-4 border border-gray-100 shadow-lg w-[300px] flex-shrink-0"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-orange-500"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-orange-400 text-xs">
                        {testimonial.role}
                      </p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm mb-4 line-clamp-3">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="bg-white p-1 rounded h-6 w-16 flex items-center justify-center">
                        <img
                          src={testimonial.companyLogo}
                          alt={testimonial.company}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                      <span className="text-gray-600 text-xs">
                        {testimonial.company}
                      </span>
                    </div>
                    <span className="text-gray-500 text-xs">
                      {testimonial.batch}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 px-2 md:px-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            4.9/5
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Average Student Rating
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            15,000+
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Enrolled Students
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            92%
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Would Recommend Us
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 md:p-5 border border-gray-700 text-center">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            250+
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Video Testimonials
          </p>
        </div>
      </div>

      {/* Add this style block at the top of your component, after the imports */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * ${testimonials.length}));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

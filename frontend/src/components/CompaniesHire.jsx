import React from "react";

const CompaniesHire = () => {
  // First row of company logos
  const companyLogosRow1 = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1280px-Adobe_Corporate_Logo.png",
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png",
    },
  ];

  // Second row of company logos (scrolling in opposite direction)
  const companyLogosRow2 = [
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    },
    {
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services.svg/250px-Tata_Consultancy_Services.svg.png",
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1280px-Wipro_Primary_Logo_Color_RGB.svg.png",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1280px-Intel_logo_%282006-2020%29.svg.png",
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png",
    },
    {
      name: "Deloitte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png",
    },
  ];

  // Third row of company logos
  const companyLogosRow3 = [
    {
      name: "Capgemini",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Capgemini_logo.svg/250px-Capgemini_logo.svg.png",
    },
    {
      name: "Cognizant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/250px-Cognizant_logo_2022.svg.png",
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png",
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Hewlett-Packard_logo_1979_blue.svg/330px-Hewlett-Packard_logo_1979_blue.svg.png",
    },
    {
      name: "Nvidia",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
    },
    {
      name: "Uber",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    },
  ];

  // Fourth row of company logos
  const companyLogosRow4 = [
    {
      name: "HCL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/HCLTech-new-logo.svg/375px-HCLTech-new-logo.svg.png",
    },
    {
      name: "Tech Mahindra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Logo-True-Colors-original.png/500px-Logo-True-Colors-original.png",
    },
    {
      name: "L&T",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/160px-Larsen%26Toubro_logo.svg.png",
    },
    {
      name: "Qualcomm",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/500px-Qualcomm-Logo.svg.png",
    },
    {
      name: "AMD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/2560px-AMD_Logo.svg.png",
    },
    {
      name: "VMware",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Vmware-by-broadcom.svg/500px-Vmware-by-broadcom.svg.png",
    },
    {
      name: "SAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png",
    },
    {
      name: "Atlassian",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Atlassian-horizontal-blue-rgb.svg/500px-Atlassian-horizontal-blue-rgb.svg.png",
    },
  ];

  // Fifth row of company logos
  const companyLogosRow5 = [
    {
      name: "JPMorgan",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_JPMorganChase_2024.svg/500px-Logo_of_JPMorganChase_2024.svg.png",
    },
    {
      name: "Goldman Sachs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2560px-Goldman_Sachs.svg.png",
    },
    {
      name: "Morgan Stanley",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Morgan_Stanley_Logo_2024.svg/500px-Morgan_Stanley_Logo_2024.svg.png",
    },
    {
      name: "PayPal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
    },
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
    },
    {
      name: "Mastercard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png",
    },
    {
      name: "American Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/330px-American_Express_logo_%282018%29.svg.png",
    },
    {
      name: "Citibank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Citibank.svg/375px-Citibank.svg.png  ",
    },
  ];

  return (
    <div id="companies" className="w-full">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">Our </span>
          <span className="text-[#FF6B00]">Industry Partners</span>
        </h1>
      </div>

      {/* Logos Container */}
      <div className="relative rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100">
        {/* Top Gradient Fade */}
        <div className="absolute top-0 left-0 right-0 h-12 z-10 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 z-10 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

        {/* Left Gradient Fade */}
        <div className="absolute top-0 left-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>

        {/* Right Gradient Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        {/* Scrolling logos container */}
        <div className="py-8 px-4">
          {/* First row - Left */}
          <div className="relative overflow-hidden mb-6">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...companyLogosRow1, ...companyLogosRow1].map(
                (company, index) => (
                  <div
                    key={index}
                    className="mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 max-w-[120px] object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Subtle divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30 my-4"></div>

          {/* Second row - Right */}
          <div className="relative overflow-hidden mb-6">
            <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
              {[...companyLogosRow2, ...companyLogosRow2].map(
                (company, index) => (
                  <div
                    key={index}
                    className="mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 max-w-[120px] object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Subtle divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30 my-4"></div>

          {/* Third row - Left */}
          <div className="relative overflow-hidden mb-6">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...companyLogosRow3, ...companyLogosRow3].map(
                (company, index) => (
                  <div
                    key={index}
                    className="mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 max-w-[120px] object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Subtle divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30 my-4"></div>

          {/* Fourth row - Right */}
          <div className="relative overflow-hidden mb-6">
            <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
              {[...companyLogosRow4, ...companyLogosRow4].map(
                (company, index) => (
                  <div
                    key={index}
                    className="mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 max-w-[120px] object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Subtle divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30 my-4"></div>

          {/* Fifth row - Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...companyLogosRow5, ...companyLogosRow5].map(
                (company, index) => (
                  <div
                    key={index}
                    className="mx-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 max-w-[120px] object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Statistics about hiring partners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10 px-2 md:px-6">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            150+
          </div>
          <p className="text-gray-400 text-sm md:text-base">Hiring Partners</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            90%
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Fortune 100 Companies
          </p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300">
          <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">
            200+
          </div>
          <p className="text-gray-400 text-sm md:text-base">Open Positions</p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesHire;

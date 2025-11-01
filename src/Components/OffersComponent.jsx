import React from "react";
import { BookOpen, Heart, Coins, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const OffersComponent = () => {
  const services = [
    {
      id: 1,
      icon: BookOpen,
      title: "Learning Programs",
      description:
        "MID offers 6 educational programs for community members and people worldwide. Our programs are designed to cater to various needs, including options for working professionals. Join us to expand your knowledge and skills in a supportive learning environment.",
      buttonText: "View Programs",
      buttonAction: () => console.log("Navigate to programs"),
      imageAlt: "Graduation Hat illustrating Learning Programs",
      imageSrc: "/offersComponenet/offersSectionImg_3.svg",
    },
    {
      id: 2,
      icon: Heart,
      title: "Counseling Center",
      description:
        "In addition to our learning programs, MID provides a range of counseling services to support our community. Our experienced counselors offer guidance in areas including marital, religious, family, and mental health counseling. All services are available by appointment to ensure personalized attention.",
      buttonText: "Book Appointment",
      buttonAction: () => console.log("Navigate to counseling"),
      imageAlt: "Heart icon representing Counseling Services",
      imageSrc: "offersComponenet/offersSectionImg_2.svg",
      reversed: true,
    },
    {
      id: 3,
      icon: Coins,
      title: "Zakat Aid",
      description:
        "If you're in need of financial assistance and believe you may qualify for Zakat, we're here to help. Our team will work with you to determine your eligibility and guide you through the application process. Take the first step towards financial support by starting your Zakat Aid application today.",
      buttonText: "Apply Now",
      buttonAction: () => console.log("Navigate to zakat aid"),
      imageAlt: "Coins icon representing Charitable Initiatives",
      imageSrc: "offersComponenet/offersSectionImg_1.svg",
    },
  ];

  const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;

    return (
      <div className="flex flex-col py-16 md:py-24">
        <div
          className={`flex flex-col ${
            service.reversed ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between w-full gap-12 md:gap-16`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-xs xl:max-w-sm aspect-square mx-auto pointer-events-none">
              <img
                alt={service.imageAlt}
                loading="lazy"
                decoding="async"
                className="drop-shadow-xl w-full h-full object-contain"
                src={service.imageSrc}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-zinc-900 rounded-3xl shadow-xl shadow-black/40 overflow-hidden transition-all duration-300 hover:shadow-2xl p-7 md:p-8 border border-zinc-800">
              {/* Header */}
              <div className="flex items-center mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-600/70 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 mr-3 md:mr-4 flex-shrink-0">
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 leading-tight">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-zinc-400 mb-7 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <Link
                to={
                  service.title === "Counseling Center" ||
                  service.title === "Zakat Aid"
                    ? "pagenotfound"
                    : "/"
                }
              >
                <button
                  onClick={service.buttonAction}
                  className="group inline-flex items-center bg-gradient-to-r from-teal-700 to-teal-800 text-white font-semibold py-3 px-6 md:py-3 md:px-5 rounded-xl text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  {service.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black/95">
      <div className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
              What We <span className="text-teal-500">Offer</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-sm md:max-w-xl mx-auto">
              Discover our range of services designed to support and enrich our
              community
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-0">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default OffersComponent;

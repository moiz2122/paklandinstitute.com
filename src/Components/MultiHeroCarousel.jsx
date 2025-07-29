import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "animate.css";

const MultiHeroCarousel = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Define your different hero sections data here
  const heroSections = [
    {
      id: 1,
      badge: "Enrollment Open",
      badgeIcon: true,
      title: "Registration For 2026 Academic Year",
      description:
        "Enroll now in our educational programs designed for all age groups and levels!",
      image: "/home/HerocarouselImage_1.jpg",
      primaryButton: {
        text: "Register Now",
        link: "/family-tafseer",
      },
      secondaryButton: {
        text: "Our Programs",
      },
    },
    {
      id: 2,
      badge: "Hajj 2025 Services",
      badgeIcon: true,
      title: "Your Journey To The Sacred House",
      description:
        "Experience a spiritually enriching Hajj journey with our comprehensive guidance and support.",
      image: "/home/HerocarouselImage_4.jpg",
      primaryButton: {
        text: "Learn More",
        link: "/prayer-times",
      },
      secondaryButton: {
        text: "Hajj Packges",
      },
    },
    {
      id: 3,
      badge: "Islamic Education",
      badgeIcon: true,
      title: "Deepen Your Understanding",
      description:
        "Join us every Friday after Maghrib prayer for enlightening Quranic insights.",
      image: "/home/HerocarouselImage_2.jpg",
      primaryButton: {
        text: "View Schedule",
        link: "/education",
      },
      secondaryButton: {
        text: "Our Program",
      },
    },
    {
      id: 4,
      badge: "Weekly Majlis Sessions",
      badgeIcon: true,
      title: "Journey To Purification",
      description:
        "Discover the path to spiritual growth through weekly Islamic teachings and insights.",
      image: "/home/HerocarouselImage_3.jpg",
      primaryButton: {
        text: "Upcoming Events",
        link: "/events",
      },
      secondaryButton: {
        text: "Get Involved",
      },
    },
  ];

  const totalHeroSections = heroSections.length;

  // Function to trigger animations on hero change
  const triggerAnimations = () => {
    setAnimationKey((prev) => prev + 1);
  };

  // Navigation functions
  const nextHero = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % totalHeroSections);
    triggerAnimations();
  };

  const prevHero = () => {
    setCurrentHeroIndex(
      (prev) => (prev - 1 + totalHeroSections) % totalHeroSections
    );
    triggerAnimations();
  };

  const goToHero = (index) => {
    if (index !== currentHeroIndex) {
      setCurrentHeroIndex(index);
      triggerAnimations();
    }
  };

  // Auto-advance carousel (uncomment if needed)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextHero();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const currentHero = heroSections[currentHeroIndex];

  return (
    <div className="relative w-full h-screen sm:h-[80vh] min-h-[600px] max-h-[900px] overflow-hidden bg-zinc-950">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0">
        <img
          alt={currentHero.badge}
          src={currentHero.image}
          className="absolute h-full w-full inset-0 object-cover transition-all duration-700 ease-in-out"
          key={currentHero.id}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
        {/* Additional Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl" key={animationKey}>
          {/* Badge */}
          <div className="mb-6">
            <span
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-lg ${
                currentHero.id === 2
                  ? `bg-yellow-500/10 text-yellow-300`
                  : `bg-teal-500/10 text-teal-300`
              } transition-all duration-500 animate__animated animate__fadeInUp`}
              style={{ animationDelay: "0.1s" }}
            >
              {currentHero.badgeIcon && (
                <span
                  className={`w-2 h-2 rounded-full ${
                    currentHero.id === 2 ? `bg-yellow-300` : "bg-teal-400"
                  } animate-pulse`}
                ></span>
              )}
              <span>{currentHero.badge}</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 text-white transition-all duration-500 animate__animated animate__bounceInLeft"
            style={{ animationDelay: "0.2s" }}
          >
            {currentHero.title}
          </h2>

          {/* Description */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-zinc-200 mb-4 sm:mb-8 leading-normal transition-all duration-500 animate__animated animate__bounceInLeft"
            style={{ animationDelay: "0.3s" }}
          >
            {currentHero.description}
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate__animated animate__bounceInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              className={`group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:py-4 rounded-2xl text-lg font-medium transition-all duration-300 overflow-hidden hover:cursor-pointer ${
                currentHero.id === 2
                  ? `bg-yellow-400 hover:bg-yellow-500 text-black`
                  : `bg-teal-600 hover:bg-teal-700 border-2 border-teal-600 text-white`
              }`}
            >
              <span className="relative z-10 flex items-center">
                {currentHero.primaryButton.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="bg-black/40 border-2 border-white/20 text-white font-semibold py-3 px-8 sm:py-4 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:bg-black/10 text-lg">
              {currentHero.secondaryButton.text}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center gap-6">
          {/* Previous Button */}
          <button
            onClick={prevHero}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
            aria-label="Previous Hero Section"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Hero Section Indicators */}
          <div className="flex gap-4">
            {heroSections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToHero(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentHeroIndex === index
                    ? "bg-white scale-150"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to ${heroSections[index].badge}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextHero}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
            aria-label="Next Hero Section"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Optional: Hero section indicator text */}
      <div className="absolute top-8 right-8 z-30">
        <span className="text-white/70 text-sm font-medium">
          {currentHeroIndex + 1} / {totalHeroSections}
        </span>
      </div>
    </div>
  );
};

export default MultiHeroCarousel;




// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
// import "animate.css";
// const MultiHeroCarousel = () => {
//   const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     nextHero();
//   //   }, 5000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   // Define your different hero sections data here
//   const heroSections = [
//     {
//       id: 1,
//       badge: "Enrollment Open",
//       badgeIcon: true,
//       title: "Registration For 2026 Academic Year",
//       description:
//         "Enroll now in our educational programs designed for all age groups and levels!",
//       image: "/home/HerocarouselImage_1.jpg",
//       primaryButton: {
//         text: "Register Now",
//         link: "/family-tafseer",
//       },
//       secondaryButton: {
//         text: "Our Programs",
//       },
//     },
//     {
//       id: 2,
//       badge: "Hajj 2025 Services",
//       badgeIcon: true,
//       title: "Your Journey To The Sacred House",
//       description:
//         "Experience a spiritually enriching Hajj journey with our comprehensive guidance and support.",
//       image: "/home/HerocarouselImage_4.jpg", // You'll add this image
//       primaryButton: {
//         text: "Learn More",
//         link: "/prayer-times",
//       },
//       secondaryButton: {
//         text: "Hajj Packges",
//       },
//     },
//     {
//       id: 3,
//       badge: "Islamic Education",
//       badgeIcon: true,
//       title: "Deepen Your Understanding",
//       description:
//         "Join us every Friday after Maghrib prayer for enlightening Quranic insights.",
//       image: "/home/HerocarouselImage_2.jpg", // You'll add this image
//       primaryButton: {
//         text: "View Schedule",
//         link: "/education",
//       },
//       secondaryButton: {
//         text: "Our Program",
//       },
//     },
//     {
//       id: 4,
//       badge: "Community Events",
//       badgeIcon: true,
//       title: "Journey To Purification",
//       description:
//         "Discover the path to spiritual growth through weekly Islamic teachings and insights.",
//       image: "/home/HerocarouselImage_3.jpg", // You'll add this image
//       primaryButton: {
//         text: "Upcoming Events",
//         link: "/events",
//       },
//       secondaryButton: {
//         text: "Get Involved",
//       },
//     },
//   ];

//   const totalHeroSections = heroSections.length;

//   // Navigation functions
//   const nextHero = () => {
//     setCurrentHeroIndex((prev) => (prev + 1) % totalHeroSections);
//   };

//   const prevHero = () => {
//     setCurrentHeroIndex(
//       (prev) => (prev - 1 + totalHeroSections) % totalHeroSections
//     );
//   };

//   const goToHero = (index) => {
//     setCurrentHeroIndex(index);
//   };

//   const currentHero = heroSections[currentHeroIndex];

//   return (
//     <div className="relative w-full h-screen sm:h-[80vh] min-h-[600px] max-h-[900px] overflow-hidden bg-zinc-950">
//       {/* Background Image with Overlays */}
//       <div className="absolute inset-0">
//         <img
//           alt={currentHero.badge}
//           src={currentHero.image}
//           className="absolute h-full w-full inset-0 object-cover transition-all duration-700 ease-in-out"
//           key={currentHero.id} // Force re-render for smooth transition
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
//         {/* Additional Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-left max-w-3xl">
//           {/* Badge */}
//           <div className="mb-6">
//             <span
//               className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-lg ${
//                 currentHero.id === 2
//                   ? `bg-yellow-500/10 text-yellow-300`
//                   : `bg-teal-500/10 text-teal-300`
//               } transition-all duration-500`}
//             >
//               {currentHero.badgeIcon && (
//                 <span
//                   className={`w-2 h-2 rounded-full ${
//                     currentHero.id === 2 ? `bg-yellow-300` : "bg-teal-400"
//                   } animate-pulse`}
//                 ></span>
//               )}
//               <span>{currentHero.badge}</span>
//             </span>
//           </div>

//           {/* Main Heading */}
//           <h2 className="animate__animated animate__backInLeft text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 text-white transition-all duration-500">
//             {currentHero.title}
//           </h2>

//           {/* Description */}
//           <p className="animate__animated animate__backInLeft text-lg sm:text-xl md:text-2xl text-zinc-200 mb-4 sm:mb-8 leading-normal transition-all duration-500">
//             {currentHero.description}
//           </p>

//           {/* Action Buttons */}
//           <div className="animate__backInUp animate__animated flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <button
//               className={`group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:py-4 rounded-2xl text-lg font-medium transition-all duration-300 overflow-hidden hover:cursor-pointer ${
//                 currentHero.id === 2
//                   ? `bg-yellow-400 hover:bg-yellow-500`
//                   : `bg-teal-600 hover:bg-teal-700 border-2 border-teal-600 text-white`
//               }`}
//             >
//               <span className="relative z-10 flex items-center">
//                 {currentHero.primaryButton.text}
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </button>

//             <button className="bg-black/40 border-2 border-white/20 text-white font-semibold py-3 px-8 sm:py-4 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:bg-black/10 text-lg">
//               {currentHero.secondaryButton.text}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Controls */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//         <div className="flex items-center gap-6">
//           {/* Previous Button */}
//           <button
//             onClick={prevHero}
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
//             aria-label="Previous Hero Section"
//           >
//             <ChevronLeft className="w-6 h-6 text-white" />
//           </button>

//           {/* Hero Section Indicators */}
//           <div className="flex gap-4">
//             {heroSections.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToHero(index)}
//                 className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                   currentHeroIndex === index
//                     ? "bg-white scale-150"
//                     : "bg-white/30 hover:bg-white/50"
//                 }`}
//                 aria-label={`Go to ${heroSections[index].badge}`}
//               />
//             ))}
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={nextHero}
//             className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
//             aria-label="Next Hero Section"
//           >
//             <ChevronRight className="w-6 h-6 text-white" />
//           </button>
//         </div>
//       </div>

//       {/* Optional: Hero section indicator text */}
//       <div className="absolute top-8 right-8 z-30">
//         <span className="text-white/70 text-sm font-medium">
//           {currentHeroIndex + 1} / {totalHeroSections}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default MultiHeroCarousel;
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const HeroTafseerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // Starting at slide 3 (0-indexed)

  const slides = [
    {
      id: 1,
      title: "Weekly Tafseer Sessions",
      heading: "Deepen Your Understanding",
      description:
        "Join us every Friday after Maghrib prayer for enlightening Quranic insights.",
      image: "/assets/Hero/FamilyTafseer.webp", // You'll need to add this image to your public folder
      badge: "Weekly Tafseer Sessions",
    },
    // You can add more slides here
  ];

  const totalSlides = 4; // Based on the original navigation dots

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen sm:h-[80vh] min-h-[600px] max-h-[900px] overflow-hidden bg-zinc-950">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0">
        <img
          alt="Weekly Tafseer Sessions"
          src="./public/home/HeroTafseer.jpg"
          className="absolute h-full w-full inset-0 object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
        {/* Additional Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-lg bg-teal-500/10 text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span>Weekly Tafseer Sessions</span>
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight text-white">
            Deepen Your Understanding
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 mb-4 sm:mb-8 leading-normal">
            Join us every Friday after Maghrib prayer for enlightening Quranic
            insights.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:py-4 rounded-2xl text-lg font-medium transition-all duration-300 overflow-hidden bg-teal-600 hover:bg-teal-700 border-2 border-teal-600 text-white">
              <span className="relative z-10 flex items-center">
                View Schedule
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="bg-black/40 border-2 border-white/20 text-white font-semibold py-3 px-8 sm:py-4 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:bg-black/10 text-lg">
              Our Programs
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center gap-6">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-4">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white scale-150"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroTafseerSection;

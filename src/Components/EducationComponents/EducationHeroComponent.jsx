import "animate.css";

export default function EducationHeroComponent({ imgeUrl, ptext ,htextone,htexttwo}) {
  return (
    <section className="h-screen">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          alt="Quran Gateway"
          src={imgeUrl}
          className="absolute h-full w-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[#0A0A0A]/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight leading-tight  transition-all duration-500 animate__animated animate__bounceInDown">
            {htextone} <span className="text-teal-500">{htexttwo}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-200 mb-8 sm:mb-10 md:mb-12 leading-normal transition-all duration-500 animate__animated animate__bounceInLeft">
            {ptext}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="transition-all duration-500 animate__animated animate__bounceInUp flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="inline-block bg-teal-600 border-2 border-teal-600 text-white py-3 px-8 sm:py-4 rounded-2xl w-full sm:w-auto text-lg font-semibold hover:bg-teal-700 transition duration-300 transform shadow-lg">
              Begin Your Journey
            </button>
            <button className="bg-black/40 border-2 border-white/20 text-white font-semibold py-3 px-8 sm:py-4 rounded-2xl w-full sm:w-auto shadow-lg transition duration-300 ease-in-out transform hover:bg-black/10 text-lg">
              Explore Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

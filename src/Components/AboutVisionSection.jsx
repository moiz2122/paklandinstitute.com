export default function AboutVisionSection() {
  const visionPoints = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      text: "We strive to provide accessible learning opportunities for working professionals, students, and families by offering weekend and evening classes.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      ),
      text: "We believe that by attaining knowledge and focusing on self-improvement, we can positively impact the world around us.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      ),
      text: "By aligning our efforts with Islamic values, we aim to nurture individuals who contribute to the betterment of society in accordance with our faith.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-teal-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-700 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-teal-700 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 sm:mb-16 lg:mb-20 text-center">
          Our Vision
        </h2>

        <div className="w-full lg:w-3/4 space-y-8 mx-auto">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-teal-900/50 p-8 rounded-3xl backdrop-blur-sm border border-teal-800/30 transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-teal-800/50 rounded-2xl flex-shrink-0">
                  {point.icon}
                </div>
                <p className="text-lg 2xl:text-xl leading-relaxed flex-1">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

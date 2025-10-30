import { BookText } from "lucide-react";

export default function AboutValueSection() {
  const values = [
    {
      icon: <BookText className="w-12 h-12 text-teal-500 mb-4" />,
      title: "Knowledge",
      description:
        "We believe in the power of knowledge to transform individuals and communities. Our commitment to traditional Islamic education forms the foundation of our institute.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-teal-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      title: "Community",
      description:
        "We strive to build a strong, supportive community that fosters growth, understanding, and mutual respect among all members.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-teal-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          ></path>
        </svg>
      ),
      title: "Self-Improvement",
      description:
        "We encourage continuous self-improvement and spiritual growth, empowering individuals to make positive changes in their lives and the world around them.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-zinc-950 border-zinc-900">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-100 mb-12 sm:mb-16 lg:mb-20 text-center">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-3xl shadow-black/40 shadow-lg border border-zinc-800"
            >
              {value.icon}
              <h3 className="text-2xl font-semibold text-teal-500 mb-4">
                {value.title}
              </h3>
              <p className="text-zinc-300 text-lg">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

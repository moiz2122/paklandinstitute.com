import { Feather } from "lucide-react";

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Hafidh Abdul Moiz",
      role: "Founder",
      image: "/faculty/Profile.jpg",
    },
    {
      name: "Molana Muhammad Talha Madni",
      role: "Supervisor",
      image: "/faculty/Talha.jpg",
    },
    {
      name: "Hafidh Muhammad Osama",
      role: "Hifdh Instructor",
      image: "/faculty/Osama.jpg",
    },
    {
      name: "Alimah Asma Bhaiyat",
      role: "Pre-Hifdh Instructor",
      image: "/faculty/Dummy.jpg",
    },
    {
      name: "Alimah Asma Bhaiyat",
      role: "Pre-Hifdh Instructor",
      image: "/faculty/Dummy.jpg",
    },
    {
      name: "Alimah Asma Bhaiyat",
      role: "Pre-Hifdh Instructor",
      image: "/faculty/Dummy.jpg",
    },
    {
      name: "Alimah Asma Bhaiyat",
      role: "Pre-Hifdh Instructor",
      image: "/faculty/Dummy.jpg",
    },
    {
      name: "Alimah Asma Bhaiyat",
      role: "Pre-Hifdh Instructor",
      image: "/faculty/Dummy.jpg",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16 pt-28 md:py-24 md:pt-36 bg-teal-800">
      <div className="mb-16 text-center relative">
        <Feather className="w-24 h-24 mx-auto mb-6 text-teal-100/30" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
          Our Esteemed Faculty
        </h1>
        <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
          Meet the dedicated scholars and instructors who form the backbone of
          our institution, guiding students on their journey of Islamic
          knowledge and spiritual growth.
        </p>
        <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-32 h-32 rounded-full bg-white p-1 mb-4 overflow-hidden">
              <img
                alt={member.name}
                width="160"
                height="160"
                className="rounded-full object-contain w-full h-full pointer-events-none"
                src={member.image}
              />
            </div>
            <h2 className="text-lg font-semibold text-white mb-1">
              {member.name}
            </h2>
            <p className="text-teal-100 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

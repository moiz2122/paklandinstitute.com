import { Clock, User, Book, Calendar } from "lucide-react";
import { useState } from "react";

export default function EducationCourseCurriculm() {
  const [activeYear, setActiveYear] = useState(1);

  const courses = {
    year1: [
      {
        title: "Seerah",
        duration: "1 Hour",
        instructor: "Maulana Omar Multani",
        textbook: "Seeratul Mustafa (3 Volumes)",
      },
      {
        title: "Aqeedah 1",
        duration: "1 Hour",
        instructor: "Maulana Talha Lasania",
        textbook: "Aqeedatul Tahawi",
      },
      {
        title: "Fiqh 1",
        duration: "1 Hour",
        instructor: "Shaykh Maulana Javid Bhaiyat",
        textbook: "Ascent to Felicity",
      },
      {
        title: "Hadeeth 1",
        duration: "2 Hours",
        instructor: "Mufti Qaribur Rahman",
        textbook: "Mishkaat al-Masaabih (5 Volumes)",
      },
      {
        title: "Tafseer 1",
        duration: "2 Hours",
        instructor: "Mufti Qaribur Rahma & Maulana Omar Multani",
        textbook: "The Noble Qur'an",
      },
      {
        title: "Tajweed Essentials 1",
        duration: "1 Hour",
        instructor: "Mufti Masihullah Bhaiyat",
        textbook: "Noorani Qaidah",
      },
    ],
    year2: [
      {
        title: "Advanced Seerah",
        duration: "1 Hour",
        instructor: "Maulana Omar Multani",
        textbook: "Seeratul Mustafa (Advanced Topics)",
      },
      {
        title: "Aqeedah 2",
        duration: "1 Hour",
        instructor: "Maulana Talha Lasania",
        textbook: "Advanced Aqeedah Studies",
      },
      {
        title: "Fiqh 2",
        duration: "2 Hours",
        instructor: "Shaykh Maulana Javid Bhaiyat",
        textbook: "Advanced Fiqh Texts",
      },
      {
        title: "Hadeeth 2",
        duration: "2 Hours",
        instructor: "Mufti Qaribur Rahman",
        textbook: "Sahih al-Bukhari",
      },
      {
        title: "Tafseer 2",
        duration: "2 Hours",
        instructor: "Mufti Qaribur Rahman",
        textbook: "Tafsir Ibn Kathir",
      },
      {
        title: "Tajweed Essentials 2",
        duration: "1 Hour",
        instructor: "Mufti Masihullah Bhaiyat",
        textbook: "Advanced Tajweed Rules",
      },
    ],
  };

  const currentCourses = activeYear === 1 ? courses.year1 : courses.year2;

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-zinc-100">
          Course Curriculum
        </h2>

        {/* Year Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveYear(1)}
            className={`flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeYear === 1
                ? "bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-lg"
                : "bg-zinc-900 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Year 1
          </button>
          <button
            onClick={() => setActiveYear(2)}
            className={`flex items-center justify-center px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
              activeYear === 2
                ? "bg-gradient-to-r from-teal-700 to-teal-800 text-white shadow-lg"
                : "bg-zinc-900 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Year 2
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min">
          {currentCourses.map((course, index) => (
            <div
              key={`${activeYear}-${index}`}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-xl shadow-black/70 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
              style={{
                animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`,
              }}
            >
              <div className="h-7 bg-teal-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-zinc-100">
                  {course.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-zinc-400 font-medium">
                    <div className="rounded-full mr-2 bg-teal-800 p-1.5">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-zinc-400 font-medium">
                    <div className="rounded-full mr-2 bg-teal-800 p-1.5">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center text-zinc-400 font-medium">
                    <div className="rounded-full mr-2 bg-teal-800 p-1.5">
                      <Book className="w-4 h-4 text-white" />
                    </div>
                    <span>{course.textbook}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Schedule Button */}
        <div className="mt-12 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 bg-gradient-to-r from-teal-700 to-teal-800 hover:shadow-lg hover:shadow-black/40"
            href="https://files.marylandinstitute.org/2025-2026%20-%20Alim%20%26%20Sanatain%20Programs%20Schedule.pdf"
          >
            <Calendar className="w-5 h-5 mr-2" />
            View Year {activeYear} Schedule
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

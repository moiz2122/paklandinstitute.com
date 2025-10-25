import React from "react";
import { useState } from "react";
import {
  GraduationCap,
  Users,
  Clock,
  Calendar,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

function Programs() {
  const [togglePrograms, settogglePrograms] = useState(true);
  const togglehandler = (val) => {
    if (val == "educational") {
      settogglePrograms(true);
    } else {
      settogglePrograms(false);
    }
  };

  return (
    <div>
      <div className="bg-zinc-950 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-100 mb-4 sm:mb-6">
              Our <span className="text-teal-500">Programs</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 leading-relaxed">
              Discover our range of educational and community programs designed
              to nurture knowledge, faith, and character in Muslims of all ages.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="mb-12 flex justify-center">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg shadow-black/50 inline-flex relative">
              <button
                onClick={() => {
                  togglehandler("educational");
                }}
                className={`flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-medium transition-all duration-300 relative z-10 ${
                  togglePrograms === true
                    ? "text-white bg-teal-700 rounded-2xl"
                    : "text-zinc-400"
                }`}
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Educational Programs
              </button>
              <button
                onClick={() => {
                  togglehandler("community");
                }}
                className={`flex items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base font-medium transition-all duration-300 relative z-10  ${
                  togglePrograms === false
                    ? "text-white bg-teal-700 rounded-2xl"
                    : "text-zinc-400"
                }`}
              >
                <Users className="mr-2 h-5 w-5" />
                Community Programs
              </button>
            </div>
          </div>

          {/* Program Cards Grid 1*/}
          {togglePrograms ? (
            <div className="max-w-sm sm:max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Quran Gateway */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="QURAN GATEWAY"
                    src="/Programs/QuranGateway.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">1 year</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sundays & Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    QURAN GATEWAY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A part-time program focused on basic Tajweed and the
                    memorization of the last two Juz of the Quran, for children
                    aged 6 and above.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Quran Academy */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="QURAN ACADEMY"
                    src="/Programs/QuranAcademy.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">3 years</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    QURAN ACADEMY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A full-time program focused on advanced Tajweed and the
                    memorization of the entire Quran, for children aged 6 and
                    above.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    href="/quran-academy"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Arabic Literacy */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="ARABIC LITERACY"
                    src="/Programs/ArabicLiteracy.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">3 months</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sundays & Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    ARABIC LITERACY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A concise 3-month program that encompasses the fundamentals
                    of Arabic. Classes are conducted on Sundays and weekday
                    evenings.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    href="/arabic-literacy"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Arabic Mastery */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="ARABIC MASTERY"
                    src="/Programs/ArabicMastery.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">2 years</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sundays & Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    ARABIC MASTERY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A thorough 2-year program delving into advanced classical
                    Arabic, with classes held on both Sundays and weekday
                    evenings.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    href="/arabic-mastery"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Islamic Essentials */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="ISLAMIC ESSENTIALS"
                    src="/Programs/IslamicEssentials.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">2 years</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sundays & Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    ISLAMIC ESSENTIALS
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A comprehensive 2-year program that explores the
                    fundamentals of Islam, with classes held on both Sundays and
                    weekday evenings.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    href="/islamic-essentials"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Islamic Theology */}
              <div className="bg-zinc-900  border-zinc-800 rounded-3xl shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="ISLAMIC THEOLOGY"
                    src="/Programs/IslamicTheology.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">8 years</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sundays & Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    ISLAMIC THEOLOGY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A traditional Alim curriculum equivalent to a Masters in
                    Islamic Theology, with classes held on both Sundays and
                    weekday evenings.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    href="/islamic-theology"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-sm sm:max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Quran Gateway */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="QURAN GATEWAY"
                    src="/Programs/community/FamilyTafseer.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">1 year</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sundays & Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    QURAN GATEWAY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A part-time program focused on basic Tajweed and the
                    memorization of the last two Juz of the Quran, for children
                    aged 6 and above.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
            
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Quran Academy */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="QURAN ACADEMY"
                    src="/Programs/community/WomensTafseer.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">3 years</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    QURAN ACADEMY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A full-time program focused on advanced Tajweed and the
                    memorization of the entire Quran, for children aged 6 and
                    above.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    href="/quran-academy"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Arabic Literacy */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-lg shadow-black/60 overflow-hidden flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    alt="ARABIC LITERACY"
                    src="/Programs/community/SpiritualDiscourses.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div className="flex items-center text-white">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">3 months</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Sundays & Weekdays</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3">
                    ARABIC LITERACY
                  </h3>
                  <p className="text-zinc-400 mb-4 flex-grow">
                    A concise 3-month program that encompasses the fundamentals
                    of Arabic. Classes are conducted on Sundays and weekday
                    evenings.
                  </p>
                  <a
                    className="group inline-flex items-center justify-center w-full rounded-xl bg-teal-800 px-6 py-3 text-base font-medium text-white"
                    href="/arabic-literacy"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* program card grid2 */}

          {/* Compare Programs Button */}
          {/* <div className="mt-16 sm:mt-20 text-center">
            <a
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-4 border-teal-600 dark:border-teal-500 text-base sm:text-lg font-medium rounded-2xl text-teal-600 dark:text-teal-500 transition-all duration-300 transform hover:shadow-xl"
              href="/compare-programs"
            >
              Compare All Programs
              <ChevronRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Programs;

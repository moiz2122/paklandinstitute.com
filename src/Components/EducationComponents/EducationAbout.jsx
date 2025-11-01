import { ArrowRight, Quote, Calendar, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
export default function EducationAbout() {
  return (
    <section className="bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-zinc-100">
          About the Program
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-lg shadow-black/70 overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <p className="text-lg mb-6 text-zinc-200 leading-relaxed">
                The Quran Gateway program is divided into two distinct
                categories: The Noorani Qaidah and Pre-Hifdh programs. The
                Noorani Qaidah program is designed for children who are absolute
                beginners and focuses on mastering the Noorani Qaidah. The
                curriculum places a strong emphasis on Tajweed principles and
                the practical application of Tajweed rules throughout the Qaidah
                study. Upon finishing the Qaidah, students undergo a
                comprehensive test, followed by a full recitation of the Quran
                until fluency is achieved. The Noorani Qaidah program is
                available for children aged 6-10.
              </p>
              <p className="text-lg mb-6 text-zinc-200 leading-relaxed">
                The Pre-Hifdh program serves as a prerequisite for the Quran
                Academy program and is designed for children who have already
                successfully completed the Noorani Qaidah. This program focuses
                on refining Tajweed skills, placing a particular emphasis on
                mastering the Makhraj (articulation of letters). Additionally,
                students engage in the memorization of the last 2 Juz of the
                Quran. A comprehensive final test is administered, and upon
                successful completion, students become eligible to enroll in the
                Quran Academy. The Pre-Hifdh program is accessible to children
                aged 6 and above.
              </p>
            </div>

            <div className="px-8 pb-8 pt-2">
              <Link to="registration">
                <button className="cursor-pointer relative w-full overflow-hidden group border-2 border-teal-600 text-teal-600 font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                  <span className="relative z-10 flex items-center justify-center text-lg">
                    Enroll Now
                    <span className="ml-2 flex items-center">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gradient-to-br from-teal-700 to-teal-800 rounded-3xl shadow-lg shadow-black/40 overflow-hidden text-white border border-teal-700">
            <div className="p-7">
              <Quote className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 mb-5 mx-auto opacity-75" />
              <p className="font-arabic text-xl 2xl:text-2xl mb-5 text-center leading-loose">
                وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيْلًا
              </p>
              <p className="text-lg 2xl:text-xl font-medium leading-relaxed mb-5 text-center italic">
                "And recite the Quran clearly in a distinct and measured tone"
              </p>
              <cite className="block text-base 2xl:text-lg font-semibold text-center text-teal-100">
                Surah 73, Verse 4
              </cite>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl p-10 min-h-[200px] text-center">
            <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-teal-800">
              <Calendar className="w-9 h-9 text-teal-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-teal-400">Duration</h3>
            <p className="text-lg text-zinc-300 font-medium">1 Year</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl p-10 min-h-[200px] text-center">
            <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-teal-800">
              <MapPin className="w-9 h-9 text-teal-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-teal-400">
              Instruction
            </h3>
            <p className="text-lg text-zinc-300 font-medium">In-Person</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl p-10 min-h-[200px] text-center">
            <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-teal-800">
              <DollarSign className="w-9 h-9 text-teal-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-teal-400">Tuition</h3>
            <p className="text-lg text-zinc-300 font-medium">
              $2,400 USD / Year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

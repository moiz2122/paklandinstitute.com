import { BookText, BookCheck, Sun, Moon, Info } from "lucide-react";

export default function ClassSchedule() {
  return (
    <div className="bg-zinc-900 border-t border-zinc-900 py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 lg:mb-16 text-zinc-100">
          Class Schedule
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Noorani Qaida - Morning */}
          <div className="h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-teal-500">
                  Noorani Qaida
                </h3>
                <span className="text-sm lg:text-base font-medium text-teal-300 bg-teal-900 px-3 py-1 rounded-full">
                  Morning
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:gap-6 flex-grow">
                <div className="bg-zinc-900 rounded-2xl shadow-md p-4 lg:p-6 border-l-8 border-teal-700 ring-1 ring-zinc-800 transform transition-all duration-300 hover:shadow-lg hover:scale-102 flex items-center justify-between min-h-[100px]">
                  <div className="flex items-center">
                    <div className="text-teal-500 mr-4 lg:mr-6">
                      <BookText className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    <div>
                      <p className="text-zinc-100 font-semibold text-lg lg:text-xl">
                        8:00 AM - 9:30 AM
                      </p>
                      <p className="text-zinc-400 text-sm lg:text-base">
                        Tuesday, Wednesday, Thursday, Sunday
                      </p>
                    </div>
                  </div>
                  <Sun className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-500 flex-shrink-0 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Noorani Qaida - Evening */}
          <div className="h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-teal-500">
                  Noorani Qaida
                </h3>
                <span className="text-sm lg:text-base font-medium text-teal-300 bg-teal-900 px-3 py-1 rounded-full">
                  Evening
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:gap-6 flex-grow">
                <div className="bg-zinc-900 rounded-2xl shadow-md p-4 lg:p-6 border-l-8 border-teal-700 ring-1 ring-zinc-800 transform transition-all duration-300 hover:shadow-lg hover:scale-102 flex items-center justify-between min-h-[100px]">
                  <div className="flex items-center">
                    <div className="text-teal-500 mr-4 lg:mr-6">
                      <BookText className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    <div>
                      <p className="text-zinc-100 font-semibold text-lg lg:text-xl">
                        4:30 PM - 6:00 PM
                      </p>
                      <p className="text-zinc-400 text-sm lg:text-base">
                        Tuesday, Wednesday, Thursday
                      </p>
                    </div>
                  </div>
                  <Moon className="w-5 h-5 lg:w-6 lg:h-6 text-violet-600 flex-shrink-0 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Pre-Hifdh */}
          <div className="h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-teal-500">
                  Pre-Hifdh
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:gap-6 flex-grow">
                <div className="bg-zinc-900 rounded-2xl shadow-md p-4 lg:p-6 border-l-8 border-teal-700 ring-1 ring-zinc-800 transform transition-all duration-300 hover:shadow-lg hover:scale-102 flex items-center justify-between min-h-[100px]">
                  <div className="flex items-center">
                    <div className="text-teal-500 mr-4 lg:mr-6">
                      <BookCheck className="w-6 h-6 lg:w-8 lg:h-8" />
                    </div>
                    <div>
                      <p className="text-zinc-100 font-semibold text-lg lg:text-xl">
                        8:00 AM - 1:00 PM
                      </p>
                      <p className="text-zinc-400 text-sm lg:text-base">
                        Monday, Tuesday, Wednesday, Thursday, Friday
                      </p>
                    </div>
                  </div>
                  <Sun className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-500 flex-shrink-0 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-12 lg:mt-16 bg-zinc-900 rounded-2xl shadow-md p-6 lg:p-8 border-l-8 border-teal-700 ring-1 ring-zinc-800">
          <div className="flex items-center">
            <Info className="w-6 h-6 lg:w-8 lg:h-8 text-teal-500 mr-3 lg:mr-4 flex-shrink-0 mt-1" />
            <p className="text-zinc-300 text-sm md:text-base lg:text-lg">
              <span className="font-semibold">Important Note:</span> Those who
              cannot commit to the full-time Pre-Hifdh schedule may opt for
              either the Noorani Qaaidah morning or evening schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

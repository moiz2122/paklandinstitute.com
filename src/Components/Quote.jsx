import React from "react";

function Quote() {
  return (
    <section className="relative bg-zinc-950/95 py-24 md:py-32 lg:py-40 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 relative">
          <blockquote className="relative">
            <div>
              <p className="font-arabic text-center sm:text-left text-4xl md:text-5xl lg:text-6xl leading-loose mb-10 text-teal-400">
                ظِلُّ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ صَدَقَتُهُ
              </p>
              <p className="text-2xl text-center sm:text-left md:text-3xl lg:text-4xl font-light leading-relaxed mb-12 text-zinc-300">
                "The believer's shade on the Day of Resurrection will be his
                charity"
              </p>
            </div>
          </blockquote>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <cite className="block text-xl md:text-2xl font-semibold text-teal-500 mb-8 md:mb-0">
            Prophet Muhammad
            <span className="inline-block ml-2 not-italic font-arabic">ﷺ</span>
          </cite>

          <div>
            <a
              className="inline-block border-4 border-teal-600 text-zinc-200 font-bold text-lg md:text-xl px-10 py-4 rounded-full transition-all duration-300 hover:bg-teal-600 hover:shadow-lg"
              href="/donation"
            >
              GIVE TODAY
            </a>
          </div>
        </div>
      </div>

      {/* Background blur effects */}
      <div className="hidden md:block absolute top-1/2 left-0 w-64 h-64 bg-teal-500 opacity-10 rounded-full blur-3xl transform -translate-y-1/2" />
      <div className="hidden md:block absolute top-1/2 right-0 w-64 h-64 bg-teal-500 opacity-10 rounded-full blur-3xl transform -translate-y-1/2" />
    </section>
  );
}

export default Quote;

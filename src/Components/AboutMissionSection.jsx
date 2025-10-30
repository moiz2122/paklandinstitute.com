import { Quote } from "lucide-react";

export default function AboutMissionSection() {
  return (
    <section className="py-20 lg:py-28 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-100 mb-16 sm:mb-20 lg:mb-24 text-center">
          Our Mission
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            <p className="text-xl text-zinc-300 leading-normal mb-12">
              Our goal is to create a community centered around education and
              spiritual development. Our educational classes offer a wide range
              of subject material for various age groups. Our services aim to
              provide a support structure for the community at large, offering
              marriage, family, religious, and mental health counseling, as well
              as charity work.
            </p>
            <p className="text-xl text-zinc-300 leading-normal mb-12">
              Inspired by the Quranic verse, we strive to empower individuals to
              take active steps towards their own intellectual, spiritual, and
              social development. We believe that by fostering knowledge,
              spiritual growth, and community support, we can help individuals
              and the community as a whole to achieve positive and meaningful
              change.
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-zinc-900 rounded-3xl p-14 shadow-black/40 shadow-md border border-zinc-800">
              <Quote className="w-8 h-8 lg:w-10 lg:h-10 mb-6 mx-auto text-teal-500" />
              <p
                className="font-arabic text-2xl lg:text-3xl mb-6 text-center text-zinc-100"
                style={{ lineHeight: 2 }}
              >
                إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوْا۟
                مَا بِأَنْفُسِهِمْ
              </p>
              <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-6 text-center italic text-zinc-200">
                "Surely, Allah does not change the condition of a people unless
                they change themselves"
              </p>
              <cite className="block text-lg lg:text-xl font-semibold text-center text-teal-400">
                Surah 13, Verse 11
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

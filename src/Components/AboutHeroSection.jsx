import { CircleCheck } from "lucide-react";

export default function AboutHeroSection() {
  const programs = [
    "Traditional Islamic Studies Curriculum",
    "Full-Time Quran Hifdhs",
    "Weekly Tafseer Sessions",
    "Weekly Sessions on Spiritual Diseases of the Heart",
  ];

  return (
    <section className="py-28 md:py-40 md:pb-20 bg-zinc-950">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-100 mb-12 sm:mb-16 lg:mb-20 text-center">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          <div>
            <div className="mb-12">
              <p className="text-xl text-zinc-300 leading-relaxed">
                The{" "}
                <span className="text-teal-500 font-medium">
                  Maryland Institute of Development
                </span>{" "}
                is a non-profit organization dedicated to advancing traditional
                Islamic education and providing essential services to the
                community.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-zinc-200 mb-6 font-medium">
                Our Programs Offer:
              </h3>
              <div className="space-y-5">
                {programs.map((program, index) => (
                  <div key={index} className="flex items-center group">
                    <CircleCheck className="w-6 h-6 text-teal-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-zinc-300 leading-relaxed">
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              alt="Maryland Institute of Development Logo"
              loading="lazy"
              width="400"
              height="400"
              className="rounded-3xl"
              src="/home/paklandinstitute_logo.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

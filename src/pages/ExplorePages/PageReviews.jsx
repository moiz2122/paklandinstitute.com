import { useState } from "react";
import {
  Search,
  GraduationCap,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

export default function PageReviews() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("All Programs");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedReviews, setExpandedReviews] = useState({});

  const reviewsPerPage = 6;

  const programs = [
    "All Programs",
    "Arabic Literacy",
    "Arabic Mastery",
    "Islamic Essentials",
    "Islamic Theology",
    "Quran Gateway",
    "Quran Academy",
  ];

  const allReviews = [
    {
      program: "Islamic Theology",
      rating: 5,
      text: "It is a blessing to be taught by faculty who have themselves lived in the United States, but received their permission to teach from the great scholars of the Ummah over the last half of a century. This brings accuracy in information and light in transmission, and it is felt by the students. With regular attempts to keep student-teacher in person through majaalis and events, the institute thrives on using modern tools while retaining traditional etiquettes. It also succeeds in conserving Islamic values, while ensuring students feel liberated to express their religion with confidence within themselves, their families, and their communities.",
      author: "Ali Ahmed",
      status: "Former Student",
      date: "12/14/23",
      initial: "A",
    },
    {
      program: "Islamic Theology",
      rating: 5,
      text: "Everything is really good mA.",
      author: "Mohamed Faizhan Tanvir",
      status: "Registered Student",
      date: "12/24/23",
      initial: "M",
    },
    {
      program: "Islamic Theology",
      rating: 5,
      text: "Great experience 👍",
      author: "Anonymous",
      status: "Registered Student",
      date: "12/24/23",
      initial: "A",
    },
    {
      program: "Arabic Mastery",
      rating: 5,
      text: "Thanks to Allah, I was able to achieve my dream of receiving admission to Alim Program. I initially chose Madinah and then Egypt because I was afraid that good teachers/Shaykhs would not be available elsewhere. However, after meeting respected Maulana Javid Sahib, I was completely satisfied and achieved what I needed, so I decided to take admission into MID. We are proud to have such exemplary individuals among us here in the USA Alhamdulillah. Since this is my first year, I have found all of my respected teachers to be very professional, respectful, and friendly.",
      author: "Anonymous",
      status: "Registered Student",
      date: "12/24/23",
      initial: "A",
    },
    {
      program: "Quran Gateway",
      rating: 5,
      text: "Excellent program for learning Quran with proper tajweed. The instructors are very patient and knowledgeable.",
      author: "Sarah Khan",
      status: "Registered Student",
      date: "01/15/24",
      initial: "S",
    },
    {
      program: "Arabic Literacy",
      rating: 5,
      text: "Great foundation course for anyone wanting to learn Arabic. The teaching methodology is very effective.",
      author: "Ahmad Hassan",
      status: "Former Student",
      date: "02/20/24",
      initial: "A",
    },
    {
      program: "Islamic Essentials",
      rating: 5,
      text: "Perfect for beginners. Covers all the essential topics every Muslim should know.",
      author: "Fatima Ali",
      status: "Registered Student",
      date: "03/10/24",
      initial: "F",
    },
    {
      program: "Quran Academy",
      rating: 5,
      text: "Advanced Quran studies with deep insights. Highly recommended for serious students.",
      author: "Ibrahim Yusuf",
      status: "Registered Student",
      date: "04/05/24",
      initial: "I",
    },
  ];

  // Filter reviews based on search query and selected program
  const filteredReviews = allReviews.filter((review) => {
    const matchesSearch =
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.program.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesProgram =
      selectedProgram === "All Programs" || review.program === selectedProgram;

    return matchesSearch && matchesProgram;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleProgramChange = (program) => {
    setSelectedProgram(program);
    setIsDropdownOpen(false);
    setCurrentPage(1);
  };

  const toggleReadMore = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="pt-40 pb-32 px-4 min-h-screen border-b border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-zinc-100">
            Student <span className="text-teal-500">Reviews</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover how our courses have transformed the lives and knowledge of
            our students, fostering growth and understanding.
          </p>
        </div>

        <div className="mb-12 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-zinc-500" />
              </div>
              <input
                placeholder="Search reviews..."
                className="w-full pr-12 pl-12 py-3.5 text-zinc-100 bg-zinc-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 placeholder:text-zinc-500"
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
          </div>

          <div className="relative w-full sm:w-60">
            <div className="relative">
              <div
                className="w-full pr-10 pl-12 py-3.5 text-base text-zinc-100 bg-zinc-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedProgram}
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <GraduationCap className="h-5 w-5 text-zinc-500" />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <ChevronDown
                  className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute z-50 w-full bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden bottom-full mb-1">
                  <div className="p-2 max-h-72 overflow-auto">
                    {programs.map((program) => (
                      <div
                        key={program}
                        className={`px-4 py-2 rounded-lg my-1 cursor-pointer transition-colors duration-200 ${
                          selectedProgram === program
                            ? "bg-teal-800 text-white"
                            : "hover:bg-zinc-800 text-zinc-100"
                        }`}
                        onClick={() => handleProgramChange(program)}
                      >
                        {program}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {currentReviews.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-zinc-400">
              No reviews found matching your criteria.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {currentReviews.map((review, index) => {
                const globalIndex = startIndex + index;
                const isExpanded = expandedReviews[globalIndex];
                const shouldShowReadMore = review.text.length > 200;

                return (
                  <div
                    key={globalIndex}
                    className="bg-zinc-900 max-w-lg w-full mx-auto rounded-3xl shadow-lg shadow-black/40 border border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-[300px]"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-teal-900 bg-opacity-60 text-teal-200 text-xs font-semibold rounded-full uppercase">
                          {review.program}
                        </span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-teal-600 fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex-grow overflow-hidden h-[150px]">
                        <div className="relative mb-4">
                          <p
                            className={`text-zinc-400 italic relative z-10 ${
                              !isExpanded && "line-clamp-4"
                            }`}
                          >
                            <Quote className="w-2 h-2 text-teal-500 inline mr-1 mb-3 scale-x-[-1]" />
                            {review.text}
                            <Quote className="w-2 h-2 text-teal-500 inline ml-1 mb-3" />
                          </p>
                          {!isExpanded && shouldShowReadMore && (
                            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                          )}
                        </div>
                      </div>

                      {shouldShowReadMore && (
                        <button
                          className="text-teal-500 text-sm hover:text-teal-400 font-medium mt-2 focus:outline-none"
                          onClick={() => toggleReadMore(globalIndex)}
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </button>
                      )}

                      <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center text-white font-bold text-lg">
                            {review.initial}
                          </div>
                          <div className="ml-3">
                            <h3 className="font-semibold text-zinc-100">
                              {review.author}
                            </h3>
                            <p className="text-xs text-teal-500 font-medium">
                              {review.status}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-zinc-400">{review.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <ChevronLeft className="h-6 w-6 text-zinc-400" />
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  return (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out ${
                        currentPage === page
                          ? "bg-teal-700 text-white"
                          : "bg-zinc-900 text-teal-500 hover:bg-zinc-800 border-2 border-zinc-700"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-zinc-900 border-2 border-zinc-700 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <ChevronRight className="h-6 w-6 text-zinc-400" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

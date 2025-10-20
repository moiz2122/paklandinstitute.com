import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function EduationFaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the location for this program?",
      answer: "Program location details go here.",
    },
    {
      question: "Can adults join this program?",
      answer: "Adult enrollment information goes here.",
    },
    {
      question: "Are there any prerequisites?",
      answer: "Prerequisites information goes here.",
    },
    {
      question: "How are the students tested?",
      answer: "Testing process details go here.",
    },
    {
      question: "Is there an online option?",
      answer: "Online option information goes here.",
    },
    {
      question: "Does MID offer financial aid?",
      answer: "Financial aid information goes here.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center text-zinc-100">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button
                className="w-full text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 rounded-2xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center mr-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-zinc-200" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-200">
                    {faq.question}
                  </h3>
                </div>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="mt-2 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl ml-12"
                >
                  <p className="text-zinc-300 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

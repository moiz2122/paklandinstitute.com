import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  User,
  Send,
} from "lucide-react";

export default function Contact() {
  const [selectedSubject, setSelectedSubject] = useState("Other");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = ["Programs", "Services", "Donations", "Other"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset fields
    setFormData({ name: "", email: "", message: "" });
    setSelectedSubject("Other");
    setIsSubmitting(false);

    alert("Message sent successfully!");
  };

  return (
    <main className="flex-grow bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950 px-4 pt-24 pb-16 md:px-8 lg:px-16 lg:py-24 lg:pt-36">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-18 items-center">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Get in Touch
              </h1>
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                We're here to help
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:admin@marylandinstitute.org"
                className="flex items-center gap-4 text-white/90 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6 text-teal-400" />
                <span className="text-lg">admin@marylandinstitute.org</span>
              </a>

              <div className="flex items-center gap-4 text-white/90">
                <Phone className="w-6 h-6 text-teal-400" />
                <span className="text-lg">+1 (301) 358-8433</span>
              </div>

              <div className="flex items-center gap-4 text-white/90">
                <MapPin className="w-6 h-6 text-teal-400" />
                <span className="text-lg">
                  To Be Determined, Laurel, MD 20707
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white/90 p-3 rounded-full hover:text-white hover:bg-teal-600/30 transition duration-300"
                href="https://www.facebook.com/marylandinstitute/"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white/90 p-3 rounded-full hover:text-white hover:bg-teal-600/30 transition duration-300"
                href="https://www.instagram.com/marylandinstitute/"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white/90 p-3 rounded-full hover:text-white hover:bg-teal-600/30 transition duration-300"
                href="https://www.youtube.com/@midonline"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-zinc-900 rounded-3xl p-7 md:p-10 shadow-2xl shadow-black/40 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-600 to-teal-800"></div>

              <div className="mb-8">
                <label className="block text-base font-semibold text-zinc-300 mb-3">
                  Subject
                </label>
                <div className="flex flex-wrap gap-3">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      className={`px-6 py-2 rounded-full transition duration-300 ${
                        selectedSubject === subject
                          ? "bg-teal-700 text-white"
                          : "bg-zinc-800 text-zinc-400 hover:bg-teal-900 hover:text-teal-400"
                      }`}
                      onClick={() => setSelectedSubject(subject)}
                      type="button"
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="relative">
                    <label className="block text-base font-medium text-zinc-300 mb-1.5">
                      Name<span className="text-teal-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-zinc-500" />
                      </div>
                      <input
                        placeholder="Your full name"
                        className="w-full pr-12 pl-12 py-3.5 text-zinc-100 bg-zinc-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 placeholder:text-zinc-500"
                        required
                        type="text"
                        value={formData.name}
                        name="name"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <label className="block text-base font-medium text-zinc-300 mb-1.5">
                      Email<span className="text-teal-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-zinc-500" />
                      </div>
                      <input
                        placeholder="Enter your email address"
                        className="w-full pr-12 pl-12 py-3.5 text-zinc-100 bg-zinc-800/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 placeholder:text-zinc-500"
                        required
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-zinc-300 mb-2"
                  >
                    Message<span className="text-teal-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3.5 text-zinc-100 bg-zinc-800/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200 placeholder:text-zinc-500 resize-none"
                    placeholder="Your message..."
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-teal-700 font-medium text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const Footer = () => {
  return (
    <footer className="bg-zinc-950/95 text-zinc-300">
      <div className="max-w-7xl mx-auto px-7 sm:px-8 lg:px-10 2xl:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Education Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-5 pb-2 border-b-2 border-teal-700 inline-block">
                Education
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/quran-gateway"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Quran Gateway
                  </a>
                </li>
                <li>
                  <a
                    href="/quran-academy"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Quran Academy
                  </a>
                </li>
                <li>
                  <a
                    href="/arabic-literacy"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Arabic Literacy
                  </a>
                </li>
                <li>
                  <a
                    href="/arabic-mastery"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Arabic Mastery
                  </a>
                </li>
                <li>
                  <a
                    href="/islamic-essentials"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Islamic Essentials
                  </a>
                </li>
                <li>
                  <a
                    href="/islamic-theology"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Islamic Theology
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Community & Services Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-5 pb-2 border-b-2 border-teal-700 inline-block">
                Community
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/family-tafseer"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Family Tafseer
                  </a>
                </li>
                <li>
                  <a
                    href="/spiritual-discourses"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Spiritual Discourses
                  </a>
                </li>
                <li>
                  <a
                    href="/womens-tafseer"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Women's Tafseer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-5 pb-2 border-b-2 border-teal-700 inline-block">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/counseling-center"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Counseling Center
                  </a>
                </li>
                <li>
                  <a
                    href="/zakat-aid"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Zakat Aid
                  </a>
                </li>
                <li>
                  <a
                    href="/hajj-2025"
                    className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                  >
                    Hajj 2025
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-5 pb-2 border-b-2 border-teal-700 inline-block">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/faculty"
                  className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="group leading-none inline-flex items-center transition-colors duration-300 hover:text-teal-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-teal-700 inline-block">
                Stay Connected
              </h3>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-zinc-900 text-white border-2 border-zinc-800 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent transition duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-700 hover:bg-teal-600 text-white p-2 rounded-xl transition duration-300 ease-in-out"
                    aria-label="Subscribe"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </form>
              <p className="mt-2 text-zinc-400 text-sm">
                Subscribe for updates and insights
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-teal-700 inline-block">
                Contact Us
              </h3>
              <a
                href="mailto:admin@marylandinstitute.org"
                className="flex items-center mb-3 group transition-colors duration-300 hover:text-teal-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-teal-700 flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>admin@marylandinstitute.org</span>
              </a>
              <p className="flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-teal-700 flex-shrink-0"
                >
                  <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                  <path d="M15 5.764v15"></path>
                  <path d="M9 3.236v15"></path>
                </svg>
                <span>Address: To Be Determined</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-wrap items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/marylandinstitute/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-teal-700 transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/marylandinstitute/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-teal-700 transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@midonline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-teal-700 transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
          <div className="text-sm text-zinc-400 font-medium">
            <p>
              © 2025 Maryland Institute of Development. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { ChevronDown, Menu, LogIn } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Add a small delay to prevent dropdown from closing when moving cursor to dropdown menu
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 30);
    setHoverTimeout(timeout);
  };

  const educationLinks = [
    { href: "/qurangateway", text: "Quran Gateway" },
    { href: "/quranacademy", text: "Quran Academy" },
    { href: "/islamicessentials", text: "Islamic Essentials" },
    { href: "/arabicmastery", text: "Arabic Mastery" },
    { href: "/islamicessentials", text: "Arabic Literacy" },
    { href: "/islamictheology", text: "Islamic Theology" },
  ];

  const communityLinks = [
    { href: "/family-tafseer", text: "Family Tafseer" },
    { href: "/spiritual-discourses", text: "Spiritual Discourses" },
    { href: "/womens-tafseer", text: "Womens Tafseer" },
  ];

  const serviceLinks = [
    { href: "/counseling-center", text: "Counseling Center" },
    { href: "/zakat-aid", text: "Zakat Aid" },
    { href: "/hajj-2025", text: "Hajj 2025" },
  ];

  const exploreLinks = [
    { href: "/about", text: "About" },
    { href: "/faculty", text: "Faculty" },
    { href: "/reviews", text: "Reviews" },
    { href: "/contact", text: "Contact" },
  ];

  const DropdownMenu = ({ title, links, isOpen, dropdownKey }) => (
    <div
      className="relative group"
      onMouseEnter={() => handleMouseEnter(dropdownKey)}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center rounded-xl space-x-1 py-2 px-3 transition duration-300 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="relative overflow-hidden font-bold text-sm">
          {title}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </span>

        {/* Chevron rotation fixed */}
        <ChevronDown
          className={`h-4 w-4 text-teal-500 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "group-hover:rotate-180"
          }`}
        />
      </button>

      {/* Dropdown transition fix */}
      <div
        className={`absolute left-0 mt-2 w-56 bg-zinc-900 rounded-2xl shadow-lg p-2 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            className="flex items-center px-4 py-2 text-sm text-white hover:bg-teal-600 rounded-xl transition duration-300"
            href={link.href}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );

  const MobileDropdown = ({ title, links, isOpen, onToggle }) => (
    <div className="border-b border-zinc-700 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-3 px-4 transition duration-300"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`bg-zinc-900 rounded-2xl mb-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-3 rounded-xl mt-1 space-y-1 mb-2">
          {links.map((link, index) => (
            <a
              key={index}
              className="flex items-center py-2 px-8 hover:bg-teal-600 rounded-xl transition duration-300"
              href={link.href}
            >
              <span>{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-950 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a className="flex items-center space-x-2 group" href="/">
            <img src="/home/paklandinstitute_logo.svg" width="48" height="48" />
            <div className="hidden xl:block">
              <span className="text-lg font-bold bg-clip-text leading-tight">
                Quran Academy
              </span>
              <span className="block text-sm text-zinc-300 leading-tight font-medium">
                & Islamic Studies
              </span>
            </div>
            <span className="text-xl font-bold xl:hidden bg-clip-text">
              MID
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <DropdownMenu
              title="Education"
              links={educationLinks}
              isOpen={activeDropdown === "education"}
              dropdownKey="education"
            />
            <DropdownMenu
              title="Community"
              links={communityLinks}
              isOpen={activeDropdown === "community"}
              dropdownKey="community"
            />
            <DropdownMenu
              title="Services"
              links={serviceLinks}
              isOpen={activeDropdown === "services"}
              dropdownKey="services"
            />
            <DropdownMenu
              title="Explore"
              links={exploreLinks}
              isOpen={activeDropdown === "explore"}
              dropdownKey="explore"
            />
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              className="bg-teal-600 text-sm text-white px-6 py-2 rounded-xl font-bold hover:bg-teal-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              href="/donation"
            >
              DONATE
            </a>
            <button className="group flex items-center bg-white text-teal-700 text-sm px-6 py-2 rounded-xl transition duration-300 font-bold transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl">
              LOGIN
              <LogIn className="inline-block h-4 w-4 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 rounded-full p-2 transition duration-300 hover:bg-zinc-900"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-zinc-950 text-white overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-4">
          <MobileDropdown
            title="Education"
            links={educationLinks}
            isOpen={activeDropdown === "mobile-education"}
            onToggle={() => toggleDropdown("mobile-education")}
          />
          <MobileDropdown
            title="Community"
            links={communityLinks}
            isOpen={activeDropdown === "mobile-community"}
            onToggle={() => toggleDropdown("mobile-community")}
          />
          <MobileDropdown
            title="Services"
            links={serviceLinks}
            isOpen={activeDropdown === "mobile-services"}
            onToggle={() => toggleDropdown("mobile-services")}
          />
          <MobileDropdown
            title="Explore"
            links={exploreLinks}
            isOpen={activeDropdown === "mobile-explore"}
            onToggle={() => toggleDropdown("mobile-explore")}
          />
        </div>
        <div className="p-4 space-y-4">
          <a
            className="block w-full text-center text-sm bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-4 rounded-2xl hover:from-teal-600 hover:to-teal-700 transition duration-300 font-bold transform focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            href="/donation"
          >
            DONATE
          </a>
          <button className="flex items-center justify-center w-full bg-white text-teal-700 text-sm px-6 py-4 rounded-2xl transition duration-300 font-bold transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl hover:bg-zinc-100">
            LOGIN
            <LogIn className="inline-block h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Home, Search } from "lucide-react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-teal-500 select-none">404</h1>
        </div>

        {/* Message */}
        <div className="bg-teal-600/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-teal-500/30 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-zinc-100 text-lg mb-6">
            The page you're looking for seems to have wandered off the path.
            Let's get you back to your Quran learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 bg-zinc-950/50 hover:bg-zinc-950/70 text-zinc-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 border border-teal-500/30"
            >
              <Search className="w-5 h-5" />
              Browse Courses
            </Link>
          </div>
        </div>

        {/* Decorative Quote */}
        <div className="text-teal-500 text-sm italic">
          "And whoever fears Allah - He will make for him a way out." - Quran
          65:2
        </div>
      </div>
    </div>
  );
}

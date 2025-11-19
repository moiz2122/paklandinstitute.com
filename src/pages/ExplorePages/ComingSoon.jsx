import { Clock, BookOpen, Bell } from "lucide-react";

function ComingSoon({ programName }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-teal-950 to-zinc-950 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center space-y-8">
          {/* Animated Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-teal-800 to-teal-900 p-8 rounded-full">
                <Clock className="w-20 h-20 text-teal-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-100">
              Coming Soon
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              {programName}
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-zinc-300 leading-relaxed">
              We're working hard to bring you this exciting new program. Our
              team is preparing comprehensive curriculum and selecting expert
              instructors to ensure the highest quality education.
            </p>
            <p className="text-lg text-zinc-400">
              Stay tuned for updates on the launch date and program details.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-teal-700 transition-all duration-300">
              <div className="bg-teal-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Expert Faculty
              </h3>
              <p className="text-sm text-zinc-400">
                Qualified instructors with years of experience
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-teal-700 transition-all duration-300">
              <div className="bg-teal-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Get Notified
              </h3>
              <p className="text-sm text-zinc-400">
                Be the first to know when enrollment opens
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-teal-700 transition-all duration-300">
              <div className="bg-teal-900/50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                Flexible Schedule
              </h3>
              <p className="text-sm text-zinc-400">
                Weekend and evening classes available
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-teal-900/50 to-teal-950/50 border border-teal-800/50 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4">
              Stay Updated
            </h2>
            <p className="text-zinc-300 mb-6">
              Want to be notified when this program launches? Contact us to
              express your interest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-teal-700 hover:bg-teal-600 active:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-700 text-zinc-100 font-semibold rounded-xl border border-zinc-700 transition-all duration-300"
              >
                Back to Home
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <p className="text-sm text-zinc-500">
              In the meantime, explore our other available programs or reach out
              to us with any questions.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComingSoon;

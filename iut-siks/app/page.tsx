import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-16">
      <main className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to IUT-SIKS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Society of Islamic Knowledge Seekers at Islamic University of
            Technology
          </p>
        </div>

        {/* Navigation Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link
            href="/events"
            className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-center">
              <span className="text-4xl mb-3 block">📅</span>
              <span className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                View Events
              </span>
            </div>
          </Link>

          <Link
            href="/blogs"
            className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-center">
              <span className="text-4xl mb-3 block">📝</span>
              <span className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Read Blogs
              </span>
            </div>
          </Link>

          <Link
            href="/prayer-times"
            className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-center">
              <span className="text-4xl mb-3 block">🕌</span>
              <span className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Prayer Times
              </span>
            </div>
          </Link>

          <Link
            href="/daily-reminders"
            className="flex items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="text-center">
              <span className="text-4xl mb-3 block">🕋</span>
              <span className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Daily Reminders
              </span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

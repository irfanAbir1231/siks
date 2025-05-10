import Link from "next/link";

interface AdminCard {
  id: number;
  title: string;
  icon: string;
  description: string;
  link: string;
  stats: string;
}

const adminCards: AdminCard[] = [
  {
    id: 1,
    title: "Manage Events",
    icon: "📅",
    description: "Add, edit, or remove upcoming events and activities",
    link: "/events",
    stats: "12 upcoming events",
  },
  {
    id: 2,
    title: "Set Prayer Times",
    icon: "🕋",
    description: "Update daily prayer times and Jummah timings",
    link: "/prayer-times",
    stats: "Last updated 2 days ago",
  },
  {
    id: 3,
    title: "Moderate Blogs",
    icon: "📝",
    description: "Review and publish submitted blog posts",
    link: "/blogs",
    stats: "3 posts pending review",
  },
  {
    id: 4,
    title: "Edit Daily Reminders",
    icon: "🔔",
    description: "Update Islamic reminders and quotes",
    link: "/reminders",
    stats: "8 active reminders",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Admin Panel
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Manage and moderate IUT-SIKS content
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Members", value: "250+" },
            { label: "Active Events", value: "12" },
            { label: "Blog Posts", value: "45" },
            { label: "Daily Views", value: "500+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Management Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminCards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{card.icon}</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {card.description}
                </p>

                <div className="text-sm text-gray-500 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
                  {card.stats}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-3">
            {[
              "New blog post submitted for review - 2 hours ago",
              "Prayer times updated for this week - 1 day ago",
              "New event created: Islamic History Seminar - 2 days ago",
              "5 new comments pending moderation - 3 days ago",
            ].map((activity, index) => (
              <div
                key={index}
                className="text-sm text-gray-600 dark:text-gray-400 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

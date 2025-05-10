import Link from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Islamic History Seminar",
    date: "May 15, 2025",
    description:
      "Join us for an enlightening seminar on the golden age of Islamic civilization and its contributions to modern science and philosophy.",
  },
  {
    id: 2,
    title: "Ramadan Preparation Workshop",
    date: "June 1, 2025",
    description:
      "Learn about the spiritual and practical aspects of preparing for Ramadan, including tips for maintaining productivity during fasting.",
  },
  {
    id: 3,
    title: "Quranic Studies Circle",
    date: "June 10, 2025",
    description:
      "Weekly study circle focusing on understanding and implementing Quranic teachings in our daily lives. Open to all students.",
  },
  {
    id: 4,
    title: "Islamic Finance Workshop",
    date: "June 20, 2025",
    description:
      "Understanding Islamic banking principles and halal investment opportunities for young professionals.",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h2>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {event.date}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {event.description}
                </p>

                <Link
                  href="/register"
                  className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

interface Reminder {
  id: number;
  icon: string;
  title: string;
  description?: string;
}

const reminders: Reminder[] = [
  {
    id: 1,
    icon: "📖",
    title: "Read Surah Mulk before sleeping",
    description:
      "The Prophet ﷺ used to recite Al-Mulk before sleeping. It protects from the torment of the grave.",
  },
  {
    id: 2,
    icon: "🕌",
    title: "Pray all Salat in congregation",
    description:
      "Prayer in congregation is 27 times more rewarding than praying alone.",
  },
  {
    id: 3,
    icon: "📘",
    title: "Read Surah Kahf on Friday",
    description:
      "Reading Surah Al-Kahf on Friday will illuminate you with light between the two Fridays.",
  },
  {
    id: 4,
    icon: "🤲",
    title: "Make morning and evening adhkar",
    description:
      "The morning and evening adhkar are a protection for you throughout the day and night.",
  },
];

export default function RemindersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-0 w-full">
      <div className="w-full px-2 sm:px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-fade-in-up">
          Daily Islamic Reminders
        </h1>

        <div className="space-y-5 sm:space-y-6">
          {reminders.map((reminder, i) => (
            <div
              key={reminder.id}
              className="bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-xl border-l-4 border-green-500 dark:border-green-400 hover:scale-105 hover:shadow-2xl transition-all overflow-hidden backdrop-blur-lg animate-fade-in-up w-full px-2 sm:px-0"
              style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
            >
              <div className="p-4 sm:p-6 flex items-start space-x-3 sm:space-x-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0">
                  {reminder.icon}
                </span>
                <div>
                  <h2 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {reminder.title}
                  </h2>
                  {reminder.description && (
                    <p className="text-xs sm:text-base text-gray-600 dark:text-gray-300">
                      {reminder.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 animate-fade-in">
          <p>
            Remember: Small consistent actions are better than big inconsistent
            ones
          </p>
        </div>
      </div>
    </div>
  );
}

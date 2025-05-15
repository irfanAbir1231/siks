"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type EventType = {
  id?: number;
  title: string;
  date: string;
  description: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data.events || data); // support both {events:[]} and []
      } catch (err) {
        setError("Could not load events.");
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-0 w-full">
      <div className="w-full px-2 sm:px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center animate-fade-in-up">
          Upcoming Events
        </h1>
        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-300">Loading events...</div>
        ) : error ? (
          <div className="text-center text-red-600 dark:text-red-400">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {events.map((event, i) => (
              <div
                key={event.id ?? i}
                className="bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg border border-green-100 dark:border-green-900 hover:scale-[1.03] hover:shadow-2xl transition-all overflow-hidden backdrop-blur-lg animate-fade-in-up w-full px-3 sm:px-0 flex flex-col justify-between"
                style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
              >
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-3 sm:mb-4">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-center">
                      {event.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium text-center">
                      {event.date}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 line-clamp-3 text-center text-sm sm:text-base flex-1">
                    {event.description}
                  </p>
                  <Link
                    href="/register"
                    className="inline-block w-full md:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 mt-2 mx-auto"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";

interface PrayerTimes {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

export default function AdminPrayerTimePage() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes>({
    fajr: "04:15",
    dhuhr: "13:30",
    asr: "16:45",
    maghrib: "18:45",
    isha: "20:15",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Updated prayer times:", prayerTimes);
    // Here you would typically send this to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Set Today&apos;s Prayer Times
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Update prayer times for IUT Campus
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "fajr", label: "Fajr", arabicName: "الفجر" },
              { id: "dhuhr", label: "Dhuhr", arabicName: "الظهر" },
              { id: "asr", label: "Asr", arabicName: "العصر" },
              { id: "maghrib", label: "Maghrib", arabicName: "المغرب" },
              { id: "isha", label: "Isha", arabicName: "العشاء" },
            ].map((prayer) => (
              <div key={prayer.id}>
                <label
                  htmlFor={prayer.id}
                  className="flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  <span>{prayer.label}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm font-arabic">
                    {prayer.arabicName}
                  </span>
                </label>
                <input
                  type="time"
                  id={prayer.id}
                  name={prayer.id}
                  required
                  value={prayerTimes[prayer.id as keyof PrayerTimes]}
                  onChange={(e) =>
                    setPrayerTimes({
                      ...prayerTimes,
                      [prayer.id]: e.target.value,
                    })
                  }
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}

            {/* Additional info */}
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Note: Times should be set in 24-hour format. Please verify times
                with local calculations.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Save Prayer Times</span>
                <span>🕌</span>
              </button>
            </div>
          </form>
        </div>

        {/* Last Update Info */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}

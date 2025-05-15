"use client";
import { useEffect, useState } from "react";

interface PrayerTime {
  id: number;
  name: string;
  arabicName: string;
  time: string;
}

const PRAYER_NAMES = [
  { name: "Fajr", arabicName: "الفجر" },
  { name: "Dhuhr", arabicName: "الظهر" },
  { name: "Asr", arabicName: "العصر" },
  { name: "Maghrib", arabicName: "المغرب" },
  { name: "Isha", arabicName: "العشاء" },
];

export default function PrayerTimesPage() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        const res = await fetch("/api/prayer-times");
        if (!res.ok) throw new Error("Failed to fetch prayer times");
        const data = await res.json();
        // Only update the time, keep names hardcoded
        const times = (data.prayerTimes || data).map((item: any, idx: number) => ({
          id: idx + 1,
          name: PRAYER_NAMES[idx]?.name || `Prayer ${idx + 1}`,
          arabicName: PRAYER_NAMES[idx]?.arabicName || "",
          time: item.time,
        }));
        setPrayerTimes(times);
      } catch (err) {
        setError("Could not load prayer times.");
      } finally {
        setLoading(false);
      }
    }
    fetchPrayerTimes();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-0 w-full">
      <div className="w-full px-2 sm:px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-green-800 dark:text-green-100 mb-6 sm:mb-8 text-center animate-fade-in-up">
          Today&apos;s Prayer Times
        </h1>
        <div className="bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-xl border border-green-100 dark:border-green-900 overflow-hidden backdrop-blur-lg animate-fade-in-up w-full px-1 sm:px-0">
          {/* Prayer Times Grid */}
          <div className="divide-y divide-green-100 dark:divide-green-900/30">
            {loading ? (
              <div className="text-center text-gray-600 dark:text-gray-300 p-6">Loading prayer times...</div>
            ) : error ? (
              <div className="text-center text-red-600 dark:text-red-400 p-6">{error}</div>
            ) : (
              prayerTimes.map((prayer, i) => (
                <div
                  key={prayer.id}
                  className="flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-2 sm:gap-0 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.08 + 0.2}s` }}
                >
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl font-semibold text-green-800 dark:text-green-100 mb-1">
                      {prayer.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 font-arabic">
                      {prayer.arabicName}
                    </p>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="text-lg sm:text-2xl font-semibold text-green-600 dark:text-green-400">
                      {prayer.time}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Information Note */}
          <div className="bg-green-50/60 dark:bg-green-900/30 p-3 sm:p-4 text-xs sm:text-sm text-green-700 dark:text-green-300 border-t border-green-100 dark:border-green-900/50 animate-fade-in">
            <p className="text-center">
              Prayer times are approximate. Please check with local Masjid for
              exact timings.
            </p>
          </div>
        </div>
        {/* Additional Information */}
        <div className="mt-6 sm:mt-8 text-center space-y-2 text-xs sm:text-sm text-green-600 dark:text-green-400 animate-fade-in">
          <p>Sunrise: 5:45 AM</p>
          <p>Location: IUT Campus, Gazipur</p>
          <p className="text-xs">
            Times are automatically adjusted for Daylight Savings
          </p>
        </div>
      </div>
    </div>
  );
}

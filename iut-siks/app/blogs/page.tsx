"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogType = {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
};

export default function BlogHomePage() {
  const [blogPosts, setBlogPosts] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogPosts(data.blogs || data); // support both {blogs:[]} and []
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Could not load blogs"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-12 px-0 w-full">
      <div className="w-full px-2 sm:px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center animate-fade-in-up">
          Latest Blogs from IUT-SIKS
        </h1>
        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-300">
            Loading blogs...
          </div>
        ) : error ? (
          <div className="text-center text-red-600 dark:text-red-400">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <article
                key={post.id ?? i}
                className="bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg border border-green-100 dark:border-green-900 hover:scale-[1.03] hover:shadow-2xl transition-all overflow-hidden flex flex-col backdrop-blur-lg animate-fade-in-up w-full px-3 sm:px-0"
                style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
              >
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 text-center">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-center flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 gap-1 sm:gap-0">
                    <span>{post.author}</span>
                    <span>
                      {(() => {
                        // Format date as DD MonthName, YYYY
                        const d = new Date(post.date);
                        if (isNaN(d.getTime())) return post.date;
                        const day = d.getDate().toString().padStart(2, "0");
                        const month = d.toLocaleString("default", {
                          month: "long",
                        });
                        const year = d.getFullYear();
                        return `${day} ${month}, ${year}`;
                      })()}
                    </span>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-block w-full md:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 mt-2 mx-auto"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        {/* Newsletter Signup */}
        <div className="mt-12 sm:mt-16 bg-white/30 dark:bg-green-900/30 rounded-2xl p-5 sm:p-8 text-center shadow-xl border border-green-100 dark:border-green-900 backdrop-blur-lg animate-fade-in-up w-full">
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
            Subscribe to receive new blog posts and updates from IUT-SIKS
            directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white backdrop-blur text-sm sm:text-base"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

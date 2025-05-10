"use client";

import { FormEvent, useState } from "react";

interface BlogSubmission {
  title: string;
  author: string;
  content: string;
}

export default function SubmitBlogPage() {
  const [formData, setFormData] = useState<BlogSubmission>({
    title: "",
    author: "",
    content: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Blog submission:", formData);
    // Here you would typically send this to your backend
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Submit Your Blog
        </h1>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Blog Title
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your blog title"
              />
            </div>

            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Author Name
              </label>
              <input
                type="text"
                id="author"
                required
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your name"
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Use format: Br./Sr./Dr. followed by your name
              </p>
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
              >
                Blog Content
              </label>
              <textarea
                id="content"
                required
                rows={12}
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Write your blog content here..."
              />
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Please ensure content follows Islamic guidelines and is
                beneficial for the community
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Submit Blog</span>
                <span className="text-xl">✍️</span>
              </button>
            </div>
          </form>
        </div>

        {/* Guidelines */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Submission Guidelines
          </h2>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>• Blog content should be original and authentic</li>
            <li>• Reference Quran verses and Hadiths appropriately</li>
            <li>• Keep language respectful and clear</li>
            <li>• Focus on beneficial knowledge and insights</li>
            <li>• Submissions will be reviewed before publishing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

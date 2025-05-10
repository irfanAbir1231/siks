"use client";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  submittedDate: string;
  status: "pending" | "approved" | "rejected";
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Importance of Seeking Knowledge in Islam",
    author: "Br. Abdullah Rahman",
    submittedDate: "May 10, 2025",
    status: "pending",
  },
  {
    id: 2,
    title: "Balancing Studies and Islamic Practices at University",
    author: "Sr. Fatima Ahmed",
    submittedDate: "May 9, 2025",
    status: "approved",
  },
  {
    id: 3,
    title: "Understanding the Etiquettes of Seeking Knowledge",
    author: "Dr. Mohammad Hassan",
    submittedDate: "May 8, 2025",
    status: "pending",
  },
  {
    id: 4,
    title: "The Role of Muslim Students in Modern Society",
    author: "Br. Yusuf Islam",
    submittedDate: "May 7, 2025",
    status: "rejected",
  },
];

export default function AdminBlogModerationPage() {
  const handleApprove = (postId: number) => {
    console.log("Approving post:", postId);
  };

  const handleReject = (postId: number) => {
    console.log("Rejecting post:", postId);
  };

  const getStatusBadgeClasses = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "approved":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`;
      case "rejected":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400`;
      default:
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Moderate Blogs
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Review and manage submitted blog posts
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Pending Review", value: "2", color: "yellow" },
            { label: "Approved", value: "1", color: "green" },
            { label: "Rejected", value: "1", color: "red" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-${stat.color}-50 dark:bg-${stat.color}-900/30 rounded-lg p-4 text-center`}
            >
              <div
                className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-1`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm text-${stat.color}-600 dark:text-${stat.color}-400`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Blog Posts Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Blog Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Submitted
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {blogPosts.map((post, index) => (
                  <tr
                    key={post.id}
                    className={
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-50 dark:bg-gray-700/50"
                    }
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {post.author}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {post.submittedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadgeClasses(post.status)}>
                        {post.status.charAt(0).toUpperCase() +
                          post.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        {post.status !== "approved" && (
                          <button
                            onClick={() => handleApprove(post.id)}
                            className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                          >
                            Approve
                          </button>
                        )}
                        {post.status !== "rejected" && (
                          <button
                            onClick={() => handleReject(post.id)}
                            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Moderation Guidelines
          </h2>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>• Ensure content follows Islamic principles and guidelines</li>
            <li>• Check for accuracy of Quranic verses and Hadiths</li>
            <li>• Verify sources and references where applicable</li>
            <li>• Review for appropriate language and tone</li>
            <li>• Consider the educational value for the community</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

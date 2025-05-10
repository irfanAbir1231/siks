"use client";
import { useState } from "react";
import { notFound } from "next/navigation";

// This would come from your database in a real app
const blogPosts = {
  "importance-of-seeking-knowledge": {
    title: "The Importance of Seeking Knowledge in Islam",
    author: "Br. Abdullah Rahman",
    date: "May 8, 2025",
    content: `
      Knowledge holds a special place in Islam. The first word revealed in the Quran was "Read" (Iqra), highlighting the significance of learning in our faith.

      The Prophet Muhammad ﷺ emphasized the importance of seeking knowledge throughout his life. He said, "Seeking knowledge is mandatory for every Muslim." This hadith demonstrates that education isn't just a recommendation—it's an obligation.

      In the modern world, this directive takes on new significance. As Muslim students, we must excel in both religious and worldly knowledge. This balanced approach allows us to better serve our communities and uphold our Islamic values in contemporary society.

      The early Muslim scholars set remarkable examples in their pursuit of knowledge. They traveled vast distances, dedicated years to learning, and developed groundbreaking innovations in science, mathematics, and medicine—all while maintaining their spiritual connection with Allah.

      Today, we continue this legacy. Whether studying engineering, medicine, or any other field, we approach our education as an act of worship, seeking to benefit humanity while earning Allah's pleasure.
    `,
  },
};

interface Comment {
  id: number;
  name: string;
  message: string;
  date: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Sr. Aisha",
    message:
      "JazakAllah khair for this beautiful reminder about the importance of knowledge in Islam. It's especially relevant for us university students.",
    date: "May 9, 2025",
  },
  {
    id: 2,
    name: "Br. Omar",
    message:
      "This article really motivated me to balance my academic studies with Islamic learning. Would love to see more content like this!",
    date: "May 10, 2025",
  },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [likes, setLikes] = useState(42);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;

    const comment: Comment = {
      id: comments.length + 1,
      name: userName,
      message: newComment,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setComments([comment, ...comments]);
    setNewComment("");
    setUserName("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-gray-600 dark:text-gray-400">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </header>

        {/* Blog Content */}
        <div className="prose dark:prose-invert prose-lg max-w-none mb-12">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Like Button */}
        <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 mb-8">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span className="text-2xl">❤️</span>
            <span className="font-medium">{likes} likes</span>
          </button>
        </div>

        {/* Comments Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Comments
          </h2>

          {/* Comment Form */}
          <form onSubmit={handleComment} className="mb-8 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Comment
              </label>
              <textarea
                id="comment"
                rows={4}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Share your thoughts..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Post Comment
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {comment.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {comment.date}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {comment.message}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}

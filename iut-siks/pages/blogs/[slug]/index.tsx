import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

interface BlogPost {
  _id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  status: string;
  excerpt: string;
  slug: string;
}

type Comment = {
  id: number;
  name: string;
  message: string;
  date: string;
};

const initialComments: Comment[] = [];

const BlogPostPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [likes, setLikes] = useState(42);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchBlogPost() {
      if (!slug) return;

      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) {
          if (res.status === 404) {
            router.push("/404");
            return;
          }
          throw new Error("Failed to fetch blog post");
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPost();
  }, [slug, router]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-red-600 dark:text-red-400">
          {error}
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

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
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
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
};

export default BlogPostPage;

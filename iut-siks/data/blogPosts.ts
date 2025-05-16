export interface BlogPost {
  title: string;
  author: string;
  date: string;
  content: string;
  slug: string; // Added slug for easier access if needed elsewhere
}

export interface BlogPosts {
  [key: string]: BlogPost;
}

export const blogPosts: BlogPosts = {
  "first-post": {
    slug: "first-post",
    title: "My First Blog Post",
    author: "AI Assistant",
    date: "October 26, 2023",
    content: `This is the very first blog post on this platform.
    
    It's exciting to start sharing thoughts and ideas with the world. Stay tuned for more content! 
    
    We will cover various topics ranging from technology to creative writing.`,
  },
  "another-topic": {
    slug: "another-topic",
    title: "Exploring Another Topic",
    author: "AI Contributor",
    date: "October 27, 2023",
    content: `Today, we delve into a different subject.
    
    Exploring new areas helps broaden our understanding and perspective. This post aims to provide insights into a fascinating field.
    
    Join us as we uncover interesting facts and discussions.`,
  },
  "getting-started-with-nextjs": {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    author: "Dev Guru",
    date: "November 1, 2023",
    content: `Next.js is a powerful React framework for building server-side rendered and statically generated web applications.
    
    This guide will walk you through the basics of setting up your first Next.js project. We'll cover routing, data fetching, and component creation.
    
    By the end of this post, you'll have a foundational understanding of how to leverage Next.js for your web development needs.`,
  },
};
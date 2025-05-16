import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectDB();
    const { slug } = req.query;

    if (!slug || Array.isArray(slug)) {
      return res.status(400).json({ error: "Invalid slug" });
    }

    const blog = await Blog.findOne({
      slug,
      status: "approved",
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return res.status(500).json({ error: "Error fetching blog post" });
  }
}

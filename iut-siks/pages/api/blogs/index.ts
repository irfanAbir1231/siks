import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await connectDB();

    // GET - Fetch all approved blogs
    if (req.method === "GET") {
      const blogs = await Blog.find({ status: "approved" }).sort({ date: -1 });
      return res.status(200).json(blogs);
    }

    // POST - Create a new blog
    if (req.method === "POST") {
      const blog = await Blog.create({
        ...req.body,
        date: new Date(),
        status: "pending",
      });
      return res.status(201).json({
        message: "Blog post created successfully",
        id: blog._id,
      });
    }
  } catch (error) {
    console.error("Error handling blog request:", error);
    return res.status(500).json({
      error: "Error processing request",
    });
  }
}

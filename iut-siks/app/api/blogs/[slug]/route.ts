import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

type RouteSegmentConfig = {
  params: {
    slug: string;
  };
};

export async function GET(
  request: NextRequest,
  { params }: RouteSegmentConfig
) {
  try {
    await connectDB();
    const { slug } = params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const blog = await Blog.findOne({
      slug,
      status: "approved",
    });

    if (!blog) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Error fetching blog post" },
      { status: 500 }
    );
  }
}

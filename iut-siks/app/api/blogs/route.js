import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function POST(request) {
    await connectDB();
    const body = await request.json();
    const newBlog = await Blog.create(body);
    return NextResponse.json({ message: 'Blog saved successfully', id: newBlog._id });
}

export async function GET() {
    await connectDB();
    const blogs = await Blog.find({});
    return NextResponse.json(blogs);
}

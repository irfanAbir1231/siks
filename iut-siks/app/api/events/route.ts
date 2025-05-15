import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Event from '@/models/Event';

export async function POST(request: Request) {
    await connectDB();
    const body = await request.json();
    const newEvent = await Event.create(body);
    return NextResponse.json({ message: 'Event saved successfully', id: newEvent._id });
}

export async function GET() {
    await connectDB();
    const events = await Event.find({});
    return NextResponse.json(events);
}

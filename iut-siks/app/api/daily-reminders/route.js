import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import DailyReminder from '@/models/DailyReminder';

export async function POST(request) {
    await connectDB();
    const body = await request.json();
    const newDailyReminder = await DailyReminder.create(body);
    return NextResponse.json({ message: 'Daily reminder saved successfully', id: newDailyReminder._id });
}

export async function GET() {
    await connectDB();
    const dailyReminders = await DailyReminder.find({});
    return NextResponse.json(dailyReminders);
}

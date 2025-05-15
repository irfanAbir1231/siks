import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import PrayerTime from '@/models/PrayerTime';

export async function POST(request: Request) {
    await connectDB();
    const body = await request.json();
    const newPrayerTime = await PrayerTime.create(body);
    return NextResponse.json({ message: 'Prayer time saved successfully', id: newPrayerTime._id });
}

export async function GET() {
    await connectDB();
    const prayerTimes = await PrayerTime.find({});
    return NextResponse.json(prayerTimes);
}

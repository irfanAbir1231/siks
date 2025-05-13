import connectDB from "@/lib/mongoose";
import { NextResponse } from "next/server";
import Event from "@/models/Event";

export async function POST(request: Request) {
  try {
    await connectDB();
    console.log("Connected to MongoDB");
    const body = await request.json();
    const { title, description, date, time, location } = body;

    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
    });

    await newEvent.save();

    return NextResponse.json({ message: "Event created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
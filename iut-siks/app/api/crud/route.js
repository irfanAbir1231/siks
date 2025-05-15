import { connectDB } from '@/lib/mongodb'; // Adjust path if different
import Crud from '@/models/Crud'; // Assuming you defined the model here
import { NextResponse } from 'next/server';

export async function POST(req) {
    await connectDB();
    const data = await req.json();
    const newCrud = await Crud.create(data);
    return NextResponse.json(newCrud);
}

export async function GET() {
    await connectDB();
    const cruds = await Crud.find();
    return NextResponse.json(cruds);
}

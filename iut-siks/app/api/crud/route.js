// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/mongodb';
// import Crud from '@/models/Crud';

// export async function POST(request) {
//     await connectDB();
//     const body = await request.json();
//     const { name, email } = body;
//     const newCrud = new Crud({ name, email });
//     await newCrud.save();
//     return NextResponse.json({ message: 'Data saved successfully' });
// }

// export async function GET() {
//     await connectDB();
//     const data = await Crud.find({});
//     return NextResponse.json(data);
// }


import { connectDB } from '@/lib/mongodb'; // Adjust path if different
import Crud from '@/models/Crud'; // Assuming you defined the model here
import { NextResponse } from 'next/server';

export async function GET() {
    await connectDB();
    const cruds = await Crud.find();
    return NextResponse.json(cruds);
}

export async function POST(req) {
    await connectDB();
    const data = await req.json();
    const newCrud = await Crud.create(data);
    return NextResponse.json(newCrud);
}

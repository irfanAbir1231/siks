// /app/api/register/route.ts
console.log("API route hit");

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { pathExists, readJson, writeJson } from 'fs-extra';
import path from 'path';

// Type for new user
interface User {
  name: string;
  email: string;
  password: string; // hashed
  department: string;
}

// File path for saving user data
const usersFilePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(req: NextRequest) {
  try {
    console.log('usersFilePath:', usersFilePath);

    // Step 1: Parse JSON body
    const body = await req.json();

    const { name, email, password, confirmPassword, department }: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      department: string;
    } = body;

    // Step 2: Validate input
    if (!name || !email || !password || !confirmPassword || !department) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: 'Passwords do not match.' }, { status: 400 });
    }

    // Step 3: Read existing users
    const fileExists = await pathExists(usersFilePath);
    const users: User[] = fileExists ? await readJson(usersFilePath) : [];

    // Step 4: Check for duplicate email
    if (users.find(user => user.email === email)) {
      return NextResponse.json({ error: 'Email already registered.' }, { status: 409 });
    }

    // Step 5: Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Step 6: Create and save new user
    const newUser: User = { name, email, password: hashedPassword, department };
    users.push(newUser);
    await writeJson(usersFilePath, users, { spaces: 2 });

    return NextResponse.json({ message: 'User registered successfully.' }, { status: 201 });

  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}

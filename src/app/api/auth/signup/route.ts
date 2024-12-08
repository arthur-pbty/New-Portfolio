import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { username, email, password } = await req.json();

  const existingUsername = await prisma.user.findUnique({
    where: { username }
  });

  if (existingUsername) {
    return NextResponse.json({ error: 'Username already taken' }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return NextResponse.json({ error: 'Email already taken' }, { status: 400 });
  }

  // Hacher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Créer l'utilisateur
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    }
  });

  return NextResponse.json({ message: 'User created successfully', user: newUser });
}
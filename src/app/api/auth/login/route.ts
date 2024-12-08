import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Trouver l'utilisateur par email
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
  }

  // Comparer le mot de passe
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
  }

  // Réponse réussie
  return NextResponse.json({ message: 'Login successful', user });
}

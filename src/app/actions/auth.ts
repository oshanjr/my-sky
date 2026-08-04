'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    const admin = await prisma.admin.findUnique({
      where: { email }
    });

    if (!admin) {
      return { error: 'Invalid credentials' };
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (isPasswordValid) {
      cookies().set('admin_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });
      
      redirect('/admin');
    }
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An error occurred during login' };
  }

  return { error: 'Invalid credentials' };
}

export async function logout() {
  cookies().delete('admin_session');
  redirect('/admin/login');
}

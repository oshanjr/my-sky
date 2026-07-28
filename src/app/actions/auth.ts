'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const password = formData.get('password');
  
  // Hardcoded password for simplicity
  if (password === 'admin123') {
    cookies().set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    
    redirect('/admin');
  }

  return { error: 'Invalid password' };
}

export async function logout() {
  cookies().delete('admin_session');
  redirect('/admin/login');
}

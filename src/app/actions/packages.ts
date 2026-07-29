'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

// Helper to convert Google Drive links
function parseImageUrl(url: string) {
  if (url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  return url;
}

export async function addPackage(formData: FormData) {
  try {
    await prisma.tourPackage.create({
      data: {
        title: formData.get('title') as string,
        days: parseInt(formData.get('days') as string) || 1,
        icon: formData.get('icon') as string || 'Map',
        image: parseImageUrl(formData.get('image') as string)
      }
    });
    revalidatePath('/admin/packages');
    revalidatePath('/packages');
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to add package:', error);
  }
}

export async function deletePackage(formData: FormData) {
  try {
    await prisma.tourPackage.delete({
      where: { id: formData.get('id') as string }
    });
    revalidatePath('/admin/packages');
    revalidatePath('/packages');
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to delete package:', error);
  }
}

'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

function parseImageUrl(url: string) {
  if (url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  return url;
}

export async function addDestination(formData: FormData) {
  try {
    await prisma.destination.create({
      data: {
        name: formData.get('name') as string,
        location: formData.get('location') as string,
        price: formData.get('price') as string || 'Custom',
        tag: formData.get('tag') as string || 'Luxury',
        rating: parseFloat(formData.get('rating') as string) || 5.0,
        image: parseImageUrl(formData.get('image') as string)
      }
    });
    revalidatePath('/admin/destinations');
    revalidatePath('/destinations');
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to process destination:', error);
  }
}

export async function deleteDestination(formData: FormData) {
  try {
    await prisma.destination.delete({
      where: { id: formData.get('id') as string }
    });
    revalidatePath('/admin/destinations');
    revalidatePath('/destinations');
    revalidatePath('/');
  } catch (error) {
    console.error('Failed to process destination:', error);
  }
}

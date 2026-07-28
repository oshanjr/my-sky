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

export async function addBlogPost(formData: FormData) {
  try {
    await prisma.blogPost.create({
      data: {
        title: formData.get('title') as string,
        excerpt: formData.get('excerpt') as string,
        category: formData.get('category') as string || 'Travel Guide',
        author: formData.get('author') as string || 'My Sky Team',
        image: parseImageUrl(formData.get('image') as string)
      }
    });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to add blog post.' };
  }
}

export async function deleteBlogPost(formData: FormData) {
  try {
    await prisma.blogPost.delete({
      where: { id: formData.get('id') as string }
    });
    revalidatePath('/admin/blog');
    revalidatePath('/blog');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to delete blog post.' };
  }
}

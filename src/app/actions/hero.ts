'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function updateHeroConfig(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const subtitle = formData.get('subtitle') as string;
    const description = formData.get('description') as string;
    const imagesStr = formData.get('images') as string;

    // Convert raw URLs (including Google Drive view URLs) into array
    const rawImages = imagesStr.split('\n').map(s => s.trim()).filter(Boolean);
    
    // Transform Google Drive links to direct download links if necessary
    const images = rawImages.map(url => {
      // Very basic parser for Google Drive 'view' links
      if (url.includes('drive.google.com/file/d/')) {
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
          return `https://drive.google.com/uc?export=view&id=${match[1]}`;
        }
      }
      return url;
    });

    const config = await prisma.heroConfig.findFirst();

    if (config) {
      await prisma.heroConfig.update({
        where: { id: config.id },
        data: { title, subtitle, description, images }
      });
    } else {
      await prisma.heroConfig.create({
        data: { title, subtitle, description, images }
      });
    }

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to update hero configuration.' };
  }
}

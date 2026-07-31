'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getBranches() {
  try {
    const branches = await prisma.branch.findMany({
      orderBy: [
        { isMain: 'desc' },
        { createdAt: 'asc' }
      ]
    });
    return { success: true, data: branches };
  } catch (error: any) {
    return { success: false, error: error.message || 'Failed to fetch branches' };
  }
}

export async function createBranch(formData: FormData) {
  try {
    const isMain = formData.get('isMain') === 'on';

    // If making this main, set others to false
    if (isMain) {
      await prisma.branch.updateMany({
        where: { isMain: true },
        data: { isMain: false }
      });
    }

    const branch = await prisma.branch.create({
      data: {
        name: formData.get('name') as string,
        address: formData.get('address') as string,
        phone1: (formData.get('phone1') as string) || null,
        phone2: (formData.get('phone2') as string) || null,
        email: (formData.get('email') as string) || null,
        mapUrl: (formData.get('mapUrl') as string) || null,
        isMain: isMain,
      }
    });

    revalidatePath('/about');
    revalidatePath('/contact');
    revalidatePath('/admin/branches');

    return { success: true, data: branch };
  } catch (error: any) {
    console.error('Create branch error:', error);
    return { success: false, error: error.message || 'Failed to create branch' };
  }
}

export async function updateBranch(id: string, formData: FormData) {
  try {
    const isMain = formData.get('isMain') === 'on';

    if (isMain) {
      await prisma.branch.updateMany({
        where: { isMain: true, id: { not: id } },
        data: { isMain: false }
      });
    }

    const branch = await prisma.branch.update({
      where: { id },
      data: {
        name: formData.get('name') as string,
        address: formData.get('address') as string,
        phone1: (formData.get('phone1') as string) || null,
        phone2: (formData.get('phone2') as string) || null,
        email: (formData.get('email') as string) || null,
        mapUrl: (formData.get('mapUrl') as string) || null,
        isMain: isMain,
      }
    });

    revalidatePath('/about');
    revalidatePath('/contact');
    revalidatePath('/admin/branches');

    return { success: true, data: branch };
  } catch (error: any) {
    console.error('Update branch error:', error);
    return { success: false, error: error.message || 'Failed to update branch' };
  }
}

export async function deleteBranch(id: string) {
  try {
    await prisma.branch.delete({
      where: { id }
    });

    revalidatePath('/about');
    revalidatePath('/contact');
    revalidatePath('/admin/branches');

    return { success: true };
  } catch (error: any) {
    console.error('Delete branch error:', error);
    return { success: false, error: error.message || 'Failed to delete branch' };
  }
}

'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitInquiry(formData: FormData) {
  try {
    const serviceType = formData.get('serviceType') as string;
    const destination = formData.get('destination') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const budget = formData.get('budget') as string;
    const departDate = formData.get('departDate') as string;
    const returnDate = formData.get('returnDate') as string;
    const adults = parseInt(formData.get('adults') as string) || 2;
    const children = parseInt(formData.get('children') as string) || 0;
    const details = formData.get('details') as string;

    if (!name || !email) {
      return { success: false, error: 'Name and Email are required.' };
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        serviceType,
        destination,
        name,
        email,
        phone,
        budget,
        departDate,
        returnDate,
        adults,
        children,
        details,
      },
    });

    return { success: true, data: inquiry };
  } catch (error) {
    console.error('Failed to submit inquiry:', error);
    return { success: false, error: 'Failed to submit inquiry. Please try again later.' };
  }
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const destinationImages = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1800&auto=format&fit=crop'
];

const tourImages = [
  'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1800&auto=format&fit=crop'
];

async function main() {
  console.log('Fixing Destination images...');
  const destinations = await prisma.destination.findMany();
  for (let i = 0; i < destinations.length; i++) {
    await prisma.destination.update({
      where: { id: destinations[i].id },
      data: { image: destinationImages[i % destinationImages.length] }
    });
  }

  console.log('Fixing Tour images...');
  const tours = await prisma.tourPackage.findMany();
  for (let i = 0; i < tours.length; i++) {
    await prisma.tourPackage.update({
      where: { id: tours[i].id },
      data: { image: tourImages[i % tourImages.length] }
    });
  }

  console.log('Fixing Blog images...');
  const blogs = await prisma.blogPost.findMany();
  for (let i = 0; i < blogs.length; i++) {
    await prisma.blogPost.update({
      where: { id: blogs[i].id },
      data: { image: destinationImages[(i + 2) % destinationImages.length] }
    });
  }
  
  console.log('Done!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

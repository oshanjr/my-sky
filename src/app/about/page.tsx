import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AgencyOverview from '../../components/AgencyOverview';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AboutPage() {
  const branches = await prisma.branch.findMany({
    orderBy: [
      { isMain: 'desc' },
      { createdAt: 'asc' }
    ]
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        
        {/* Page Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-800 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight">
            Our Story
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the passion behind My Sky Travels and our dedication to crafting the world's finest global journeys.
          </p>
        </section>

        <AgencyOverview branches={branches} />
        
      </main>
      <Footer />
    </div>
  );
}

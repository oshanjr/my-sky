import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function ContactPage() {
  const branches = await prisma.branch.findMany({
    orderBy: [
      { isMain: 'desc' },
      { createdAt: 'asc' }
    ]
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-800 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight">
            Start Planning Your Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Reach out to our travel specialists for custom itineraries, flight queries, or visa support. We are available 24/7.
          </p>
        </section>

        <Contact branches={branches} />
      </main>
      <Footer />
    </div>
  );
}

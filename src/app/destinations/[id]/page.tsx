import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function DestinationPage({ params }: { params: { id: string } }) {
  const destination = await prisma.destination.findUnique({
    where: { id: params.id }
  });

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-slate-900">
        <Image 
          src={destination.image} 
          alt={destination.name} 
          fill 
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white flex items-center gap-2 mb-6 shadow-xl">
            <LucideIcons.MapPin size={18} className="text-sky-400" />
            <span className="font-bold tracking-widest uppercase text-sm">{destination.location}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif max-w-4xl leading-tight mb-6">
            {destination.name}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-white">
            <span className="bg-sky-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">{destination.tag}</span>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-sm">
              <LucideIcons.Star size={16} className="text-amber-400 fill-amber-400" />
              <span className="font-bold">{destination.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-slate-100">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold font-serif text-slate-900">Discover {destination.name}</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Explore the breathtaking beauty and rich culture of {destination.name}. Located in the heart of {destination.location}, this destination offers an unparalleled mix of historical landmarks, stunning natural scenery, and vibrant local life.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Whether you're looking for a relaxing getaway or an action-packed adventure, {destination.name} has something extraordinary to offer. Discover hidden gems, taste authentic local cuisine, and create memories that will last a lifetime in one of the world's most sought-after locations.
              </p>

              {/* Simulated Highlights */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Destination Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-200">
                     <Image src={destination.image} alt={destination.name} fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-200">
                     <Image src={destination.image} alt={destination.name} fill className="object-cover hover:scale-110 transition-transform duration-700 brightness-75 sepia-[.3]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 text-white rounded-3xl p-8 sticky top-32 shadow-xl border border-slate-800">
                <div className="mb-8">
                  <span className="text-slate-400 text-sm uppercase tracking-widest font-semibold block mb-2">Starting From</span>
                  <div className="text-4xl font-serif font-bold text-sky-400">{destination.price}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">Start Planning</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Let us craft the perfect itinerary for your trip to {destination.name}. Our experts will handle every detail.
                </p>
                
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-2xl transition-all shadow-md hover:shadow-lg text-sm tracking-widest uppercase group">
                  Book This Trip <LucideIcons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-8 flex flex-col gap-4 pt-8 border-t border-slate-800">
                  <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <LucideIcons.CheckCircle2 size={18} className="text-sky-400" />
                    <span>Personalized Itinerary</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <LucideIcons.CheckCircle2 size={18} className="text-sky-400" />
                    <span>24/7 Premium Support</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <LucideIcons.CheckCircle2 size={18} className="text-sky-400" />
                    <span>Exclusive Experiences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

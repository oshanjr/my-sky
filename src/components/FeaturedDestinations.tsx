import { PrismaClient } from '@prisma/client';
import { Star, MapPin, ArrowRight, PlaneTakeoff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function FeaturedDestinations() {
  const destinations = await prisma.destination.findMany({
    orderBy: { createdAt: 'asc' },
    take: 6
  });

  return (
    <section id="tours" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 text-brand-cyan font-bold uppercase tracking-widest text-sm">
              <PlaneTakeoff size={16} /> Explore the World
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy font-serif">
              Featured <span className="text-gradient-cyan">Destinations</span>
            </h2>
          </div>
          <Link
            href="/destinations"
            className="btn-secondary rounded-full px-6 py-3 text-sm shrink-0"
          >
            View All Packages
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Link
              href={`/destinations/${dest.id}`}
              key={dest.id}
              className="group relative h-[420px] rounded-[32px] overflow-hidden cursor-pointer isolate border border-slate-200/50 hover:border-sky-500/30 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.25)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-0"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Top Elements */}
              <div className="absolute top-6 left-6 z-20 flex justify-between items-start w-[calc(100%-48px)]">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg">
                  {dest.tag}
                </div>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                  <ArrowRight size={18} />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-1.5 text-sky-400 text-sm font-bold tracking-wide mb-2">
                  <MapPin size={16} />
                  {dest.location}
                </div>
                
                <h3 className="text-3xl font-extrabold text-white mb-5 font-serif leading-tight drop-shadow-md group-hover:text-sky-100 transition-colors">
                  {dest.name}
                </h3>
                
                <div className="flex items-center justify-between pt-5 border-t border-white/20">
                  <div className="flex items-center gap-1.5 bg-amber-400/20 backdrop-blur-md border border-amber-400/30 px-3 py-1.5 rounded-xl">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-amber-50">{dest.rating}</span>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-300 mb-0.5">Starts from</span>
                    <span className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300 drop-shadow-md">
                      {dest.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

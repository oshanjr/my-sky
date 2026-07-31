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
              className="bg-white rounded-[32px] overflow-hidden group cursor-pointer flex flex-col border border-slate-100 hover:border-brand-cyan/20 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-5 left-5 z-20 backdrop-blur-md bg-white/75 border border-white/40 px-4 py-1.5 rounded-full text-xs font-bold text-brand-navy shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                  {dest.tag}
                </div>
                {/* Arrow icon appears on hover */}
                <div className="absolute top-5 right-5 z-20 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out shadow-lg">
                  <ArrowRight size={18} className="text-brand-navy" />
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1 bg-white relative z-20">
                <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium mb-3">
                  <MapPin size={16} className="text-brand-cyan" />
                  {dest.location}
                </div>
                
                <h3 className="text-2xl font-bold text-brand-navy mb-6 group-hover:text-brand-cyan transition-colors duration-300 font-serif">
                  {dest.name}
                </h3>
                
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-slate-100/80">
                  <div className="flex items-center gap-1.5 bg-amber-50/80 border border-amber-100/50 px-3 py-1.5 rounded-xl">
                    <Star size={16} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-bold text-amber-700">{dest.rating}</span>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-0.5">Starts from</span>
                    <span className="text-2xl font-bold text-brand-navy group-hover:text-brand-cyan transition-colors duration-300">
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

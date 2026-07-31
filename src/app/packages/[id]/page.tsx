import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const prisma = new PrismaClient();

export default async function PackagePage({ params }: { params: { id: string } }) {
  const pkg = await prisma.tourPackage.findUnique({
    where: { id: params.id }
  });

  if (!pkg) {
    notFound();
  }

  // @ts-ignore
  const Icon = LucideIcons[pkg.icon] || LucideIcons.Map;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full bg-slate-900">
        <Image 
          src={pkg.image} 
          alt={pkg.title} 
          fill 
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white flex items-center gap-2 mb-6 shadow-xl">
            <Icon size={18} />
            <span className="font-bold tracking-widest uppercase text-sm">{pkg.days} Days Journey</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white font-serif max-w-4xl leading-tight">
            {pkg.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-slate-100">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl font-bold font-serif text-slate-900">About This Journey</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Immerse yourself in a carefully crafted journey tailored for unforgettable moments and discoveries, with expert guides and premium accommodations. This {pkg.days}-day itinerary offers the perfect balance of adventure and relaxation, ensuring that every destination leaves a lasting impression.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Experience local cultures, breathtaking landscapes, and culinary delights as you travel through some of the most stunning regions. We handle all the logistics, so you can focus entirely on making memories that will last a lifetime.
              </p>

              {/* Simulated Features */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { icon: 'Plane', label: 'Roundtrip Flights' },
                    { icon: 'Hotel', label: 'Premium Hotels' },
                    { icon: 'Utensils', label: 'All Meals' },
                    { icon: 'Map', label: 'Guided Tours' },
                    { icon: 'Car', label: 'Transfers' },
                    { icon: 'Camera', label: 'Experiences' },
                  ].map((feature, i) => {
                    // @ts-ignore
                    const FeatureIcon = LucideIcons[feature.icon];
                    return (
                      <div key={i} className="flex flex-col items-center justify-center p-6 bg-sky-50 rounded-2xl text-center border border-sky-100 transition-colors hover:bg-sky-100">
                        <FeatureIcon size={28} className="text-sky-600 mb-3" />
                        <span className="font-semibold text-slate-700 text-xs uppercase tracking-wider">{feature.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 text-white rounded-3xl p-8 sticky top-32 shadow-xl border border-slate-800">
                <h3 className="text-2xl font-serif font-bold mb-4">Ready to Explore?</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Get in touch with our travel experts to customize this {pkg.days}-day itinerary to perfectly match your preferences.
                </p>
                
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-2xl transition-all shadow-md hover:shadow-lg text-sm tracking-widest uppercase group">
                  Inquire Now <LucideIcons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                  <p className="text-xs text-slate-400 mb-2 uppercase tracking-widest font-semibold">Need help?</p>
                  <a href="tel:+1234567890" className="text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck, Award } from 'lucide-react';

export default function AgencyOverview() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      
      {/* Overview Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Side */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700">
            About My Sky Travels
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-gray-900 leading-tight">
            My Sky Travels is a dynamic travel agency, committed to creating unforgettable memories.
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            We specialize in handcrafted international tours, seamless visa consultations, flight ticketing, and bespoke luxury getaways. Our team of global travel experts ensures that every step of your journey is handled with warmth, safety, and excellence.
          </p>

          <div>
            <a href="#contact" className="btn-black-pill mt-2">
              Explore More
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Image Grid Side */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[340px] sm:h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop"
              alt="Paris Eiffel Tower"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

      {/* Mission Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gray-50/80 p-8 sm:p-12 rounded-3xl border border-gray-100">
        
        {/* Mission Text */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-gray-900">
            Mission
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-sans">
            Our mission is to connect travelers with breathtaking global destinations—from vibrant cityscapes and historical wonders to pristine exotic beaches—offering sustainable, personalized, and world-class outbound travel experiences.
          </p>

          <div>
            <a href="#contact" className="btn-black-pill">
              Our Values
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Mission Double Image Collage */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop"
              alt="Japan Mt Fuji"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[220px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600&auto=format&fit=crop"
              alt="Maldives Tropical Beach"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

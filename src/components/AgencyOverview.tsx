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

      {/* Global Branches Block */}
      <div className="pt-12 border-t border-gray-200">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 text-center">
          Our Global Offices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sri Lanka HQ */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mb-2">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold font-sans text-gray-900">Sri Lanka Headquarters</h3>
            <p className="text-gray-600">
              Negombo City Center, St Joshep St<br />
              NEGOMBO, SRI LANKA
            </p>
            <div className="text-sky-600 font-semibold pt-2 space-y-1">
              <p>+94 71 225 8000</p>
              <p>+94 71 230 8000</p>
            </div>
          </div>

          {/* Dubai Branch */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold font-sans text-gray-900">Dubai Branch</h3>
            <p className="text-gray-600">
              Business Bay, Dubai<br />
              UNITED ARAB EMIRATES
            </p>
            <div className="text-emerald-600 font-semibold pt-2 space-y-1">
              <p>+971 4 000 0000</p>
              <p>+971 50 000 0000</p>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}

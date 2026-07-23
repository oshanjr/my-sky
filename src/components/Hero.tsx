'use client';

import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Clock, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    category: 'UNESCO World Heritage',
    title: 'Sigiriya Rock Fortress',
    subtitle: 'The Eighth Wonder of the World',
    description: 'Ascend the ancient palace fortress towering 200 meters above dense emerald jungles, adorned with legendary 5th-century frescoes.',
    location: 'Matale District',
    rating: '4.9',
    duration: 'Full Day',
    url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Highland Railways',
    title: 'Nine Arch Bridge Ella',
    subtitle: 'Misty Cloud Forests & Tea Trails',
    description: 'Journey across the famous colonial viaduct wrapped in mist, where iconic blue trains pass through endless hillside tea gardens.',
    location: 'Ella, Badulla',
    rating: '4.9',
    duration: '3-Day Circuit',
    url: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Tropical Coastline',
    title: 'Mirissa Azure Horizon',
    subtitle: 'Whale Watching & Palm Beaches',
    description: 'Relax on golden coconut beaches, surf oceanic breaks, and set sail into deep blue waters to spot magnificent blue whales.',
    location: 'Mirissa, Matara',
    rating: '4.8',
    duration: '2-Day Escape',
    url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Emerald Highlands',
    title: 'Nuwara Eliya Tea Country',
    subtitle: 'Cool Mountain Air & Cascades',
    description: 'Immerse in colonial charm and sprawling tea plantations nestled high in Sri Lanka’s central mountain range.',
    location: 'Nuwara Eliya',
    rating: '4.7',
    duration: '4-Day Retreat',
    url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop',
  },
  {
    id: 5,
    category: 'Wild Expeditions',
    title: 'Yala Wilderness Safari',
    subtitle: 'Kingdom of the Island Leopard',
    description: 'Experience heart-pounding jeep safaris across coastal lagoons, dry zone woodlands, and wild leopard habitats.',
    location: 'Yala National Park',
    rating: '4.9',
    duration: '2-Day Safari',
    url: 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=2070&auto=format&fit=crop',
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, handleNext]);

  const slideVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.6 },
        scale: { duration: 0.8, ease: 'easeOut' as const }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-50%' : '50%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { duration: 0.5 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const activeSlide = slides[current];

  return (
    <section 
      className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Image Carousel Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={activeSlide.url}
              alt={activeSlide.title}
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
            {/* Multi-stage Gradient Overlays for High Contrast & Sophisticated Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
            <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Glow Ambient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[160px] pointer-events-none z-10" />



      {/* Hero Central Content Section */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Active Slide Info */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Category Pill */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold tracking-wider text-blue-300 bg-blue-500/20 border border-blue-400/30 uppercase">
                  <Sparkles size={13} className="text-cyan-300" />
                  {activeSlide.category}
                </span>
                <span className="flex items-center gap-1 text-amber-400 text-xs font-semibold px-2.5 py-1 bg-black/40 rounded-md border border-white/10">
                  <Star size={13} className="fill-amber-400" /> {activeSlide.rating}
                </span>
                <span className="flex items-center gap-1 text-slate-300 text-xs font-medium px-2.5 py-1 bg-black/40 rounded-md border border-white/10">
                  <MapPin size={13} className="text-cyan-400" /> {activeSlide.location}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-cyan-300 tracking-wide uppercase mb-1">
                  {activeSlide.subtitle}
                </h2>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-serif">
                  {activeSlide.title}
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-200 font-light max-w-2xl leading-relaxed text-shadow">
                {activeSlide.description}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/destinations"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3.5 px-7 rounded-2xl flex items-center gap-2.5 transition-all shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Explore Destination
                  <ArrowRight size={18} />
                </Link>

                <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-white text-sm font-medium">
                  <Clock size={16} className="text-cyan-300" />
                  <span>Duration: {activeSlide.duration}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Thumbnail Cards Deck */}
        <div className="lg:col-span-5 flex flex-col items-end">
          <div className="w-full flex items-center justify-between mb-3 text-xs text-white/70">
            <span className="font-semibold tracking-wider uppercase text-cyan-300/90">Upcoming Destinations</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95 hover:border-cyan-400/50 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-95 hover:border-cyan-400/50 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Interactive Slide Thumbnail Strip */}
          <div className="w-full space-y-2.5">
            {slides.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`w-full text-left p-2.5 rounded-2xl transition-all duration-300 flex items-center gap-3.5 border backdrop-blur-xl group cursor-pointer ${
                    isActive 
                      ? 'bg-white/20 border-cyan-400/80 shadow-lg shadow-cyan-500/20 translate-x-0' 
                      : 'bg-black/40 border-white/10 hover:bg-white/10 hover:border-white/20 hover:translate-x-1'
                  }`}
                >
                  <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20">
                    <Image
                      src={slide.url}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-cyan-500/30 backdrop-blur-[1px] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {slide.category}
                      </span>
                      <span className="text-[11px] text-amber-400 font-medium flex items-center gap-0.5">
                        <Star size={10} className="fill-amber-400" /> {slide.rating}
                      </span>
                    </div>
                    <h4 className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                      {slide.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Glassmorphism Quick Search Bar */}
      <div className="relative z-20 max-w-7xl w-full mx-auto mt-4">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 p-2 sm:p-3 rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center">
          <div className="flex flex-col px-4 py-2 bg-black/20 rounded-2xl border border-white/5 focus-within:border-cyan-400/50 transition-colors">
            <label className="text-[11px] font-bold uppercase tracking-wider text-cyan-300/90 flex items-center gap-1.5 mb-0.5">
              <MapPin size={12} /> Destination
            </label>
            <input 
              type="text" 
              placeholder="e.g. Ella, Sigiriya, Mirissa" 
              className="bg-transparent text-white placeholder:text-white/40 text-sm font-medium focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col px-4 py-2 bg-black/20 rounded-2xl border border-white/5 focus-within:border-cyan-400/50 transition-colors">
            <label className="text-[11px] font-bold uppercase tracking-wider text-cyan-300/90 flex items-center gap-1.5 mb-0.5">
              <Calendar size={12} /> Travel Date
            </label>
            <input 
              type="date" 
              className="bg-transparent text-white text-sm font-medium focus:outline-none w-full [color-scheme:dark] cursor-pointer"
            />
          </div>

          <div className="flex flex-col px-4 py-2 bg-black/20 rounded-2xl border border-white/5 focus-within:border-cyan-400/50 transition-colors">
            <label className="text-[11px] font-bold uppercase tracking-wider text-cyan-300/90 flex items-center gap-1.5 mb-0.5">
              <Users size={12} /> Travelers
            </label>
            <select className="bg-transparent text-white text-sm font-medium focus:outline-none w-full appearance-none cursor-pointer">
              <option className="bg-slate-900 text-white">1 Guest</option>
              <option className="bg-slate-900 text-white">2 Guests (Couple)</option>
              <option className="bg-slate-900 text-white">Family / Group (4+)</option>
            </select>
          </div>

          <Link 
            href="/destinations" 
            className="w-full h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:to-cyan-400 text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 group"
          >
            <Search size={18} className="group-hover:scale-110 transition-transform" />
            <span>Search Experiences</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


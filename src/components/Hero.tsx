'use client';

import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, MapPin, Calendar, Users, 
  ChevronLeft, ChevronRight, Star, Clock, ArrowRight, Sparkles
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    category: 'Air Travel',
    title: 'Inbound Flight Booking',
    subtitle: 'Luxury. Affordable.',
    description: 'Inbound air ticket services with competitive fares, trusted airline partners, and fast confirmation, ensuring a smooth and reliable arrival experience.',
    location: 'Sri Lanka Arrivals',
    rating: '4.9',
    duration: '24/7 Support',
    url: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    category: 'Air Travel',
    title: 'Outbound Flight Booking',
    subtitle: 'Fast & Secure Booking',
    description: 'Outbound air ticket booking from Sri Lanka with secure payments, flexible travel options, and professional support from booking to departure.',
    location: 'Global Departures',
    rating: '4.8',
    duration: 'Flexible Dates',
    url: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    category: 'Deals',
    title: 'Affordable Air Tickets',
    subtitle: 'Budget-Friendly Options',
    description: 'Budget-friendly air ticket options carefully selected to offer the best value while maintaining comfort, safety, and reliable airline service.',
    location: 'Worldwide Destinations',
    rating: '4.9',
    duration: 'Best Value',
    url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    category: 'Service',
    title: 'Fly With Confidence',
    subtitle: 'Professional Support',
    description: 'Professional air ticket booking with reliable airline partners, secure payment handling, and full customer support from confirmation through to departure.',
    location: 'Verified Airlines',
    rating: '5.0',
    duration: 'End-to-End Care',
    url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop',
  }
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
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
    const timer = setInterval(handleNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, handleNext]);

  const slideVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.08
    }),
    animate: {
      x: 0, opacity: 1, scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 200, damping: 28 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2, ease: 'easeOut' as const }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-40%' : '40%',
      opacity: 0, scale: 0.95,
      transition: { x: { duration: 0.6 }, opacity: { duration: 0.5 } }
    })
  };

  const activeSlide = slides[current];

  return (
    <section
      className="relative min-h-[94vh] lg:min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Image Carousel */}
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
              priority={current === 0}
              sizes="100vw"
              quality={80}
            />
            {/* Cinematic gradient overlays using brand colors */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(5, 13, 26, 0.95), rgba(5, 13, 26, 0.65), rgba(5, 13, 26, 0.25))',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(5, 13, 26, 1) 0%, rgba(5, 13, 26, 0.40) 40%, transparent 70%, rgba(5, 13, 26, 0.50) 100%)',
              }}
            />
            {/* Subtle brand color tint overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(3, 105, 161, 0.10), transparent 60%, rgba(14, 165, 233, 0.05))',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Mesh Orbs */}
      <div className="glow-orb absolute top-1/4 -left-40 w-[500px] h-[500px] z-10 animate-glow-breathe" />
      <div className="glow-orb-accent absolute bottom-20 -right-40 w-[600px] h-[600px] z-10 animate-glow-breathe" style={{ animationDelay: '2.5s' }} />
      <div className="glow-orb absolute top-10 right-1/4 w-[300px] h-[300px] z-10 animate-glow-breathe" style={{ animationDelay: '1s' }} />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <div className="lg:col-span-7 flex flex-col items-start space-y-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Category + Meta Pills — Glassmorphism */}
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase"
                  style={{
                    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(56, 189, 248, 0.10))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(14, 165, 233, 0.25)',
                    color: '#7DD3FC',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                >
                  <Sparkles size={13} style={{ color: '#38BDF8' }} />
                  {activeSlide.category}
                </span>
                <span
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-xl"
                  style={{
                    color: '#FBBF24',
                    background: 'rgba(0,0,0,0.45)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  <Star size={13} className="fill-amber-400" /> {activeSlide.rating}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl"
                  style={{
                    color: 'var(--text-on-dark-secondary)',
                    background: 'rgba(0,0,0,0.40)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  <MapPin size={13} style={{ color: '#38BDF8' }} /> {activeSlide.location}
                </span>
              </div>

              {/* Heading — Large + Gradient accent */}
              <div>
                <h2
                  className="text-sm sm:text-base font-semibold tracking-widest uppercase mb-3"
                  style={{
                    background: 'linear-gradient(90deg, #38BDF8, #7DD3FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {activeSlide.subtitle}
                </h2>
                <h1
                  className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] font-serif"
                  style={{ color: 'var(--text-on-dark)' }}
                >
                  {activeSlide.title}
                </h1>
              </div>

              {/* Description */}
              <p
                className="text-base sm:text-lg font-light max-w-2xl leading-relaxed"
                style={{ color: 'var(--text-on-dark-secondary)' }}
              >
                {activeSlide.description}
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/destinations" className="cta-button !rounded-2xl !py-4 !px-8 text-base">
                  Explore Destination
                  <ArrowRight size={18} />
                </Link>
                <div
                  className="glass-card flex items-center gap-2.5 px-5 py-3.5 !rounded-2xl text-sm font-medium"
                  style={{ color: 'var(--text-on-dark)' }}
                >
                  <Clock size={16} style={{ color: '#38BDF8' }} />
                  <span>{activeSlide.duration}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Deck — Glassmorphism Cards */}
        <div className="lg:col-span-5 flex flex-col items-end">
          <div
            className="w-full flex items-center justify-between mb-4 text-xs"
            style={{ color: 'var(--text-on-dark-muted)' }}
          >
            <span
              className="font-bold tracking-widest uppercase text-[11px]"
              style={{
                background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Top Flight Deals
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="glass-card w-10 h-10 !rounded-full flex items-center justify-center active:scale-90 cursor-pointer transition-transform"
                style={{ color: 'var(--text-on-dark)' }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="glass-card w-10 h-10 !rounded-full flex items-center justify-center active:scale-90 cursor-pointer transition-transform"
                style={{ color: 'var(--text-on-dark)' }}
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="w-full space-y-3">
            {slides.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className="w-full text-left p-3 rounded-2xl transition-all duration-500 flex items-center gap-4 group cursor-pointer"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(56, 189, 248, 0.08))'
                      : 'rgba(255, 255, 255, 0.04)',
                    border: isActive
                      ? '1px solid rgba(14, 165, 233, 0.35)'
                      : '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    boxShadow: isActive
                      ? '0 8px 32px rgba(14, 165, 233, 0.12), inset 0 1px 0 rgba(255,255,255,0.06)'
                      : 'inset 0 1px 0 rgba(255,255,255,0.03)',
                  }}
                >
                  <div
                    className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0"
                    style={{
                      border: isActive
                        ? '1px solid rgba(14, 165, 233, 0.30)'
                        : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <Image
                      src={slide.url}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="64px"
                      quality={50}
                    />
                    {isActive && (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.30), rgba(56, 189, 248, 0.20))' }}
                      >
                        <div
                          className="w-2.5 h-2.5 rounded-full animate-ping"
                          style={{ background: '#38BDF8' }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{
                          color: isActive ? '#38BDF8' : 'var(--text-on-dark-muted)',
                        }}
                      >
                        {slide.category}
                      </span>
                      <span className="text-[11px] text-amber-400 font-medium flex items-center gap-0.5">
                        <Star size={10} className="fill-amber-400" /> {slide.rating}
                      </span>
                    </div>
                    <h4
                      className="text-sm font-semibold truncate mt-0.5"
                      style={{
                        color: isActive ? 'var(--text-on-dark)' : 'var(--text-on-dark-secondary)',
                      }}
                    >
                      {slide.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search Bar — Floating Glass Panel */}
      <div className="relative z-20 max-w-7xl w-full mx-auto mt-6">
        <div
          className="p-3 sm:p-4 rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center"
          style={{
            background: 'rgba(5, 13, 26, 0.75)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            border: '1px solid rgba(14, 165, 233, 0.12)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div
            className="flex flex-col px-5 py-3.5 rounded-2xl transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <label
              className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1"
              style={{ color: '#38BDF8' }}
            >
              <MapPin size={12} /> Route
            </label>
            <input
              type="text"
              placeholder="e.g. CMB to DXB"
              className="bg-transparent border-0 p-0 text-sm font-semibold w-full focus:outline-none"
              style={{ color: 'var(--text-on-dark)' }}
            />
          </div>
          <div
            className="flex flex-col px-5 py-3.5 rounded-2xl transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <label
              className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1"
              style={{ color: '#38BDF8' }}
            >
              <Calendar size={12} /> Travel Date
            </label>
            <input
              type="date"
              className="bg-transparent text-sm font-semibold focus:outline-none w-full cursor-pointer [color-scheme:dark]"
              style={{ color: 'var(--text-on-dark)' }}
            />
          </div>
          <div
            className="flex flex-col px-5 py-3.5 rounded-2xl transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <label
              className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1"
              style={{ color: '#38BDF8' }}
            >
              <Users size={12} /> Travelers
            </label>
            <select
              className="bg-transparent text-sm font-medium focus:outline-none w-full appearance-none cursor-pointer"
              style={{ color: 'var(--text-on-dark)' }}
            >
              <option style={{ background: 'var(--bg-midnight)' }}>1 Guest</option>
              <option style={{ background: 'var(--bg-midnight)' }}>2 Guests (Couple)</option>
              <option style={{ background: 'var(--bg-midnight)' }}>Family / Group (4+)</option>
            </select>
          </div>
          <Link href="/services" className="cta-button w-full !rounded-2xl !py-3.5 group text-sm">
            <Search size={18} className="group-hover:scale-110 transition-transform" />
            <span>Search Flights</span>
          </Link>
        </div>
      </div>


    </section>
  );
}

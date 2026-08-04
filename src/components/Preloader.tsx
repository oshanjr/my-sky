'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plane } from 'lucide-react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds to allow the animation to play
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0b13] bg-gradient-to-br from-sky-950 via-slate-900 to-[#0b0b13] overflow-hidden"
        >
          
          {/* Speed Lines Background */}
          <div className="absolute inset-0 flex items-center justify-center w-full h-full pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: '-100vw', opacity: [0, 0.5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1 + Math.random(), 
                  ease: "linear",
                  delay: Math.random() * 2
                }}
                className={`absolute h-[1px] bg-sky-400/40 rounded-full`}
                style={{ 
                  width: `${50 + Math.random() * 100}px`,
                  top: `calc(50% + ${(Math.random() - 0.5) * 150}px)`
                }}
              />
            ))}
          </div>

          {/* Flying Plane Container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Cloud/Glow behind plane */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-sky-500/20 blur-[40px] rounded-full"></div>
            
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
              }}
              className="relative z-10 text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)] mb-8 h-20 w-64"
            >
              <Image 
                src="/logo.png" 
                alt="My Sky Travels Logo" 
                fill
                className="object-contain" 
                priority
              />
            </motion.div>

            {/* Elegant Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center gap-3 relative z-10"
            >
              <h2 className="text-xl font-medium font-serif text-white tracking-[0.3em] uppercase">
                Preparing Flight
              </h2>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-sky-400"
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

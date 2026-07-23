'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-cyan-300 bg-white/10 border border-white/15 backdrop-blur-md uppercase"
              >
                <Sparkles size={14} className="text-cyan-300" />
                Get In Touch
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight"
              >
                Ready to Start Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
                  Next Adventure?
                </span>
              </motion.h2>

              <p className="text-slate-300 text-base md:text-lg font-light leading-relaxed">
                Have questions about your custom Sri Lankan itinerary? Our travel consultants are available 24/7 to design your unforgettable vacation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-5 p-4 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all group shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-bold text-base">hello@myskytravels.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all group shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-white font-bold text-base">+94 11 234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all group shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Our Office</p>
                  <p className="text-white font-bold text-base">45 Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 backdrop-blur-2xl bg-white/5 border border-white/15 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-950/80"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider ml-1">Service Required</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer">
                  <option className="bg-slate-900 text-white">Custom Holiday Package</option>
                  <option className="bg-slate-900 text-white">Flight Booking</option>
                  <option className="bg-slate-900 text-white">Visa Assistance</option>
                  <option className="bg-slate-900 text-white">Hotel Reservation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your dream trip details..."
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500 resize-none"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

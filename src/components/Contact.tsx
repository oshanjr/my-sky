'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-bg-surface-alt relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="white-card rounded-[2.5rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column — Image / Info Overlay */}
            <div className="relative p-10 lg:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-[600px] bg-brand-navy">
              <Image 
                src="https://images.unsplash.com/photo-1544644181-1484b3f8c8b4?q=80&w=800&auto=format&fit=crop"
                alt="Travel map and passport"
                fill
                className="object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-navy/80" />
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white font-serif">
                  Let's Plan Your <br/>
                  <span className="text-brand-cyan-light">Next Journey</span>
                </h2>
                <p className="text-white/80 max-w-sm text-lg">
                  Reach out for tailored flight bookings, visa processing, or custom holiday itineraries.
                </p>
              </div>

              <div className="relative z-10 space-y-6 mt-12 lg:mt-0">
                {[
                  { icon: Mail, label: 'Email', value: 'info@myskytravels.com' },
                  { icon: Phone, label: 'Call', value: '+94 77 523 1525' },
                  { icon: MapPin, label: 'Office', value: "198, St. Joseph's St, Negombo" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                      <item.icon size={20} className="text-brand-cyan-light" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60 font-semibold">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column — Contact Form */}
            <div className="p-10 lg:p-16 bg-white">
              <form className="space-y-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-8">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input-field rounded-xl px-4 py-3"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input-field rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Service Required</label>
                  <select className="input-field rounded-xl px-4 py-3 appearance-none bg-transparent">
                    <option>Flight Booking</option>
                    <option>Visa Assistance</option>
                    <option>Custom Holiday Package</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-muted">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="input-field rounded-xl px-4 py-3 resize-none"
                  />
                </div>

                <button className="btn-primary w-full rounded-xl py-4 mt-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

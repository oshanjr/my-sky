'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-light-alt py-28 px-6 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="glow-orb-light absolute top-1/4 -left-32 w-[500px] h-[500px] animate-glow-breathe" />
      <div className="glow-orb-light absolute bottom-1/4 -right-32 w-[500px] h-[500px] animate-glow-breathe" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  color: 'var(--accent-teal)',
                  background: 'var(--accent-teal-frost)',
                  border: '1px solid var(--accent-teal-border)',
                }}
              >
                <Sparkles size={14} style={{ color: 'var(--accent-teal)' }} />
                Get In Touch
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif leading-tight"
                style={{ color: 'var(--text-on-light)' }}
              >
                Get in Touch for a <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #0EA5E9, #0284C7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Smooth Travel Experience
                </span>
              </motion.h2>

              <p
                className="text-base md:text-lg font-light leading-relaxed"
                style={{ color: 'var(--text-on-light-secondary)' }}
              >
                From flight inquiries to visa assistance and travel planning, our team is here to support you every step of the way. Reach out to us for quick responses, clear guidance, and reliable assistance tailored to your travel needs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email Us', value: 'info@myskytravels.com' },
                { icon: Phone, label: 'Call Us', value: '+94 77 523 1525 / +94 77 760 9130' },
                { icon: MapPin, label: 'Our Office', value: "1st Floor, 198, St. Joseph's Street, Negombo" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="light-card flex items-center gap-5 p-4 !rounded-2xl group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      background: 'var(--accent-teal-frost)',
                      border: '1px solid var(--accent-teal-border)',
                      color: 'var(--accent-teal)',
                    }}
                  >
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: 'var(--text-on-light-muted)' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-semibold text-sm mt-0.5"
                      style={{ color: 'var(--text-on-light)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl"
            style={{
              background: 'var(--bg-white)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04), 0 16px 48px rgba(0,0,0,0.06)',
            }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-xs font-bold uppercase tracking-wider ml-1"
                    style={{ color: 'var(--accent-teal-dark)' }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="form-input-light w-full rounded-xl px-5 py-3.5"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-xs font-bold uppercase tracking-wider ml-1"
                    style={{ color: 'var(--accent-teal-dark)' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="form-input-light w-full rounded-xl px-5 py-3.5"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-xs font-bold uppercase tracking-wider ml-1"
                  style={{ color: 'var(--accent-teal-dark)' }}
                >
                  Service Required
                </label>
                <select className="form-input-light w-full rounded-xl px-5 py-3.5 appearance-none cursor-pointer">
                  <option>Custom Holiday Package</option>
                  <option>Flight Booking</option>
                  <option>Visa Assistance</option>
                  <option>Hotel Reservation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  className="text-xs font-bold uppercase tracking-wider ml-1"
                  style={{ color: 'var(--accent-teal-dark)' }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your dream trip details..."
                  className="form-input-light w-full rounded-xl px-5 py-3.5 resize-none"
                />
              </div>

              <button className="cta-button w-full !rounded-xl !py-4">
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

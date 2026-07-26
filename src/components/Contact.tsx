'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" style={{ background: 'var(--bg-snow)' }}>


      {/* Ambient glow orbs */}
      <div className="glow-orb-light absolute top-1/4 -left-40 w-[600px] h-[600px] animate-glow-breathe" />
      <div className="glow-orb-light absolute bottom-1/4 -right-40 w-[600px] h-[600px] animate-glow-breathe" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(56, 189, 248, 0.05))',
                  border: '1px solid rgba(14, 165, 233, 0.15)',
                  color: 'var(--accent-teal)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Sparkles size={14} style={{ color: '#0EA5E9' }} />
                Get In Touch
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-tight"
                style={{ color: 'var(--text-on-light)' }}
              >
                Get in Touch for a <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #0369A1, #0EA5E9, #38BDF8)',
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

            {/* Contact Info Cards — Glassmorphism */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email Us', value: 'info@myskytravels.com' },
                { icon: Phone, label: 'Call Us', value: '+94 77 523 1525 / +94 77 760 9130' },
                { icon: MapPin, label: 'Our Office', value: "1st Floor, 198, St. Joseph's Street, Negombo" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel-light flex items-center gap-5 p-5 !rounded-2xl group"
                >
                  <div
                    className="w-13 h-13 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-400 relative overflow-hidden"
                    style={{
                      width: '52px',
                      height: '52px',
                      background: 'linear-gradient(135deg, #0369A1, #0EA5E9, #38BDF8)',
                      boxShadow: '0 4px 16px rgba(14, 165, 233, 0.25)',
                    }}
                  >
                    <item.icon size={22} className="text-white relative z-10" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                      }}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-0.5"
                      style={{ color: 'var(--text-on-light-muted)' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: 'var(--text-on-light)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column — Form Glass Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 p-8 md:p-12 rounded-3xl relative overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.70)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255, 255, 255, 0.80)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 20px 60px rgba(14, 165, 233, 0.06), inset 0 1px 0 rgba(255,255,255,0.95)',
            }}
          >
            {/* Subtle gradient accent at top */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{
                background: 'linear-gradient(90deg, #0369A1, #0EA5E9, #38BDF8, #7DD3FC)',
              }}
            />

            <form className="space-y-7">
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
                    className="form-input-light w-full rounded-xl px-5 py-4"
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
                    className="form-input-light w-full rounded-xl px-5 py-4"
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
                <select className="form-input-light w-full rounded-xl px-5 py-4 appearance-none cursor-pointer">
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
                  className="form-input-light w-full rounded-xl px-5 py-4 resize-none"
                />
              </div>

              <button className="cta-button w-full !rounded-xl !py-4 text-base">
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

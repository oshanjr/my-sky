'use client';

import Link from 'next/link';
import { Plane, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="gradient-mesh-dark pt-24 pb-10 px-6 relative overflow-hidden"
    >
      {/* Top gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.40), rgba(56, 189, 248, 0.30), rgba(14, 165, 233, 0.40), transparent)',
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="glow-orb absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-40"
        style={{ filter: 'blur(120px)' }}
      />
      <div className="glow-orb-accent absolute bottom-1/3 -right-40 w-[400px] h-[400px] animate-glow-breathe" style={{ animationDelay: '1s' }} />
      <div className="glow-orb absolute bottom-0 -left-32 w-[300px] h-[300px] animate-glow-breathe" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div
                className="p-2.5 rounded-xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0369A1, #0EA5E9, #38BDF8)',
                  boxShadow: '0 4px 20px rgba(14, 165, 233, 0.35)',
                }}
              >
                <Plane className="text-white w-5 h-5 relative z-10" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                  }}
                />
              </div>
              <span
                className="text-xl font-bold"
                style={{
                  background: 'linear-gradient(90deg, #38BDF8, #7DD3FC, #BAE6FD)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                My Sky Travels
              </span>
            </div>
            <p
              className="text-sm leading-relaxed font-light"
              style={{ color: 'var(--text-on-dark-secondary)' }}
            >
              EASILY SEARCH AND BOOK DOMESTIC AND INTERNATIONAL FLIGHTS WITH REAL-TIME AVAILABILITY.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="social-btn w-11 h-11 rounded-xl flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold mb-7 text-sm uppercase tracking-wider"
              style={{
                background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Destinations', href: '/destinations' },
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link font-medium">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="font-bold mb-7 text-sm uppercase tracking-wider"
              style={{
                background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Support
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'FAQs', href: '#' },
                { label: 'Terms & Conditions', href: '#' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Refund Policy', href: '#' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link font-medium">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — Glass Panel */}
          <div>
            <h4
              className="font-bold mb-7 text-sm uppercase tracking-wider"
              style={{
                background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Newsletter
            </h4>
            <p
              className="mb-6 text-sm font-light leading-relaxed"
              style={{ color: 'var(--text-on-dark-secondary)' }}
            >
              Subscribe to receive curated travel guides and exclusive Sri Lanka offers.
            </p>
            <div
              className="flex gap-2 p-1.5 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                className="form-input flex-1 rounded-lg px-4 py-3 text-sm !bg-transparent !border-0 !shadow-none"
              />
              <button className="cta-button !px-5 !py-3 !rounded-lg text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p style={{ color: 'var(--text-on-dark-muted)' }}>
            &copy; 2026 mySky Travels. All rights reserved. Designed by Sphiria Digital
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((text) => (
              <Link key={text} href="#" className="footer-meta-link">
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

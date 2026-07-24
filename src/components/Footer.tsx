'use client';

import Link from 'next/link';
import { Plane, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="section-dark-deep pt-20 pb-10 px-6 relative overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Top accent glow */}
      <div
        className="glow-orb absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32"
        style={{ filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div
                className="p-2 rounded-xl"
                style={{
                  background: 'var(--cta-bg)',
                  boxShadow: '0 4px 16px var(--cta-glow)',
                }}
              >
                <Plane className="text-white w-5 h-5" />
              </div>
              <span
                className="text-xl font-bold"
                style={{
                  background: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
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
                  className="social-btn w-10 h-10 rounded-xl flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: 'var(--accent-teal)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
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

          <div>
            <h4
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: 'var(--accent-teal)' }}
            >
              Support
            </h4>
            <ul className="space-y-3 text-sm">
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

          <div>
            <h4
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: 'var(--accent-teal)' }}
            >
              Newsletter
            </h4>
            <p
              className="mb-6 text-sm font-light"
              style={{ color: 'var(--text-on-dark-secondary)' }}
            >
              Subscribe to receive curated travel guides and exclusive Sri Lanka offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="form-input flex-1 rounded-xl px-4 py-3 text-sm"
              />
              <button className="cta-button !px-5 !py-3 !rounded-xl text-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
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

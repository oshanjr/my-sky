'use client';

import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Main Form Card */}
        <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-slate-200">
          
          <div className="mb-10 space-y-4">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-sky-900 bg-sky-100 px-4 py-1.5 rounded-full border border-sky-200 inline-block">
              Travel Inquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
              Tell us about your <span className="text-sky-600">trip</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Flights, visas, a custom tour, or just advice — send the basics and we'll reply from My Sky Travels. No passport scans or payment details needed here.
            </p>
          </div>

          <form className="space-y-6">
            
            {/* Service Type */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">What do you need?</label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 appearance-none transition-all">
                  <option>Flight tickets</option>
                  <option>Visa assistance</option>
                  <option>Custom tour / package</option>
                  <option>Travel consultation</option>
                  <option>Something else</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Destination */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Destination</label>
              <input
                type="text"
                placeholder="e.g. Japan, Singapore, Vietnam"
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Grid 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Grid 2: Phone & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Phone / WhatsApp <span className="text-slate-400 font-medium">(optional)</span></label>
                <input
                  type="tel"
                  placeholder="+94 ..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Budget <span className="text-slate-400 font-medium">(optional)</span></label>
                <input
                  type="text"
                  placeholder="e.g. mid-range, LKR 400,000"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Grid 3: Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Depart date <span className="text-slate-400 font-medium">(optional)</span></label>
                <input
                  type="date"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Return date <span className="text-slate-400 font-medium">(optional)</span></label>
                <input
                  type="date"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-500"
                />
              </div>
            </div>

            {/* Grid 4: Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Adults</label>
                <input
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Children</label>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
            </div>

            {/* Details Textarea */}
            <div className="space-y-2 pt-2">
              <label className="text-sm font-bold text-slate-700">Anything else we should know?</label>
              <textarea
                rows={4}
                placeholder="Pace, interests, visa status, preferred airlines..."
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none placeholder:text-slate-400"
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-start gap-3 py-4">
              <input 
                type="checkbox" 
                id="agreement" 
                className="mt-1 w-4 h-4 text-sky-600 bg-slate-50 border-slate-300 rounded focus:ring-sky-500"
              />
              <label htmlFor="agreement" className="text-xs sm:text-sm text-slate-600 leading-relaxed cursor-pointer select-none">
                I agree that My Sky Travels may contact me about this travel request. Details are emailed to the agency inbox and are not stored in a website database.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="button" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold rounded-full px-8 py-3.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Send inquiry
              </button>
            </div>

            {/* Footer text */}
            <div className="pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
              Or email <a href="mailto:info@myskytravels.com" className="font-semibold text-sky-600 hover:underline">info@myskytravels.com</a> / message on <a href="#" className="font-semibold text-sky-600 hover:underline">Facebook</a>.
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}

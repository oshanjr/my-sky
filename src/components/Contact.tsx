'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle, MapPin, Phone } from 'lucide-react';
import { submitInquiry } from '../app/actions/inquiry';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    const result = await submitInquiry(formData);

    if (result.success) {
      setIsSuccess(true);
      formRef.current.reset();
    } else {
      setError(result.error || 'Something went wrong');
    }
    
    setIsSubmitting(false);
  }

  if (isSuccess) {
    return (
      <section id="contact" className="py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-sky-200 text-center space-y-6">
            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-serif">
              Inquiry Sent Successfully!
            </h2>
            <p className="text-slate-600">
              Thank you for reaching out. One of our global travel experts will get back to you shortly.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="inline-block mt-4 text-sky-600 font-bold hover:underline"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8 h-full">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 h-full flex flex-col">
              <div className="mb-8 space-y-4">
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-sky-900 bg-sky-100 px-4 py-1.5 rounded-full border border-sky-200 inline-block">
                  Sri Lanka Office
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight font-serif">
                  Get in Touch
                </h2>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Address</h3>
                    <p className="text-slate-600 mt-1">
                      Negombo City Center, St Joshep St<br />
                      NEGOMBO, SRI LANKA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>
                    <p className="text-slate-600 mt-1">
                      +94 71 225 8000<br />
                      +94 71 230 8000
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden h-64 border border-slate-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.825624795412!2d79.83984507577533!3d7.20247659280145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee81f6920979%3A0x7d6a50616110f2d!2sNegombo%20City%20Center!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Negombo City Center Location"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>

          {/* Main Form Card */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 sm:p-12 shadow-sm border border-slate-200">
          
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

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-200">
                {error}
              </div>
            )}
            
            {/* Service Type */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">What do you need?</label>
              <div className="relative">
                <select name="serviceType" className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 appearance-none transition-all" required>
                  <option value="Flight tickets">Flight tickets</option>
                  <option value="Visa assistance">Visa assistance</option>
                  <option value="Custom tour / package">Custom tour / package</option>
                  <option value="Travel consultation">Travel consultation</option>
                  <option value="Something else">Something else</option>
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
                name="destination"
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
                  name="name"
                  required
                  placeholder="Full name"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
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
                  name="phone"
                  placeholder="+94 ..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Budget <span className="text-slate-400 font-medium">(optional)</span></label>
                <input
                  type="text"
                  name="budget"
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
                  name="departDate"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Return date <span className="text-slate-400 font-medium">(optional)</span></label>
                <input
                  type="date"
                  name="returnDate"
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
                  name="adults"
                  min="1"
                  defaultValue="2"
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Children</label>
                <input
                  type="number"
                  name="children"
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
                name="details"
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
                I agree that My Sky Travels may contact me about this travel request.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold rounded-full px-8 py-3.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send inquiry'}
              </button>
            </div>

            {/* Footer text */}
            <div className="pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-500">
              Or email <a href="mailto:info@myskytravels.com" className="font-semibold text-sky-600 hover:underline">info@myskytravels.com</a> / message on <a href="#" className="font-semibold text-sky-600 hover:underline">Facebook</a>.
            </div>

          </form>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

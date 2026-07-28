import Navbar from '../../components/Navbar';
import FeaturedDestinations from '../../components/FeaturedDestinations';
import Footer from '../../components/Footer';

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 inline-block">
            Global Destinations
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight">
            Explore The World
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover iconic landmarks, pristine beaches, vibrant cityscapes, and ancient UNESCO heritage sites across the globe.
          </p>
        </section>

        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
}

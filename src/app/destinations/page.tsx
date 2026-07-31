import Navbar from '../../components/Navbar';
import FeaturedDestinations from '../../components/FeaturedDestinations';
import Footer from '../../components/Footer';
import PageImageSlider from '../../components/PageImageSlider';

const destinationImages = [
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop', // Paris
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop', // Japan
  'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1600&auto=format&fit=crop', // Maldives
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-800 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 inline-block">
            Global Destinations
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight">
            Explore The World
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover iconic landmarks, pristine beaches, vibrant cityscapes, and ancient UNESCO heritage sites across the globe.
          </p>
        </section>

        <div className="mb-16">
          <PageImageSlider images={destinationImages} />
        </div>

        <FeaturedDestinations />
      </main>
      <Footer />
    </div>
  );
}

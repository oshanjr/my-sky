import Navbar from '../../components/Navbar';
import Services from '../../components/Services';
import Footer from '../../components/Footer';
import PageImageSlider from '../../components/PageImageSlider';

const serviceImages = [
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop', // Plane
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop', // Bus/Transport
  'https://images.unsplash.com/photo-1551882547-ff40c0b1398c?q=80&w=1600&auto=format&fit=crop', // Visa/Passport
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 inline-block">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight">
            Comprehensive Travel Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From flight bookings to visa assistance and luxury accommodation, we manage every detail of your journey.
          </p>
        </section>

        <div className="mb-16">
          <PageImageSlider images={serviceImages} />
        </div>

        <Services />
      </main>
      <Footer />
    </div>
  );
}

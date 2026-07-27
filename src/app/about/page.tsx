import Navbar from '../../components/Navbar';
import AgencyOverview from '../../components/AgencyOverview';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100 inline-block">
            Our Legacy & Vision
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-gray-900 tracking-tight">
            About My Sky Travels
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delivering authentic Ceylonese experiences, seamless visa guidance, and global travel solutions with unmatched passion.
          </p>
        </section>

        <AgencyOverview />
      </main>
      <Footer />
    </div>
  );
}

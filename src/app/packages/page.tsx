import Navbar from '../../components/Navbar';
import TailoredExperiences from '../../components/TailoredExperiences';
import Footer from '../../components/Footer';
import PageImageSlider from '../../components/PageImageSlider';

const packageImages = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop', // Landscape
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop', // Boat
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop', // Van
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <main className="pt-24">
        {/* Page Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-900 bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200 inline-block">
            Curated Itineraries
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight">
            Global Tour Packages
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Choose from custom-crafted journeys ranging from 4-day getaways to 16-day grand global explorations.
          </p>
        </section>

        <div className="mb-16">
          <PageImageSlider images={packageImages} />
        </div>

        <TailoredExperiences />
      </main>
      <Footer />
    </div>
  );
}

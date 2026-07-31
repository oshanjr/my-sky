import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TailoredExperiences from '../components/TailoredExperiences';
import LandscapeBanner from '../components/LandscapeBanner';
import StatsHighlight from '../components/StatsHighlight';
import TravelStories from '../components/TravelStories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <TailoredExperiences />
        <LandscapeBanner />
        <StatsHighlight />
        <TravelStories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

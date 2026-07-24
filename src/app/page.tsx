import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedDestinations from '../components/FeaturedDestinations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedDestinations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

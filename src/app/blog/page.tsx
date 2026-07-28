import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Hidden Gems in Japan You Must Visit',
    excerpt: 'Beyond the popular tourist trails lie breathtaking untouched landscapes, serene mountain villages, and ancient shrines waiting to be explored.',
    date: 'Oct 12, 2023',
    author: 'Oshan',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'A Culinary Journey Through Tokyo',
    excerpt: 'Discover the rich, umami, and vibrant street food culture of Japan\'s capital city. From Ramen to fresh sushi.',
    date: 'Sep 28, 2023',
    author: 'Sarah',
    category: 'Food & Culture',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3f8c8b4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Ultimate Guide to African Safaris',
    excerpt: 'Everything you need to know about spotting lions in the Serengeti and witnessing the great migration.',
    date: 'Sep 15, 2023',
    author: 'David',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1566296531481-5e6a8302f385?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Best Time to Visit Europe: Weather Guide',
    excerpt: 'Planning your trip? Learn about the two monsoon seasons and how to chase the sun across the island all year round.',
    date: 'Aug 30, 2023',
    author: 'Oshan',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Luxury Resorts of the Amalfi Coast',
    excerpt: 'A curated list of the most breathtaking luxury boutique hotels and eco-resorts nestled along the southern beaches.',
    date: 'Aug 14, 2023',
    author: 'Elena',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Hiking the Swiss Alps: What to Expect',
    excerpt: 'A detailed breakdown of the sacred pilgrimage climb, the best routes, and how to prepare for the spectacular sunrise view.',
    date: 'Jul 22, 2023',
    author: 'Mark',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />
      <main className="pt-24 pb-16">
        
        {/* Page Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-sky-900 bg-sky-100 px-4 py-1.5 rounded-full border border-sky-200 inline-block">
            Travel Journal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-slate-900 tracking-tight">
            Our Blog
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stories, tips, and insights from our travel experts to help you plan the perfect global adventure.
          </p>
        </section>

        {/* Featured Post (Hero style) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
          <Link href={`/blog/${blogPosts[0].id}`} className="group relative block w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-sm">
            <Image
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-sky-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-block">
                {blogPosts[0].category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-white tracking-tight leading-tight max-w-3xl">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-200 max-w-2xl text-sm md:text-base hidden sm:block">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 pt-2">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-1.5">
                  <User size={14} />
                  {blogPosts[0].author}
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Blog Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group">
                <Link href={`/blog/${post.id}`} className="relative h-60 w-full overflow-hidden block">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-purple-600 transition-colors group/link mt-2">
                    Read Article
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Newsletter CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-24">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-transparent opacity-50" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">Subscribe to our Newsletter</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Get the latest travel guides, tips, and exclusive offers delivered straight to your inbox.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-white/10 border border-white/20 text-white placeholder-slate-400 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button type="button" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3 rounded-full transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

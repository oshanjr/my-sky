import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const prisma = new PrismaClient();

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id }
  });

  if (!post) {
    notFound();
  }

  // Format date
  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-sm font-bold text-sky-600 tracking-widest uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100 shadow-sm">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm font-medium">{date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-600 font-medium">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border border-slate-300">
              <LucideIcons.User size={24} className="text-slate-400" />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-400 uppercase tracking-widest text-[10px]">Written By</p>
              <p className="text-slate-900 font-bold">{post.author}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[50vh] min-h-[400px] w-full rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-slate-200">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Content (Simulated) */}
        <div className="prose prose-lg prose-slate max-w-3xl mx-auto">
          <p className="text-2xl text-slate-600 font-serif italic leading-relaxed mb-10 text-center px-8 border-l-4 border-sky-400 bg-sky-50 py-6 rounded-r-3xl shadow-sm">
            "{post.excerpt}"
          </p>
          
          <p className="text-slate-700 leading-loose mb-6 text-lg">
            Traveling is more than just visiting new places; it's about experiencing the world in a way that changes your perspective forever. As we explored the hidden corners and vibrant cultures related to this destination, we discovered a wealth of stories just waiting to be told. The journey began with a simple curiosity, but it quickly evolved into a profound appreciation for the local traditions, the breathtaking landscapes, and the warmth of the people.
          </p>

          <h2 className="text-3xl font-bold font-serif text-slate-900 mt-12 mb-6">The Journey Unfolds</h2>
          <p className="text-slate-700 leading-loose mb-6 text-lg">
            Every great adventure requires a bit of spontaneity. While our itinerary was carefully planned to ensure we hit all the major highlights, some of the most memorable moments happened when we ventured off the beaten path. Whether it was discovering a hidden cafe tucked away in a narrow alley, or stumbling upon a local festival bursting with color and music, these serendipitous encounters are what truly define the travel experience.
          </p>

          <div className="my-12 grid grid-cols-2 gap-6">
             <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image src={post.image} alt={post.title} fill className="object-cover sepia-[.2]" />
             </div>
             <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image src={post.image} alt={post.title} fill className="object-cover hue-rotate-15" />
             </div>
          </div>

          <h2 className="text-3xl font-bold font-serif text-slate-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-slate-700 leading-loose mb-10 text-lg">
            As we reflect on this journey, it becomes clear that the true value of travel lies not in the photographs we take or the souvenirs we collect, but in the connections we make and the memories we create. We invite you to embark on your own adventure and discover the magic for yourself. The world is vast, and there is always something new to explore.
          </p>
        </div>

        {/* Footer actions */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
          <Link href="/blog" className="flex items-center gap-2 text-sky-600 font-bold hover:text-sky-700 transition-colors uppercase tracking-widest text-sm group">
            <LucideIcons.ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-100 hover:text-sky-600 transition-colors shadow-sm">
              <LucideIcons.Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-sky-100 hover:text-sky-600 transition-colors shadow-sm">
              <LucideIcons.Bookmark size={18} />
            </button>
          </div>
        </div>

      </article>
      </main>
      <Footer />
    </div>
  );
}

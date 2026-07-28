import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

const prisma = new PrismaClient();

export default async function TravelStories() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    take: 3
  });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/50 rounded-[3rem]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 px-4">
        <div className="space-y-4 max-w-2xl text-center sm:text-left">
          <span className="text-sm font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            Travel Journal
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
            Stories from the <span className="text-indigo-600">Road</span>
          </h2>
        </div>
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-700 font-semibold hover:text-indigo-800 transition-colors bg-indigo-50 hover:bg-indigo-100 px-6 py-3 rounded-full shrink-0 group border border-indigo-100"
        >
          Read all stories
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog`} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-900">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                <BookOpen size={14} />
                <span>5 min read</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 uppercase">{post.author}</span>
                <span className="text-indigo-600 font-semibold text-sm group-hover:underline">Read more</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

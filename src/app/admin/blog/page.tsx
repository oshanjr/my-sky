import { PrismaClient } from '@prisma/client';
import { deleteBlogPost } from '../../actions/blog';
import { Trash2, FileText, Plus } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Blog Posts</h1>
          <p className="text-slate-500 mt-2">Manage the travel stories and articles.</p>
        </div>
        <Link 
          href="/admin/blog/new" 
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl px-5 py-3 transition-colors"
        >
          <Plus size={18} />
          New Blog Post
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* List of Posts */}
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{post.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4 text-sm text-slate-600 font-medium">
                  <span className="bg-rose-100 text-rose-700 px-2.5 py-1 rounded-md text-xs font-bold">{post.category}</span>
                  <span className="text-xs">by {post.author}</span>
                </div>
              </div>
              <form action={deleteBlogPost} className="w-full sm:w-auto mt-4 sm:mt-0 flex justify-end">
                <input type="hidden" name="id" value={post.id} />
                <button type="submit" className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                  <Trash2 size={20} />
                </button>
              </form>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 border-dashed">
              <FileText size={40} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium text-lg">No blog posts found.</p>
              <Link href="/admin/blog/new" className="inline-block mt-4 text-rose-500 hover:text-rose-600 font-semibold">
                Create your first post &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


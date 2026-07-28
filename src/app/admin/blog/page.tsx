import { PrismaClient } from '@prisma/client';
import { addBlogPost, deleteBlogPost } from '../../actions/blog';
import { Trash2, FileText } from 'lucide-react';

const prisma = new PrismaClient();

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Blog Posts</h1>
        <p className="text-slate-500 mt-2">Manage the travel stories and articles.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* List of Posts */}
        <div className="xl:col-span-2 space-y-4">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{post.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-sm text-slate-600 font-medium">
                  <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-xs font-bold">{post.category}</span>
                  <span className="text-xs">by {post.author}</span>
                </div>
              </div>
              <form action={deleteBlogPost} className="w-full sm:w-auto mt-2 sm:mt-0 flex justify-end">
                <input type="hidden" name="id" value={post.id} />
                <button type="submit" className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                  <Trash2 size={18} />
                </button>
              </form>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 border-dashed">
              <FileText size={32} className="mx-auto text-slate-300 mb-3" />
              <p className="text-slate-500 font-medium">No blog posts found. Add one!</p>
            </div>
          )}
        </div>

        {/* Add New Form */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 h-fit sticky top-8">
          <h2 className="font-bold text-lg mb-6">Add New Post</h2>
          <form action={addBlogPost} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Title</label>
              <input type="text" name="title" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-500 text-white" />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Excerpt (Short Description)</label>
              <textarea name="excerpt" rows={3} required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-500 text-white resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Category</label>
                <input type="text" name="category" defaultValue="Travel Guide" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-500 text-white" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Author</label>
                <input type="text" name="author" defaultValue="My Sky Team" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-500 text-white" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Image URL</label>
              <input type="url" name="image" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-rose-500 text-white" />
            </div>

            <button type="submit" className="w-full mt-2 bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-xl px-4 py-3 transition-colors">
              Save Blog Post
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

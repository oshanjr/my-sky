import Link from 'next/link';
import { addBlogPost } from '../../../../actions/blog';
import { ArrowLeft, Bold, Italic, Heading2, Heading3, List, ListOrdered, Quote, Link as LinkIcon, Image as ImageIcon, Save, Calendar, UploadCloud } from 'lucide-react';

export default function NewBlogPostPage() {
  return (
    <div className="bg-[#040814] min-h-screen text-slate-300 p-6 sm:p-8 font-sans -m-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin/blog" className="text-slate-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-white tracking-tight">New Blog Post</h1>
        </div>

        <form action={addBlogPost} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Post Title */}
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-white tracking-wide">Post Title *</label>
                <input 
                  type="text" 
                  name="title" 
                  required
                  placeholder="e.g. UAE Visit Visa Types — What You Need to Know"
                  className="w-full bg-[#0d1424] border border-slate-700/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-500 text-white placeholder:text-slate-500 transition-colors"
                />
              </div>

              {/* Post Content */}
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-white tracking-wide">Post Content</label>
                <div className="bg-[#0d1424] border border-slate-700/60 rounded-xl overflow-hidden focus-within:border-slate-500 transition-colors">
                  {/* Toolbar */}
                  <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-700/60 text-slate-400 bg-[#0B1120]">
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><Bold size={15} /></button>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><Italic size={15} /></button>
                    <div className="w-px h-4 bg-slate-700/60 mx-1"></div>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><Heading2 size={15} /></button>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><Heading3 size={15} /></button>
                    <div className="w-px h-4 bg-slate-700/60 mx-1"></div>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><List size={15} /></button>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><ListOrdered size={15} /></button>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><Quote size={15} /></button>
                    <div className="w-px h-4 bg-slate-700/60 mx-1"></div>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><LinkIcon size={15} /></button>
                    <button type="button" className="p-1.5 hover:bg-slate-700/50 hover:text-white rounded-md transition-colors"><ImageIcon size={15} /></button>
                  </div>
                  <textarea 
                    name="content"
                    rows={12}
                    className="w-full bg-transparent px-4 py-4 text-sm focus:outline-none text-white resize-y"
                  ></textarea>
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-white tracking-wide">Excerpt</label>
                <p className="text-xs text-slate-500 mb-2">Short summary for the blog grid. Auto-generated if left blank.</p>
                <textarea 
                  name="excerpt" 
                  rows={4} 
                  required
                  placeholder="Brief summary of the article..."
                  className="w-full bg-[#0d1424] border border-slate-700/60 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-500 text-white placeholder:text-slate-500 resize-none transition-colors"
                ></textarea>
              </div>
            </div>

            {/* Right Column - Settings */}
            <div className="space-y-6">
              
              {/* Publish Settings */}
              <div className="bg-[#0d1424] border border-slate-700/60 rounded-xl p-5 space-y-5">
                <h3 className="font-bold text-white border-b border-slate-700/60 pb-3 text-sm tracking-wide">Publish Settings</h3>
                
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">URL Slug</label>
                  <input 
                    type="text" 
                    name="slug" 
                    className="w-full bg-[#040814] border border-slate-700/60 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-500 text-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Category</label>
                  <select 
                    name="category"
                    className="w-full bg-[#040814] border border-slate-700/60 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-500 text-white transition-colors"
                  >
                    <option value="Visa Tips">Visa Tips</option>
                    <option value="Travel Guide">Travel Guide</option>
                    <option value="Destinations">Destinations</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Author</label>
                  <input 
                    type="text" 
                    name="author" 
                    defaultValue="mySky Destination Tourism LLC"
                    className="w-full bg-[#040814] border border-slate-700/60 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-500 text-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Publish Date</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="07/28/2026 02:03 PM"
                      className="w-full bg-[#040814] border border-slate-700/60 rounded-lg pl-3 pr-10 py-2.5 text-sm focus:outline-none focus:border-slate-500 text-white transition-colors"
                    />
                    <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="bg-[#0d1424] border border-slate-700/60 rounded-xl p-5 space-y-4">
                <h3 className="font-bold text-white border-b border-slate-700/60 pb-3 text-sm tracking-wide">Featured Image</h3>
                <div className="flex items-start gap-2.5 text-xs text-slate-400 mb-1">
                  <ImageIcon size={14} className="shrink-0 mt-0.5 opacity-70" />
                  <p className="leading-relaxed">Image URL (Cloudinary integration pending)</p>
                </div>
                <input 
                  type="url" 
                  name="image" 
                  required
                  placeholder="https://..."
                  className="w-full bg-[#040814] border border-slate-700/60 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-slate-500 text-white placeholder:text-slate-600 transition-colors"
                />
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/60 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
            <label className="flex items-center gap-3 cursor-pointer group w-full sm:w-auto">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" className="peer appearance-none w-5 h-5 border border-slate-600 rounded bg-[#0d1424] checked:bg-white checked:border-white transition-all cursor-pointer" />
                <div className="absolute text-slate-900 opacity-0 peer-checked:opacity-100 pointer-events-none">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5L4.5 8L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <span className="text-sm text-slate-300 font-semibold tracking-wide group-hover:text-white transition-colors">Published Status (Visible to public)</span>
            </label>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button type="button" className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-sm font-semibold tracking-wide hover:bg-slate-800 hover:text-white transition-colors">
                Save as Draft
              </button>
              <button type="submit" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white text-sm font-semibold tracking-wide transition-colors">
                <Save size={16} className="opacity-70" />
                Publish Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

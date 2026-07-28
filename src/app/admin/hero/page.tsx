import { PrismaClient } from '@prisma/client';
import { updateHeroConfig } from '../../actions/hero';
import { ImageIcon } from 'lucide-react';

const prisma = new PrismaClient();

export default async function AdminHeroPage() {
  let config = await prisma.heroConfig.findFirst();
  
  if (!config) {
    config = {
      id: '',
      title: 'The World',
      subtitle: "Embark on a Journey That's Uniquely Yours",
      description: 'Curated travel itineraries, authentic cultural experiences, and tailor-made holidays across the globe.',
      images: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2000&auto=format&fit=crop"
      ],
      updatedAt: new Date()
    };
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Hero Settings</h1>
        <p className="text-slate-500 mt-2">Manage the main hero banner on the homepage.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <form action={updateHeroConfig} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Main Title</label>
            <input
              type="text"
              name="title"
              defaultValue={config.title}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Subtitle</label>
            <input
              type="text"
              name="subtitle"
              defaultValue={config.subtitle}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Description</label>
            <textarea
              name="description"
              rows={3}
              defaultValue={config.description}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Slider Images (One URL per line)</label>
            <p className="text-xs text-slate-500 mb-2">You can paste Google Drive links directly, and the system will attempt to format them.</p>
            <textarea
              name="images"
              rows={5}
              defaultValue={config.images.join('\n')}
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 resize-none font-mono"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-8 py-3 transition-colors">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {config.images.map((img, idx) => (
          <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 shadow-sm group bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt="Hero preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
              Image {idx + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

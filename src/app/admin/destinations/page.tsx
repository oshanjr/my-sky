import { PrismaClient } from '@prisma/client';
import { addDestination, deleteDestination } from '../../actions/destinations';
import { Trash2, Palmtree } from 'lucide-react';

const prisma = new PrismaClient();

export default async function AdminDestinationsPage() {
  const destinations = await prisma.destination.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Destinations</h1>
        <p className="text-slate-500 mt-2">Manage the featured destinations shown on the homepage and destinations page.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* List of Destinations */}
        <div className="xl:col-span-2 space-y-4">
          {destinations.map(dest => (
            <div key={dest.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{dest.name}</h3>
                    <p className="text-sm text-slate-500">{dest.location}</p>
                  </div>
                  <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-xs font-bold">{dest.tag}</span>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-slate-600 font-medium">
                  <span>From {dest.price}</span>
                  <span>★ {dest.rating}</span>
                </div>
              </div>
              <form action={deleteDestination} className="w-full sm:w-auto mt-2 sm:mt-0 flex justify-end">
                <input type="hidden" name="id" value={dest.id} />
                <button type="submit" className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                  <Trash2 size={18} />
                </button>
              </form>
            </div>
          ))}

          {destinations.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 border-dashed">
              <Palmtree size={32} className="mx-auto text-slate-300 mb-3" />
              <p className="text-slate-500 font-medium">No destinations found. Add one!</p>
            </div>
          )}
        </div>

        {/* Add New Form */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 h-fit sticky top-8">
          <h2 className="font-bold text-lg mb-6">Add Destination</h2>
          <form action={addDestination} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Name (Title)</label>
              <input type="text" name="name" placeholder="e.g. Kyoto Temples" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</label>
              <input type="text" name="location" placeholder="e.g. Japan" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Price Text</label>
                <input type="text" name="price" placeholder="$1,200" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Rating</label>
                <input type="number" step="0.1" max="5" name="rating" defaultValue="5.0" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tag (e.g. Trending)</label>
              <input type="text" name="tag" defaultValue="Luxury" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Image URL</label>
              <input type="url" name="image" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
            </div>

            <button type="submit" className="w-full mt-2 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl px-4 py-3 transition-colors">
              Save Destination
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

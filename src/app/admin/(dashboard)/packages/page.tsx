import { PrismaClient } from '@prisma/client';
import { addPackage, deletePackage } from '../../../actions/packages';
import { Trash2, Map } from 'lucide-react';

const prisma = new PrismaClient();

export default async function AdminPackagesPage() {
  const packages = await prisma.tourPackage.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Tour Packages</h1>
        <p className="text-slate-500 mt-2">Manage the tailored experiences shown on the site.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* List of Packages */}
        <div className="xl:col-span-2 space-y-4">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">{pkg.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-semibold">{pkg.days} Days</span>
                  <span>Icon: {pkg.icon}</span>
                </div>
              </div>
              <form action={deletePackage}>
                <input type="hidden" name="id" value={pkg.id} />
                <button type="submit" className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                  <Trash2 size={18} />
                </button>
              </form>
            </div>
          ))}

          {packages.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 border-dashed">
              <Map size={32} className="mx-auto text-slate-300 mb-3" />
              <p className="text-slate-500 font-medium">No packages found. Add one!</p>
            </div>
          )}
        </div>

        {/* Add New Form */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 h-fit sticky top-8">
          <h2 className="font-bold text-lg mb-6">Add New Package</h2>
          <form action={addPackage} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Title</label>
              <input type="text" name="title" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duration (Days)</label>
              <input type="number" name="days" required min="1" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lucide Icon Name</label>
              <input type="text" name="icon" defaultValue="Map" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
              <p className="text-[10px] text-slate-500">e.g. Map, Palmtree, Compass, Mountain</p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Image URL</label>
              <input type="url" name="image" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-500 text-white" />
            </div>

            <button type="submit" className="w-full mt-2 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl px-4 py-3 transition-colors">
              Save Package
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

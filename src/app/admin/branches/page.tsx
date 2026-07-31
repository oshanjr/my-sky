import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { Plus, MapPin, Map, Star, Phone } from 'lucide-react';
import { deleteBranch } from '../../actions/branch';

const prisma = new PrismaClient();

export default async function AdminBranchesPage() {
  const branches = await prisma.branch.findMany({
    orderBy: [
      { isMain: 'desc' },
      { createdAt: 'asc' }
    ]
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-serif">Branches & Locations</h1>
          <p className="text-sm text-slate-500 mt-1">Manage contact info, phones, and addresses for your global offices.</p>
        </div>
        <Link 
          href="/admin/branches/edit" 
          className="flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-sky-500 transition-colors shadow-sm"
        >
          <Plus size={16} />
          Add Branch
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {branches.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            <Map size={48} className="mx-auto text-slate-300 mb-4" />
            <p className="mb-4">No branches added yet.</p>
            <Link href="/admin/branches/edit" className="text-sky-600 font-medium hover:underline">Create your first branch</Link>
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-500">
                <th className="p-4">Branch Name</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {branches.map((branch) => (
                <tr key={branch.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-8 h-8 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{branch.name}</div>
                        <div className="text-sm text-slate-500 line-clamp-1">{branch.address}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="space-y-1">
                      {branch.phone1 && (
                        <div className="flex items-center gap-1.5 text-sm text-slate-600">
                          <Phone size={12} className="text-slate-400" /> {branch.phone1}
                        </div>
                      )}
                      {branch.email && (
                        <div className="text-sm text-sky-600 line-clamp-1">{branch.email}</div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    {branch.isMain ? (
                      <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        <Star size={12} className="fill-amber-700" /> Main HQ
                      </span>
                    ) : (
                      <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Branch
                      </span>
                    )}
                  </td>
                  <td className="p-4 align-top text-right space-x-3">
                    <Link href={`/admin/branches/edit?id=${branch.id}`} className="text-sm font-medium text-sky-600 hover:text-sky-700">
                      Edit
                    </Link>
                    <form action={async () => {
                      'use server';
                      await deleteBranch(branch.id);
                    }} className="inline-block">
                      <button type="submit" className="text-sm font-medium text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

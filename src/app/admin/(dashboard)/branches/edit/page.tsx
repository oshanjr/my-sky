import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';
import { createBranch, updateBranch } from '../../../../actions/branch';

const prisma = new PrismaClient();

export default async function EditBranchPage({ searchParams }: { searchParams: { id?: string } }) {
  const isEditing = !!searchParams.id;
  let branch = null;

  if (isEditing) {
    branch = await prisma.branch.findUnique({
      where: { id: searchParams.id }
    });
    if (!branch) {
      redirect('/admin/branches');
    }
  }

  async function handleSubmit(formData: FormData) {
    'use server';
    
    const id = searchParams.id;
    if (id) {
      await updateBranch(id, formData);
    } else {
      await createBranch(formData);
    }
    
    redirect('/admin/branches');
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <Link href="/admin/branches" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-4 font-medium transition-colors">
          <ArrowLeft size={16} /> Back to Branches
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 font-serif">
          {isEditing ? 'Edit Branch' : 'Add New Branch'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {isEditing ? 'Update the details for this office location.' : 'Fill out the form below to add a new office location.'}
        </p>
      </div>

      <form action={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Branch Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="name" 
            defaultValue={branch?.name || ''} 
            required
            placeholder="e.g. Sri Lanka Headquarters"
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Physical Address <span className="text-red-500">*</span></label>
          <textarea 
            name="address" 
            defaultValue={branch?.address || ''} 
            required
            rows={3}
            placeholder="e.g. Negombo City Center, St Joshep St..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Primary Phone</label>
            <input 
              type="text" 
              name="phone1" 
              defaultValue={branch?.phone1 || ''} 
              placeholder="+94 71 225 8000"
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Secondary Phone</label>
            <input 
              type="text" 
              name="phone2" 
              defaultValue={branch?.phone2 || ''} 
              placeholder="+94 71 230 8000"
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Email Address</label>
          <input 
            type="email" 
            name="email" 
            defaultValue={branch?.email || ''} 
            placeholder="info@myskytravels.com"
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Google Maps Embed URL <span className="text-slate-400 font-normal text-xs ml-1">(src attribute inside iframe)</span></label>
          <input 
            type="url" 
            name="mapUrl" 
            defaultValue={branch?.mapUrl || ''} 
            placeholder="https://www.google.com/maps/embed?pb=..."
            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 py-2">
          <input 
            type="checkbox" 
            id="isMain" 
            name="isMain"
            defaultChecked={branch?.isMain}
            className="w-4 h-4 text-sky-600 bg-slate-50 border-slate-300 rounded focus:ring-sky-500"
          />
          <label htmlFor="isMain" className="text-sm font-bold text-slate-700 cursor-pointer select-none">
            Set as Main Headquarters
          </label>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
          <Link 
            href="/admin/branches"
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Cancel
          </Link>
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-colors"
          >
            <Save size={16} />
            {isEditing ? 'Save Changes' : 'Create Branch'}
          </button>
        </div>

      </form>
    </div>
  );
}

import { PrismaClient } from '@prisma/client';
import { Mail, Phone, Calendar, User, MapPin } from 'lucide-react';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export default async function InquiriesPage() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: 'desc' }
  });

  async function updateStatus(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    const status = formData.get('status') as string;
    await prisma.inquiry.update({
      where: { id },
      data: { status }
    });
    revalidatePath('/admin/inquiries');
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Inquiries</h1>
        <p className="text-slate-500 mt-2">Manage customer inquiries and travel requests.</p>
      </div>

      <div className="grid gap-6">
        {inquiries.map(inquiry => (
          <div key={inquiry.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <User size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{inquiry.name}</h3>
                    <p className="text-xs text-slate-500">{new Date(inquiry.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  inquiry.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                  inquiry.status === 'Contacted' ? 'bg-sky-100 text-sky-700' :
                  'bg-sky-100 text-sky-700'
                }`}>
                  {inquiry.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Service</span>
                  <span className="text-sm font-semibold text-slate-900">{inquiry.serviceType}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Destination</span>
                  <span className="text-sm font-semibold text-slate-900">{inquiry.destination || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Budget</span>
                  <span className="text-sm font-semibold text-slate-900">{inquiry.budget || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block mb-1">Travelers</span>
                  <span className="text-sm font-semibold text-slate-900">{inquiry.adults} Adults, {inquiry.children} Children</span>
                </div>
              </div>

              {inquiry.details && (
                <div className="text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border-l-4 border-slate-200">
                  {inquiry.details}
                </div>
              )}
            </div>

            <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
              <div className="space-y-3">
                <a href={`mailto:${inquiry.email}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600">
                  <Mail size={16} /> {inquiry.email}
                </a>
                {inquiry.phone && (
                  <a href={`tel:${inquiry.phone}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600">
                    <Phone size={16} /> {inquiry.phone}
                  </a>
                )}
              </div>
              
              <form action={updateStatus} className="mt-4 flex gap-2">
                <input type="hidden" name="id" value={inquiry.id} />
                <select 
                  name="status" 
                  defaultValue={inquiry.status}
                  className="bg-slate-100 border border-slate-200 text-xs font-bold rounded-lg px-2 py-2 w-full focus:outline-none"
                >
                  <option value="Pending">Pending</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Resolved">Resolved</option>
                </select>
                <button type="submit" className="bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-slate-800">
                  Save
                </button>
              </form>
            </div>
          </div>
        ))}

        {inquiries.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500">No inquiries found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

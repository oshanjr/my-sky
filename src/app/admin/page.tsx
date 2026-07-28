import { PrismaClient } from '@prisma/client';
import { MessageSquare, Map, FileText, Palmtree } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  // Fetch quick stats
  const [inquiriesCount, packagesCount, destinationsCount, blogCount] = await Promise.all([
    prisma.inquiry.count({ where: { status: 'Pending' } }),
    prisma.tourPackage.count(),
    prisma.destination.count(),
    prisma.blogPost.count()
  ]);

  const stats = [
    { title: 'New Inquiries', value: inquiriesCount, icon: MessageSquare, color: 'text-sky-500', bg: 'bg-sky-100', link: '/admin/inquiries' },
    { title: 'Tour Packages', value: packagesCount, icon: Map, color: 'text-amber-500', bg: 'bg-amber-100', link: '/admin/packages' },
    { title: 'Destinations', value: destinationsCount, icon: Palmtree, color: 'text-emerald-500', bg: 'bg-emerald-100', link: '/admin/destinations' },
    { title: 'Blog Posts', value: blogCount, icon: FileText, color: 'text-rose-500', bg: 'bg-rose-100', link: '/admin/blog' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-2">Welcome to the My Sky Travels CMS. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Link key={idx} href={stat.link} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <Icon size={24} />
                </div>
              </div>
              <div>
                <span className="text-4xl font-extrabold text-slate-900 block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-500 mt-1 block uppercase tracking-wider">
                  {stat.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

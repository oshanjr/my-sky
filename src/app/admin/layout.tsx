import Link from 'next/link';
import { LayoutDashboard, MessageSquare, Image as ImageIcon, Map, Palmtree, FileText, LogOut } from 'lucide-react';
import { logout } from '../actions/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col hidden md:flex">
        <div className="p-6">
          <Link href="/admin" className="text-xl font-bold font-serif tracking-tight">
            My Sky <span className="font-sans font-normal text-sky-400">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            <LayoutDashboard size={18} className="text-slate-400" />
            Dashboard
          </Link>
          <Link href="/admin/inquiries" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            <MessageSquare size={18} className="text-sky-400" />
            Inquiries
          </Link>
          
          <div className="pt-4 pb-2 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
            Content
          </div>
          <Link href="/admin/hero" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            <ImageIcon size={18} className="text-purple-400" />
            Hero Banner
          </Link>
          <Link href="/admin/packages" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            <Map size={18} className="text-amber-400" />
            Packages
          </Link>
          <Link href="/admin/destinations" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            <Palmtree size={18} className="text-emerald-400" />
            Destinations
          </Link>
          <Link href="/admin/blog" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium">
            <FileText size={18} className="text-rose-400" />
            Blog Posts
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <form action={logout}>
            <button type="submit" className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-red-500/10 text-red-400 transition-colors text-sm font-medium">
              <LogOut size={18} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Dev<span className="text-blue-600">Link</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/devs" className="text-gray-700 hover:text-blue-600 transition">
            View Developers
          </Link>
          <Link href="/add" className="text-gray-700 hover:text-blue-600 transition">
            Add Developer
          </Link>
        </div>
      </div>
    </nav>
  );
}

// src/app/layout.tsx

import '../app/globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Course App',
  description: 'Manage your courses easily',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <nav className="bg-blue-500 p-4 text-white">
          <Link href="/update-course-content">
            Update Course Content
          </Link>
        </nav>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}

'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav className="flex h-16 w-screen items-center gap-2 border-b border-b-gray-200 px-6">
        <Link href="/" className="ml-auto mr-auto text-2xl font-semibold">
          Home
        </Link>
        <Link href="/scores" className="mr-auto text-xl font-semibold">
          Scores
        </Link>
      </nav>
    </>
  );
}

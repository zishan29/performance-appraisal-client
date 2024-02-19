'use client';

import Link from 'next/link';

export default function TopNav() {
  return (
    <>
      <nav
        className="fixed left-60 right-0 top-4 mr-4 flex items-center gap-1
      "
      >
        <div className="h-12 grow rounded-md bg-gray-100"></div>
        <Link
          href="/academic-involvement/form-1"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-1
        </Link>
        <Link
          href="/academic-involvement/form-2"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-2
        </Link>
        <Link
          href="/academic-involvement/form-3"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-3.1
        </Link>
        <Link
          href="/academic-involvement/form-4"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-3.2
        </Link>
        <Link
          href="/academic-involvement/form-5"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-3.3
        </Link>
        <Link
          href="/academic-involvement/form-6"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-3.4
        </Link>
        <Link
          href="/academic-involvement/form-7"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-4
        </Link>
        <Link
          href="/academic-involvement/form-8"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-5
        </Link>
        <Link
          href="/academic-involvement/form-9"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-6
        </Link>
        <Link
          href="/academic-involvement/form-10"
          className="rounded-md bg-gray-100 px-5 py-3"
        >
          AI-7
        </Link>
        <div className="h-12 grow rounded-md bg-gray-100"></div>
      </nav>
    </>
  );
}

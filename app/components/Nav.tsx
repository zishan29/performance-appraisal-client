'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 h-screen w-60 p-4">
        <div className="flex h-full w-full flex-col gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md bg-gray-100 px-5 py-3 text-xl font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home w-6"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
          <Link
            href="/scores"
            className="flex items-center gap-2 rounded-md bg-gray-100 px-5 py-3 text-xl font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6"
            >
              <title>card-bulleted-outline</title>
              <path d="M12,15H10V13H12V15M18,15H14V13H18V15M8,11H6V9H8V11M18,11H10V9H18V11M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M4,6V18H20V6H4Z" />
            </svg>
            Scores
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-2 rounded-md bg-gray-100 px-5 py-3 text-xl font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user w-6"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Profile
          </Link>
          <div className="grow rounded-md bg-gray-100 px-5 py-3"></div>
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-md bg-gray-100 px-5 py-3 text-xl font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out w-6"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
            logout
          </Link>
        </div>
      </nav>
    </>
  );
}

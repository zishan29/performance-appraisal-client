'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';

export default function Home() {
  const [userType, setUserType] = useState('');
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        let res = await fetch(
          'https://performance-appraisal-api.adaptable.app/verifyToken',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: localStorage.getItem('token') }),
          },
        );
        if (res.status === 200) {
          const resData = await res.json();
          setUserType(resData.user.user.userType);
        }
        if (res.status === 401) {
          let resData = await res.json();
          console.log(resData.error);
          router.push('/login');
        }
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return (
    <main className="flex min-h-screen flex-col items-center">
      {userType === 'user' ? (
        <>
          <Nav />
          <div className="flex flex-col">
            <div className="flex flex-col px-4 py-2">
              <div className="mb-4">Academic Involvement</div>
              <div className="grid grid-cols-7">
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-1"
                >
                  AI-1
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-2"
                >
                  AI-2
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-3.1"
                >
                  AI-3.1
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-3.2"
                >
                  AI-3.2
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-3.3"
                >
                  AI-3.3
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-3.4"
                >
                  AI-3.4
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-4"
                >
                  AI-4
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-5"
                >
                  AI-5
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-6"
                >
                  AI-6
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-7"
                >
                  AI-7
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-8"
                >
                  AI-8
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-9-Engg"
                >
                  AI-9 Engg
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-9-MMS"
                >
                  AI-9 MMS
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-10-Engg"
                >
                  AI-10 Engg
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-10-MMS"
                >
                  AI-10 MMS
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-11"
                >
                  AI-11
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-12"
                >
                  AI-12
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-13"
                >
                  AI-13
                </Link>
                <Link
                  className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-200"
                  href="/academic-involvement/AI-14"
                >
                  AI-14
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </main>
  );
}

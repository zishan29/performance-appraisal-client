'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Guidelines from './components/Guidelines';

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
    <main className="flex flex-col items-center">
      {userType === 'user' ? (
        <>
          <Nav />
          <div className="flex flex-col w-3/4">
            <div className='flex flex-col gap-4 my-4'>
              <div className='flex gap-4 p-4 rounded-md bg-gray-100'>
                Aacademic Involvement 
                <span className='ml-auto'>Progress: 0%</span>
                <Link href='/academic-involvement'>Fill this category</Link>
              </div>
              <div className='flex gap-4 p-4 rounded-md bg-gray-100'>
                Student Development 
                <span className='ml-auto'>Progress: 0%</span>
                <Link href='#'>Fill this category</Link>
              </div>
              <div className='flex gap-4 p-4 rounded-md bg-gray-100'>
                Administrative Bucket 
                <span className='ml-auto'>Progress: 0%</span>
                <Link href='#'>Fill this category</Link>
              </div>
              <div className='flex gap-4 p-4 rounded-md bg-gray-100'>
                Research Bucket 
                <span className='ml-auto'>Progress: 0%</span>
                <Link href='#'>Fill this category</Link>
              </div>
              <div className='flex gap-4 p-4 rounded-md bg-gray-100'>
                Consultancy and Corporate Training Bucket 
                <span className='ml-auto'>Progress: 0%</span>
                <Link href='#'>Fill this category</Link>
              </div>
            </div>
            <Guidelines />
          </div>
        </>
      ) : (
        ''
      )}
    </main>
  );
}

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Guidelines from './components/Guidelines';

interface Progress {
  'Student Development': number;
  'Academic Involvement': number;
}

interface Category {
  completedForms: number;
  facultyId: string;
  maxScore: number;
  _id: string;
  name: string;
  totalForms: number;
}

export default function Home() {
  const [userType, setUserType] = useState('');
  const [progress, setProgress] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
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
          const token = localStorage.getItem('token');
          const bearer = `Bearer ${token}`;
          try {
            const res = await fetch(
              'https://performance-appraisal-api.adaptable.app/userProgress',
              {
                method: 'GET',
                headers: {
                  Authorization: bearer,
                },
              },
            );
            const resData = await res.json();
            setProgress(resData.progress);
            console.log(resData.progress);
          } catch (err) {
            console.log(err);
          }
        }
        if (res.status === 401) {
          let resData = await res.json();
          console.log(resData.error);
          router.push('/login');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    (async () => {
      try {
        const res = await fetch(
          'https://performance-appraisal-api.adaptable.app/categories',
          {
            method: 'GET',
            headers: {
              Authorization: bearer,
            },
          },
        );
        const resData = await res.json();
        resData.categories.map((category: Category) => {
          localStorage.setItem(`${category.name}`, category._id);
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const getAILink = () => {
    if (!progress) return '#';
    const percentage = progress['Academic Involvement'];
    const formsCompleted = Math.floor((percentage / 100) * 7);
    const nextFormNumber = formsCompleted + 1;
    return `/academic-involvement/form-${nextFormNumber}`;
  };

  return (
    <main className="flex items-center">
      {userType === 'user' ? (
        <>
          <Nav />
          {loading ? (
            <>
              <div className="fixed left-1/2 top-1/2 ml-20">
                <div className="dot-spinner ">
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                  <div className="dot-spinner__dot"></div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="ml-60 flex grow flex-col px-4">
                <div className="my-4 flex flex-col gap-4">
                  <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                    Academic Involvement
                    <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                      <div
                        className="absolute bottom-0 left-0 top-0 rounded-full bg-fuchsia-600"
                        style={{
                          width: `${progress?.['Academic Involvement']}%`,
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        {progress
                          ? `${progress['Academic Involvement'].toFixed(2)}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href={getAILink()}>
                      Fill this category
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                    Student Development
                    <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                      <div
                        className="absolute bottom-0 left-0 top-0 rounded-full bg-fuchsia-600"
                        style={{
                          width: `${progress?.['Student Development']}%`,
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        {progress
                          ? `${progress?.['Student Development']}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill this category
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                    Administrative Bucket
                    <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                      <div
                        className="absolute bottom-0 left-0 top-0 rounded-full bg-fuchsia-600"
                        style={{
                          width: `${progress?.['Student Development']}%`,
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        {progress
                          ? `${progress?.['Student Development']}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill this category
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                    Research Bucket
                    <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                      <div
                        className="absolute bottom-0 left-0 top-0 rounded-full bg-fuchsia-600"
                        style={{
                          width: `${progress?.['Student Development']}%`,
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        {progress
                          ? `${progress?.['Student Development']}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill this category
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                    Consultancy and Corporate Training Bucket
                    <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                      <div
                        className="absolute bottom-0 left-0 top-0 rounded-full bg-fuchsia-600"
                        style={{
                          width: `${progress?.['Student Development']}%`,
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-black">
                        {progress
                          ? `${progress?.['Student Development']}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill this category
                    </Link>
                  </div>
                </div>
                <Guidelines />
              </div>
            </>
          )}
        </>
      ) : (
        ''
      )}
    </main>
  );
}

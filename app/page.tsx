'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import userServices from './services/user';
import Loader from './components/Loader';

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
  const [progress, setProgress] = useState<Progress | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    userServices
      .verifyToken({ token: localStorage.getItem('token') })
      .then(() => {
        userServices.getUserProgress().then((responseData) => {
          setProgress(responseData.progress);
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          router.push('/login');
        }
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    userServices
      .getCategories()
      .then((responseData) => {
        responseData.categories.map((category: Category) => {
          localStorage.setItem(`${category.name}`, category._id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getAILink = () => {
    if (!progress) return '#';
    const percentage = progress['Academic Involvement'];
    const formsCompleted = Math.floor((percentage / 100) * 7);
    const nextFormNumber = formsCompleted + 1;
    return `/academic-involvement/form-${nextFormNumber}`;
  };

  return (
    <main className="flex flex-col items-center">
      <Nav />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="flex w-full max-w-5xl flex-col px-2 sm:px-6 md:w-3/4 lg:px-8">
            <div className="my-4 flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                Academic Involvement
                <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                  <div
                    className="absolute bottom-0 left-0 top-0 rounded-full bg-[#ff6384]"
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
                <Link className="AIbutton" href={getAILink()}>
                  Fill
                </Link>
                <Link className="AIbutton" href="#">
                  Submit
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                Student Development
                <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                  <div
                    className="absolute bottom-0 left-0 top-0 rounded-full bg-[#ff9f40]"
                    style={{
                      width: `${progress?.['Student Development']}%`,
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-black">
                    {progress
                      ? `${progress?.['Student Development'].toFixed(2)}%`
                      : '0%'}
                  </div>
                </div>
                <Link className="SDbutton" href="#">
                  Fill
                </Link>
                <Link className="SDbutton" href="#">
                  Submit
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                Administrative Bucket
                <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                  <div
                    className="absolute bottom-0 left-0 top-0 rounded-full bg-[#ffcd56]"
                    style={{
                      width: `${progress?.['Student Development']}%`,
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-black">
                    {progress
                      ? `${progress?.['Student Development'].toFixed(2)}%`
                      : '0%'}
                  </div>
                </div>
                <Link className="ABbutton" href="#">
                  Fill
                </Link>
                <Link className="ABbutton" href="#">
                  Submit
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                Research Bucket
                <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                  <div
                    className="absolute bottom-0 left-0 top-0 rounded-full bg-[#4bc0c0]"
                    style={{
                      width: `${progress?.['Student Development']}%`,
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-black">
                    {progress
                      ? `${progress?.['Student Development'].toFixed(2)}%`
                      : '0%'}
                  </div>
                </div>
                <Link className="RBbutton" href="#">
                  Fill
                </Link>
                <Link className="RBbutton" href="#">
                  Submit
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                Consultancy and Corporate Training Bucket
                <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                  <div
                    className="absolute bottom-0 left-0 top-0 rounded-full bg-[#36a2eb]"
                    style={{
                      width: `${progress?.['Student Development']}%`,
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-black">
                    {progress
                      ? `${progress?.['Student Development'].toFixed(2)}%`
                      : '0%'}
                  </div>
                </div>
                <Link className="CCbutton" href="#">
                  Fill
                </Link>
                <Link className="CCbutton" href="#">
                  Submit
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
                Product Dev. Bucket
                <div className="relative ml-auto h-5 w-32 rounded-full bg-gray-200">
                  <div
                    className="absolute bottom-0 left-0 top-0 rounded-full bg-[#9966ff]"
                    style={{
                      width: `${progress?.['Student Development']}%`,
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-black">
                    {progress
                      ? `${progress?.['Student Development'].toFixed(2)}%`
                      : '0%'}
                  </div>
                </div>
                <Link className="PDbutton" href="#">
                  Fill
                </Link>
                <Link className="PDbutton" href="#">
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

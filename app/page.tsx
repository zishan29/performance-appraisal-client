'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import userServices from './services/user';

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
    setLoading(true);
    userServices
      .verifyToken({ token: localStorage.getItem('token') })
      .then((responseData) => {
        setUserType(responseData.user.user.userType);
        router.push('/');
      })
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
              <div className="flex w-3/5 flex-col px-4">
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
                      Fill
                    </Link>
                    <Link className="button" href="#">
                      Submit
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
                          ? `${progress?.['Student Development'].toFixed(2)}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill
                    </Link>
                    <Link className="button" href="#">
                      Submit
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
                          ? `${progress?.['Student Development'].toFixed(2)}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill
                    </Link>
                    <Link className="button" href="#">
                      Submit
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
                          ? `${progress?.['Student Development'].toFixed(2)}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill
                    </Link>
                    <Link className="button" href="#">
                      Submit
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
                          ? `${progress?.['Student Development'].toFixed(2)}%`
                          : '0%'}
                      </div>
                    </div>
                    <Link className="button" href="#">
                      Fill
                    </Link>
                    <Link className="button" href="#">
                      Submit
                    </Link>
                  </div>
                </div>
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

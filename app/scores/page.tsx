'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import { useEffect, useState } from 'react';

interface Score {
  'Academic Involvement': number;
  'Student Development': number;
}

interface Progress {
  'Student Development': number;
  'Academic Involvement': number;
}

export default function Page() {
  const [scores, setScores] = useState<Score | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    (async () => {
      const [res1, res2] = await Promise.all([
        fetch('https://performance-appraisal-api.adaptable.app/userScores', {
          method: 'GET',
          headers: {
            Authorization: bearer,
          },
        }),
        fetch('https://performance-appraisal-api.adaptable.app/userProgress', {
          method: 'GET',
          headers: {
            Authorization: bearer,
          },
        }),
      ]);
      const resData1 = await res1.json();
      setScores(resData1.scores);

      const resData2 = await res2.json();
      setProgress(resData2.progress);
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
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Nav />
        <div className="ml-60 flex justify-center">
          <div className="my-4 flex flex-col gap-2 lg:w-3/4 xl:w-1/2">
            <div className="mb-4 self-center text-xl font-semibold">
              Your Score Cards
            </div>
            <div className=" grid h-max w-full grid-cols-5 gap-4 rounded-md border border-gray-200 px-6 py-4">
              <div className="row-span-2 self-center text-center">
                Academic Involvement
              </div>
              <div className="text-center">Max marks</div>
              <div className="text-center">Minimum marks required</div>
              <div className="text-center">Marks obtained</div>
              <div className="text-center">Remarks</div>
              <div className="self-center text-center">2000</div>
              <div className="self-center text-center">1200</div>
              <div className="self-center text-center">
                {scores ? scores['Academic Involvement'] : 0}
              </div>
              <div className="self-center text-center">
                Please fill academic involvement forms to get marks.
              </div>
              <div className="col-span-5 mx-auto">
                <div>
                  Completed:{' '}
                  <span>
                    {progress
                      ? `${progress['Academic Involvement'].toFixed(2)}%`
                      : '0.00%'}
                  </span>
                </div>
              </div>
              <Link
                href={getAILink()}
                className="col-span-5 mx-auto w-max rounded-md bg-fuchsia-600 px-4 py-2 font-semibold text-white"
              >
                Fill this category
              </Link>
            </div>
            <div className=" grid h-max w-full grid-cols-5 gap-4 rounded-md border border-gray-200 px-6 py-4">
              <div className="row-span-2 self-center text-center">
                Student Development
              </div>
              <div className="text-center">Max marks</div>
              <div className="text-center">Minimum marks required</div>
              <div className="text-center">Marks obtained</div>
              <div className="text-center">Remarks</div>
              <div className="self-center text-center">2000</div>
              <div className="self-center text-center">1200</div>
              <div className="self-center text-center">0</div>
              <div className="self-center text-center">
                Please fill student development forms to get marks.
              </div>
              <div className="col-span-5 mx-auto">
                <div>
                  Completed: <span>0%</span>
                </div>
              </div>
              <Link
                href=""
                className="col-span-5 mx-auto w-max rounded-md bg-fuchsia-600 px-4 py-2 font-semibold text-white"
              >
                Fill this category
              </Link>
            </div>
            <div className=" grid h-max w-full grid-cols-5 gap-4 rounded-md border border-gray-200 px-6 py-4">
              <div className="row-span-2 self-center text-center">
                Administrative Bucket
              </div>
              <div className="text-center">Max marks</div>
              <div className="text-center">Minimum marks required</div>
              <div className="text-center">Marks obtained</div>
              <div className="text-center">Remarks</div>
              <div className="self-center text-center">2000</div>
              <div className="self-center text-center">1200</div>
              <div className="self-center text-center">0</div>
              <div className="self-center text-center">
                Please fill administrative bucket forms to get marks.
              </div>
              <div className="col-span-5 mx-auto">
                <div>
                  Completed: <span>0%</span>
                </div>
              </div>
              <Link
                href=""
                className="col-span-5 mx-auto w-max rounded-md bg-fuchsia-600 px-4 py-2 font-semibold text-white"
              >
                Fill this category
              </Link>
            </div>
            <div className=" grid h-max w-full grid-cols-5 gap-4 rounded-md border border-gray-200 px-6 py-4">
              <div className="row-span-2 self-center text-center">
                Research Bucket
              </div>
              <div className="text-center">Max marks</div>
              <div className="text-center">Minimum marks required</div>
              <div className="text-center">Marks obtained</div>
              <div className="text-center">Remarks</div>
              <div className="self-center text-center">2000</div>
              <div className="self-center text-center">1200</div>
              <div className="self-center text-center">0</div>
              <div className="self-center text-center">
                Please fill research bucket forms to get marks.
              </div>
              <div className="col-span-5 mx-auto">
                <div>
                  Completed: <span>0%</span>
                </div>
              </div>
              <Link
                href="/academic-involvement"
                className="col-span-5 mx-auto w-max rounded-md bg-fuchsia-600 px-4 py-2 font-semibold text-white"
              >
                Fill this category
              </Link>
            </div>
            <div className=" grid h-max w-full grid-cols-5 gap-4 rounded-md border border-gray-200 px-6 py-4">
              <div className="row-span-2 self-center text-center">
                Consultancy and Corporate Training
              </div>
              <div className="text-center">Max marks</div>
              <div className="text-center">Minimum marks required</div>
              <div className="text-center">Marks obtained</div>
              <div className="text-center">Remarks</div>
              <div className="self-center text-center">2000</div>
              <div className="self-center text-center">1200</div>
              <div className="self-center text-center">0</div>
              <div className="self-center text-center">
                Please fill consultancy and corporate training forms to get
                marks.
              </div>
              <div className="col-span-5 mx-auto">
                <div>
                  Completed: <span>0%</span>
                </div>
              </div>
              <Link
                href="/academic-involvement"
                className="col-span-5 mx-auto w-max rounded-md bg-fuchsia-600 px-4 py-2 font-semibold text-white"
              >
                Fill this category
              </Link>
            </div>
            <div className=" grid h-max w-full grid-cols-5 gap-4 rounded-md border border-gray-200 px-6 py-4">
              <div className="row-span-2 self-center text-center">
                Product Dev. Bucket
              </div>
              <div className="text-center">Max marks</div>
              <div className="text-center">Minimum marks required</div>
              <div className="text-center">Marks obtained</div>
              <div className="text-center">Remarks</div>
              <div className="self-center text-center">2000</div>
              <div className="self-center text-center">1200</div>
              <div className="self-center text-center">0</div>
              <div className="self-center text-center">
                Please fill product dev. bucket forms to get marks.
              </div>
              <div className="col-span-5 mx-auto">
                <div>
                  Completed: <span>0%</span>
                </div>
              </div>
              <Link
                href="/academic-involvement"
                className="col-span-5 mx-auto w-max rounded-md bg-fuchsia-600 px-4 py-2 font-semibold text-white"
              >
                Fill this category
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

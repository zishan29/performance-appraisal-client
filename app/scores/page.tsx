'use client';

import Nav from '../components/Nav';
import { useEffect, useState } from 'react';
import HorizontalBarChart from '../components/Chart';
import userServices from '@/app/services/user';
import Loader from '../components/Loader';

interface Score {
  'Academic Involvement': number;
  'Student Development': number;
  'Administrative Bucket': number;
  'Research Bucket': number;
  'Consultancy and Corporate': number;
  'Product Dev. Bucket': number;
}

interface Progress {
  'Student Development': number;
  'Academic Involvement': number;
}

export default function Page() {
  const [data, setData] = useState<number[]>([]);
  const [progress, setProgress] = useState<Progress | null>(null);
  const labels = [
    'Academic Involvement',
    'Student Development',
    'Administrative Bucket',
    'Research Bucket',
    'Consultancy and Corporate',
    'Product Dev. Bucket',
  ];

  useEffect(() => {
    userServices
      .getUserScores()
      .then((responseData) => {
        const copyScores: Score = {
          'Academic Involvement': Number(
            responseData.scores['Academic Involvement'],
          ),
          'Student Development': 1600,
          'Administrative Bucket': 500,
          'Research Bucket': 416,
          'Consultancy and Corporate': 600,
          'Product Dev. Bucket': 300,
        };
        const temp: number[] = (
          Object.keys(copyScores) as Array<keyof Score>
        ).map((category) => copyScores[category]);
        console.log(temp);
        setData(temp);
      })
      .catch((err) => {
        console.log(err);
      });

    userServices
      .getUserProgress()
      .then((responseData) => {
        // console.log(responseData);
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
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Nav />
        <div className="flex w-full justify-center">
          <div className="mx-auto my-4 w-full max-w-7xl px-2 sm:px-6 lg:px-8">
            {data.length > 0 ? (
              <HorizontalBarChart labels={labels} data={data} />
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </main>
    </>
  );
}

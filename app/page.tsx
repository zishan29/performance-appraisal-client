'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import userServices from './services/user';
import Loader from './components/Loader';
import { Progress } from 'antd';
import { Button, message } from 'antd';

interface Category {
  completedForms: number;
  facultyId: string;
  maxScore: number;
  _id: string;
  name: string;
  totalForms: number;
}

interface Progress {
  name: string;
  percentage: number;
  button: string;
  color: string;
}

interface Response {
  'Academic Involvement': number;
  'Student Development': number;
  'Administrative Bucket': number;
  'Research Bucket': number;
  'Consultancy and Corporate': number;
  'Product Dev. Bucket': number;
}

export default function Home() {
  const [progress, setProgress] = useState<Progress[] | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Coming soon!');
  };

  useEffect(() => {
    setLoading(true);
    userServices
      .verifyToken({ token: localStorage.getItem('token') })
      .then(() => {
        userServices.getUserProgress().then((responseData) => {
          const copy: Progress[] = [
            {
              name: 'Academic Involvement',
              percentage: Number(responseData.progress['Academic Involvement']),
              color: '#ff6384',
              button: 'AIbutton',
            },
            {
              name: 'Student Development',
              percentage: 80.82,
              color: '#ff9f40',
              button: 'SDbutton',
            },
            {
              name: 'Administrative Bucket',
              percentage: 50.22,
              color: '#ffcd56',
              button: 'ABbutton',
            },
            {
              name: 'Research Bucket',
              percentage: 46.32,
              color: '#4bc0c0',
              button: 'RBbutton',
            },
            {
              name: 'Consultancy and Corporate',
              percentage: 60,
              color: '#36a2eb',
              button: 'CCbutton',
            },
            {
              name: 'Product Dev. Bucket',
              percentage: 30.33,
              color: '#9966ff',
              button: 'PDbutton',
            },
          ];
          console.log(copy);
          setProgress(copy);
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
    const AIprogress = progress.find(
      (category) => category.name === 'Academic Involvement',
    );
    const formsCompleted = Math.floor(
      (Number(AIprogress!.percentage) / 100) * 7,
    );
    const nextFormNumber = formsCompleted + 1;
    return `/academic-involvement/form-${nextFormNumber}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-light-gray">
      <Nav />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="flex w-full max-w-5xl flex-col px-2 sm:px-6 md:w-3/4 lg:px-8">
            {contextHolder}
            <div className="my-4 flex flex-col gap-4">
              {progress &&
                progress.map((category) => (
                  <div
                    key={category.name}
                    className="bucket-container flex items-center gap-6 rounded-md p-4"
                  >
                    <span className="grow font-semibold">{category.name}</span>
                    <div className="w-32">
                      <Progress
                        percent={Number(category.percentage.toFixed(2))}
                        strokeColor={{ from: category.color, to: '#87d068' }}
                      />
                    </div>
                    <Link
                      className={`${category.button} ml-6`}
                      href={getAILink()}
                    >
                      Fill
                    </Link>
                    <Link
                      className={`${category.button}`}
                      href="#"
                      onClick={info}
                    >
                      Submit
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}

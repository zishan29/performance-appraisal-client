'use client';

import { useState, useEffect } from 'react';
import Nav from '@/app/components/Nav';
import { MouseEvent } from 'react';
import TopNav from '@/app/components/AITopNav';
import Link from 'next/link';
import clsx from 'clsx';

interface InputData {
  courseName: string;
  lecturesEngaged: number;
  lecturesAsPerSyllabus: number;
  completionOfSyllabus: number;
}

interface Submission {
  _id: string;
  name: string;
  facultyId: string;
  categoryId: string;
  score: string;
  reviewStatus: string;
  inputData: InputData;
}

export default function Page() {
  const [courseName, setCourseName] = useState('');
  const [lecturesEngaged, setLecturesEngaged] = useState<number | string>('');
  const [lecturesAsPerSyllabus, setLectureAsPerSyllabus] = useState<
    number | string
  >('');
  const [completionOfSyllabus, setCompletionOfSyllabus] = useState<
    number | string
  >('');
  const target = Math.ceil(
    (Number(lecturesEngaged) / Number(lecturesAsPerSyllabus)) * 100,
  );
  const [loading, setLoading] = useState(false);
  const [submission, setSubmission] = useState<Submission[]>([]);

  async function checkSubmission() {
    setLoading(true);
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    try {
      const res = await fetch(
        'https://performance-appraisal-api.adaptable.app/submission?name=AI-2',
        {
          method: 'GET',
          headers: {
            Authorization: bearer,
          },
        },
      );
      if (res.ok) {
        const resData = await res.json();
        console.log(resData.submission);
        setSubmission(resData.submission);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkSubmission();
  }, []);

  let score: number;
  if (target >= 100) {
    score = (300 * Number(completionOfSyllabus)) / 100;
  }
  if (90 <= target && target <= 99) {
    score = (225 * Number(completionOfSyllabus)) / 100;
  }
  if (80 <= target && target <= 89) {
    score = (150 * Number(completionOfSyllabus)) / 100;
  }
  if (70 <= target && target <= 79) {
    score = (100 * Number(completionOfSyllabus)) / 100;
  }
  if (target < 70) {
    score = (0 * Number(completionOfSyllabus)) / 100;
  }

  async function submitForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);
    if (!lecturesEngaged || !lecturesAsPerSyllabus || !completionOfSyllabus) {
      alert('Please fill in all required fields.');
      return;
    }

    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    const inputData = {
      courseName: courseName,
      lecturesEngaged: lecturesEngaged,
      lecturesAsPerSyllabus: lecturesAsPerSyllabus,
      completionOfSyllabus: completionOfSyllabus,
    };

    let submissionData = {
      submissionName: 'AI-2',
      categoryId: localStorage.getItem('Academic Involvement'),
      score: score,
      inputData: inputData,
    };
    console.log(submissionData);
    try {
      const res = await fetch(
        'https://performance-appraisal-api.adaptable.app/submissions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: bearer,
          },
          body: JSON.stringify(submissionData),
        },
      );
      if (res.ok) {
        setCourseName('');
        setLecturesEngaged(0);
        setLectureAsPerSyllabus(0);
        setCompletionOfSyllabus(0);
        checkSubmission();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="main">
        <Nav />
        <TopNav />
        <div className="container ml-60 mt-40">
          <div className="form-container">
            <div className="title">
              Taught Course (during PA evaluation period)
            </div>
            <form action="" id="taughtCourses" className="flex flex-col gap-3">
              <div className="form-group">
                <label htmlFor="courseName" className="label">
                  Course/Lab name
                </label>
                <input
                  type="text"
                  id="courseName"
                  onChange={(e) => setCourseName(e.target.value)}
                  className="input"
                  value={
                    submission.length > 0
                      ? submission[0].inputData.courseName
                      : courseName
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="noOfLecturesEngaged" className="label">
                  No. of lectures engaged (including extra)
                </label>
                <input
                  type="number"
                  id="noOfLecturesEngaged"
                  className="input"
                  onChange={(e) => setLecturesEngaged(Number(e.target.value))}
                  value={
                    submission.length > 0
                      ? submission[0].inputData.lecturesEngaged
                      : lecturesEngaged
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="noOfLecturesAsPerSyllabus" className="label">
                  No. of lectures as per syllabus
                </label>
                <input
                  type="number"
                  id="noOfLecturesAsPerSyllabus"
                  className="input"
                  onChange={(e) =>
                    setLectureAsPerSyllabus(Number(e.target.value))
                  }
                  value={
                    submission.length > 0
                      ? submission[0].inputData.lecturesAsPerSyllabus
                      : lecturesAsPerSyllabus
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="completionOfSyllabus" className="label">
                  Completion of syllabus in %
                </label>
                <input
                  type="number"
                  id="completionOfSyllabus"
                  className="input"
                  onChange={(e) =>
                    setCompletionOfSyllabus(Number(e.target.value))
                  }
                  value={
                    submission.length > 0
                      ? submission[0].inputData.completionOfSyllabus
                      : completionOfSyllabus
                  }
                />
              </div>
              <div className="flex justify-between">
                <Link
                  href="/academic-involvement/form-1"
                  className="input-button"
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
                    className="lucide lucide-arrow-left"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Previous
                </Link>
                <button
                  className={clsx('input-button', {
                    'bg-gray-400': submission.length > 0,
                    'cursor-not-allowed': submission.length > 0,
                  })}
                  onClick={submitForm}
                  disabled={submission.length > 0}
                >
                  {loading ? (
                    <>
                      <div className="dot-spinner-button">
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                        <div className="dot-spinner__dot"></div>
                      </div>
                    </>
                  ) : submission.length > 0 ? (
                    'submitted'
                  ) : (
                    'submit'
                  )}
                </button>
                <Link
                  href="/academic-involvement/form-3"
                  className="input-button"
                >
                  Next
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
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

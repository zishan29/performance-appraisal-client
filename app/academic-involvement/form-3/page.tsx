'use client';

import { useState, useEffect } from 'react';
import Nav from '@/app/components/Nav';
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
  const [state, setState] = useState('a');
  const [benchmark, setBenchmark] = useState(1);
  const [feedback, setFeedback] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [mapping, setMapping] = useState(1.5);
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

  let label = 'Industry Expert';
  let option1 = 'International / National VP and above / Unicorn StartUp - CXO';
  let option2 = 'SME';
  if (state !== 'a') {
    label = 'Top University / Institute';
    option1 = 'International / National Professor';
    option2 = 'State Professor';
  }

  let feedbackValue = 0;
  if (feedback >= 2.5) feedbackValue = attendees / totalStudents;

  let weight = benchmark * feedbackValue * mapping;
  let marks = (Math.round((weight + Number.EPSILON) * 100) / 100) * 75;

  async function submitForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);
    // if (!lecturesEngaged || !lecturesAsPerSyllabus || !completionOfSyllabus) {
    //   alert('Please fill in all required fields.');
    //   return;
    // }

    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    // const inputData = {
    //   courseName: courseName,
    //   lecturesEngaged: lecturesEngaged,
    //   lecturesAsPerSyllabus: lecturesAsPerSyllabus,
    //   completionOfSyllabus: completionOfSyllabus,
    // };

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
            <div className="title">BSA - Guest Lecture</div>
            <form action="" id="taughtCourses" className="form">
              <div className="form-group">
                <label htmlFor="qualityOfSpeaker" className="label">
                  Quality of speaker
                </label>
                <select
                  name="qualityOfSpeaker"
                  id="qualityOfSpeaker"
                  className="input"
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="a">Industry Expert</option>
                  <option value="b">Top University / Institute</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="qualityBenchmark" className="label">
                  {label}
                </label>
                <select
                  name="qualityBenchmark"
                  id="qualityBenchmark"
                  className="input"
                  onChange={(e) => setBenchmark(Number(e.target.value))}
                >
                  <option value="1">{option1}</option>
                  <option value="0.5">{option2}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="feedbackReceived" className="label">
                  Feedback received
                </label>
                <input
                  type="number"
                  min="0"
                  max="4"
                  id="feedbackReceived"
                  className="input"
                  onChange={(e) => setFeedback(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="noOfAttendees" className="label">
                  No. of Attendees:{' '}
                </label>
                <input
                  type="number"
                  id="noOfAttendees"
                  className="input"
                  onChange={(e) => setAttendees(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalStudents" className="label">
                  Total Students:{' '}
                </label>
                <input
                  type="number"
                  id="totalStudents"
                  className="input"
                  onChange={(e) => setTotalStudents(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mapping" className="label">
                  Mapping
                </label>
                <select
                  name="mapping"
                  id="mapping"
                  className="input"
                  onChange={(e) => setMapping(Number(e.target.value))}
                >
                  <option value="1.5">Strongly to PO</option>
                  <option value="1">Strongly to CO</option>
                  <option value="1">Moderately to PO</option>
                  <option value="0.8">Moderately to CO</option>
                  <option value="0">Neither mapping to PO or CO</option>
                </select>
              </div>
              <div className="flex justify-between">
                <Link
                  href="/academic-involvement/form-2"
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
                  href="/academic-involvement/form-4"
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

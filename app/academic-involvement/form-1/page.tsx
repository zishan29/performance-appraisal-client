'use client';

import Nav from '@/app/components/Nav';
import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';
import Link from 'next/link';
import TopNav from '@/app/components/AITopNav';
import clsx from 'clsx';

interface InputData {
  courseHours: number;
  platformName: string;
  professor: string;
  AssessmentOutcome: string;
  date: string;
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
  const [hours, setHours] = useState<number | string>('');
  const [professor, setProfessor] = useState(
    'Industry expert of National/International repute',
  );
  const [platformName, setPlatformName] = useState('');
  const [outcome, setOutcome] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [submission, setSubmission] = useState<Submission[]>([]);

  async function checkSubmission() {
    setLoading(true);
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    try {
      const res = await fetch(
        'https://performance-appraisal-api.adaptable.app/submission?name=AI-1',
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

  let outcomeMarks = 1;
  if (outcome.toLowerCase() === 'pass') {
    outcomeMarks = 0.4;
  } else if (outcome.toLowerCase() === 'audit') {
    outcomeMarks = 0.2;
  } else if (outcome.toLowerCase() === 'fail') {
    outcomeMarks = 0.2;
  }

  let hoursMarks = 1;
  if (typeof hours === 'number') {
    if (hours >= 20 && hours < 30) {
      hoursMarks = 0.5;
    } else if (hours < 20) {
      hoursMarks = 0;
    }
  }

  let platformMarks = 1.5;

  if (professor === 'Any other') {
    platformMarks = 0.4;
  } else if (professor === 'Professor from state college') {
    platformMarks = 1;
  }

  const givenData = new Date(date);
  const currentDate = new Date();
  const yearsOfDiff = currentDate.getFullYear() - givenData.getFullYear();

  let dateMarks = 0;
  if (yearsOfDiff < 2) {
    dateMarks = 1;
  } else if (yearsOfDiff >= 2 && yearsOfDiff < 4) {
    dateMarks = 0.75;
  } else if (yearsOfDiff >= 4 && yearsOfDiff < 6) {
    dateMarks = 0.4;
  }

  let marks = hoursMarks * platformMarks * outcomeMarks * dateMarks * 100;

  async function submitForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);
    if (!hours || !platformName || !professor || !outcome || !date) {
      alert('Please fill in all required fields.');
      return;
    }

    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    const inputData = {
      courseHours: hours,
      platformName: platformName,
      professor: professor,
      AssessmentOutcome: outcome,
      date: date,
    };

    let submissionData = {
      submissionName: 'AI-1',
      categoryId: localStorage.getItem('Academic Involvement'),
      score: marks,
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
        setDate('');
        setHours('');
        setPlatformName('');
        setOutcome('');
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
            <div className="title">Certification for courses alloted</div>
            <form className="flex flex-col gap-3">
              <div className="relative block">
                <label htmlFor="noOfHours" className="label">
                  Course hours
                </label>
                <input
                  type="number"
                  placeholder="e.g. 20, 30"
                  className="input"
                  onChange={(e) => setHours(Number(e.target.value))}
                  value={
                    submission.length > 0
                      ? submission[0].inputData.courseHours
                      : hours
                  }
                />
              </div>
              <div className="relative block">
                <label htmlFor="platform" className="label">
                  Platform
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g. Udemy, Coursera, IIT"
                  required
                  className="input"
                  onChange={(e) => setPlatformName(e.target.value)}
                  value={
                    submission.length > 0
                      ? submission[0].inputData.platformName
                      : platformName
                  }
                />
              </div>
              <div className="relative block">
                <label htmlFor="platform" className="label">
                  Professor
                </label>
                <select
                  name="platform"
                  id="platform"
                  className="input"
                  onChange={(e) => setProfessor(e.target.value)}
                >
                  <option value="Industry expert of National/International repute">
                    Industry expert of National/International repute
                  </option>
                  <option value="Professor from state college">
                    Professor from state college
                  </option>
                  <option value="Any other">Any other</option>
                </select>
              </div>
              <div className="relative block">
                <label htmlFor="assessmentOutcome" className="label">
                  Assessment outcome
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="e.g. Grade B, Pass, Audit or Fail"
                  className="input"
                  onChange={(e) => setOutcome(e.target.value.toLowerCase())}
                  value={
                    submission.length > 0
                      ? submission[0].inputData.AssessmentOutcome
                      : outcome
                  }
                />
              </div>
              <div className="relative block">
                <label htmlFor="dateOfCertification" className="label">
                  Date of certification
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="input"
                  onChange={(e) => setDate(e.target.value)}
                  value={
                    submission.length > 0 ? submission[0].inputData.date : ''
                  }
                />
              </div>
              <div className="flex justify-between">
                <div className="w-32"></div>
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
                  href="/academic-involvement/form-2"
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

'use client';

import { useState, useEffect, MouseEvent } from 'react';
import Nav from '@/app/components/Nav';
import SideNav from '@/app/components/AISideNav';
import Link from 'next/link';
import clsx from 'clsx';

interface InputData {
  state: string;
  benchmark: string;
  feedback: string;
  attendees: string;
  totalStudents: string;
  mapping: string;
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

type FormField = keyof InputData;

export default function Page() {
  // const [state, setState] = useState('a');
  // const [benchmark, setBenchmark] = useState(1);
  // const [feedback, setFeedback] = useState(0);
  // const [attendees, setAttendees] = useState(0);
  // const [totalStudents, setTotalStudents] = useState(0);
  const [mapping, setMapping] = useState(1.5);
  const [loading, setLoading] = useState(false);
  const [submission, setSubmission] = useState<Submission[]>([]);
  const [performedParameter, setPerformedParameter] = useState(true);
  const [forms, setForms] = useState<InputData[]>([
    {
      state: 'a',
      benchmark: '1',
      feedback: '0',
      attendees: '0',
      totalStudents: '0',
      mapping: '1.5',
    },
    {
      state: 'a',
      benchmark: '1',
      feedback: '0',
      attendees: '0',
      totalStudents: '0',
      mapping: '1.5',
    },
  ]);

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

  let label1 = 'Industry Expert';
  let label2 = 'Industry Expert';
  let option1 = 'International / National VP and above / Unicorn StartUp - CXO';
  let option2 = 'SME';
  let option3 = 'International / National VP and above / Unicorn StartUp - CXO';
  let option4 = 'SME';
  if (forms[0].state !== 'a') {
    label1 = 'Top University / Institute';
    option1 = 'International / National Professor';
    option2 = 'State Professor';
  }
  if (forms[1].state !== 'a') {
    label2 = 'Top University / Institute';
    option3 = 'International / National Professor';
    option4 = 'State Professor';
  }

  // let feedbackValue = 0;
  // if (feedback >= 2.5) feedbackValue = attendees / totalStudents;

  // let weight = benchmark * feedbackValue * mapping;
  // let marks = (Math.round((weight + Number.EPSILON) * 100) / 100) * 75;

  const handleChange = (index: number, field: FormField, value: string) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
    console.log(forms);
  };

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
      // score: score,
      // inputData: inputData,
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
        <div className="container">
          <SideNav categoryName={'Academic Involvement'} />
          <div className="form-container">
            <div className="title">BSA - Guest Lecture</div>
            <form action="" id="taughtCourses" className="form">
              <div className="form-group">
                <label htmlFor="noOfHours" className="label">
                  Have you performed under this parameter?
                </label>
                <select
                  name=""
                  id=""
                  className="input"
                  onChange={(e) =>
                    setPerformedParameter(e.target.value === '1' ? true : false)
                  }
                  value={performedParameter ? '1' : '0'}
                  disabled={
                    (performedParameter === false && submission.length > 0) ||
                    submission.length > 0
                  }
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <div
                  className={clsx('mt-2 text-sm text-gray-700', {
                    hidden: performedParameter,
                  })}
                >
                  The score for this parameter will be calculated as
                  &apos;Zero&apos;, and you will not need to go through this
                  worksheet for this parameter. <br />
                  Note: Please click submit after selecting &apos;No&apos;
                </div>
              </div>
              {performedParameter ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    {forms.map((form, index) => (
                      <div
                        className="rounded-md border border-gray-200 p-4"
                        key={index}
                      >
                        <div
                          className={clsx('mb-1 text-center font-semibold', {
                            hidden: forms.length < 2,
                          })}
                        >
                          Guest lecture {index + 1}
                        </div>
                        <div className="form-group">
                          <label htmlFor="qualityOfSpeaker" className="label">
                            Quality of speaker
                          </label>
                          <select
                            name="qualityOfSpeaker"
                            id="qualityOfSpeaker"
                            className="input"
                            onChange={(e) =>
                              handleChange(index, 'state', e.target.value)
                            }
                          >
                            <option value="a">Industry Expert</option>
                            <option value="b">
                              Top University / Institute
                            </option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="qualityBenchmark" className="label">
                            {index + 1 === 1 ? label1 : label2}
                          </label>
                          <select
                            name="qualityBenchmark"
                            id="qualityBenchmark"
                            className="input"
                            onChange={(e) =>
                              handleChange(index, 'benchmark', e.target.value)
                            }
                          >
                            <option value="1">
                              {index + 1 === 1 ? option1 : option3}
                            </option>
                            <option value="0.5">
                              {index + 2 === 2 ? option2 : option4}
                            </option>
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
                            onChange={(e) =>
                              handleChange(index, 'feedback', e.target.value)
                            }
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
                            onChange={(e) =>
                              handleChange(index, 'attendees', e.target.value)
                            }
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
                            onChange={(e) =>
                              handleChange(
                                index,
                                'totalStudents',
                                e.target.value,
                              )
                            }
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
                            onChange={(e) =>
                              handleChange(index, 'mapping', e.target.value)
                            }
                          >
                            <option value="1.5">Strongly to PO</option>
                            <option value="1">Strongly to CO</option>
                            <option value="1">Moderately to PO</option>
                            <option value="0.8">Moderately to CO</option>
                            <option value="0">
                              Neither mapping to PO or CO
                            </option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                ''
              )}
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

'use client';

import { useState, useEffect } from 'react';
import Nav from '@/app/components/Nav';
import { MouseEvent } from 'react';
import TopNav from '@/app/components/AITopNav';
import Link from 'next/link';
import clsx from 'clsx';

interface InputData {
  courseName: string;
  lecturesEngaged: string;
  lecturesAsPerSyllabus: string;
  completionOfSyllabus: string;
}

interface Submission {
  _id: string;
  name: string;
  facultyId: string;
  categoryId: string;
  score: string;
  reviewStatus: string;
  inputData: InputData[];
}

type FormField = keyof InputData;

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [submission, setSubmission] = useState<Submission[]>([]);
  const [performedParameter, setPerformedParameter] = useState(true);
  const [forms, setForms] = useState<InputData[]>([
    {
      courseName: '',
      lecturesEngaged: '',
      lecturesAsPerSyllabus: '',
      completionOfSyllabus: '',
    },
  ]);

  const addForm = () => {
    setForms([
      ...forms,
      {
        courseName: '',
        lecturesEngaged: '',
        lecturesAsPerSyllabus: '',
        completionOfSyllabus: '',
      },
    ]);
  };

  const removeForm = (index: number) => {
    const updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
  };

  const handleChange = (index: number, field: FormField, value: string) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
    console.log(forms);
  };

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
        setSubmission(resData.submission);
        setForms(resData.submission[0].inputData);
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

  async function submitForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);

    let score = 0;
    if (performedParameter) {
      let target = 0;
      let completion = 0;
      forms.map((form) => {
        target +=
          (Number(form.lecturesEngaged) / Number(form.lecturesAsPerSyllabus)) *
          100;
        completion += Number(form.completionOfSyllabus);
      });

      let avgTarget = target / forms.length;
      let avgCompletion = completion / forms.length;
      if (avgTarget >= 100) {
        score = (300 * avgCompletion) / 100;
      }
      if (90 <= avgTarget && avgTarget <= 99) {
        score = (225 * avgCompletion) / 100;
      }
      if (80 <= avgTarget && avgTarget <= 89) {
        score = (150 * avgCompletion) / 100;
      }
      if (70 <= avgTarget && avgTarget <= 79) {
        score = (100 * avgCompletion) / 100;
      }
      if (avgTarget < 70) {
        score = (0 * avgCompletion) / 100;
      }
    }

    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;

    let submissionData = {
      submissionName: 'AI-2',
      categoryId: localStorage.getItem('Academic Involvement'),
      score: score,
      inputData: forms,
    };
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
        <div
          className={clsx('container ml-60 mt-40', {
            'w-full': forms.length > 1,
          })}
        >
          <div className="form-container">
            <div className="title">
              Taught Course (during PA evaluation period)
            </div>
            <form action="" id="taughtCourses" className="flex flex-col gap-3">
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
                  <div
                    className={clsx('grid grid-cols-1 gap-4', {
                      'grid-cols-2': forms.length > 1,
                    })}
                  >
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
                          Course/Lab {index + 1}
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor={`courseName${index}`}
                            className="label"
                          >
                            Course/Lab name
                          </label>
                          <input
                            type="text"
                            id={`courseName${index}`}
                            onChange={(e) =>
                              handleChange(index, 'courseName', e.target.value)
                            }
                            className="input"
                            value={form.courseName}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor={`lecturesEngaged${index}`}
                            className="label"
                          >
                            No. of lectures engaged (including extra)
                          </label>
                          <input
                            type="number"
                            id={`lecturesEngaged${index}`}
                            onChange={(e) =>
                              handleChange(
                                index,
                                'lecturesEngaged',
                                e.target.value,
                              )
                            }
                            className="input"
                            value={form.lecturesEngaged}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor={`lecturesAsPerSyllabus${index}`}
                            className="label"
                          >
                            No. of lectures as per syllabus
                          </label>
                          <input
                            type="number"
                            id={`lecturesAsPerSyllabus${index}`}
                            onChange={(e) =>
                              handleChange(
                                index,
                                'lecturesAsPerSyllabus',
                                e.target.value,
                              )
                            }
                            className="input"
                            value={form.lecturesAsPerSyllabus}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor={`completionOfSyllabus${index}`}
                            className="label"
                          >
                            Completion of syllabus in %
                          </label>
                          <input
                            type="number"
                            id={`completionOfSyllabus${index}`}
                            onChange={(e) =>
                              handleChange(
                                index,
                                'completionOfSyllabus',
                                e.target.value,
                              )
                            }
                            className="input"
                            value={form.completionOfSyllabus}
                          />
                        </div>
                        <button
                          className={clsx('input-button mt-3 w-max', {
                            hidden: forms.length < 2,
                            'bg-gray-400': submission.length > 0,
                            'cursor-not-allowed': submission.length > 0,
                          })}
                          type="button"
                          onClick={() => removeForm(index)}
                          disabled={submission.length > 0}
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
                            className="lucide lucide-trash"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                ''
              )}
              <button
                className={clsx('input-button flex w-max items-center gap-1', {
                  'bg-gray-400': submission.length > 0,
                  'cursor-not-allowed': submission.length > 0,
                })}
                type="button"
                onClick={addForm}
                disabled={submission.length > 0}
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
                  className="lucide lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                Course/Lab
              </button>
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

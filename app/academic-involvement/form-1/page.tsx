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

interface SubmissionWithParsedInput {
  _id: string;
  name: string;
  facultyId: string;
  categoryId: string;
  score: string;
  reviewStatus: string;
  inputData: InputData;
}

interface Submission {
  _id: string;
  name: string;
  facultyId: string;
  categoryId: string;
  score: string;
  reviewStatus: string;
  inputData: string;
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
  const [submission, setSubmission] = useState<SubmissionWithParsedInput[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [multiple, setMultiple] = useState(false);
  const [hours2, setHours2] = useState<number | string>('');
  const [professor2, setProfessor2] = useState(
    'Industry expert of National/International repute',
  );
  const [platformName2, setPlatformName2] = useState('');
  const [outcome2, setOutcome2] = useState('');
  const [date2, setDate2] = useState('');
  const [file2, setFile2] = useState<File | null>(null);
  const [maxScoreForm, setMaxScoreForm] = useState<string>('1');
  const [performedParameter, setPerformedParameter] = useState(true);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile2(selectedFile);
  };

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
        console.log(!resData.submission[0].inputData);
        if (!resData.submission[0].inputData) {
          setSubmission(resData.submission);
          setPerformedParameter(false);
        } else if (resData.submission[0].inputData) {
          const submissionWithParsedInputData = resData.submission.map(
            (submission: Submission) => {
              return {
                ...submission,
                inputData: JSON.parse(submission.inputData),
              };
            },
          );
          setSubmission(submissionWithParsedInputData);
        } else {
          console.log('No submissions found in the response data');
        }
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

  let outcomeMarks2 = 1;
  if (outcome2.toLowerCase() === 'pass') {
    outcomeMarks2 = 0.4;
  } else if (outcome2.toLowerCase() === 'audit') {
    outcomeMarks2 = 0.2;
  } else if (outcome2.toLowerCase() === 'fail') {
    outcomeMarks2 = 0.2;
  }

  let hoursMarks2 = 1;
  if (typeof hours2 === 'number') {
    if (hours2 >= 20 && hours2 < 30) {
      hoursMarks2 = 0.5;
    } else if (hours2 < 20) {
      hoursMarks2 = 0;
    }
  }

  let platformMarks2 = 1.5;

  if (professor2 === 'Any other') {
    platformMarks2 = 0.4;
  } else if (professor2 === 'Professor from state college') {
    platformMarks2 = 1;
  }

  const givenData2 = new Date(date2);
  const currentDate2 = new Date();
  const yearsOfDiff2 = currentDate2.getFullYear() - givenData2.getFullYear();

  let dateMarks2 = 0;
  if (yearsOfDiff2 < 2) {
    dateMarks2 = 1;
  } else if (yearsOfDiff2 >= 2 && yearsOfDiff2 < 4) {
    dateMarks2 = 0.75;
  } else if (yearsOfDiff2 >= 4 && yearsOfDiff2 < 6) {
    dateMarks2 = 0.4;
  }

  let marks2 = hoursMarks2 * platformMarks2 * outcomeMarks2 * dateMarks2 * 100;

  async function submitForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    const formData = new FormData();
    const categoryId = localStorage.getItem('Academic Involvement');
    let inputData = {};

    if (performedParameter) {
      if (!platformName || !professor || !outcome || !date || !file) {
        alert('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      if (multiple && !hours) {
        alert('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      if (
        multiple &&
        (!hours2 ||
          !platformName2 ||
          !professor2 ||
          !outcome2 ||
          !date2 ||
          !file2)
      ) {
        alert('Please fill in all required fields.');
        setLoading(false);
        return;
      }

      setMaxScoreForm(marks > marks2 ? '1' : '2');

      if (maxScoreForm === '2') {
        inputData = {
          courseHours: hours2,
          platformName: platformName2,
          professor: professor2,
          AssessmentOutcome: outcome2,
          date: date2,
        };
        formData.append('submissionName', 'AI-1');
        formData.append('categoryId', categoryId as string);
        formData.append('score', String(marks2));
        formData.append('inputData', JSON.stringify(inputData));
        formData.append('file', file2 as File);
      } else {
        inputData = {
          courseHours: hours,
          platformName: platformName,
          professor: professor,
          AssessmentOutcome: outcome,
          date: date,
        };
        formData.append('submissionName', 'AI-1');
        formData.append('categoryId', categoryId as string);
        formData.append('score', String(marks));
        formData.append('inputData', JSON.stringify(inputData));
        formData.append('file', file as File);
      }
    } else {
      formData.append('submissionName', 'AI-1');
      formData.append('categoryId', categoryId as string);
      formData.append('score', String(0));
    }
    try {
      const res = await fetch(
        'https://performance-appraisal-api.adaptable.app/submissions',
        {
          method: 'POST',
          headers: {
            Authorization: bearer,
          },
          body: formData,
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
        <div
          className={clsx('container ml-60 mt-28', {
            'w-full': multiple,
          })}
        >
          <div className="form-container">
            <div className="title">Certification for courses alloted</div>

            <form className="flex flex-col gap-3">
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
                    performedParameter === false && submission.length > 0
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
                  form for this parameter. <br />
                  Note: Please click submit after selecting &apos;No&apos;
                </div>
              </div>
              {performedParameter ? (
                <>
                  <div className="form-group">
                    <label htmlFor="dateOfCertification" className="label">
                      Do you have multiple certifications?
                    </label>
                    <select
                      name=""
                      id=""
                      className="input"
                      onChange={(e) =>
                        setMultiple(e.target.value === '1' ? true : false)
                      }
                      value={multiple ? '1' : '0'}
                    >
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                    <div
                      className={clsx('mt-2 text-sm text-gray-700', {
                        hidden: multiple === false,
                      })}
                    >
                      For multiple certifications: provide data of two best
                      certificates(having maximum marks). Best of the two marks
                      shall be considered.
                    </div>
                  </div>
                  <div className="flex w-full gap-4">
                    <div className="flex grow flex-col gap-3 rounded-md border border-gray-200 p-4">
                      <div
                        className={clsx('mb-2 text-lg font-semibold', {
                          hidden: multiple === false,
                        })}
                      >
                        Certification 1
                      </div>
                      <div className="form-group">
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
                      <div className="form-group">
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
                      <div className="form-group">
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
                      <div className="form-group">
                        <label htmlFor="assessmentOutcome" className="label">
                          Assessment outcome
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="e.g. Grade B, Pass, Audit or Fail"
                          className="input"
                          onChange={(e) =>
                            setOutcome(e.target.value.toLowerCase())
                          }
                          value={
                            submission.length > 0
                              ? submission[0].inputData.AssessmentOutcome
                              : outcome
                          }
                        />
                      </div>
                      <div className="form-group">
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
                            submission.length > 0
                              ? submission[0].inputData.date
                              : date
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="file" className="label">
                          Evidence of certification
                        </label>
                        <input
                          type="file"
                          name=""
                          id="file"
                          accept="image/*"
                          className="input"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    <div
                      className={clsx(
                        'flex grow flex-col gap-3 rounded-md border border-gray-200 p-4',
                        {
                          hidden: multiple === false,
                        },
                      )}
                    >
                      <div className="mb-2 text-lg font-semibold">
                        Certification 2
                      </div>
                      <div className="form-group">
                        <label htmlFor="noOfHours" className="label">
                          Course hours
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 20, 30"
                          className="input"
                          onChange={(e) => setHours2(Number(e.target.value))}
                          value={
                            submission.length > 0
                              ? submission[0].inputData.courseHours
                              : hours2
                          }
                        />
                      </div>
                      <div className="form-group">
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
                          onChange={(e) => setPlatformName2(e.target.value)}
                          value={
                            submission.length > 0
                              ? submission[0].inputData.platformName
                              : platformName2
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="platform" className="label">
                          Professor
                        </label>
                        <select
                          name="platform"
                          id="platform"
                          className="input"
                          onChange={(e) => setProfessor2(e.target.value)}
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
                      <div className="form-group">
                        <label htmlFor="assessmentOutcome" className="label">
                          Assessment outcome
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="e.g. Grade B, Pass, Audit or Fail"
                          className="input"
                          onChange={(e) =>
                            setOutcome2(e.target.value.toLowerCase())
                          }
                          value={
                            submission.length > 0
                              ? submission[0].inputData.AssessmentOutcome
                              : outcome2
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="dateOfCertification" className="label">
                          Date of certification
                        </label>
                        <input
                          type="date"
                          name=""
                          id=""
                          className="input"
                          onChange={(e) => setDate2(e.target.value)}
                          value={
                            submission.length > 0
                              ? submission[0].inputData.date
                              : date2
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="file2" className="label">
                          Evidence of certification
                        </label>
                        <input
                          type="file"
                          id="file2"
                          name=""
                          accept="image/*"
                          className="input"
                          onChange={handleFileChange2}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ''
              )}

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

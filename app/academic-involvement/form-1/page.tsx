'use client';

import Nav from '@/app/components/Nav';
import { useEffect, useState, useRef } from 'react';
import { MouseEvent } from 'react';
import Link from 'next/link';
import SideNav from '@/app/components/AISideNav';
import clsx from 'clsx';
import submissionServices from '../../services/submission';
import Loader from '@/app/components/Loader';

interface InputData {
  courseHours: string;
  platformName: string;
  courseName: string;
  professor: string;
  assessmentOutcome: string;
  date: string;
  imagePreview: string;
  file?: File | string;
  fileName?: string;
}

type FormField = keyof InputData;

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [forms, setForms] = useState<InputData[]>([
    {
      courseHours: '',
      platformName: '',
      courseName: '',
      professor: 'Industry expert of National/International repute',
      assessmentOutcome: '',
      date: '',
      imagePreview: '',
    },
  ]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const addForm = () => {
    setForms([
      ...forms,
      {
        courseHours: '',
        platformName: '',
        courseName: '',
        professor: 'Industry expert of National/International repute',
        assessmentOutcome: '',
        date: '',
        imagePreview: '',
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
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    const updatedForms = [...forms];
    updatedForms[index].file = selectedFile!;
    updatedForms[index].fileName = selectedFile!.name;
    setForms(updatedForms);

    if (selectedFile) {
      const previewURL = URL.createObjectURL(selectedFile);
      const updatedForms = [...forms];
      updatedForms[index]['imagePreview'] = previewURL;
    }
  };

  function checkSubmission() {
    setLoading(true);
    const name = 'AI-1';
    const userId = localStorage.getItem('id');
    submissionServices
      .getSubmission(name, userId)
      .then((responseData) => {
        if (responseData !== null) {
          setSubmitted(true);
          if (responseData.evidence) {
            const copy = [
              {
                ...responseData.inputData,
                imagePreview: responseData.evidence,
              },
            ];
            setForms(copy);
            console.log(copy);
          } else {
            setForms([responseData.inputData]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    checkSubmission();
  }, []);

  function calculateMarks(course: InputData) {
    let outcomeMarks = 1;
    if (course.assessmentOutcome.toLowerCase() === 'pass') {
      outcomeMarks = 0.4;
    } else if (
      course.assessmentOutcome.toLowerCase() === 'audit' ||
      course.assessmentOutcome.toLowerCase() === 'fail'
    ) {
      outcomeMarks = 0.2;
    }

    let hoursMarks = 1;
    const hours = Number(course.courseHours);
    if (!isNaN(hours)) {
      if (hours >= 20 && hours < 30) {
        hoursMarks = 0.5;
      } else if (hours < 20) {
        hoursMarks = 0;
      }
    }

    let platformMarks = 1.5;
    if (course.professor === 'Any other') {
      platformMarks = 0.4;
    } else if (course.professor === 'Professor from state college') {
      platformMarks = 1;
    }

    const givenData = new Date(course.date);
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

    const marks = hoursMarks * platformMarks * outcomeMarks * dateMarks * 100;
    return marks;
  }

  function submitForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setLoading(true);

    const marksForEachCourse = forms.map((course) => calculateMarks(course));
    const maxMarks = Math.max(...marksForEachCourse);
    const maxMarksIdx = marksForEachCourse.indexOf(maxMarks);

    const userId = localStorage.getItem('id');
    const categoryId = localStorage.getItem('Academic Involvement');
    const inputData = forms[maxMarksIdx];

    const formData = new FormData();
    if (forms[maxMarksIdx].file) {
      formData.append('file', forms[maxMarksIdx].file!);
    }
    formData.append('submissionName', 'AI-1');
    formData.append('facultyId', `${userId}`);
    formData.append('categoryId', `${categoryId}`);
    formData.append('score', `${maxMarks}`);
    formData.append('inputData[courseHours]', `${inputData.courseHours}`);
    formData.append('inputData[platformName]', `${inputData.platformName}`);
    formData.append('inputData[courseName]', `${inputData.courseName}`);
    formData.append('inputData[professor]', `${inputData.professor}`);
    formData.append(
      'inputData[assessmentOutcome]',
      `${inputData.assessmentOutcome}`,
    );
    formData.append('inputData[date]', `${inputData.date}`);

    if (submitted) {
      submissionServices
        .editSubmission(formData)
        .then((responseData) => {
          console.log(responseData);
          setIsEditing(false);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      submissionServices
        .submit(formData)
        .then((responseData) => {
          console.log(responseData);
          setSubmitted(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditing(true);
  };

  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
          <SideNav categoryName={'Academic Involvement'} />
          <div className="form-container border border-gray-200">
            <div className="title flex items-center justify-center gap-2">
              {submitted ? (
                <span className="my-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-green-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </span>
              ) : (
                ''
              )}
              Certification for Courses Alloted{' '}
            </div>
            <form className="flex flex-col gap-3">
              <div className="grid grid-cols-1 gap-4">
                {forms.map((form, index) => (
                  <div
                    key={index}
                    className="flex grow flex-col gap-3 rounded-md border border-gray-200 p-4"
                  >
                    <div
                      className={clsx('mb-2 text-lg font-semibold', {
                        hidden: forms.length < 2,
                      })}
                    >
                      Certification {index + 1}
                    </div>
                    <div className="form-group">
                      <label htmlFor="noOfHours" className="label">
                        Course hours
                      </label>
                      <input
                        type="number"
                        placeholder="e.g. 20, 30"
                        className="input"
                        onChange={(e) =>
                          handleChange(index, 'courseHours', e.target.value)
                        }
                        value={form.courseHours}
                        disabled={submitted && !isEditing}
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
                        onChange={(e) =>
                          handleChange(index, 'platformName', e.target.value)
                        }
                        value={form.platformName}
                        disabled={submitted && !isEditing}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="courseName" className="label">
                        Course name
                      </label>
                      <input
                        type="text"
                        name=""
                        id="courseName"
                        placeholder="course name"
                        required
                        className="input"
                        onChange={(e) =>
                          handleChange(index, 'courseName', e.target.value)
                        }
                        value={form.courseName}
                        disabled={submitted && !isEditing}
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
                        onChange={(e) =>
                          handleChange(index, 'professor', e.target.value)
                        }
                        value={form.professor}
                        disabled={submitted && !isEditing}
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
                          handleChange(
                            index,
                            'assessmentOutcome',
                            e.target.value.toLowerCase(),
                          )
                        }
                        value={form.assessmentOutcome}
                        disabled={submitted && !isEditing}
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
                        onChange={(e) =>
                          handleChange(index, 'date', e.target.value)
                        }
                        value={form.date}
                        disabled={submitted && !isEditing}
                      />
                    </div>
                    <div
                      className={clsx('flex items-center text-sm', {
                        hidden: submitted && !isEditing,
                      })}
                    >
                      <button
                        onClick={() => inputRefs.current[index]?.click()}
                        type="button"
                        className="flex h-max w-max items-center gap-2 rounded border border-gray-300 px-2 py-1 outline-none focus:outline-black"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-black"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" x2="12" y1="3" y2="15" />
                        </svg>{' '}
                        Upload evidence
                      </button>
                      <input
                        id={`file-${index}`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, index)}
                        ref={(el) => {
                          if (el) inputRefs.current[index] = el;
                        }}
                        style={{ display: 'none' }}
                      />{' '}
                      {form.fileName}
                    </div>
                    {form.imagePreview !== '' && (
                      <>
                        <div>
                          <div className="mb-1">Evidence preview: </div>
                          <img
                            src={form.imagePreview}
                            alt="Image Preview"
                            className="h-auto w-auto rounded-md border-2 border-black"
                          />
                        </div>
                      </>
                    )}
                    <button
                      className={clsx('input-button mt-3 w-max', {
                        hidden: forms.length < 2 || (submitted && !isEditing),
                      })}
                      type="button"
                      onClick={() => removeForm(index)}
                      disabled={submitted && !isEditing}
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
              <button
                className={clsx('input-button flex w-max items-center gap-1', {
                  hidden: submitted && !isEditing,
                })}
                type="button"
                onClick={addForm}
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
                Certifications
              </button>
              <div className="flex justify-between">
                <div className="w-32"></div>
                {submitted ? (
                  isEditing ? (
                    <button className="input-button" onClick={submitForm}>
                      {loading ? <Loader /> : 'submit'}
                    </button>
                  ) : (
                    <button className="input-button" onClick={handleEdit}>
                      {loading ? <Loader /> : 'Edit'}
                    </button>
                  )
                ) : (
                  <button className="input-button" onClick={submitForm}>
                    {loading ? <Loader /> : 'submit'}
                  </button>
                )}
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

'use client';

import Nav from '@/app/components/Nav';
import { useEffect, useState } from 'react';
import { MouseEvent } from 'react';

interface Category {
  completedForms: number;
  facultyId: string;
  maxScore: number;
  _id: string;
  name: string;
  totalForms: number;
}

export default function Page() {
  const [hours, setHours] = useState<number | string>('');
  const [professor, setProfessor] = useState(
    'Industry expert of National/International repute',
  );
  const [platformName, setPlatformName] = useState('');
  const [outcome, setOutcome] = useState('');
  const [date, setDate] = useState('');
  const [categoryId, setCategoryId] = useState('');

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    const bearer = `Bearer ${token}`;
    (async () => {
      try {
        const res = await fetch(
          'https://performance-appraisal-api.adaptable.app/categories',
          {
            method: 'GET',
            headers: {
              Authorization: bearer,
            },
          },
        );
        const resData = await res.json();
        resData.categories.map((category: Category) => {
          if (category.name === 'Administrative Bucket') {
            setCategoryId(category._id);
          }
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  async function submitForm(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
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
      categoryId: categoryId,
      score: marks,
      inputData: inputData,
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
        setDate('');
        setHours('');
        setPlatformName('');
        setOutcome('');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
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
                  value={hours}
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
                  value={platformName}
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
                  value={outcome}
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
                />
              </div>
              <button className="button" onClick={submitForm}>
                submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

'use client';

import { useState } from 'react';
import Nav from '@/app/components/Nav';

export default function Page() {
  const [courseName, setCourseName] = useState('');
  const [lecturesEngaged, setLecturesEngaged] = useState(0);
  const [lecturesAsPerSyllabus, setLectureAsPerSyllabus] = useState(0);
  const [completionOfSyllabus, setCompletionOfSyllabus] = useState(0);
  const target = Math.ceil((lecturesEngaged / lecturesAsPerSyllabus) * 100);

  let score;
  if (target >= 100) {
    score = (300 * completionOfSyllabus) / 100;
  }
  if (90 <= target && target <= 99) {
    score = (225 * completionOfSyllabus) / 100;
  }
  if (80 <= target && target <= 89) {
    score = (150 * completionOfSyllabus) / 100;
  }
  if (70 <= target && target <= 79) {
    score = (100 * completionOfSyllabus) / 100;
  }
  if (target < 70) {
    score = (0 * completionOfSyllabus) / 100;
  }

  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
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
                />
              </div>
              <button className="button" type="button">
                submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

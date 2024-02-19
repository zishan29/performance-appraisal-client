'use client';

import Nav from '@/app/components/Nav';
import { useState } from 'react';

export default function Page() {
  const [attainment, setAttainment] = useState(0);
  const [attainment1, setAttainment1] = useState(0);
  const [attainment2, setAttainment2] = useState(0);
  const [attainment3, setAttainment3] = useState(0);
  const [attainment4, setAttainment4] = useState(0);
  const [courseName, setCourseName] = useState('');
  const [courseName1, setCourseName1] = useState('');
  const [courseName2, setCourseName2] = useState('');
  const [courseName3, setCourseName3] = useState('');
  const [courseName4, setCourseName4] = useState('');

  let arr = [];
  if (attainment !== 0) {
    arr.push(Number(attainment));
  }

  if (attainment1 !== 0) {
    arr.push(Number(attainment1));
  }

  if (attainment2 !== 0) {
    arr.push(Number(attainment2));
  }

  if (attainment3 !== 0) {
    arr.push(Number(attainment3));
  }

  if (attainment4 !== 0) {
    arr.push(Number(attainment4));
  }

  let marks = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
          {' '}
          <div className="form-container">
            <div className="title">Course / Lab outcome Attainment</div>
            <form action="" className="form grid grid-cols-2">
              <div className="form-group">
                <label htmlFor="courseName" className="label">
                  Course Name{' '}
                </label>
                <input
                  type="text"
                  id="courseName"
                  onChange={(e) => setCourseName(e.target.value)}
                  className="input"
                />

                <input
                  type="text"
                  id="courseName1"
                  onChange={(e) => setCourseName1(e.target.value)}
                  className="input"
                />

                <input
                  type="text"
                  id="courseName2"
                  onChange={(e) => setCourseName2(e.target.value)}
                  className="input"
                />

                <input
                  type="text"
                  id="courseName3"
                  onChange={(e) => setCourseName3(e.target.value)}
                  className="input"
                />

                <input
                  type="text"
                  id="courseName4"
                  onChange={(e) => setCourseName4(e.target.value)}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="attainment" className="label">
                  Attainment level (between 0 to 3)
                </label>
                <input
                  type="number"
                  id="attainment"
                  onChange={(e) => setAttainment(Number(e.target.value))}
                  className="input"
                />
                <input
                  type="number"
                  id="attainment1"
                  onChange={(e) => setAttainment1(Number(e.target.value))}
                  className="input"
                />
                <input
                  type="number"
                  id="attainment2"
                  onChange={(e) => setAttainment2(Number(e.target.value))}
                  className="input"
                />
                <input
                  type="number"
                  id="attainment3"
                  onChange={(e) => setAttainment3(Number(e.target.value))}
                  className="input"
                />
                <input
                  type="number"
                  id="attainment4"
                  onChange={(e) => setAttainment4(Number(e.target.value))}
                  className="input"
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

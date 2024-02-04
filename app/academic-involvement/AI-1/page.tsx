'use client';

import Nav from '@/app/components/Nav';
import { useState } from 'react';

export default function Page() {
  const [hours, setHours] = useState(1);
  const [platform, setPlatform] = useState(1.5);
  const [outcome, setOutcome] = useState(1);
  const [date, setDate] = useState(1);

  let marks = hours * platform * outcome * date * 100;

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
                  className="input"
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
                  onChange={(e) => setPlatform(Number(e.target.value))}
                >
                  <option value="1.5">
                    Industry expert of National/International repute
                  </option>
                  <option value="1">Professor from state college</option>
                  <option value="0.4">Any other</option>
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
                />
              </div>
              <div className="relative block">
                <label htmlFor="dateOfCertification" className="label">
                  Date of certification
                </label>
                <input type="date" name="" id="" className="input" />
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

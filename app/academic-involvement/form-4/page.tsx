'use client';

import { useState } from 'react';
import Nav from '@/app/components/Nav';

export default function Page() {
  const [MOUPlacements, setMOUPlacements] = useState('1');
  const [MOU, setMOU] = useState('1.5');
  const [MOUInternship, setMOUInternship] = useState('1.25');
  const [presence, setPresence] = useState('1');
  const [internship, setInternship] = useState('1.2');
  const [projects, setProjects] = useState('1.1');
  const [feedback, setFeedback] = useState(0);
  const [attendees, setAttendees] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [mapping, setMapping] = useState('1.5');

  let feedbackValue = 0;
  if (feedback >= 2.5) feedbackValue = attendees / totalStudents;

  // let weight =
  //   Math.round(
  //     (MOUPlacements *
  //       MOU *
  //       MOUInternship *
  //       presence *
  //       internship *
  //       projects *
  //       feedbackValue *
  //       mapping +
  //       Number.EPSILON) *
  //       100,
  //   ) / 100;

  // let marks = Math.round((weight * 75 + Number.EPSILON) * 100) / 100;

  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
          <div className="form-container">
            <div className="title">BSA - Industrial Visit</div>
            <form action="" className="form">
              <div className="form-group">
                <label htmlFor="MOUForPlacements" className="label">
                  MOU For Placements
                </label>
                <select
                  id="MOUForPlacements"
                  className="input"
                  onChange={(e) => setMOUPlacements(e.target.value)}
                >
                  <option value="1">Offline</option>
                  <option value="0.5">Online</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="MOU" className="label">
                  MOU
                </label>
                <select
                  id="MOU"
                  className="input"
                  onChange={(e) => setMOU(e.target.value)}
                >
                  <option value="1.5">
                    New MOU with Industry / Organization for placements
                    including last 6 months
                  </option>
                  <option value="1">None</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="MOUForInternships" className="label">
                  MOU for Internships
                </label>
                <select
                  id="MOUForInternships"
                  onChange={(e) => setMOUInternship(e.target.value)}
                  className="input"
                >
                  <option value="1.25">
                    New MOU with Industry / Organization for internship
                    including last 6 months
                  </option>
                  <option value="1">None</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="facultyPresence" className="label">
                  Faculty presence during the visit
                </label>
                <select
                  name="facultyPresence"
                  id="facultyPresence"
                  onChange={(e) => setPresence(e.target.value)}
                  className="input"
                >
                  <option value="1">Faculty present</option>
                  <option value="0.3">Faculty absent</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="noOfInternships" className="label">
                  Number of internships during the P.A. evaluation period
                </label>
                <select
                  name="noOfInternships"
                  id="noOfInternships"
                  onChange={(e) => setInternship(e.target.value)}
                  className="input"
                >
                  <option value="1.2">one or more</option>
                  <option value="1">None</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="noOfProjects" className="label">
                  Number of Projects during the P.A. evaluation period
                </label>
                <select
                  name="noOfProjects"
                  id="noOfProjects"
                  onChange={(e) => setProjects(e.target.value)}
                  className="input"
                >
                  <option value="1.1">one or more</option>
                  <option value="1">None</option>
                </select>
              </div>
              <div
                id="studentFeedback"
                className="mb-2 text-center text-lg font-bold text-gray-900"
              >
                Students Feedback about quality and relevance
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
                  placeholder="Between 0 to 4"
                  onChange={(e) => setFeedback(Number(e.target.value))}
                  className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="noOfAttendees" className="label">
                  No. of Attendees:{' '}
                </label>
                <input
                  type="number"
                  id="noOfAttendees"
                  onChange={(e) => setAttendees(Number(e.target.value))}
                  className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalStudents" className="label">
                  Total Students:{' '}
                </label>
                <input
                  type="number"
                  id="totalStudents"
                  onChange={(e) => setTotalStudents(Number(e.target.value))}
                  className="m-0 block h-11 w-full appearance-none rounded border border-gray-200 p-[11px] text-sm font-normal leading-[18px] tracking-[0px] text-black outline-0 ring-gray-800 focus:ring-2"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mapping" className="label">
                  Mapping:{' '}
                </label>
                <select
                  name="mapping"
                  id="mapping"
                  onChange={(e) => setMapping(e.target.value)}
                  className="input"
                >
                  <option value="1.5">Strongly to PO</option>
                  <option value="1">Strongly to CO</option>
                  <option value="1">Moderately to PO</option>
                  <option value="0.8">Moderately to CO</option>
                  <option value="0">Neither mapping to PO or CO</option>
                </select>
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

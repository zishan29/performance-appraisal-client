'use client';

import Nav from '@/app/components/Nav';
import { useState } from 'react';

export default function Page() {
  const [participants, setParticipants] = useState(0);
  const [enrollments, setEnrollments] = useState(0);
  const [assignments, setAssignments] = useState(0);
  const [tests, setTests] = useState(0);
  const [experiments, setExperiments] = useState(0);
  const [engagements, setEngagements] = useState(0);
  const [slowLearners, setSlowLearners] = useState(0);
  const [advanceLearners, setAdvanceLearners] = useState(0);
  const [teamWork, setTeamWork] = useState(0);
  const [mapping, setMapping] = useState(1.5);

  let marks = 0;
  let sumProduct =
    assignments * assignments +
    tests * tests +
    experiments * experiments +
    engagements * engagements +
    slowLearners * slowLearners +
    advanceLearners * advanceLearners;

  if (sumProduct > 0) {
    marks = Math.ceil(
      (participants / enrollments) *
        ((assignments +
          tests +
          experiments +
          engagements +
          slowLearners +
          advanceLearners) /
          6) *
        teamWork *
        mapping *
        150,
    );
  }

  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
          <div className="form-container">
            <div className="title">Innovations in TLP</div>
            <form action="" className="form">
              <div className="title text-base font-medium">
                No. of participants for innovative TLP activity
              </div>
              <div className="form-group">
                <label className="label" htmlFor="tlpActivities">
                  No. of students participating in all innovative TLP activities
                </label>
                <input
                  type="number"
                  id="tlpActivities"
                  onChange={(e) => setParticipants(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="noOfEnrollments">
                  No. of students enrollment for the course
                </label>
                <input
                  type="number"
                  id="noOfEnrollments"
                  onChange={(e) => setEnrollments(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="title text-base font-medium">
                Cluster Mentor to give quality score between 0-1 for following
                factors
              </div>
              <div className="form-group">
                <label className="label" htmlFor="assignments">
                  Quality of Assignments
                </label>
                <input
                  type="number"
                  id="assignments"
                  onChange={(e) => setAssignments(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="tests">
                  Quality of Quizzes/Tests
                </label>
                <input
                  type="number"
                  id="tests"
                  onChange={(e) => setTests(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="experiments">
                  Quality of Experiments conducted in practical
                </label>
                <input
                  type="number"
                  id="experiments"
                  onChange={(e) => setExperiments(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="engagements">
                  Activities done for engagement with student outside the
                  classroom Student Feedback
                </label>
                <input
                  type="number"
                  id="engagements"
                  onChange={(e) => setEngagements(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="slowLearners">
                  Activities done for Slow Learners
                </label>
                <input
                  type="number"
                  id="slowLearners"
                  onChange={(e) => setSlowLearners(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="advanceLearners">
                  Activities done for Advance Learners
                </label>
                <input
                  type="number"
                  id="advanceLearners"
                  onChange={(e) => setAdvanceLearners(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="title text-base font-medium">
                Assessment metric for internal marks (At least 4 activities)
              </div>
              <div className="form-group">
                <label className="label" htmlFor="teamWork">
                  No. of activities considered for team work
                </label>
                <input
                  type="number"
                  id="teamWork"
                  onChange={(e) => setTeamWork(Number(e.target.value) * 0.25)}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="mapping">
                  Mapping
                </label>
                <select
                  name="mapping"
                  id="mapping"
                  onChange={(e) => setMapping(Number(e.target.value))}
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

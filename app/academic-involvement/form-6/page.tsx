'use client';

import { useState } from 'react';
import Nav from '@/app/components/Nav';

export default function Page() {
  const [typeOfGuide, setTypeOfGuide] = useState('1.5');
  const [typeOfOrganization, setTypeOfOrganization] = useState('1.5');
  const [typeOfProject, setTypeOfProject] = useState('1');
  const [mapping, setMapping] = useState('1.5');

  let weight =
    Math.round(
      (typeOfGuide * typeOfOrganization * typeOfProject * mapping +
        Number.EPSILON) *
        100,
    ) / 100;

  let marks = Math.ceil(Math.round((weight * 75 + Number.EPSILON) * 100) / 100);

  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
          <div className="form-container">
            <div className="title">BSA - Mini Project</div>
            <form action="" className="form">
              <div className="form-group">
                <label htmlFor="typeOfGuide" className="label">
                  Type of guide
                </label>
                <select
                  name="typeOfGuide"
                  id="typeOfGuide"
                  className="input"
                  onChange={(e) => setTypeOfGuide(e.target.value)}
                >
                  <option value="1.5">Industry expert as co-guide</option>
                  <option value="1">only faculty guide</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="typeOfOrganization" className="label">
                  Type of organization of industry co-guide
                </label>
                <select
                  name="typeOfOrganization"
                  id="typeOfOrganization"
                  className="input"
                  onChange={(e) => setTypeOfOrganization(e.target.value)}
                >
                  <option value="1.5">MNC</option>
                  <option value="1.3">National</option>
                  <option value="1.1">SMEs</option>
                  <option value="1">None</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="typeOfProject" className="label">
                  Type of project
                </label>
                <select
                  name="typeOfProject"
                  id="typeOfProject"
                  className="input"
                  onChange={(e) => setTypeOfProject(e.target.value)}
                >
                  <option value="1">Functional project</option>
                  <option value="0.5">Non-functional project</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mapping" className="label">
                  Mapping
                </label>
                <select
                  name="mapping"
                  id="mapping"
                  className="input"
                  onChange={(e) => setMapping(e.target.value)}
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

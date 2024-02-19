'use client';

import Nav from '@/app/components/Nav';
import { useState } from 'react';

export default function Page() {
  const [MMS1, setMMS1] = useState('1.5');
  const [MMS2, setMMS2] = useState('1');
  const [Engg, setEngg] = useState('1.5');
  const [Engg2, setEngg2] = useState('1.25');
  const [Engg3, setEngg3] = useState('1');
  const [Engg4, setEngg4] = useState('1');
  const [mapping, setMapping] = useState('1');

  let weight = Math.max(MMS1 * MMS2, Engg * Engg2 * Engg3 * Engg4) * mapping;
  let marks = Math.round((weight * 100 + Number.EPSILON) * 100) / 100;
  return (
    <>
      <main className="main">
        <Nav />
        <div className="container">
          <div className="form-container">
            <div className="title">Lab Work / Case Study</div>
            <form action="" className="form">
              <label className="title text-lg">For MMS</label>
              <label className="label">
                Uploading videos of published case studies (including last 6
                months)
              </label>
              <label htmlFor="yes">
                <input
                  type="radio"
                  id="yes"
                  value="1.5"
                  name="MMS1"
                  onChange={(e) => setMMS1(e.target.value)}
                ></input>{' '}
                yes
              </label>
              <label htmlFor="no">
                <input
                  type="radio"
                  id="no"
                  value="0"
                  name="MMS1"
                  onChange={(e) => setMMS1(e.target.value)}
                ></input>{' '}
                no
              </label>
              <label className="label">
                Case studies published (including last 6 months)
              </label>
              <label htmlFor="yes1">
                <input
                  type="radio"
                  id="yes1"
                  value="1"
                  name="MMS2"
                  onChange={(e) => setMMS2(e.target.value)}
                ></input>{' '}
                yes
              </label>
              <label htmlFor="no1">
                <input
                  type="radio"
                  id="no1"
                  value="0"
                  name="MMS2"
                  onChange={(e) => setMMS2(e.target.value)}
                ></input>{' '}
                no
              </label>
              <label className="title text-lg">For Engg</label>
              <label className="label">
                Uploading videos of new experiments / PBL prepared during the PA
                evaluation period
              </label>
              <label htmlFor="yes2">
                <input
                  type="radio"
                  id="yes2"
                  value="1.5"
                  name="Engg"
                  onChange={(e) => setEngg(e.target.value)}
                ></input>{' '}
                yes
              </label>
              <label htmlFor="no2">
                <input
                  type="radio"
                  id="no2"
                  value="0"
                  name="Engg"
                  onChange={(e) => setEngg(e.target.value)}
                ></input>{' '}
                no
              </label>
              <div className="form-group">
                <label htmlFor="Engg2" className="label">
                  Use of new tools / simulators / Virtual lab (cluster mentor to
                  give quality score between 0 to 1.25)
                </label>
                <input
                  type="number"
                  id="Engg2"
                  onChange={(e) => setEngg2(e.target.value)}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Engg3" className="label">
                  Quality of PB statements (cluster mentor to give quality score
                  between 0 to 1)
                </label>
                <input
                  type="number"
                  id="Engg3"
                  onChange={(e) => setEngg3(e.target.value)}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Engg4" className="label">
                  Continuous assessment (cluster mentor to give quality score
                  between 0 to 1)
                </label>
                <input
                  type="number"
                  id="Engg4"
                  onChange={(e) => setEngg4(e.target.value)}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mapping" className="label">
                  Mapping
                </label>
                <select
                  name="mapping"
                  id="mapping"
                  onChange={(e) => setMapping(e.target.value)}
                  className="input"
                >
                  <option value="1">Strongly to CO</option>
                  <option value="0.8">Moderately to CO</option>
                  <option value="0">Not mapped to CO</option>
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

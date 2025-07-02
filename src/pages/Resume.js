import React from 'react';
import tutor from '../assets/photos/tutor.png';
import ilc from '../assets/photos/ilc.png';
import spacelab from '../assets/photos/spacelab.png';
import llnl from '../assets/photos/llnl.png';

function Resume() {
  return (
    <div className="resume-grid">
      {/* Card 1 */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={tutor} alt="Tutoring" className="card-image" />
            <h2>AmeriCorps</h2>
          </div>
          <div className="card-back">
            <h3>MATCH High School Math Tutor Fellow</h3>
            <h4><em>July 2024 - July 2025</em></h4>
            <ul>
              <li>Served as a full-time tutor and mentor offering daily small-group instruction to students in geometry and algebra</li>
              <li>Supported students in classes as a computer science teaching assistant</li>
              <li>Staffed after-school programming such as Girls Who Code and other support duties</li>
              <li>Worked with students and teachers to set individualized goals and foster social-emotional growth</li>
              <li>Built community relationships through parent communication and annual events</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={ilc} alt="ILC" className="card-image" />
            <h2>UCSC Residential Life</h2>
          </div>
          <div className="card-back">
            <h3>International Living Center Intern</h3>
            <h4><em>Jan 2022 - June 2024</em></h4>
            <ul>
              <li>Coordinated events and improved the quality of life for ILC residents</li>
              <li>Planned biweekly events hosting 30–70 people</li>
              <li>Managed programming budget year-round</li>
              <li>Recorded weekly meeting notes</li>
              <li>Liaised between residents and ResLife staff for improvements</li>
              <li>Supported RA events ranging from 20–300 guests</li>
              <li>Processed purchase orders and vendor outreach</li>
            </ul>

            <h3>CLNI-85 Instructor</h3>
            <h4><em>Dec 2022 - Mar 2023</em></h4>
            <ul>
              <li>Taught a class on global action, social justice, and international perspectives</li>
              <li>Helped freshmen transition and succeed in Crown College courses</li>
              <li>Used Discord to support student engagement</li>
            </ul>

            <h3>Peer Navigator</h3>
            <h4><em>Sep 2021 - Dec 2021</em></h4>
            <ul>
              <li>Assisted in 3 core classes and supported two professors</li>
              <li>Designed lesson plans and gave weekly lectures</li>
              <li>Earned A+ and college credits for teaching</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={spacelab} alt="Spacelab" className="card-image" />
            <h2>Spacelab</h2>
          </div>
          <div className="card-back">
            <h3>Frontend Developer</h3>
            <h4><em>Jun 2023 - Aug 2023</em></h4>
            <ul>
              <li>Contributed to the 3D Exoplanetarium project</li>
              <li>Built and implemented a database UI based on Figma designs using React and SCSS</li>
              <li>Integrated data from NASA and CalTech</li>
              <li>Collaborated in weekly scrums and agile workflows</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img src={llnl} alt="LLNL" className="card-image" />
            <h2>Lawrence Livermore National Lab</h2>
          </div>
          <div className="card-back">
            <h3>Computing Intern</h3>
            <h4><em>Jun 2022 - Sep 2022</em></h4>
            <ul>
              <li>Worked on CasCon+ simulation to model water systems and failure points</li>
              <li>Created readable summaries of simulation runs for decision-makers</li>
              <li>Wrote a script to parse PDF inputs into spreadsheets for simulation data</li>
            </ul>

            <h3>Cybersecurity Intern</h3>
            <h4><em>Jun 2019 - Aug 2019</em></h4>
            <ul>
              <li>Built a Python script to remove unnecessary alerts for Thinkst Canary API</li>
              <li>Completed Splunk Fundamentals I certification</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

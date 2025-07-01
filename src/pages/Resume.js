import React from 'react';
import tutor from '../assets/photos/tutor.png'; 


function Resume() {
  return (
    <div className="resume-box">
      <h1> WORK EXPERIENCE </h1>
      <h2>Americorps GO Tutors</h2>
      <h3> MATCH High School Math Tutor Fellow </h3>
      <h4> <em>July 2024 - July 2025</em></h4>
        <ul>
        <li>Served as a full-time tutor and mentor offering daily small-group instructor to students in geometry and algebra</li>
        <li>Supported students in classes as a computer science teaching assistant</li>
        <li>Participated after-school programming such as staffing Girls Who Code as well as other academic support staff duties</li>
        <li>Worked with students and teachers to set individualized and student-driven academic goals and foster student social-emotional growth </li>
        <li>Built community relationships through parent communication and annual school-wide events</li>
        </ul>
      <img src={tutor} alt="Me tutoring!" />
    </div>
  );
}

export default Resume;

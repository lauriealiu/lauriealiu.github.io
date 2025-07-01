import React from 'react';
import tutor from '../assets/photos/tutor.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Resume() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <div className="resume-carousel">
      <h1> WORK EXPERIENCE </h1>
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots
        infinite={false}
        keyBoardControl
        containerClass="carousel-container"
        dotListClass="custom-dot-list"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="card">
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
          {/*img src={tutor} alt="Me tutoring!" */}
        </div>

        <div className="card">
          <h2>University of California, Santa Cruz - College Nine</h2>
          <h3> International Living Center Intern </h3>
          <h4> <em>Jan 2022 - June 2024</em></h4>
          <ul>
            <li>Coordinated events and improves the quality of life for the residents of the International Living Center (ILC) at UC Santa Cruz</li>
            <li>Organized, hosted, and planned events every other week that hosted residents of the ILC usually averaging around 30-70 people</li>
            <li>Handled budgeting year-round for programming for the ILC</li>
            <li>Notetaker for weekly meetings</li>
            <li>Communicated between residents and ResLife about improvements around the ILC to ensure a fun and positive living experience for both domestic and international residents</li>
            <li>Assisted other staff members and RAs for their own events, ranging from 20 to 300 guests</li>
            <li>Handled numerous purchase orders and contacted vendors</li>
          </ul>

          <h3>CLNI-85 Instructor </h3>
          <h4> <em>Dec 2022 - Mar 2023</em></h4>
          <ul>
            <li>Taught a class (CLNI-85) revolving around themes of global action, social justice, and international perspectives</li>
            <li>Assisted Crown College freshmen during the fall quarter in integrating them into college life and to help them succeed in Crown 1 course</li>
            <li>Created Discord channels and facilitated conversation and communication to help students in an efficient manner</li>
          </ul>

          <h3>Crown College Peer Navigator </h3>
          <h4> <em>Sep 2021 - Dec 2021</em></h4>
          <ul>
            <li>Attended and provided help for two professors for three separate core classes </li>
            <li>Created lesson plans and presented lectures weekly to a class of 22</li>
            <li>Received an A+ and college credits for teaching</li>
          </ul>
        </div>

        <div className="card">
          <h2>Spacelab</h2>
          <h3> Frontend Developer </h3>
          <h4> <em>Jun 2023 - Aug 2023</em></h4>
          <ul>
            <li>Worked on the 3D Exoplanetarium project, which aims to find objects of interest for astronomers to explore</li>
            <li>Solely built and implemented brand-new database from scratch onto the project based on the provided Figma design using React, Javascript, and scss, which opens up NASA and CalTech data about the selected exoplanet</li>
            <li>Attended weekly scrum meetings and participated in agile project management techniques</li>
          </ul>

        </div>

        <div className="card">
          <h2>Lawrence Livermore National Laboratory</h2>
          <h3>Computing Intern</h3>
          <h4> <em>Jun 2022 - Sep 2022</em></h4>
          <ul>
            <li>Worked on the CasCon+ project, which was a simulation to model water and how it runs among various systems and tests for errors in how it could fail</li>
            <li>Designed documents that could be easily read by decision-makers that compiled all the CasCon+ information into easy-to-read papers that contained all the information about the project and various inputs and outputs from simulation runs</li>
            <li>Wrote a Javascript script that could take the information inputted into a PDF document (designed by me) into a spreadsheet that displays all the crucial information from the document and the simulation results.</li>
          </ul>


          <h3>Cybersecurity Intern</h3>
          <h4> <em>Jun 2019 - Aug 2019</em></h4>
          <ul>
            <li>Created a script in Python that deleted unnecessary alerts for the Thinkst Canary API</li>
            <li>Gained experience using Splunk Fundamentals and gained Splunk Fundamentals I certification</li>
          </ul>

        </div>

      </Carousel>
    </div>
  );
}

export default Resume;

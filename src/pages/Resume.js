import React, { useState } from 'react';
import tutor from '../assets/photos/tutor.png';
import ucsc from '../assets/photos/ucsc.png';
import spacelab from '../assets/photos/spacelab.png';
import llnl from '../assets/photos/llnl.png';
import sdsu from '../assets/photos/sdsu.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Resume() {
  const [flippedIndexes, setFlippedIndexes] = useState({});

  const toggleFlip = (sectionIdx, cardIdx) => {
    const key = `${sectionIdx}-${cardIdx}`;
    setFlippedIndexes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sections = [
    {
      label: 'Work Experience',
      cards: [
        {
          company: 'Americorps GO Tutors @ MATCH Charter High School',
          img: tutor,
          roles: [
            {
              title: "MATCH High School Math Tutor Fellow",
              dates: "July 2024 - July 2025",
              description: (
                <ul>
                  <li>Served as a full-time tutor and mentor offering daily small-group instruction to students in geometry and algebra</li>
                  <li>Supported students in classes as a computer science teaching assistant</li>
                  <li>Participated after-school programming such as staffing Girls Who Code and other academic support duties</li>
                  <li>Worked with students and teachers to set individualized and student-driven academic goals and foster student social-emotional growth</li>
                  <li>Built community relationships through parent communication and annual school-wide events</li>
                </ul>
              )
            }
          ]
        },
        {
          company: 'University of California, Santa Cruz',
          img: ucsc,
          roles: [
            {
              title: "International Living Center Intern",
              dates: "Jan 2022 - June 2024",
              description: (
                <ul>
                  <li>Coordinated events and improved quality of life for residents of the International Living Center (ILC)</li>
                  <li>Organized events every other week for 30-70 residents</li>
                  <li>Handled budgeting year-round for programming</li>
                  <li>Notetaker for weekly meetings</li>
                  <li>Communicated between residents and ResLife about improvements</li>
                  <li>Assisted other staff members and RAs with events ranging from 20 to 300 guests</li>
                  <li>Handled numerous purchase orders and vendor communications</li>
                </ul>
              )
            },
            {
              title: "CLNI-85 Instructor",
              dates: "Dec 2022 - Mar 2023",
              description: (
                <ul>
                  <li>Taught CLNI-85 course on global action, social justice, and international perspectives</li>
                  <li>Assisted freshmen integrating into college life and succeeding academically</li>
                  <li>Created Discord channels and facilitated student communication</li>
                </ul>
              )
            },
            {
              title: "Crown College Peer Navigator",
              dates: "Sep 2021 - Dec 2021",
              description: (
                <ul>
                  <li>Assisted professors with core classes</li>
                  <li>Created lesson plans and presented weekly lectures to a class of 22</li>
                  <li>Received an A+ and college credits for teaching</li>
                </ul>
              )
            }
          ]
        },
        {
          company: 'Spacelab',
          img: spacelab,
          roles: [
            {
              title: "Frontend Developer",
              dates: "Jun 2023 - Aug 2023",
              description: (
                <ul>
                  <li>Worked on 3D Exoplanetarium project for astronomer tools</li>
                  <li>Built database feature from scratch with React, JS, SCSS based on Figma designs</li>
                  <li>Participated in weekly scrum meetings and agile project management</li>
                </ul>
              )
            }
          ]
        },
        {
          company: 'Lawrence Livermore National Laboratory',
          img: llnl,
          roles: [
            {
              title: "Computing Intern",
              dates: "Jun 2022 - Sep 2022",
              description: (
                <ul>
                  <li>Worked on CasCon+ simulation modeling water systems and failure tests</li>
                  <li>Designed easy-to-read documents for decision-makers</li>
                  <li>Wrote JS script extracting PDF data into spreadsheets for analysis</li>
                </ul>
              )
            },
            {
              title: "Cybersecurity Intern",
              dates: "Jun 2019 - Aug 2019",
              description: (
                <ul>
                  <li>Created Python script to delete unnecessary alerts for Thinkst Canary API</li>
                  <li>Gained Splunk Fundamentals I certification</li>
                </ul>
              )
            }
          ]
        }
      ]
    },
    {
      label: 'Education',
      cards: [
        {
          company: 'University of California, Santa Cruz',
          img: ucsc,
          roles: [
            {
              title: "B.S. in Computer Science",
              dates: "Graduated June 2024",
              description: (
                <ul>
                  <li>Global Leadership Certificate Recipient</li>
                  <li>Peer Navigator, Global Action Instructor, ILC Intern</li>
                </ul>
              )
            }
          ]
        },
        {
          company: 'San Diego State University (SDSU)',
          img: sdsu,
          roles: [
            {
              title: "M.S. Information Systems (Incoming Fall 2025)",
              dates: "",
              description: (
                <ul>
                  <li>Graduate-level coursework in UX, software development, and project management</li>
                </ul>
              )
            }
          ]
        }
      ]
    },
    {
      label: 'Awards',
      cards: [
        {
          company: 'UCSC Leadership Awards',
          img: ucsc,
          roles: [
            {
              title: "Jay Johnson Emerging Leader Award",
              dates: "",
              description: null
            },
            {
              title: "College Nine Leadership Certificate",
              dates: "",
              description: null
            }
          ]
        }
      ]
    }
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
  };

return (
    <div>
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
        {sections.map((section, sectionIdx) => (
          <div key={sectionIdx} style={{ padding: '20px' }}>
            <h2 className="resume-title">{section.label}</h2>
            <div className="resume-container">
              {section.cards.map((card, cardIdx) => {
                const flippedKey = `${sectionIdx}-${cardIdx}`;
                return (
                  <div
                    key={cardIdx}
                    className={`card ${flippedIndexes[flippedKey] ? 'flipped' : ''}`}
                    onClick={() => toggleFlip(sectionIdx, cardIdx)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={flippedIndexes[flippedKey] ? 'true' : 'false'}
                  >
                    <div className="card-inner">
                      <div className="card-front">
                        <img src={card.img} alt={card.company} />
                        <div className="company-name">{card.company}</div>
                      </div>
                      <div className="card-back">
                        {card.roles.map((role, i) => (
                          <div key={i} className="role-entry">
                            <h3>{role.title}</h3>
                            {role.dates && <h4><em>{role.dates}</em></h4>}
                            {role.description}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Resume;

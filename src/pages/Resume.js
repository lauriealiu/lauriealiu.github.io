import React, { useState } from 'react';
import tutor from '../assets/photos/tutor.png';
import ucsc from '../assets/photos/ucsc.png';
import spacelab from '../assets/photos/spacelab.png';
import llnl from '../assets/photos/llnl.png';
import sdsu from '../assets/photos/sdsu.png';
import vhs from '../assets/photos/vhs.png';
import upchieve from '../assets/photos/upchieve.png';
import spotify from '../assets/photos/spotify.png';
import pedrozzi from '../assets/photos/pedrozzi.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Resume() {
  const [flippedIndexes, setFlippedIndexes] = useState({});
  const [mobileSection, setMobileSection] = useState(0);

  const toggleFlip = (sectionIdx, cardIdx) => {
    const key = `${sectionIdx}-${cardIdx}`;

    setFlippedIndexes((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sections = [
    {
      label: 'Work Experience',
      cards: [
        {
          company: 'San Diego State University',
          img: sdsu,
          roles: [
            {
              title: 'IT Support Specialist',
              dates: 'Aug 2025 - present',
              description: (
                <ul>
                  <li>Provided technical support for hardware, software, and network issues</li>
                  <li>Assisted users via in-person, Zoom, and phone with prompt and professional service</li>
                  <li>Troubleshot technical issues on Windows, macOS, ChromeOS, and mobile platforms</li>
                  <li>Collaborated with IT team members to resolve complex technical issues</li>
                  <li>Delivered clear, step-by-step guidance to non-technical users, improving user confidence and efficiency</li>
                </ul>
              )
            },
            {
              title: 'Graduate Research Assistant',
              dates: 'Aug 2025 - present',
              description: (
                <ul>
                  <li>Created a Python script to pull school district data from EMMA (Electronic Municipal Market Access) to analyze 6-digit CUSIPs of relevance for further analysis</li>
                  <li>Assisted in proctoring exams of 80 students</li>
                </ul>
              )
            }
          ]
        },
        {
          company: 'Americorps GO Tutors @ MATCH Charter High School',
          img: tutor,
          roles: [
            {
              title: 'MATCH High School Math Tutor Fellow',
              dates: 'July 2024 - July 2025',
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
              title: 'International Living Center Intern',
              dates: 'Jan 2022 - June 2024',
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
              title: 'CLNI-85 Instructor',
              dates: 'Dec 2022 - Mar 2023',
              description: (
                <ul>
                  <li>Taught CLNI-85 course on global action, social justice, and international perspectives</li>
                  <li>Created lesson plans and presented weekly lectures to a class of 22</li>
                  <li>Received an A+ and college credits for teaching</li>
                  <li>Created Discord channels and facilitated student communication</li>
                </ul>
              )
            },
            {
              title: 'Crown College Peer Navigator',
              dates: 'Sep 2021 - Dec 2021',
              description: (
                <ul>
                  <li>Assisted professors with core classes</li>
                  <li>Assisted freshmen integrating into college life and succeeding academically</li>
                  <li>Created Discord channels and facilitated student communication</li>
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
              title: 'Frontend Developer',
              dates: 'Jun 2023 - Aug 2023',
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
              title: 'Computing Intern',
              dates: 'Jun 2022 - Sep 2022',
              description: (
                <ul>
                  <li>Worked on CasCon+ simulation modeling water systems and failure tests</li>
                  <li>Designed easy-to-read documents for decision-makers</li>
                  <li>Wrote JS script extracting PDF data into spreadsheets for analysis</li>
                </ul>
              )
            },
            {
              title: 'Cybersecurity Intern',
              dates: 'Jun 2019 - Aug 2019',
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
      label: 'Projects',
      cards: [
        {
          company: 'San Diego State University',
          img: sdsu,
          roles: [
            {
              title: 'Reconceptualizing Innovation in Human-AI Creative Collaboration: Balancing Agency, Machine Contribution, and Authenticity',
              dates: 'Aug 2025 - Dec 2025',
              description: (
                <p>
                  This research explores how creative professionals experience authorship, authenticity, and creative flow when working with generative AI tools. Through qualitative interviews, the project shows that AI often sparks early discovery but can also shift creative work toward optimization and production, which creates tensions around agency, ownership, and meaning. The study reframes innovation as a relational, human-AI process and offers design insights for building AI tools that support uncertainty, serendipity, and authentic creative engagement rather than just efficiency.

                  <br /><br />

                  <a
                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5932297"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="project-link"
                  >
                    Link to my paper
                  </a>
                </p>
              )
            }
          ]
        },
        {
          company: '3D Exoplanetarium',
          img: spacelab,
          roles: [
            {
              title: '3D Exoplanetarium Database',
              dates: 'Jun 2023 - Aug 2023',
              description: (
                <p>
                  Exoplanetarium is a project with the goal to explore NASA/CalTech data from the TESS, Kepler and K2 Missions using various degrees of Machine Learning and Deep Natural Networks in the pursuit of Earth-Like planets around nearby stars in the Milky Way Galaxy. My own personal contribution to this project consisting of building the database of the application from scratch to be functional to open and close, as well as displaying data about each individual exoplanet.

                  <br /><br />

                  <a
                    href="https://spacelabdev.github.io/Exoplanetarium-3D/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="project-link"
                  >
                    Link to Exoplanetarium
                  </a>
                </p>
              )
            }
          ]
        },
        {
          company: "How Spotify's BaRT Algorithm Recommends New Songs to Users",
          img: spotify,
          roles: [
            {
              title: "How Spotify's BaRT Algorithm Recommends New Songs to Users",
              dates: 'Mar 2023 - Jun 2023',
              description: (
                <p>
                  Independent research done on how the global music streaming platform is able to use its algorithm to suggest relevant songs to its users using natural language processing, content-based filtering, and collaborative filtering. I have arranged my findings through a poster that has been presented, as well as a research paper written using LaTeX.

                  <br /><br />

                  <a
                    href="https://www.linkedin.com/in/lauriealiu/overlay/Project/1210006050/treasury/?profileId=ACoAACwxQXcBLA1gXTOv1U8nvRKm3pJ3Lh5bLsM"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="project-link"
                  >
                    Link to my paper
                  </a>
                </p>
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
          company: 'San Diego State University',
          img: sdsu,
          roles: [
            {
              title: "Master's in Information Systems",
              dates: 'Expected Graduation: May 2027',
              description: (
                <>
                  <ul>
                    <li>Member of SDSU Cyber Clinic (Cyber Center of Excellence)</li>
                    <li>Master Builder at buildIT (SDSU&apos;s Makerspace)</li>
                  </ul>

                  <p>Relevant Coursework:</p>

                  <ul>
                    <li>Statistical Analysis</li>
                    <li>Operations and Supply Chain Management</li>
                    <li>Scientific Method Seminar</li>
                    <li>Enterprise Data Management</li>
                    <li>Cloud Computing</li>
                    <li>Business Analytics</li>
                    <li>Fundamentals of Cybersecurity Management</li>
                    <li>AI For Cybersecurity</li>
                    <li>Business Systems Analysis & Design</li>
                    <li>Programming for Data-Driven Applications</li>
                  </ul>
                </>
              )
            }
          ]
        },
        {
          company: 'University of California, Santa Cruz',
          img: ucsc,
          roles: [
            {
              title: "Bachelor's in Computer Science",
              dates: 'Graduated June 2024',
              description: (
                <>
                  <ul>
                    <li>Member of SASE (Society of Asian Scientists & Engineers)</li>
                  </ul>

                  <p>Relevant Coursework:</p>

                  <ul>
                    <li>Applied Discrete Mathematics</li>
                    <li>Business Information Systems</li>
                    <li>Business Strategy and Information Systems</li>
                    <li>Computational Methods and Applications</li>
                    <li>Computational Models</li>
                    <li>Computer Architecture</li>
                    <li>Computer Systems and C Programming</li>
                    <li>Foundations of Video Game Design</li>
                    <li>Introduction to Computer Graphics</li>
                    <li>Introduction to Data Structures and Algorithms</li>
                    <li>Mathematical Methods for Engineers I</li>
                    <li>Probability and Statistics for Engineers</li>
                    <li>Technical Writing for Computer Science and Engineering</li>
                    <li>Digital Scholarship Innovation Studio 3D Printing Training</li>
                  </ul>
                </>
              )
            }
          ]
        }
      ]
    },
    {
      label: 'Volunteer Experience',
      cards: [
        {
          company: 'San Diego State University',
          img: sdsu,
          roles: [
            {
              title: 'Cyber Clinic Member (Elder Cyber Awareness Team)',
              dates: 'Jan 2026 - present',
              description: (
                <ul>
                  <li>Delivered cybersecurity presentations to local elderly communities, focusing on online safety habits</li>
                  <li>Taught participants how to recognize phishing emails, scam messages, suspicious links, and common fraud tactics, such as gift card and crypto scams</li>
                  <li>Explained cybersecurity concepts in accessible, non-technical language to help build confidence with technology use</li>
                  <li>Answered questions and provided guidance on password safety, account protection, and how to avoid scam tactics</li>
                </ul>
              )
            },
            {
              title: 'Master Builder at buildIT',
              dates: 'Aug 2025 - present',
              description: (
                <ul>
                  <li>Supported students and community members in using makerspace tools, equipment, and creative technologies</li>
                  <li>Helped promote safe and responsible use of makerspace equipment</li>
                  <li>Helped create an inclusive, collaborative learning environment for users with varying levels of technical experience</li>
                </ul>
              )
            }
          ]
        },
        {
          company: 'UPChieve',
          img: upchieve,
          roles: [
            {
              title: 'Online Tutor',
              dates: 'Jan 2025 - Jun 2025',
              description: (
                <ul>
                  <li>Tutored middle and high school students in a range of math subjects, including algebra and geometry</li>
                  <li>Provided personalized essay support, focusing on structure, clarity, grammar, and voice across college application writing</li>
                  <li>Guided students through the college prep process, including brainstorming, editing personal statements, and exploring alternative pathways post-secondary school</li>
                  <li>Adapted instruction to each student’s learning style, goals, and pace to build confidence and subject mastery</li>
                </ul>
              )
            }
          ]
        },
        {
          company: 'Valley Humane Society',
          img: vhs,
          roles: [
            {
              title: 'Cat Care Volunteer',
              dates: 'Oct 2018 - Oct 2020',
              description: (
                <ul>
                  <li>Provided care, food, and cleanup for shelter cats awaiting adoption.</li>
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
              title: 'Jay Johnson Emerging Leader Award',
              dates: 'May 2022',
              description: (
                <p>
                  This award is given to students who reflect the values, character, spirit, and servitude of Jay; are up-and-coming leaders in the community; demonstrate a growing capacity for commitment to service; and embody the spirit of selflessness, passion, caring, and humbleness.
                </p>
              )
            },
            {
              title: 'College Nine Leadership Certificate',
              dates: 'May 2023 and May 2024',
              description: (
                <p>
                  The College Service Award goes to students who have contributed significantly to their colleges and campus during their time at College Nine.
                </p>
              )
            }
          ]
        },
        {
          company: 'Pedrozzi Foundation Scholarship',
          img: pedrozzi,
          roles: [
            {
              title: 'Kim Cupps Memorial Undergraduate Scholarship',
              dates: 'May 2020',
              description: (
                <p>
                  This scholarship honors students who embody the legacy of Kim Cupps through demonstrated leadership, academic excellence, and community service.
                </p>
              )
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

  const renderCards = (section, sectionIdx, containerClassName) => (
    <div className={`resume-container ${containerClassName}`}>
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
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip(sectionIdx, cardIdx);
              }
            }}
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
                    {role.dates && (
                      <h4>
                        <em>{role.dates}</em>
                      </h4>
                    )}
                    {role.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const activeMobileSection = sections[mobileSection];

  return (
    <div className="resume-page">
      <div className="resume-desktop">
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
              <p className="card-hint">Click any card to flip it over.</p>

              {renderCards(
                section,
                sectionIdx,
                section.label === 'Work Experience' ? 'work-container' : 'center-container'
              )}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="resume-mobile">
        <div className="resume-tabs">
          {sections.map((section, sectionIdx) => (
            <button
              key={sectionIdx}
              type="button"
              className={`resume-tab ${mobileSection === sectionIdx ? 'active' : ''}`}
              onClick={() => setMobileSection(sectionIdx)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="resume-section">
          <h2 className="resume-title">{activeMobileSection.label}</h2>
          <p className="card-hint">Click any card to flip it over.</p>

          {renderCards(activeMobileSection, mobileSection, 'mobile-card-container')}
        </div>
      </div>

      <div className="resume-download-container">
        <a
          href="pdfResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import me from '../assets/photos/me.png';
import slub from '../assets/photos/gradSlug.png';
import work from '../assets/photos/work.png';
import tutor from '../assets/photos/tutor.png';
import sdsu from '../assets/photos/sdsu.png';

const aboutLines = [
  "Hello! I'm Laurie, a passionate IT professional with a background in computer science and a strong commitment to using technology as a force for good.",
  "I recently earned my Bachelor's in Computer Science from UC Santa Cruz, where I also served as a peer navigator, course instructor, and International Living Center intern — experiences that deepened my passion for mentorship, leadership, and global engagement.",
  "Along the way, I’ve interned as a frontend developer at Spacelab and as a computing / cybersecurity fellow at Lawrence Livermore National Laboratory, where I applied my technical skills to projects ranging from exoplanet data visualization to water system simulations.",
  "Most recently, I served with AmeriCorps for the GO Tutor Corps at MATCH Charter High School, where I tutored and mentored students in math and computer science, which was an experience that strengthened my leadership skills and deepened my commitment to educational equity.",
  "I am currently a graduate student at San Diego State University, where I hope to grow as both a developer and a leader. My long-term goal is to provide assistance and accessibility and create impactful technology solutions."
];

const aboutImages = [me, slub, work, tutor, sdsu];

const imageSizes = [
  { width: '650px' },
  { width: '450px' },
  { width: '900px' },
  { width: '500px' },
  { width: '500px' }
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

function AboutMeCarousel() {
  return (
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
      {aboutLines.map((line, idx) => (
        <div key={idx} className="about-slide">
          <img
            src={aboutImages[idx]}
            alt={`About me  ${idx + 1}`}
            className="about-image"
            style={{ ...imageSizes[idx], height: 'auto' }}
          />
          <h2 className="about-text">{line}</h2>
        </div>
      ))}

    </Carousel>
  );
}

export default AboutMeCarousel;

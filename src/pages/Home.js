import miiGIF from '../assets/photos/miiGIF.gif'; 
import miiBlink from '../assets/photos/miiBlink.png'; 
import React, { useState } from 'react';

function Home() {
  const [isBlink, setBlink] = useState(false);
  const [bounceClass, setBounceClass] = useState('');

  const handleClick = () => {
    setBounceClass('big-bounce');
    setTimeout(() => setBounceClass(''), 500);
  };

  return (
    <div className="home-container">
      <div className="home-text">
        <h2 className="bigText">Hello! My name is Laurie Liu.</h2>

        <p className="home-description">
          I am an M.S. Information Systems student at San Diego State University. I am a dedicated student with a strong passion for IT analysis, project management, frontend development, and a keen interest in new and emerging technologies.
        </p>

        <p className="home-description">
          Whether it's creating programs, exploring new web technologies, or tackling exciting projects, I'm always eager to learn and grow in the ever-evolving field of technology.
        </p>
      </div>

      <div className="mii-wrapper">
      <img 
  src={isBlink ? miiBlink : miiGIF} 
  alt="It's Mii!" 
  className={`mii-image ${bounceClass}`}
  onMouseEnter={() => setBlink(true)}
  onMouseLeave={() => setBlink(false)}
  onClick={handleClick}
/>
      </div>
    </div>
  );
}

export default Home;


import React, { useEffect, useState } from 'react';

import miiGIF from '../assets/photos/miiGIF.gif';
import miiBlink from '../assets/photos/miiBlink.png';
import miiTalk1 from '../assets/photos/miiTalk1.png';
import miiTalk2 from '../assets/photos/miiTalk2.png';

function Home() {
  const [isBlink, setBlink] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [talkFrame, setTalkFrame] = useState(0);
  const [bounceClass, setBounceClass] = useState('');

  useEffect(() => {
    if (!isTalking) return;

    const interval = setInterval(() => {
      setTalkFrame((prev) => (prev === 0 ? 1 : 0));
    }, 180);

    return () => clearInterval(interval);
  }, [isTalking]);

  const handleClick = () => {
    setBounceClass('big-bounce');
    setTimeout(() => setBounceClass(''), 500);
  };

  const miiImage = isTalking
    ? talkFrame === 0
      ? miiTalk1
      : miiTalk2
    : isBlink
      ? miiBlink
      : miiGIF;

  return (
    <div className="home-container">
      <div
        className="home-text"
        onMouseEnter={() => setIsTalking(true)}
        onMouseLeave={() => setIsTalking(false)}
      >
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
          src={miiImage}
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
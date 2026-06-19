import React, { useEffect, useState } from 'react';

import miiGIF from '../assets/photos/miiGIF.gif';
import miiBlink from '../assets/photos/miiBlink.png';
import miiTalk1 from '../assets/photos/miiTalk1.png';
import miiTalk2 from '../assets/photos/miiTalk2.png';

function Home() {
  const bubbleTexts = [
    {
      title: 'Hello! My name is Laurie Liu.',
      body: (
        <>
          <p className="home-description">
            I am an M.S. Information Systems student at San Diego State University. I am a dedicated student with a strong passion for IT analysis, project management, frontend development, and a keen interest in new and emerging technologies.
          </p>

          <p className="home-description">
            Whether it's creating programs, exploring new web technologies, or tackling exciting projects, I'm always eager to learn and grow in the ever-evolving field of technology.
          </p>
        </>
      )
    },
    {
      title: 'Where I am currently working',
      body: (
        <p className="home-description">
          I am currently working part-time in two positions at SDSU. I work at the IT Help Desk, and I help collect data using Python as a Graduate Research Assistant!
        </p>
      )
    },
    {
      title: 'What I’m currently pursuing',
      body: (
        <p className="home-description">
          I’m currently in my second year of my Master's program in Information Systems on the Cybersecurity track!
        </p>
      )
    },
    {
      title: 'What I’m up to otherwise',
      body: (
        <p className="home-description">
          I’m currently playing Paranormasight: The Mermaid's Curse on my Switch. I may also be 3D printing some cool things at the buildIT makerspace!
        </p>
      )
    }
  ];

  const [isBlink, setBlink] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [talkFrame, setTalkFrame] = useState(0);
  const [bounceClass, setBounceClass] = useState('');
  const [bubbleIndex, setBubbleIndex] = useState(0);

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

  const goToPreviousBubble = () => {
    setBubbleIndex((prev) =>
      prev === 0 ? bubbleTexts.length - 1 : prev - 1
    );
  };

  const goToNextBubble = () => {
    setBubbleIndex((prev) =>
      prev === bubbleTexts.length - 1 ? 0 : prev + 1
    );
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
        <button
          type="button"
          className="bubble-arrow bubble-arrow-left"
          onClick={goToPreviousBubble}
          aria-label="Previous speech bubble text"
        >
          ‹
        </button>

        <div className="bubble-content">
          <h2 className="bigText">{bubbleTexts[bubbleIndex].title}</h2>
          {bubbleTexts[bubbleIndex].body}
        </div>

        <button
          type="button"
          className="bubble-arrow bubble-arrow-right"
          onClick={goToNextBubble}
          aria-label="Next speech bubble text"
        >
          ›
        </button>
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
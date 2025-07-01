import miiGIF from '../assets/photos/miiGIF.gif'; 
import miiBlink from '../assets/photos/miiBlink.png'; 
import React, { useState } from 'react';

function Home() {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isBlink, setBlink] = useState(false);

  const handleMouseEnter = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 300); // Reset after animation
  };

  const handleClick = () => {
    setBlink(prev => !prev);
    setBounceClass('big-bounce');
    setTimeout(() => setBounceClass(''), 500);
  };
  return (
    <div className="container" onMouseMove={handleMouseEnter}>
      <h2 className="bigText">Hi there! I'm Laurie, an aspiring... something!</h2>
      <img 
      src={isBlink ? miiBlink :miiGIF} 
      alt="It's Mii!" 
      className={isBouncing ? 'bounce' : ''} 
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default Home;

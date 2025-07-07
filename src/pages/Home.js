import miiGIF from '../assets/photos/miiGIF.gif'; 
import miiBlink from '../assets/photos/miiBlink.png'; 
import React, { useState } from 'react';

function Home() {
  const [isBlink, setBlink] = useState(false);
  const [bounceClass, setBounceClass] = useState('');

  const handleClick = () => {
    setBlink(prev => !prev);
    setBounceClass('big-bounce');
    setTimeout(() => setBounceClass(''), 500);
  };

  return (
    <div className="container">
      <h2 className="bigText">Hi there! I'm Laurie, an aspiring technologist passionate about building tech solutions that empower communities and close the digital divide.</h2>
      <img 
        src={isBlink ? miiBlink : miiGIF} 
        alt="It's Mii!" 
        className={bounceClass}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default Home;

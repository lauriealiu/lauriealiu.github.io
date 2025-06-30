import React from 'react';
import miiImage from '../assets/photos/mii.png'; 

function Home() {
  return (
    <div className="container">
      <h2 className="bigText">Hi there! I'm Laurie, an aspiring... something!</h2>
      <img src={miiImage} alt="It's Mii!" />
    </div>
  );
}

export default Home;

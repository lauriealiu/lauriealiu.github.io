import React from 'react';
import './styles.css';
import miiImage from './assets/photos/mii.png'; // adjust the path if needed
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2 className="bigText">Hi there! I'm Laurie, an aspiring... something!</h2>
        <img src={miiImage} alt="It's Mii!" />
      </main>
    </div>
  );
}

export default App;

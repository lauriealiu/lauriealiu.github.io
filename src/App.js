import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <button onClick={() => setActiveTab('home')}>Home</button>
          <button onClick={() => setActiveTab('about')}>About</button>
          <button onClick={() => setActiveTab('portfolio')}>Portfolio</button>
          <button onClick={() => setActiveTab('contact')}>Contact</button>
        </nav>
      </header>
      <main>{renderTab()}</main>
      <footer>&copy; 2025 Your Name</footer>
    </div>
  );
}

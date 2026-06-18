import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Games from './pages/Games';
import CursorTrail from './components/CursorTrail';

function App() {
  return (
    <Router>
      <div className="app-container">
      <CursorTrail />
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

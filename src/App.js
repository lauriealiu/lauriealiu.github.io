import React from 'react';
import './styles.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Games from './pages/Games';
import CursorTrail from './components/CursorTrail';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <main className="app-main" key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <CursorTrail />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
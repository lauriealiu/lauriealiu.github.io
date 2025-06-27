import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';


//import Home from './Home';    
//import About from './About';   
import Resume from './pages/Resume'; 

function App() {
  return (
    <Router>
      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>


  );
}

export default App;


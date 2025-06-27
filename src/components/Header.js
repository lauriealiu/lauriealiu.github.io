import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="title">Laurie Liu</h1>
        <nav>
          <ul>
            <li>
                <Link to="/">Home</Link>
                </li>
            <li>
                <Link to="/about">About</Link>
                </li>
            <li>
                <a 
                href="/resume"
                >Resume</a></li>
            <li>
                <a 
                href="https://www.linkedin.com/in/lauriealiu/"
                target="_blank"
                rel="noopener noreferrer"
                >LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

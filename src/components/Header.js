import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="title">Laurie Liu ⭒˚｡⋆ 𓆑 ⋆｡𖦹</h1>
        <nav>
          <ul>
            <li>
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
            <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
            <Link to="/resume" className="nav-link">Resume</Link>
            </li>
            <li>
            <Link to="/games" className="nav-link">Challenge Me</Link>
</li>
            <li className = "dropdown">
                <button className="nav-link dropdown-toggle">Contact</button>
                <div className="dropdownContent">
                    <a href="mailto:lauriealiu@gmail.com">Email</a>
                    <a 
                    href="https://www.linkedin.com/in/lauriealiu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >LinkedIn
                    </a>
                </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

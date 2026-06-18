import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="title">Laurie Liu ⭒˚｡⋆ 𓆑 ⋆｡𖦹</h1>

        <nav>
          <ul>
            <li>
              <NavLink to="/" end className="nav-link">
                <span>Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="nav-link">
                <span>About</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/resume" className="nav-link">
                <span>Resume</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/games" className="nav-link">
                <span>Challenge Me</span>
              </NavLink>
            </li>

            <li className="dropdown">
              <button className="nav-link dropdown-toggle">
                <span>Contact</span>
              </button>

              <div className="dropdownContent">
                <a href="mailto:lauriealiu@gmail.com">Email</a>
                <a
                  href="https://www.linkedin.com/in/lauriealiu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
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
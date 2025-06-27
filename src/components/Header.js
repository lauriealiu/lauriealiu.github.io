import React from 'react';

function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="title">Laurie Liu</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/portfolio">Resume</a></li>
            <li><a href="#linkedIn">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

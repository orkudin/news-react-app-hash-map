import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <nav class="nav">
        <a href="/popular" class="logo">
          NEWS
        </a>

        <div class="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>

        <div class="nav__link hide">
          <Link to="/popular"></Link>
          <Link to="/game">game</Link>
          <Link to="/movie">movie</Link>
          <Link to="/anime">anime</Link>
          <Link to="/sport">sport</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;

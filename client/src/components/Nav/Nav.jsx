import React from 'react';
import './Nav.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Nav() {
  const location = useLocation();

  return (
    <nav className='nav'>
      <div className='navbar-title'>
        <h1>
          <span className="stacked-word">DIGITAL</span> 
          <span className="stacked-word">MATRIX</span>
          <span className="stacked-word">ACADEMY</span>
        </h1>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>About</NavLink>
        </li>
        <li>
          <NavLink
            to="/join"
            className={() =>
              location.pathname.startsWith('/join') || location.pathname === '/thank-you'
                ? "nav-link active-link"
                : "nav-link"
            }
          >
            Join
          </NavLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="active-link"
            className="nav-link"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import Home from '../Home/Home';
import './HomeLayout.css';

function HomeLayout() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact') {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        setTimeout(() => {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }, 100); // small delay to ensure DOM is fully loaded
      }
    }
  }, []);

  return (
    <div className="home-layout">
      <div className="top-section">
        <Nav />
        <Hero />
      </div>
      <Home />
    </div>
  );
}

export default HomeLayout;

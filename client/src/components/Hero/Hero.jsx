import React from 'react';
import arrowIcon from '../../assets/images/arrows.png';
import heroImage from '../../assets/images/school.png'; 

import './Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1><span className="hero-text-w">Real-World Skills.</span></h1>
            <h1><span className="hero-text-b">Flexible Learning.</span></h1>
            <h1><span className="hero-text-w">Real Results.</span></h1>
            <h4>
              <a href="#learn-more" className="learn-more">
                Learn More <img src={arrowIcon} alt="Arrow icon" />
              </a>
            </h4>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Hero visual" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

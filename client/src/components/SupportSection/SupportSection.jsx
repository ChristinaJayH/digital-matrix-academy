import React from 'react';
import './SupportSection.css';

function SupportSection() {
  return (
    <section className="support-section">
      <div className="support-container">
        <h2 className="support-title">How We Help You Succeed</h2>
        <p className="support-intro">
          We meet you where you are — helping you discover your strengths, define your path, and develop the real-world skills you need to grow in tech.
        </p>

        <div className="support-boxes">
          <div className="support-box">
            <h3>Personalized Planning</h3>
            <p>We help you map out a clear career strategy that fits your lifestyle and goals — one step at a time, with weekly check-ins and real structure.</p>
          </div>

          <div className="support-box">
            <h3>Skill Evaluation</h3>
            <p>We identify the skills you already have — from past jobs, hobbies, and lived experience — and translate them into strengths you can use in tech.</p>
          </div>

          <div className="support-box">
            <h3>Targeted Learning</h3>
            <p>We’ll help you choose the right skills to learn based on your interests and goals, making your time count with relevant, guided learning paths.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;


import React, { useState } from 'react';
import './AboutUs.css';
import Nav from '../Nav/Nav';
import ContactForm from '../ContactForm/ContactForm'; 

function AboutUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Nav />
      <div className="about-page">
        <header className="about-header">
          <h1>About Us</h1>
        </header>

        <section className="about-intro">
          <p>Digital Matrix Academy is dedicated to helping women, especially mothers, build real-world tech skills in a flexible and supportive environment.</p>
          <p>We believe in making tech education accessible, community-driven, and confidence-building. Whether you're exploring something new, changing careers, or deepening your current skillset — we're here to support that journey.</p>
        </section>

        <section className="about-dropdowns">
          {[
            {
              title: "What makes us different?",
              content: "We combine personalized learning, 1-on-1 mentoring, and a community of women pursuing tech careers in ways that fit their real lives."
            },
            {
              title: "Who is this for?",
              content: "Women of all backgrounds — including busy moms, career changers, and first-time learners — who want to grow their tech skills."
            },
            {
              title: "What can I expect to learn?",
              content: "You'll gain real-world skills like JavaScript, HTML/CSS, web development fundamentals, and practical career strategy planning."
            }
          ].map((item, index) => (
            <div className="dropdown" key={index}>
              <button className="dropdown-title" onClick={() => toggleDropdown(index)}>
                {item.title}
              </button>
              {openIndex === index && (
                <div className="dropdown-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </section>

     
        <section className="about-contact-section">
          <ContactForm />
        </section>
      </div>
    </>
  );
}

export default AboutUs;

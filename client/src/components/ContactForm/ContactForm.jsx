import React from 'react';
import './ContactForm.css';
import contactImage from '../../assets/images/contactform.png';

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p className="subheading">Fill out the form to get in touch</p>
          <form
          action="https://formspree.io/f/mzzgojbq" method="POST"
>
              <label>Name</label>
  <input type="text" name="name" placeholder="Enter your name" required />

  <label>Email</label>
  <input type="email" name="email" placeholder="Enter your email" required />

  <label>Phone Number</label>
  <input type="tel" name="phone" placeholder="Enter your phone number" />

  <label>Company Name</label>
  <input type="text" name="company" placeholder="Enter your company name" />

  <label>Message</label>
  <textarea name="message" placeholder="Hi, I’m reaching out because I’m interested in..."></textarea>

  <input type="hidden" name="_subject" value="New Contact Form Submission" />
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />

  <button type="submit">Submit ➝</button>
</form>
        </div>

        <div className="contact-image">
          <img src={contactImage} alt="Tech illustration" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React from 'react';
import './Join.css';
import Nav from '../Nav/Nav';

function Join() {
  return (
    <>
      <Nav />
      <div className="join-container">
        <form
          className="join-form"
          action="https://formspree.io/f/xzzgovlr"
          method="POST"
        >
          <h2>Join Digital Matrix Academy</h2>

          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email" className="form-label">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="level" className="form-label">Your Skill Level</label>
          <select
            id="level"
            name="level"
            required
          >
            <option value="">-- Select your level --</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <fieldset className="checkbox-group">
            <legend>Areas of Interest:</legend>

            <label>
              <input type="checkbox" name="interests" value="Full Stack Development" />
              Full Stack Development
            </label>

            <label>
              <input type="checkbox" name="interests" value="UI/UX" />
              UI/UX
            </label>

            <label>
              <input type="checkbox" name="interests" value="API & Database" />
              API & Database
            </label>

            <label>
              <input type="checkbox" name="interests" value="Data Analysis" />
              Data Analysis
            </label>
          </fieldset>

          <label htmlFor="goals" className="goals-label">Tell Us Your Goals</label>
          <textarea
            id="goals"
            name="goals"
            placeholder="Share your learning goals or reasons for joining"
            required
          />

          {/* Optional Hidden Fields */}
          <input type="hidden" name="_subject" value="New Join Form Submission" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Join;

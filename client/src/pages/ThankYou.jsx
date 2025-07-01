import React from 'react';
import './ThankYou.css';
import Nav from '../components/Nav/Nav';
import consultingImg from '../assets/images/1on1.png';
import bootcampImg from '../assets/images/beginners.png';
import uiuxImg from '../assets/images/uiuxdesign.png';
import techCareersImg from '../assets/images/CareersTraining.png'


const products = [
  {
    id: 1,
    name: '1-on-1 Career Assessment',
    price: '$99',
    image: consultingImg,
    description: 'A personalized 60-minute career coaching session to identify your goals and build a roadmap.'
  },
  {
    id: 2,
    name: 'Beginner Coding Bootcamp Videos',
    price: '$49',
    image: bootcampImg,
    description: 'Pre-recorded video series introducing the basics of HTML, CSS, and JavaScript.'
  },
  {
    id: 3,
    name: 'UI/UX Design Essentials Pack',
    price: '$35',
    image: uiuxImg,
    description: 'A bundle of self-paced lessons and templates to get started in UI/UX design.'
  },
  {
    id: 4,
    name: 'Free Tech Careers Training',
    price: 'Free',
    image: techCareersImg,
    description: 'Discover various tech careers and learn which strengths, skills, experiences, and interests align with your next role.'
  }
];


function ThankYou() {
  return (
    <>
      <Nav />
      <div className="thank-you-page">
<h1 className="thank-you-title">Thank you for joining Digital Matrix Academy!</h1>
        <h2 className="thank-you-heading">WHAT'S NEXT?</h2>

<div className="thank-you-content">
  <p>You’ve just taken a powerful first step toward launching or leveling up your tech career—well done!
  We’ll be reaching out via email shortly with a quick assessment...</p>

  <p>Explore our additional resources and trainings below:</p>
</div>
        

        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
              <button>{product.price === 'Free' ? 'Watch Now' : 'Buy Now'}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ThankYou;

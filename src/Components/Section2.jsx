import React from 'react';
import '../Css/section2.css';
import reddit from '../assets/Reddit svg.png';
import google from '../assets/Google svg.png';
import spotify from '../assets/Spotify svg.png';
import stripe from '../assets/Stripe svg.png';
import pinterest from '../assets/Pinterest svg.png';

function Section2() {
  const images = [reddit, google, spotify, stripe, pinterest];

  return (
    <div className="section2">
      <h2>Join hundreds of teams already streamlining their finances</h2>
      <div className="marquee">
        <div className="marquee__inner">
          {/* Duplicate the images for a seamless loop */}
          {images.map((img, index) => (
            <div className="image-container" key={`img1-${index}`}>
              <img src={img} alt="logo" />
            </div>
          ))}
          {images.map((img, index) => (
            <div className="image-container" key={`img2-${index}`}>
              <img src={img} alt="logo" />
            </div>
          ))}
          {images.map((img, index) => (
            <div className="image-container" key={`img3-${index}`}>
              <img src={img} alt="logo" />
            </div>
          ))}
          {images.map((img, index) => (
            <div className="image-container" key={`img4-${index}`}>
              <img src={img} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;

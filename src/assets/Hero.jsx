import React from 'react';
import '../assets/hero.css';

// import heroimg from '../assets/heroPng.jpeg';
// import hero_img from '../assets/hero_img.jpg';
import hero_women from '../assets/women_img.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={hero_women} alt="" />
      <h1><span>"Where <br/> Style<br/> Meets <br/>Comfort"</span></h1>
      <h6>The Fashion Shop 2025</h6>
    </div>
  );
};

export default Hero;

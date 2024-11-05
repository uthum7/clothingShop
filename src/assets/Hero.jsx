import React from 'react';
import './Hero.css';
import heroimg from '../assets/heroPng.jpeg';

const Hero = () => {
  return (
    <div className='hero-img'>
      <img src={heroimg} alt="" />
    </div>
  );
};

export default Hero;

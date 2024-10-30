"use client"

import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import Controls from './Control';
import '../RotatingSkill/style.css';



const RotatingImg = () => {

    
  const [position, setPosition] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = 10;

  const nextSlide =()=> {
    setPosition((prev) => (prev % totalSlides) + 1);
  };

  const prevSlide = () => {
    setPosition((prev) => (prev - 1 + totalSlides - 1) % totalSlides + 1);
  };

  // Toggle the pause state
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  // Auto-rotate the slider
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="banner">
      <Slider position={position} totalSlides={totalSlides} />
      <Controls
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        isPaused={isPaused}
        togglePause={togglePause}
      />
      <div className="content">
        <h1 data-content="CSS ONLY">CSS ONLY</h1>
        <div className="author">
          <h2>DEEP DESIGN WEB</h2>
          <p><b>Web Design</b></p>
          <p>YOUR IDEAS MATTER TO US!</p>
        </div>
      </div>
    </div>
  );
}

export default RotatingImg;

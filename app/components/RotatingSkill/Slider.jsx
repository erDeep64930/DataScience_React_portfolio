import React from 'react';

const images = [
  'images/dragon_1.jpg',
  'images/dragon_2.jpg',
  'images/dragon_3.jpg',
  'images/dragon_4.jpg',
  'images/dragon_5.jpg',
  'images/dragon_6.jpg',
  'images/dragon_7.jpg',
  'images/dragon_8.jpg',
  'images/dragon_9.jpg',
  'images/dragon_10.jpg',
];

function Slider({ position, totalSlides }) {
  return (
    <div
      id="slider"
      className="slider"
      style={{
        '--quantity': totalSlides,
        transform: `perspective(1000px) rotateX(-16deg) rotateY(${(position - 1) * (360 / totalSlides)}deg)`,
      }}
    >
      {images.map((img, index) => (
        <div
          className="item"
          key={index}
          style={{
            '--position': index + 1,
            transform: `rotateY(calc(${index} * (360 / ${totalSlides}))) translateZ(550px)`,
          }}
        >
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Slider;

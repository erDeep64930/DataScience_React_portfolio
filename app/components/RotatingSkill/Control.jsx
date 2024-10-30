import React from 'react';

function Controls({ nextSlide, prevSlide, isPaused, togglePause }) {
  return (
    <div className="controls">
      <button onClick={prevSlide} className="prev-btn">Previous</button>
      <button onClick={nextSlide} className="next-btn">Next</button>
      <button onClick={togglePause} className="pause-btn">
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
}

export default Controls;

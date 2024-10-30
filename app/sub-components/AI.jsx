import Image from 'next/image';
import React from 'react';
import "../css/ai.css"
const AI = () => {
  return (
    <div>
      <section>
    <h2>Focus</h2>
    <Image   src="/ds1.jpg"
      alt="Background"  width={300}
      height={300} />
  </section>
    </div>
  );
}

export default AI;

import React from 'react';
import { FaArrowRight } from "react-icons/fa"

const BecomeAnInstructor = () => {
  return (
    <div className=''>
       <div className="group mx-auto mt-16 w-fit rounded-full bg-black-800 p-1 font-bold text-black/25 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none text-white">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-black/55 text-white">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
    </div>
    </div>
  );
}

export default BecomeAnInstructor;

import React from 'react';

const Heading = ({children,heading}) => {
  return (
    <div className=" w-11/12 max-w-[1080px] mx-auto pt-4 flex items-center justify-center">
   <div className='relative group'>
    <div className='w-28 h-28 rounded-full bg-red-500 shadow-xl group-hover:scale-105 hover:bg-blend-saturation'>
      {/* trail */}
      <div className='lines'></div>
      {/*  */}
    </div>
    <h2 className='text-3xl w-full font-alkatra font-bold leading-6 absolute top-12 left-12 tracking-4 group-hover:scale-105'>{heading}</h2>

   </div>
    </div>
  );
}

export default Heading;

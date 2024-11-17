import { servicesMenu, skillMenu } from '@/constant/constant';
import React from 'react'
import "./page.css"

const page = () => {
  return (
    <div className="w-11/12 mx-auto">

<div id="service">
    <h1 className="text-center underline leading-4 font-semibold text-3xl mt-14">The services i offer:</h1>
    <div className='grid md:grid-cols-3 my-8 gap-5'>
    {
      servicesMenu.map(service => <div key={service.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white'>
          <img src={service.image} alt="" className='mb-3 bg-white/10 rounded-full py-2' />
          <h6 className='text-2xl mb-4'>{service.name}</h6>
          <p className='text-base'>{service.description}</p>
      </div>)
    }
    </div>
</div>

{/* skill */}

<div className="flex flex-col md:flex-row w-[90%] mx-auto">
        {skillMenu.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-white/20 flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500 "
          >
            <img src={skill.image} alt={skill.name} className="w-full h-full"/>
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default page;

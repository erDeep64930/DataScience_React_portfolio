import React from 'react';
import { AboutMe } from '../sub-components/AboutMe';
import PersonalInfo from '../sub-components/PersonalInfo';

const Intro = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
 <div className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-between">
      {/* this is for who i am */}
      <div className="border border-red-500 p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300">
      <h1 className="mx-20 sm:mx-5 text-center -mt-11 bg-white border-red-500 border text-2xl rounded text-red-500 font-meri py-2 ">
      Who i am ?
              </h1>
        <div>
          <AboutMe />
        </div>
        
        </div>

      {/* this is for personal info */}
      <div className="border border-red-500 p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300">
      <h1 className="mx-20 sm:mx-5 text-center -mt-11 bg-white border-red-500 border text-2xl rounded text-red-500 font-meri py-2 ">
      Personal Info
              </h1>
<PersonalInfo />
      </div>

    {/* this is for education */}
    <div>1</div>
    </div>
    </div>
   
  );
}

export default Intro;

import React from 'react';
import RotatedAppSkill from './RotatedAppSkill';



const Skills = () => {
  return (
    <div>
           <div class="flex container max-w-[1200px] mx-auto 
    items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0">
    {/* <!--left section --> */}
        <div class="md:w-[50%]">
         <RotatedAppSkill />
        </div>

        {/* <!-- right section --> */}
        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1
              class="font-[700] text-[20px] sm:text-[28px]
               md:text-[48px] font-['ggSans'] leading-[24px]
                md:leading-[57.6px] mt-5 md:mt-0">
              My Web Development journey with these Tech stack:~
            </h1>
            <p class="font-mont text-[16px] sm:text-[20px] font-[400] mt-[24px]">
            Web development involves creating and maintaining websites, combining front-end design and back-end functionality to deliver engaging, user-friendly online experiences across various devices and platforms.
            </p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Skills;

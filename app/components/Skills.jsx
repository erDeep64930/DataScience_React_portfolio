import React from 'react';
import RotatedAppSkill from './RotatedAppSkill';
import Heading from './Heading';
import Image from 'next/image';



const Skills = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-16">
       <Heading heading="My Skill"/>
           <div class="flex
    items-center py-6 md:py-12 flex-col md:flex-row px-7 md:px-0">
     
    {/* <!--left section --> */}
        <div class="md:w-[50%]">
         <RotatedAppSkill />
        </div>

        {/* <!-- right section --> */}
        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1
              class="font-[700] text-[20px] sm:text-[28px]
               md:text-[48px] font-mont leading-[24px]
                md:leading-[40px] md:mt-0">
              My Web Development journey with these Tech stack:~
            </h1>
            <p class="font-mont text-[16px] sm:text-[20px] font-[400] mt-[24px]">
            Web development involves creating and maintaining websites, combining front-end design and back-end functionality to deliver engaging, user-friendly online experiences across various devices and platforms.
            </p>
            <Image src="/mernstack.png" alt="" width={180} height={70} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Skills;

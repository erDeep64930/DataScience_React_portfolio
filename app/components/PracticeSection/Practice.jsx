import BecomeAnInstructor from '@/app/sub-components/practiceSectionComponent/BecomeAnInstructor';
import CodeBlocks from '@/app/sub-components/practiceSectionComponent/CodeBlocks';
import DemoTimeline from '@/app/sub-components/practiceSectionComponent/DemoTimeline';
import ExploreMore from '@/app/sub-components/practiceSectionComponent/ExploreMore';
import HighlightText from '@/app/sub-components/practiceSectionComponent/HighlightText';
import TimelineSection from '@/app/sub-components/practiceSectionComponent/TimelineSection';


import React from 'react';

const Practice = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center mx-auto w-11/12'>
      <DemoTimeline />
      <TimelineSection />
      <BecomeAnInstructor />
      <HighlightText text={"this is gradient text"}/>

      <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* this is for tabs */}

        <ExploreMore />


     
    </div>
  );
}

export default Practice;

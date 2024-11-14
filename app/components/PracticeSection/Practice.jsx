import BecomeAnInstructor from '@/app/sub-components/practiceSectionComponent/BecomeAnInstructor';
import HighlightText from '@/app/sub-components/practiceSectionComponent/HighlightText';
import VideoB from '@/app/sub-components/practiceSectionComponent/VideoB';
import React from 'react';

const Practice = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center'>
      <BecomeAnInstructor />
      <HighlightText text={"this is gradient text"}/>
      <VideoB />
    </div>
  );
}

export default Practice;

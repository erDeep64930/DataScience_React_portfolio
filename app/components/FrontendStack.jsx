import { frontendTech } from '@/public/constant';
import Image from 'next/image';
import React from 'react';

const FrontendStack = () => {
  return (
    <div className="py-32 relative w-11/12 max-w-[1080px] mx-auto">
        <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {frontendTech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image src={src} alt="" width={100} height={100} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
        </div>
     
    </div>
  );
}

export default FrontendStack;

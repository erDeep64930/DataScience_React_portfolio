
import { dsInfo } from '@/constant/constant';
import Image from 'next/image';
import React from 'react';


const Test = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-5">

      <div className="h-[200px] w-full whitespace-nowrap overflow-y-hidden overflow-x-auto gap-6">
        
          {
            dsInfo.map(({id,dp})=>{
              return (
                <div className='inline-block overflow-hidden gap-4 ' key={id}>
                <Image src={dp} alt="" className="bg-cover rounded-full h-full w-full" width={150} height={150}/>
                </div>
              )
            })
          }
         
       

      </div>
   
    </div>
  );
}

export default Test;

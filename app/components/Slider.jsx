"use client"
import Image from 'next/image';
import React, {useState} from 'react';

const sliding = [
    {image:"/images/dragon_1.jpg"},
    {image:"/images/dragon_2.jpg"},
    {image:"/images/dragon_3.jpg"},
    {image:"/images/dragon_4.jpg"},
    {image:"/images/dragon_5.jpg"},
    {image:"/images/dragon_6.jpg"},
]

const Slider = () => {
    const handleClick=(index)=>{
setExpandedIndex(index);
    }
    const[expandedIndex,setExpandedIndex]=useState(0)
  return (
    <div className='h-screen w-screen bg-black overflow-hidden '>

   <div className='w-full h-full overflow-hidden items-center justify-center p-4 relative ' style={{
    backgroundImage:`url(${sliding[expandedIndex].image})` , backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
   }}>

    <div className='inset-0 absolute bg-[rgba(0,0,0,0.6] backdrop-blur z-0 '>

    </div>

   <div className='flex items-center justify-center h-full w-full'>
   <div className='max-w-7xl h-[30vh] flex items-center justify-center gap-3 z-10 object-cover'>

{
    sliding.map((panel,index)=>{
        return (
        <div  className={`h-full rounded-2xl duration-200 bg-white ease-in-out overflow-hidden ${expandedIndex===index?"w-[60%]":"w-[10%] hover:bg-gray-200"} min-w-[40px] block`} onClick={()=>handleClick(index)}  key={index}>

            <Image src={panel.image} alt="" width={2048} height={1365} className="h-full w-full object-cover object-top"/>

        </div>)
    })
}



</div>

   </div>
   </div>
      
    </div>
  );
}

export default Slider;

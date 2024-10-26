import React from 'react';
import { eduInfo } from '@/public/constant';
import { FaAward } from 'react-icons/fa';
const EducationDetails = () => {

   
  return (
    <div>
      
      <div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
    
               



      <div className="mb-2">{
                eduInfo.map(({id,title,desc,sub,stream,desTitle,collName,year,date})=>{
                    return (
                        <div class="flex-col items-center font-semibold leading-4  transition px-5 py-2  border-b border-gray-200 " key={id}>
                          <div className='item-center bg-green-400 inline-block p-2 rounded-full'>
                          <FaAward className='text-red-500'/>
                          </div>

                           

                            <div className='flex'>
                            <span className="text-[#1d1d1d] text-sm font-bai"> {title}</span>
                        <span className="text-[#1d1d1d] ml-2">:</span>
                        <span className="font-normal ml-auto text-gray-500 text-xs">{desc}</span>
                            </div>

                            <div className='flex'>
                            <span className="text-[#1d1d1d] text-sm font-bai"> {sub}</span>
                        <span className="text-[#1d1d1d] ml-2">:</span>
                        <span className="font-normal ml-auto text-gray-500 text-xs">{stream}</span>
                            </div>

                            
                            <div className='flex'>
                            <span className="text-[#1d1d1d] text-sm font-bai"> {desTitle}</span>
                        <span className="text-[#1d1d1d] ml-2">:</span>
                        <span className="font-normal ml-auto text-gray-500 text-xs">{collName}</span>
                            </div>

                            
                            <div className='flex'>
                            <span className="text-[#1d1d1d] text-sm font-bai"> {year}</span>
                        <span className="text-[#1d1d1d] ml-2">:</span>
                        <span className="font-normal ml-auto text-gray-500 text-xs">{date}</span>
                            </div>

                   
                    </div>
                    )
                })}
               
            </div>
            </div>
      </div>

  );
}

export default EducationDetails;

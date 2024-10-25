import { infoMenu } from '@/constant/constant';
import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            {/* birthday */}
            <div className="mb-2">{
                infoMenu.map(({id,title,description})=>{
                    return (
                        <div class="flex items-center font-semibold leading-4  transition px-5 py-2  border-b border-gray-200 " key={id}>

                        <span className="text-[#1d1d1d] text-sm font-bai"> {title}</span>
                        <span className="text-[#1d1d1d] ml-2">:</span>
                        <span className="font-normal ml-auto text-gray-500 text-xs">{description}</span>
                    </div>
                    )
                })}
               
            </div>
           

        </div>
    );
}

export default PersonalInfo;

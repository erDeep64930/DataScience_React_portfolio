import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            {/* birthday */}
            <div className="mb-2">
                <div class="flex items-center font-semibold leading-4  hover:text-blue-700 transition px-5 py-2">

                    <span className="text-[#1d1d1d]"> Birthdays</span>
                    <span className="text-[#1d1d1d] ml-2">:</span>
                    <span className="font-normal ml-auto text-gray-500">9-March-1995</span>
                </div>
            </div>

             {/* email */}
             <div className="mb-2">
                <div class="flex items-center font-semibold leading-4  hover:text-blue-700 transition px-5 py-2">

                    <span className="text-[#1d1d1d]"> Email</span>
                    <span className="text-[#1d1d1d] ml-2">:</span>
                    <span className="font-normal ml-auto text-gray-500">erdeep64930@gmail.com</span>
                </div>
            </div>
            
             {/*Address */}
             <div className="mb-2">
                <div class="flex items-center font-semibold leading-4  hover:text-blue-700 transition px-5 py-2">

                    <span className="text-[#1d1d1d]"> Address</span>
                    <span className="text-[#1d1d1d] ml-2">:</span>
                    <span className="font-normal ml-auto text-gray-500">Ashok Vihar , New Delhi</span>
                </div>
            </div>
           

            {/* Mobile */}
            <div className="mb-2">
                <div class="flex items-center font-semibold leading-4  hover:text-blue-700 transition px-5 py-2">

                    <span className="text-[#1d1d1d]"> Mobile</span>
                    <span className="text-[#1d1d1d] ml-2">:</span>
                    <span className="font-normal ml-auto text-gray-500">+91-9939183692</span>
                </div>
            </div>

            {/* Driving Licence */}

            <div className="mb-2">
                <div class="flex items-center font-semibold leading-4  hover:text-blue-700 transition px-5 py-2">

                    <span className="text-[#1d1d1d]"> Driving License</span>
                    <span className="text-[#1d1d1d] ml-1">:</span>
                    <span className="font-normal ml-auto text-gray-500">JH12-2020-000-2428</span>
                </div>
            </div>

 {/* Blood Group */}
 <div className="mb-2">
                <div class="flex items-center font-semibold leading-4  hover:text-blue-700 transition px-5 py-2">

                    <span className="text-[#1d1d1d]">Blood Group</span>
                    <span className="text-[#1d1d1d] ml-2">:</span>
                    <span className="font-normal ml-auto text-gray-700 ">B(+ve)</span>
                </div>
            </div>
            

        </div>
    );
}

export default PersonalInfo;

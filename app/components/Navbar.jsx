import React from 'react';
import { navMenu1 } from '@/constant/constant';
import { navMenu2 } from '@/constant/constant';
import Image from 'next/image';
import dpk from "../../public/dpk.JPG"
const Navbar = () => {
  return (
    <div className="relative w-[1080px] mx-auto flex items-center justify-between mt-4 mb-8 font-meri">
      <div >
        <ul className='flex gap-6'>
          {navMenu1.map((menu, index) => {
            return (
              <li key={index} className='text-3xl p-4 '>{menu.name}</li>
            )
          })}
        </ul>
      </div>

      <div className='w-24 h-24 border-dashed border-red-500 border rounded-full p-1 '><Image src={dpk} className="rounded-full cover "/></div>

      {/* right side menu */}
      <div>
        <ul className='flex gap-6'>
          {navMenu2.map((menu, index) => {
            return (
              <li key={index} className='text-3xl p-4'>{menu.name}</li>
            )
          })}
        </ul>

      </div>
    </div>
  );
}

export default Navbar;

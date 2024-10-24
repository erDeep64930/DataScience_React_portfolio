import Image from 'next/image';
import React from 'react';
import pic2 from "../../public/About.jpg"
const Card1 = () => {
  return (
    <div>
         <div className="justify-center items-center">
          <div
            className="w-[60%] h-[60% ] m-10 pt-8 pl-8 pr-8 animate-trans-right space-y-10"
          >
            <Image src={pic2} alt="" width={150} height={100}/>
            <div className="text-xs">
              Mrs. Indrani Sanyal
              <span className="text-navbarColor">Principal</span>
            </div>
            <div className="text-xs">13th june,2020</div>
          </div>
        </div>
    </div>
  );
}

export default Card1;

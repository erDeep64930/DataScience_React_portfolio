"use client"
import Image from "next/image";
import Img1 from "../../public/images1/tech.jpg";

const Services = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
       <div className="  mt-24">
    <h2>This is Service section</h2>
  
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-16">
        <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
        >
       

          {/* image */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
            {/* overlays */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            {/* img */}
            <Image width={800} height={500}
              src={Img1}
              alt=""
              className="group-hover:scale-125 transition-all duration-500 z-50"
            />
            {/* subtitle */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">Frontend Design</span>
            </div>
            {/* title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-3xl text-white">Web Development</span>
            </div>
          </div>
        </div>
        <div
          
          className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
        >
 
        </div>
      </div>
    </div>

 
  </div>
    </div>
  );
}

export default Services;

import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
      <section class="pb-32 mt-24">
        <div
          class="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7"
        >
          {/* <!-- Horizontal Line --> */}
          <div
            class="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan-400 md:block"
          ></div>
          {/* <!-- Vertical Line --> */}
          <div class="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

          {/* <!-- Box 1 --> */}
          <div
            class="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3"
          >
            {/* <!-- Image Positioning --> */}
            <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div
                class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-red-500"
              >
                <Image src="/icon-brand-recognition.svg" alt="" width={40} height={40} />
              </div>
            </div>
            <h5
              class="pt-6 text-xl font-bold text-center capitalize md:text-left"
            >
              Brand Recognition
            </h5>
            <p class="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.
            </p>
          </div>

          {/* <!-- Box 2 --> */}
          <div
            class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3"
          >
            {/* <!-- Image Positioning --> */}
            <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div
                class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-red-500"
              >
                <Image src="/icon-detailed-records.svg" alt="" width={40} height={40} />
              </div>
            </div>
            <h5
              class="pt-6 text-xl font-bold text-center capitalize md:text-left"
            >
              Detailed records
            </h5>
            <p class="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better decisions.
            </p>
          </div>

          {/* <!-- Box 3 --> */}
          <div
            class="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3"
          >
            {/* <!-- Image Positioning --> */}
            <div class="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* <!-- Image Container For Background & Center --> */}
              <div
                class="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-red-500"
              >
                <Image src="/icon-fully-customizable.svg" alt="" width={40} height={40} />
              </div>
            </div>
            <h5
              class="pt-6 text-xl font-bold text-center capitalize md:text-left"
            >
              Fully customizable
            </h5>
            <p class="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;


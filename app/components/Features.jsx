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
            class="hidden absolute top-64 w-10/12 left-16 h-3 bg-cyan-400 md:block"
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
              class="pt-6 text-xl font-bold text-center capitalize md:text-left text-black"
            >
              Enhancing decisions with AI.
            </h5>
            <p class="text-center text-gray-400 md:text-left">
            AI enhances decision-making by analyzing vast amounts of data quickly and accurately. It identifies patterns, predicts outcomes, and provides insights that humans may overlook. By integrating AI tools into the decision-making process, organizations can make more informed choices, reduce risks, and improve efficiency. Ultimately, AI empowers decision-makers to leverage data-driven insights for better outcomes in various fields.
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
              class="pt-6 text-xl font-bold text-center capitalize md:text-left text-black"
            >
             Advance data analysis
            </h5>
            <p class="text-center text-gray-400 md:text-left">
            Advanced data analysis employs techniques like statistical analysis, machine learning, and data mining to extract deeper insights. Predictive analytics forecasts future trends, while natural language processing analyzes text data for sentiment and patterns. Visualization tools present complex data clearly, aiding decision-making. By leveraging big data technologies, organizations can efficiently process vast amounts of information, leading to more informed and strategic choices.
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
              class="pt-6 text-xl font-bold text-center capitalize md:text-left text-black"
            >
              Innovation and Creativity
            </h5>
            <p class="text-center text-gray-400 md:text-left">
            Innovation and creativity are essential for progress, driving new ideas and solutions. Creativity fosters unique concepts and enhances problem-solving, while collaboration among diverse teams boosts innovation. Embracing calculated risks allows for experimentation, leading to breakthroughs. Together, they promote continuous improvement, enabling organizations to adapt and thrive in a dynamic environment. Nurturing both can lead to significant advancements and competitive advantage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;


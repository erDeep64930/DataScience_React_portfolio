import React from 'react';

const DemoTimeline = () => {
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">

<div className="max-w-5xl mx-auto w-full grid grid-cols-9 px-2">
    {/* <!-- Stack 1 --> */}
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-2">Title</h1>
            <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
        </div>
    </div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-indigo-300"></div>
        <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
    </div>
    <div className="col-span-4 w-full h-full"></div>


    {/* <!-- Stack 2 --> */}
    <div className="col-span-4 w-full h-full"></div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-indigo-300"></div>
        <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">2</div>
    </div>
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-2">Title</h1>
            <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
        </div>
    </div>

    {/* <!-- Stack 3 --> */}
    <div className="col-span-4 w-full h-full ">
        <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
            <h1 className="text-white text-xl font-medium py-2">Title</h1>
            <p className="text-gray-100 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
        </div>
    </div>
    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
        <div className="h-full w-1 bg-indigo-300"></div>
        <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">3</div>
    </div>
    <div className="col-span-4 w-full h-full"></div>
</div>

</div>
    </div>
  );
}

export default DemoTimeline;

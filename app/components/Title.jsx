import React from 'react';

const Title = () => {
  return (
    <div className="w-full h-full justify-center items-center">
   <div className="relative w-[200px] h-[200px] box-border before:content-[('')] before:absolute before:top-0 before:left:0 before:w-full before:h-full before:border-t-2 before:border-red-400 before:border-b-2 transition-all scale-x-0 hover:before:scale-x-50 after:content-[('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-r-2 after:border-red-500 after:border-l-2 after:box-border after:transition-all after:scale-y-0 hover:after:scale-y-50 hover:after:delay-300">
		<span className="absolute w-full h-full block rotate-45 box-border  before:content-[('')] before:absolute before:top-0 before:left:0 before:w-full before:h-full before:border-t-2 before:border-b-2 before:box-border before:transition-all before:scale-x-0 hover:before:scale-x-50 hover:before:delay-300 after:content-[('')] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-r-2 after:border-red-500 after:border-l-2 after:box-border after:transition-all after:scale-y-0 hover:after:scale-y-50 after:delay-300hover:after:delay-300"></span>
		<h1 className='text-white'>Heading
		</h1>
	</div>
    </div>
  );
}

export default Title;

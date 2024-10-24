import React from 'react';

const Subscribe = () => {
  return (
    <div>
        <form>
      
        <div className="mt-8 mx-auto flex gap-2">
          <input
            type="email"
            className="rounded-sm border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 bg-red-500 outline-red-500 focus:outline transition-all duration-300"
            placeholder="email"
          />

          <div className="cursor-pointer rounded-sm bg-red-500 py-2 px-4 font-bold  hover:bg-transparent hover:border-red-500 hover:border hover:shadow-lg hover:shadow-black/20 hover:scale-95 transition-all duration-300">
            <button type="submit ">Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;

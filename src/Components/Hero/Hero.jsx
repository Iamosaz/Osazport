import React from 'react';
import { HERO_CONTENT } from '../../constants';
import user_1 from '../../assets/osazuwa.jpg';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center lg:flex-nowrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-4 text-6xl tracking-tight lg:mt-10 lg:text-8xl font-thin">
              Osazuwa Kenneth
            </h1>
            <span className="bg-gradient-to-r from-red-300 via-slate-500 to-green-400 bg-clip-text text-4xl text-transparent tracking-tight mt-4">
              FRONTEND DEVELOPER
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT} 
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img
              src={user_1}
              alt="osazuwa"
              className="rounded-lg shadow-lg max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

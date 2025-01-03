import React from 'react';
import { HERO_CONTENT } from '../../constants';
import user_1 from '../../assets/osazuwa.jpg';
import { motion } from 'framer-motion'; 



const container = (delay) => ({
   hidden: { x: -100, opacity: 0 },
   visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: delay }
   },
});



const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center lg:flex-nowrap">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="pb-8 text-7xl tracking-tight lg:mt-10 lg:text-8xl font-thin">
              Osazuwa Kenneth
            </motion.h1>

            <motion.span 
             variants={container(1)}
             initial="hidden"
             animate="visible"
            className="bg-gradient-to-r from-red-300 via-slate-500 to-green-400 bg-clip-text text-4xl text-transparent tracking-tight mt-4">
              FRONTEND DEVELOPER
            </motion.span>

            <motion.p 
             variants={container(1.5)}
             initial="hidden"
             animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
             initial={{x: 100, opacity: 0 }}
             animate={{x:0, opacity:1}}
             transition={{duration:1, delay:1.2}}
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

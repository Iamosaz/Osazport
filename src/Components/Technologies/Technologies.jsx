import React from 'react';
import {
  RiReactjsLine,
  RiTailwindCssLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiCss3Line,
  RiGithubLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';

// Function to generate random duration for each icon
const randomDuration = () => Math.random() * 2 + 1; // Random value between 1 and 3 seconds

const iconVariants = (duration) => ({
  initial: { y: 0 }, // Initial position
  animate: {
    y: [10, -10], // Creates the bouncing effect
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse", // Ensures smooth bouncing
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{ opacity: 0, y:1 -100}}
        transition={{duration:1.5}}

      className="text-center justify-center my-20 text-4xl">
        Technologies I Have Worked With
      </motion.h2>
      <motion.div
      whileInView={{opacity: 1, x: 0}}
      initial={{ opacity: 0, x:1 -100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {/* Animated Icons */}
        <motion.div
          variants={iconVariants(randomDuration())}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(randomDuration())}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiTailwindCssLine className="text-7xl text-sky-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(randomDuration())}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiHtml5Line className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(randomDuration())}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiJavascriptLine className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(randomDuration())}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiCss3Line className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(randomDuration())}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-3"
        >
          <RiGithubLine className="text-7xl text-black-100" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

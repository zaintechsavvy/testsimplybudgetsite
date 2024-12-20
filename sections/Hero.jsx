'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section id="hero" className="relative mx-auto mt-9 max-w-[1800px] px-5 text-center md:px-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col items-center justify-center"
    >
      <div className="backdrop-filter-[12px] group inline-flex h-8 -translate-y-4 animate-fade-in items-center justify-between rounded-full border border-white/5 bg-white/5 px-4 text-sm font-medium leading-none tracking-tights text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/10 dark:text-black">
     
      </div>
      
      <motion.h1
  variants={textVariant(1.1)}
  className="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-blue-300 from-90% to-white/90 bg-clip-text py-8 text-2xl font-bold leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-lightgreen-500 dark:to-white/30 sm:text-3xl md:text-5xl lg:text-7xl"
>
  SimplyBudget - The New Way
  <br className="hidden md:block" />{' '}
  To Manage Your Finances
</motion.h1>

<motion.p
      variants={textVariant(1.2)}
      className="hidden mb-16 -translate-y-4 animate-fade-in text-balance text-base tracking-tight text-gray-300 opacity-0 [--animation-delay:400ms] md:block lg:text-2xl"
    >
      The only AI Finance Management App You Will Ever Need. 
    </motion.p>


</motion.div>

    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="relative w-full flex justify-center items-center lg:-mt-[20px] md:-mt-[12px] -mt-[10px]"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6">
        <img
          src="/newcover.png"
          alt="cover"
          className="w-full h-auto object-contain rounded-[24px] z-10 relative"
        />
        <a href="#explore">
          <div className="absolute right-8 sm:-mt-[70px] -mt-[50px] z-10">
            <motion.img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
            />
          </div>
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
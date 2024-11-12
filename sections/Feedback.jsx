'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { ChevronRight } from 'lucide-react';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}
    >
      <div className="flex lg:flex-row flex-col gap-6">
        <motion.div
          variants={fadeIn('right', 'tweeen', 0.2, 1)}
          className="flex-[0.4] lg:max-[370px] flex justify-end lg:justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Zain Pirani</h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Founder of SimplyBudget</p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            "SimplyBudget is all about making finance simple and accessible. I wanted to create a tool that helps teens like me track income and expenses easily, making it easier to build good financial habits from an early age."
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img src="/newcover.png" alt="planet" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img src="/stamp.png" alt="stamp" className="md:w-[170px] w-[115px] md:h-[170px] h-[115px] object-contain" />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-full flex justify-center mt-12"
      >
        <a
          href="/legal"
          className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 ease-in-out"
        >
          <span className="text-white/70 group-hover:text-white text-sm font-medium transition-colors duration-300">
            View full legal terms of use and privacy policy
          </span>
          <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transform" />
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
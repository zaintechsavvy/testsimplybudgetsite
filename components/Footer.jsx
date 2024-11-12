'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import Link from 'next/link';

const Home = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="gradient-02 z-0" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <motion.footer
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.xPaddings} py-8 relative`}
        >
          <div className="footer-gradient" />
          <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className="flex items-center justify-between flex-wrap gap-5">
              <h4 className="font-bold md:text-[30px] text-[30px] text-white">
                SimplyBudget
              </h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a key={social.name} href={social.link}>
                    <img
                      src={social.url}
                      alt={social.name}
                      className="w-[24px] h-[24px] object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="font-normal text-[14px] text-white opacity-50">
                Copyright © 2024 SimplyBudget. All rights reserved.
              </p>
              <div className="flex gap-4">
                
                <div className="flex items-center h-fit py-2 sm:py-4 px-4 sm:px-6 bg-[#25618B] rounded-[32px] gap-[8px] sm:gap-[12px] text-sm sm:text-base cursor-pointer">
                  <img
                    src="/plus.svg"
                    alt="features"
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain"
                  />
                  <Link href="/second">
                    <span className="font-normal text-[14px] sm:text-[16px] text-white whitespace-nowrap">
                      Features
                    </span>
                  </Link>
                </div>
                <div className="flex items-center h-fit py-2 sm:py-4 px-4 sm:px-6 bg-[#25618B] rounded-[32px] gap-[8px] sm:gap-[12px] text-sm sm:text-base cursor-pointer">
                  <img
                    src="/circle-dollar-sign.svg"
                    alt="pricing"
                    className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] object-contain"
                  />
                  <Link href="/about">
                    <span className="font-normal text-[14px] sm:text-[16px] text-white whitespace-nowrap">
                      Pricing
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Home;
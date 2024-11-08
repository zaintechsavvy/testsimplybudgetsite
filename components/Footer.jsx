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
        <section className={`${styles.flexCenter} flex-col`}>
          <h1 className={`${styles.heroHeading}`}> </h1>
          <p className={`${styles.heroSubText}`}>
            
          </p>
          <Link href="/about">
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-10"
            >
              <span className="font-normal text-[16px] text-white">
                Learn More
              </span>
            </button>
          </Link>
        </section>

        <motion.footer
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.xPaddings} py-8 relative`}
        >
          <div className="footer-gradient" />
          <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className="flex items-center justify-between flex-wrap gap-5">
              <h4 className="font-bold md:text-[64px] text-[44px] text-white">
                Learn More About SimplyBudget
              </h4>
              <button
                type="button"
                className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
              >
                <img
                  src="/headset.svg"
                  alt="headset"
                  className="w-[24px] h-[24px] object-contain"
                />
                <span className="font-normal text-[16px] text-white">
                  Learn
                </span>
              </button>
            </div>

            <div className="flex flex-col">
              <div className="mb-[50px] h-[2px] bg-white opacity-10" />

              <div className="flex items-center justify-between flex-wrap gap-4">
                <h4 className="font-extrabold text-[24px] text-white">
                  SimplyBudget
                </h4>
                <p className="font-normal text-[14px] text-white opacity-50">
                  Copyright © 2024 SimplyBudget. All rights reserved.
                </p>

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
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Home;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[48px] flex w-full flex-col gap-[30px]"
      >
        <h2 className={`${styles.heroHeading}`}>
          About SimplyBudget
        </h2>
        <p className={`${styles.heroSubText} max-w-[700px]`}>
          SimplyBudget is a finance management app designed specifically for teens, inspired by the popular Mint app. Our mission is to empower young people to take control of their financial future by providing a user-friendly platform to track expenses, create budgets, and build healthy spending habits.
        </p>
        <p className={`${styles.heroSubText} max-w-[700px]`}>
          With a stunning and intuitive interface, SimplyBudget makes managing your finances simple and enjoyable. Our app provides a comprehensive overview of your financial health, allowing you to categorize transactions, set savings goals, and receive personalized insights to help you make informed decisions.
        </p>
        <p className={`${styles.heroSubText} max-w-[700px]`}>
          Whether you're saving for a new gadget, planning for college, or just trying to stay on top of your daily expenses, SimplyBudget is the perfect tool to help you reach your financial goals. Download the app now and start taking control of your financial future!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
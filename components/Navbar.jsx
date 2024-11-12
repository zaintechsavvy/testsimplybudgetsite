'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
  <Link href="/about">
      <img src="/badge-dollar-sign.svg" alt="pricing" className="w-[24px] h-[24px] object-contain" />
  </Link>

<Link href="/">
  <h2 className="font-extrabold text-[20px] text-white leading-[30px] cursor-pointer hover:opacity-90 transition-opacity">
    SimplyBudget
    
  </h2>
  </Link>

<Link href="/second">
      <img src="/brain (1).svg" alt="features" className="w-[24px] h-[24px] object-contain" />
      </Link>
    </div>
    
  </motion.nav>
  
);


export default Navbar;

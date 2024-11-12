'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
   <TypingText 
  title="| People on the World" 
  textStyles="text-center text-xs xs:text-sm sm:text-base md:text-lg" 
/>
<TitleText
  title="People all around the world are using SimplyBudget to manage their finances!"
  textStyles="text-center text-s sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight px-4 py-6"
/>

<motion.div
  variants={fadeIn('up', 'tween', 0.3, 1)}
  className="relative mt-[40px] sm:mt-[69px] flex w-full h-[350px] sm:h-[450px] md:h-[550px]"
>
  <img src="/map.png" alt="map" className="w-full h-full object-contain sm:object-cover" />

  {/* Here We are displaying chararcters on the map */}
  <div className="absolute top-[32%] left-[62%] w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src="/people-02.png" alt="people" className="w-full h-full" />
  </div>
  <div className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src="/people-03.png" alt="people" className="w-full h-full" />
  </div>
  <div className="hidden lg:block absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src="/people-04.png" alt="people" className="w-full h-full" />
  </div>

  <div className="hidden lg:block absolute bottom-[20%] left-[15%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src="/people-05.png" alt="people" className="w-full h-full" />
  </div>
  <div className="absolute top-0 right-[22%] w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] p-[6px] rounded-full bg-[#5d6680]">
    <img src="/people-06.png" alt="people" className="w-full h-full" />
  </div>
  {/* Character on Map ends */}

</motion.div>
    </motion.div>
  </section>
);

export default World;

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col -mt-16`}
    >
      <div className="flex justify-center items-center flex-col relative mb-10 z-10">
        <motion.div
          variants={textVariant(1.2)}
          className="flex justify-center items-center"
        >
          <h1 className="text-dark-brown text-center uppercase font-bold text-[3.5rem] tracking-wider sm:text-[9rem] sm:-mt-12 mt-12">
            explore
            <br className="md:block" /> the ties to
            <br className="md:block" /> your kid
          </h1>
        </motion.div>
        <motion.img
          variants={fadeIn('up', 'tween', 1.5, 1)}
          src="/arrow-down-brown.svg"
          alt="arow down"
          className="w-[28px] h-[48px] mt-8 object-contain md:hidden"
        />
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full flex justify-center items-center align-middle"
      >
        {/* <img
          src="/lore.jpg"
          alt="cover"
          className=" sm:h-[400px] h-[350px] object-cover z-10 relative"
        /> */}
      </motion.div>
    </motion.div>
  </section>
);
export default Hero;

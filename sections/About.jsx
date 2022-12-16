'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto ${styles.flexCenter} flex-col bg-dark-brown`}
    >
      <TypingText
        title="| About Beasthoods"
        textStyles="text-center text-off-white"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[40px] font-normal sm:text-[32px] text-[20px] text-center text-off-white"
      >
        <span className="font-extrabold">Beasthoods </span>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel
        voluptatem laborum illum laudantium, fugiat delectus tempore molestiae,
        repellat, deleniti nam non neque? Numquam corrupti ipsum atque incidunt
        <span className="font-extrabold">sit</span> fugit doloremque dolorem
        quasi, voluptates autem voluptas{' '}
        <span className="font-extrabold">VR </span>
        amet consectetur adipisicing elit. Veritatis vel voluptatem laborum
        illum laudantium, fugiat delectus tempore molestiae{' '}
        <span className="font-extrabold">explore</span> voluptatem laborum illum
        laudantium, fugiat delectus tempore molestiae
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative bg-dark-brown`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex items-center md:justify-around justify-center flex-wrap gap-5">
        <img
          src="/akcb_logo_white.svg"
          alt="logo"
          className="w-96 -mt-20 md:-ml-12"
        />
        <button
          type="button"
          className="md:flex items-center pl-2 pr-6 bg-off-white rounded-[32px] hover:drop-shadow-[0_0px_10px_rgba(255,255,255,0.25)] -mt-[91px] hidden"
        >
          <img
            src="/akcb_logo_pfp.svg"
            alt="headset"
            className="w-[3rem] h-auto object-contain"
          />
          <span className="font-normal text-[16px] text-dark-brown">
            <a href="https://akidcalledbeast.com">OFFICIAL SITE</a>
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[40px] -mt-[20px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-center flex-wrap gap-4">
          <p className="font-normal text-[14px] text-white opacity-50">
            Created by{' '}
            <a href="https://twitter.com/degenrocker">@degenrocker</a> || JOHAN
            HERMANSSON
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;

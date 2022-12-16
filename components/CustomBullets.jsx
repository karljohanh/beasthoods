'use client';

import ReactTooltip from 'react-tooltip';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const CustomBullets = ({ index, subtitle, id, beasthood, onClick, active }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.1, 0.5)}
    onClick={() => onClick(index)}
    className="cursor-pointer"
  >
    <div className=" flex justify-center items-center">
      <div className="flex-col">
        <img
          src={subtitle.pfpUrl}
          alt=""
          className={`relative object-cover object-bottom bg-off-white rounded-full pt-[2px] border border-[#323232] ${
            active === id - 1
              ? 'h-[4rem] w-[4rem] 2xl:h-[4.5rem] 2xl:w-[4.5rem]'
              : 'h-[3rem] w-[3rem] 2xl:h-[3.2rem] 2xl:w-[3.2rem]'
          } hover:h-[4rem] hover:w-[4rem] 2xl:hover:h-[4.5rem] 2xl:hover:w-[4.5rem] transition-all duration-[0.4s]`}
          data-tip={beasthood}
          data-for="main"
        />
        <ReactTooltip
          id="main"
          textColor="#eeeeee"
          effect="solid"
          type="dark"
          place="bottom"
          delayShow={200}
          border
          arrowColor="transparent"
          borderColor="#eeeeee"
          backgroundColor="#313131"
          className="!rounded-full !py-[4px] !px-[12px] !text-[10px] !uppercase !tracking-[0.2em]"
        />
      </div>
    </div>
  </motion.div>
);

export default CustomBullets;

'use client';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { staggerContainer, fadeIn } from '../utils/motion';
import { CustomCard, TitleText, CustomBullets } from '../components';
import { insights } from '../constants';
import styles from '../styles';

const Explore = () => {
  const [active, setActive] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const slider = useRef();

  useEffect(() => {
    let index = slideIndex;
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search.toLowerCase());
      const beasthoodParam = searchParams.get('beasthood');
      if (beasthoodParam) {
        const activeHood = insights.findIndex((_insight) => _insight.title.toLowerCase() === beasthoodParam);
        if (activeHood !== 0 && activeHood !== -1) {
          index = activeHood;
        }
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }

    setSlideIndex(index);
    setActive(index);
    slider.current.slickGoTo(index);
  }, [slideIndex, setSlideIndex, setActive]);

  return (
    <section className="flex items-center justify-center h-[85vh] w-full sm:mt-0 mt-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title="What kind of beast are you?"
          textStyles="text-center text-[2rem] text-off-white uppercase hidden sm:block tracking-widest wordSpacing"
        />

        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
          className="-mt-[3.9rem] sm:-mt-[128px] sm:hidden"
        >
          <div className="relative sm:hidden">
            <AwesomeSlider
              mobileTouch
              buttons={false}
              selected={active}
              className="sm:mb-[112px] h-[95vh] sm:h-[60vh] w-screen sm:mt-[130px]"
              key={0}
            >
              {insights.map((beast, index) => (
                <div>
                  <CustomCard key={beast.id} {...beast} index={index} />
                </div>
              ))}
            </AwesomeSlider>
            <div className="absolute top-[7rem] sm:hidden mx-auto left-0 right-0">
              <h3 className="text-off-white text-[2.9rem] p-4 mt-[8px] tracking-widest leading-[3rem] text-center">
                WHAT KIND
                <br />
                OF BEAST
                <br />
                ARE YOU?
              </h3>
            </div>
            <img
              src="/arrow-left.svg"
              alt="arrow left"
              className="absolute h-[1rem] top-52 left-4"
            />
            <img
              src="/arrow-right.svg"
              alt="arrow right"
              className="absolute h-[1rem] top-52 right-4"
            />
          </div>
          <div className="sm:flex justify-center items-center -mt-[112px] hidden">
            <div className="flex gap-2 justify-center items-center flex-wrap">
              {insights.map((beast, index) => (
                <CustomBullets
                  key={beast.id}
                  {...beast}
                  index={index}
                  handleClick={setActive}
                  active={active}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="sm:block hidden">
          <Slider
            dots={false}
            arrows={false}
            speed={500}
            swipe={false}
            slidesToShow={1}
            slidesToScroll={1}
            fade
            ref={slider}
          >
            {insights.map((beast, index) => (
              <CustomCard key={beast.id} {...beast} index={index} />
            ))}
          </Slider>
          <div className="sm:flex justify-center items-center hidden">
            <div className="flex gap-2 justify-center items-center flex-wrap lg:w-auto md:w-[50%]">
              {insights.map((beast, index) => (
                <CustomBullets
                  key={beast.id}
                  {...beast}
                  index={index}
                  onClick={setSlideIndex}
                  active={slideIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

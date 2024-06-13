'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { biography } from '@/data/about';
import Image from 'next/image';
import openImg from '@/public/open .jpeg'

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const boxVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <section className='about' ref={ref}>
      <motion.div
        className='aboutTitle'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        من أنا
      </motion.div>
      <div className='aboutP-I'>
        <motion.div
          className="aboutP"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
         {biography}
        </motion.div>
        <motion.div
          className="aboutI"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 1.0, ease: 'easeInOut' }}
        >
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            style={{ borderRadius: 12 }}
          >
            <Image src={openImg} alt={''} width={400} height={400} style={{borderRadius:12}} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

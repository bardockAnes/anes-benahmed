'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
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

  return (
    <section className='about' ref={ref}>
      <motion.div
        className='aboutTitle'
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={titleVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        About Me
      </motion.div>
      <div className='aboutP-I'>
        <motion.div
          className="aboutP"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          Once upon a time, in a quaint village nestled between rolling hills and lush forests, there was a little girl named Emma. Emma was known throughout the village for her boundless curiosity and adventurous spirit. Her favorite pastime was exploring the mysterious Whispering Woods that bordered the village.
          One bright summer morning, Emma set out on one of her many adventures, accompanied by her loyal dog, Max. As they ventured deeper into the woods, they stumbled upon an ancient oak tree with a peculiar marking carved into its trunk. The marking resembled a small door, intricately detailed with swirling patterns and symbols.
        </motion.div>
        <motion.div
          className="aboutI"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 1.0, ease: 'easeInOut' }}
        >
          {/* Add any image or content here */}
        </motion.div>
      </div>
    </section>
  );
}

export default About;

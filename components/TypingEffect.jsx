'use client';
import React from 'react';
import Typing from 'react-typing-effect';
import { motion } from 'framer-motion';


const TypingEffect = ({ phrases }) => {
  return (
    <motion.div 
      className='typing-cont'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typing
        speed={60}
        eraseSpeed={20}
        eraseDelay={5000}
        typingDelay={1000}
        text={phrases}
        className="typing-text"
        cursorClassName="typing-cursor"
      />
    </motion.div>
  );
};

export default TypingEffect;

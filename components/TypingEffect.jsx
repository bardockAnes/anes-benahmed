'use client'
import React from 'react';
import Typing from 'react-typing-effect';

const TypingEffect = ({ phrase }) => {
  return <Typing speed={50} text={phrase} className="typing-text"/>
};

export default TypingEffect;

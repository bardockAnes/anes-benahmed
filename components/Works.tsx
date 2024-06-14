'use client';
import React from 'react';
import { worksData } from '@/data/works';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Works() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div 
            className="worksSection"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1 className='worksTitle'>أعمالي</h1>
            <div className='works'>
                {worksData.map((work, index) => (
                    <motion.div 
                        key={index}
                        className='workDiv'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: '#006270' }}
                    >
                        <div className='workDivT'>{work.title}</div>
                        <div className='workDivP'>{work.desciption}</div>
                        <div className="AA">
                            <a href={work.githup} className='workDivA' target='_blank' rel='noopener noreferrer'>مصدر</a>
                            {work.url && (<a className='workDivAA' href={work.url} target='_blank' rel='noopener noreferrer'>نمودج حي</a>)}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Works;

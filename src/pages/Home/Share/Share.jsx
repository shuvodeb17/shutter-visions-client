import React from 'react';
import shareImage from '../../../assets/images/share/share.png';
import './Share.css';
import { motion } from 'framer-motion'

const Share = () => {
    return (
        <div className='px-3 md:px-16 share'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 items-center'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1
                    }}
                >
                    <img src={shareImage} alt="" />
                </motion.div>
                <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1
                }}
                >
                    <h1 className="text-3xl font-bold text-[#002058] mb-5">Want to share your knowledge? Join us a Mentor
                    </h1>
                    <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Share;
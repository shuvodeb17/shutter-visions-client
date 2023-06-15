import React from 'react';
import { motion } from 'framer-motion';


const TopInstructorCard = ({ instructor }) => {

    return (
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
            className="card card-side ">
            <figure><img className='h-[150px] w-[200px]' src={instructor?.instructorImage} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {instructor?.instructorName}</h2>
                <p>Email: {instructor?.instructorEmail}</p>
                <p>Total Students: {instructor?.enrolled}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </motion.div>
    );
};

export default TopInstructorCard;
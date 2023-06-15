import React from 'react';
import { motion } from 'framer-motion'

const ClassesCard = ({ item }) => {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                delay: 0.2,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeIn',
                duration: 1
            }}
            className="card card-side bg-base-100 shadow-xl mb-5">
            <figure><img className='h-[200px] w-[400px]' src={item?.courseImage} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Coures Name: {item?.courseName}</h2>
                <p>Instructor Name: {item?.instructorName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Continue Course</button>
                </div>
            </div>
        </motion.div>
    );
};

export default ClassesCard;
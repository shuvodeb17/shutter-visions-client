import React from 'react';
import { motion } from 'framer-motion';

const InstructorTable = ({ singleInstructor, index }) => {
    return (
        <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                delay:0.2,
                x:{type:'spring', stiffness:60},
                opacity:{duration:1},
                ease:'easeIn',
                duration:1
            }}
        >
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={singleInstructor?.instructorImage} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {singleInstructor?.instructorName}
            </td>
            <td>
                <span className="badge badge-ghost badge-sm">{singleInstructor?.instructorEmail}</span>
            </td>
        </motion.tr>
    );
};

export default InstructorTable;
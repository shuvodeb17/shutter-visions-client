import React from 'react';
import { motion } from 'framer-motion'

const PaymentsHistoryTable = ({ payment, index }) => {
    return (
        <>
            <motion.tr
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
                <th>{index + 1}</th>
                <td>{payment?.price}</td>
                <td>{payment?.transactionId}</td>
                <td>{payment?.name} <br /> {payment?.email} </td>
                <td>{payment?.date}</td>
            </motion.tr>
        </>
    );
};

export default PaymentsHistoryTable;
import React from 'react';

const PaymentsHistoryTable = ({ payment, index }) => {
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{payment?.price}</td>
                <td>{payment?.transactionId}</td>
                <td>{payment?.name} <br /> {payment?.email} </td>
                <td>{payment?.date}</td>
            </tr>
        </>
    );
};

export default PaymentsHistoryTable;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import PaymentsHistoryTable from './PaymentsHistoryTable';

const PaymentsHistory = () => {

    const { user } = useContext(AuthContext)
    const [allPayments, setAllPayments] = useState([])
    console.log(allPayments)

    useEffect(() => {
        fetch(`http://localhost:5000/payments-details-specific?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAllPayments(data);
            })
    }, [user])

    return (
        <div className='px-3 md:px-16'>
            <h1 className='py-3 text-center text-3xl'>Payment History: {allPayments?.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Amount</th>
                                <th>Description</th>
                                <th>Customer</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allPayments?.map((payment, index) => <PaymentsHistoryTable
                                    key={payment._id}
                                    payment={payment}
                                    index={index}
                                />)
                            }
                        </tbody>
                    </table>
                    {
                        allPayments.length === 0 &&
                        <h1 className='py-3 text-center text-2xl font-bold'>No Payments History</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default PaymentsHistory;
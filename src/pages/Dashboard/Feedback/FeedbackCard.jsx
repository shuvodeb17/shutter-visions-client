import React from 'react';

const FeedbackCard = ({ deny }) => {
    return (
        <div className='py-5'>
            <div className='bg-white p-3 rounded border'>
                <img className='rounded h-[180px] w-full' src={deny?.courseImage} alt="" />

                <div className='flex gap-2 items-center mt-2'>
                    <img src={deny?.instructorImage} className='w-[55px] h-[55px] rounded-full' />
                    <div>
                        <h2 className="text-lg font-bold">{deny?.instructorName}</h2>
                        <h2 className="">{deny?.instructorEmail}</h2>
                        <p className='text-[#a3a3a3]'>Instructor</p>
                    </div>
                </div>

                <h2 className="font-bold text-2xl mt-5">{deny?.courseName}</h2>

                <div className='flex justify-between mt-5 font-lg'>
                    <p>Seats: {deny?.seats}</p>
                    <p>Price: {deny?.price}</p>
                </div>

                <div className="divider"></div>

                <p>Admin Feedback: {deny?.feedback}</p>

            </div>
        </div>
    );
};

export default FeedbackCard;
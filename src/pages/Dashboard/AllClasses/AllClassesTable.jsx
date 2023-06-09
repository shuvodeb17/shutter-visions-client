import React from 'react';

const AllClassesTable = ({ allClass }) => {
    console.log(allClass)
    return (
        <div className='py-5'>
            <div className='bg-white p-3 rounded'>
                <img className='rounded h-[180px] w-full' src={allClass?.courseImage} alt="" />

                <div className='flex gap-2 items-center mt-2'>
                    <img src={allClass?.instructorImage} className='w-[55px] h-[55px] rounded-full' />
                    <div>
                        <h2 className="text-lg font-bold">{allClass?.instructorName}</h2>
                        <p className='text-[#a3a3a3]'>Instructor</p>
                    </div>
                </div>

                <h2 className="font-bold text-2xl mt-5">{allClass?.courseName}</h2>

                <div className='flex justify-between mt-5 font-lg'>
                    <p>Seats: {allClass?.seats}</p>
                    <p>Price: {allClass?.price}</p>
                </div>

                <div className="divider"></div>

                <button className='w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0'>Enroll</button>

            </div>
        </div>
    );
};

export default AllClassesTable;
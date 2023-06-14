import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const AllClassesTable = ({ allClass, enrollButton }) => {

    const { user } = useContext(AuthContext);
    const [isRole, setIsRole] = useState('');
    console.log(isRole)

    useEffect(() => {
        fetch(`http://localhost:5000/specific-user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsRole(data[0].role)
            })
    }, [user])

    return (
        <div className='py-5'>
            {/* bg-white p-3 rounded */}
            <div className={`${allClass.seats === 0 ? 'bg-red-300 p-3 rounded' : 'bg-white p-3 rounded'}`}>
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
                    <p>Enroll: {allClass?.enrolled}</p>
                    <p>Seats: {allClass?.seats}</p>
                    <p>Price: {allClass?.price}</p>
                </div>

                <div className="divider"></div>

                {/* to='/dashboard/payment' state={allClass} */}

                <Link>
                    <button disabled={allClass.seats == 0 || isRole == 'admin' || isRole == 'instructor'} onClick={() => enrollButton(allClass)} className={`${allClass.seats === 0 ? 'w-full p-3 rounded cursor-pointer bg-[#943c45b8] text-white font-bold border-0' : 'w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0'}`} >Select</button>
                </Link>

            </div>
        </div>
    );
};

export default AllClassesTable;
import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';



const ManageCoursesTable = ({ course, index, approvedButton, denyButton }) => {

    const { _id } = course;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/feedback/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };




    return (
        <>
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={course?.courseImage} alt="" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {course?.courseName}
                </td>
                <td>
                    {course?.instructorName}
                    <br />
                    {course?.instructorEmail}
                </td>
                <td>{course?.status}</td>
                <th>
                    {
                        course?.status == 'pending' &&
                        <button onClick={() => approvedButton(course)} className="btn btn-ghost btn-xs bg-green-600 me-3 text-white">Approved</button>
                    }
                    {
                        course?.status == 'pending' &&
                        <label className="btn btn-sm bg-red-600 text-white" htmlFor={`my_modal_${_id}`} onClick={() => denyButton(course)} >
                            Denied
                        </label>
                    }
                </th>
            </tr>

            {/* modal */}
            <input type="checkbox" id={`my_modal_${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-5">{course?.courseName}</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className='mt-5' htmlFor="">Feedback Message</label>
                        <input placeholder='Feedback Message' className=' w-full p-3 rounded mb-5' {...register("feedback", { required: true })} />
                        <br />
                        {errors.feedback && <span className='text-red-600'>Empty Field</span>}
                        <br />

                        <input className='w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0 mt-5' type="submit" />
                    </form>


                    <div className="modal-action">
                        <label htmlFor={`my_modal_${_id}`} className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageCoursesTable;
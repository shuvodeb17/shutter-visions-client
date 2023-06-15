import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const image_token = import.meta.env.VITE_IMAGE_TOKEN

const AddCourses = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${image_token}`

    const onSubmit = data => {

        const formData = new FormData()
        formData.append('image', data.courseImage[0])

        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageRes => {
                if (imageRes?.success) {
                    const imageURL = imageRes.data.display_url;

                    const { courseName, instructorName, instructorEmail, courseImage, seats, price, status, feedback } = data;

                    const allCourse = { courseName, instructorName, instructorEmail, courseImage: imageURL, seats: parseFloat(seats), price: parseFloat(price), status: 'pending', instructorImage: user?.photoURL, enrolled: parseFloat(0), feedback: '' }


                    fetch(`http://localhost:5000/courses`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(allCourse)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: `Added`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };


    return (
        <div className='px-3 md:px-16'>
            <h1 className='text-center text-3xl text-bold py-4'>Add Courses</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-3 gap-5'>
                <input className='w-full p-3 rounded' placeholder='Course Name' {...register("courseName")} />

                <input className='w-full p-3 rounded' type='file' placeholder='Course Name' {...register("courseImage")} />

                <input className='w-full p-3 rounded' value={user?.displayName} placeholder='Instructor Name' {...register("instructorName")} />

                <input className='w-full p-3 rounded' value={user?.email} placeholder='Instructor Email' {...register("instructorEmail")} />

                <input type='number' className='w-full p-3 rounded' placeholder='Available Seats' {...register("seats")} />

                <input type='number' className='w-full p-3 rounded' placeholder='Price' {...register("price")} />

                <input className='w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0' type="submit" />
            </form>

        </div>
    );
};

export default AddCourses;
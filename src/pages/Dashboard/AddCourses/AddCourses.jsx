import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../providers/AuthProvider';

const image_token = import.meta.env.VITE_IMAGE_TOKEN

const AddCourses = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${image_token}`

    const onSubmit = data => {
        let imageAcc;
        const formData = new FormData()
        formData.append('image', data.courseImage[0])
        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imageRes => {
            console.log(imageRes)
            if(imageRes.success){
                const imageURL = imageRes.data.display_url;
                console.log(imageURL)
                return imageAcc = imageURL
            }
        })

        const allData = {
            courseName: data.courseName,
            courseImage: data.courseImage[0].name,
            instructorName: data.instructorName,
            instructorEmail: data.instructorEmail,
            seats: parseFloat(data.seats),
            price: parseFloat(data.price),
            status: 'pending'
        }

        fetch(`http://localhost:5000/courses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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

                <input className='w-full p-3 rounded' placeholder='Available Seats' {...register("seats")} />

                <input className='w-full p-3 rounded' placeholder='Price' {...register("price")} />

                <input className='w-full p-3 rounded cursor-pointer bg-[#fc2036b8] text-white font-bold border-0' type="submit" />
            </form>

        </div>
    );
};

export default AddCourses;
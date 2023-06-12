import React from 'react';

const ClassesCard = ({ item }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-5">
            <figure><img className='h-[200px] w-[400px]' src={item?.courseImage} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Coures Name: {item?.courseName}</h2>
                <p>Instructor Name: {item?.instructorName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Continue Course</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;
import React from 'react';

const TopInstructorCard = ({ instructor }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl p-5">
            <figure><img src={instructor?.instructorImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {instructor?.instructorName}
                </h2>
            </div>
        </div>
    );
};

export default TopInstructorCard;
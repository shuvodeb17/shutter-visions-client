import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query'


const Dashboard = () => {

    const { user } = useContext(AuthContext);



    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">



                    {
                        <>
                            <div className='mx-auto text-center mb-5'>
                                <img className='mx-auto rounded-full w-4/12' src={user?.photoURL} alt="" />
                                <h1 className='text-2xl font-bold'>{user?.displayName} (Admin)</h1>
                                <h1 className='text-center'>{user?.email}</h1>
                            </div>
                            <li><Link to=''>Admin Home</Link></li>
                            <li><Link to='/dashboard/all-users'>All Users</Link></li>
                            <li><Link to='/dashboard/add-courses'>Add Courses</Link></li>
                            <li><Link to='/dashboard/manage-courses'>Manage Courses</Link></li>
                            <li><Link to='/dashboard/my-courses'>My Courses</Link></li>
                            <li><Link to='/dashboard/all-classes'>All Classes</Link></li>
                            <li><Link to='/dashboard/feedback'>Feedback</Link></li>

                            <hr />
                            <li><Link to='/'>Home</Link></li>
                        </>
                    }

                    {
                        <>
                            {/* <div className='mx-auto text-center mb-5'>
                                <img className='mx-auto rounded-full' src={user?.photoURL} alt="" />
                                <h1 className='text-2xl font-bold'>{user?.displayName} (Instructor)</h1>
                                <h1 className='text-center'>{user?.email}</h1>
                            </div>
                            <li><Link to=''>Instructor Home</Link></li>
                            <li><Link to='/dashboard/add-courses'>Add Courses</Link></li>

                            <hr />
                            <li><Link to='/'>Home</Link></li> */}
                        </>
                    }

                    {/* student */}
                    {
                        <>
                           {/*  <div className='mx-auto text-center mb-5'>
                                <img className='mx-auto rounded-full' src={user?.photoURL} alt="" />
                                <h1 className='text-2xl font-bold'>{user?.displayName} (Student)</h1>
                                <h1 className='text-center'>{user?.email}</h1>
                            </div>
                            <li><Link to=''>User Home</Link></li>
                            <li><Link to=''>My Classes</Link></li>

                            <hr />
                            <li><Link to='/'>Home</Link></li> */}
                        </>
                    }


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;


{/* <ul>
      <li>Home</li>
      {isAdmin ? (
        <li>Show this</li>
      ) : (
        isInstructor ? (
          <li>Show this</li>
        ) : (
          <li>Show this</li>
        )
      )}
      <li>About</li>
      <li>Contact</li>
    </ul> */}

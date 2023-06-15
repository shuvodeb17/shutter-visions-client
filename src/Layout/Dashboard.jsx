import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUsers,FaPhotoVideo } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { MdClass } from 'react-icons/md';
import { AiFillHome,AiFillPlusCircle } from 'react-icons/ai';
import { RxVideo } from 'react-icons/rx';
import { VscFeedback } from 'react-icons/vsc';
import { BsPersonVideo3 } from 'react-icons/bs';
import {GrCheckboxSelected } from 'react-icons/gr';
import {AiOutlineHistory } from 'react-icons/ai';
import {TbBrandOnedrive } from 'react-icons/tb';



const Dashboard = () => {

  const { user } = useContext(AuthContext);
  const [isRole, setIsRole] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/specific-user?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setIsRole(data[0]?.role)
        console.log(data)
      })
  }, [user,isRole])

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
            isRole === 'student' &&
            <>
              <div className='mx-auto text-center mb-5'>
                <img className='mx-auto rounded-full w-4/12' src={user?.photoURL} alt="" />
                <h1 className='text-2xl font-bold'>{user?.displayName} ({isRole})</h1>
                <h1 className='text-center'>{user?.email}</h1>
              </div>

              {/* <li><Link to=''>User Home</Link></li> */}
              <li><Link to='/dashboard/all-classes'> <BsPersonVideo3 size={24}/> All Classes</Link></li>
              <li><Link to='/dashboard/my-select-class'> <GrCheckboxSelected size={24}/>My Selected Classes</Link></li>
              <li><Link to='/dashboard/payment-history'> <AiOutlineHistory size={24}/> Payment History</Link></li>
              <li><Link to='/dashboard/classes'> <TbBrandOnedrive size={24}/> My Enrolled Classes</Link></li>

              <hr />
              <li><Link to='/'> <AiFillHome size={24}/> Home</Link></li>
            </>
          }

          {/* admin */}
          {
            isRole === 'admin' &&
            <>
              <div className='mx-auto text-center mb-5'>
                <img className='mx-auto rounded-full w-4/12' src={user?.photoURL} alt="" />
                <h1 className='text-2xl font-bold'>{user?.displayName} ({isRole})</h1>
                <h1 className='text-center'>{user?.email}</h1>
              </div>

              <li><Link to='/dashboard/all-users'> <FaUsers size={24}/> Manage Users</Link></li>
              <li><Link to='/dashboard/manage-courses'> <SiGoogleclassroom size={24}/> Manage Classes</Link></li>
              {/* <li><Link to='/dashboard/all-classes'> <MdClass size={24}/> All Classes</Link></li> */}

              <hr />
              <li><Link to='/'> <AiFillHome size={24}/> Home</Link></li>
            </>
          }

          {/* instructor */}
          {
            isRole === 'instructor' &&
            <>
              <div className='mx-auto text-center mb-5'>
                <img className='mx-auto rounded-full w-4/12' src={user?.photoURL} alt="" />
                <h1 className='text-2xl font-bold'>{user?.displayName} ({isRole})</h1>
                <h1 className='text-center'>{user?.email}</h1>
              </div>


              <li><Link to='/dashboard/add-courses'> <AiFillPlusCircle size={24}/> Add Class</Link></li>
              <li><Link to='/dashboard/my-courses'> <FaPhotoVideo size={24}/> My Classes</Link></li>
              {/* <li><Link to='/dashboard/all-classes'> <RxVideo size={24}/> All Classes</Link></li> */}
              <li><Link to='/dashboard/feedback'> <VscFeedback size={24}/> Feedback</Link></li>

              <hr />
              <li><Link to='/'> <AiFillHome size={24}/> Home</Link></li>
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
{/* <li><Link to=''>Admin Home</Link></li>
                            <li><Link to='/dashboard/all-users'>All Users</Link></li>
                            <li><Link to='/dashboard/add-courses'>Add Courses</Link></li>
                            <li><Link to='/dashboard/manage-courses'>Manage Courses</Link></li>
                            <li><Link to='/dashboard/my-courses'>My Courses</Link></li>
                            <li><Link to='/dashboard/all-classes'>All Classes</Link></li>
                            <li><Link to='/dashboard/feedback'>Feedback</Link></li>
                            <li><Link to='/dashboard/payment-history'>Payment History</Link></li>
                            <li><Link to='/dashboard/classes'>Classes</Link></li> */}
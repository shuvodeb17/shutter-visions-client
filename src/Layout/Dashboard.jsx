import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    // TODO
    const isAdmin = true;


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet/>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin ?
                            <>
                                <li><Link to=''>Admin Home</Link></li>
                                <li><Link to='/dashboard/all-users'>All Users</Link></li>
                            </>
                            :
                            <>
                                <li><Link to=''>User Home</Link></li>
                                <li><Link to=''>My Courses</Link></li>
                            </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
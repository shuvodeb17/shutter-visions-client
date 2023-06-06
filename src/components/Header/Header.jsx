import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar px-3 md:px-16 absolute z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Instructors</Link></li>
                        <li><Link to='/'>Classes</Link></li>
                        <li><Link to='/'>Dashboard</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">ShutterVisions</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Instructors</Link></li>
                    <li><Link to='/'>Classes</Link></li>
                    <li><Link to='/'>Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="bg-[#47AC60] text-white px-5 py-2 rounded-lg hover:bg-[#3c814e]">Login</Link>
            </div>
        </div>
    );
};

export default Header;
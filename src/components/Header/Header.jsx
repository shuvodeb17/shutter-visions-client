import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(AuthContext);
    console.log(user)

    // logout
    const logoutHandler = () => {
        logout()
    }

    return (
        <div className="navbar px-3 md:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Instructors</Link></li>
                        <li><Link to='/dashboard/classes'>Classes</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">ShutterVisions</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Instructors</Link></li>
                    <li><Link to='/'>Classes</Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ?
                        <>
                            <div className="avatar">
                                <div className="w-[50px] me-5 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>

                            <Link onClick={logoutHandler} className="bg-[#b5311c] text-white px-5 py-2 rounded-lg hover:bg-[#d83807]">Logout</Link>
                        </>
                        :
                        <Link to='/login' className="bg-[#47AC60] text-white px-5 py-2 rounded-lg hover:bg-[#3c814e]">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;
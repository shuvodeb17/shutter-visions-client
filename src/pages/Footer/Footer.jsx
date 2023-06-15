import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer p-10 text-base-content">
                <div>
                    <img className='w-[200px]' src={logo} alt="" />
                </div>
                <div>
                    <span className="footer-title">Link</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/instructors' className="link link-hover">Instructors</Link>
                    <Link to='/dashboard/all-classes' className="link link-hover">Classes</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instragram</a>
                    <a className="link link-hover">Linkedin</a>
                </div>
                <div>
                    <span className="footer-title">Help</span>
                    <Link to='/login' className="link link-hover">Sign in</Link>
                    <Link to='/registration' className="link link-hover">SignUp</Link>
                </div>
            </footer>
            <p className='text-center'>All Rights Reserved By &copy; ShutterVisions</p>
            </div>
    );
};

export default Footer;
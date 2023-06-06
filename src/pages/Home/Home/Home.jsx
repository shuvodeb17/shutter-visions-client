import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerOne from '../../../assets/images/banner/banner1.png';
import './Home.css';

const Home = () => {
    return (
        <div className='px-3 md:px-16 my-navbar'>
            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className='text-start mt-12 md:mt-0'>
                        <h1 className="text-5xl font-bold">Engaging & Accessible Online Courses For All</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <img src={bannerOne} className="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
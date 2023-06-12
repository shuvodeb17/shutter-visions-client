import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerOne from '../../../assets/images/banner/banner1.png';
import Banner from '../Banner/Banner';
import Share from '../Share/Share';
import PopularClasses from '../../../components/PopularClasses/PopularClasses';
import TopInstructor from '../TopInstructor/TopInstructor';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <TopInstructor />
            <Share />
        </div>
    );
};

export default Home;
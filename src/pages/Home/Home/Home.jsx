import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerOne from '../../../assets/images/banner/banner1.png';
import Banner from '../Banner/Banner';
import Share from '../Share/Share';
import PopularClasses from '../../../components/PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <Share />
        </div>
    );
};

export default Home;
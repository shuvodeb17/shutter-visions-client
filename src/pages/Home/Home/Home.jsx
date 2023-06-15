import React, { createContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerOne from '../../../assets/images/banner/banner1.png';
import Banner from '../Banner/Banner';
import Share from '../Share/Share';
import PopularClasses from '../../../components/PopularClasses/PopularClasses';
import TopInstructor from '../TopInstructor/TopInstructor';
import { useState } from 'react';
import Footer from '../../Footer/Footer';

export const ThemeContext = createContext(null)

const Home = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }

    const themeInfo = {
        theme,
        setTheme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            <div id={theme}>
                <Banner />
                <PopularClasses />
                <TopInstructor />
                <Share />
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
};

export default Home;
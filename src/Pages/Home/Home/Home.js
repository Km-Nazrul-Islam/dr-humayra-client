import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;
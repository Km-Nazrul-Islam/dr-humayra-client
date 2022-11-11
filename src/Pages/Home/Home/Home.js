import React from 'react';
import LimitService from '../../LimitService/LimitService';
import About from '../About/About';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <LimitService></LimitService>
            <About></About>
        </div>
    );
};

export default Home;
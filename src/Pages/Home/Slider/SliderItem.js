import React from 'react';
import { Link } from 'react-router-dom';
import './SliderItem.css'

const SliderItem = ({slider}) => {
    const {image, id, prev, next} = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full rounded-xl">
            <div className='slider-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-10 md:left-48 right-5 top-1/2 md:top-1/3">
                <h1 className='text-sm md:text-4xl font-bold text-white'>
                    Dr. Mahbuba Humayra <br />
                    Gynecologist at <br />
                    Rajshahi Medical College
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-20 md:left-48 right-5 top-3/4">
                <Link to="/services"><button className="btn btn-primary mr-4">My Services</button></Link>
                <Link to="/about"><button className="btn btn-outline btn-primary">My Details</button></Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;
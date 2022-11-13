import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({service}) => {
    const { _id, img, fee, title, description } = service;
    return (
        <div className="border-2 border-amber-400 card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Fee: {fee}</p>
                <p>{description.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary w-72">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
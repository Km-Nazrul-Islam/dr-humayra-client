import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const {_id, img, fee, title} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Fee: {fee}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">See All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
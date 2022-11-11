import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LimitService = () => {
    const [services, setServices] = useState([])
    
        useEffect(() => {
            fetch('http://localhost:5000/limitServices')
            .then(res => res.json())
                .then(data => setServices(data))
        }, [])

    return (
        <div className='my-24'>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <div className="border-2 border-amber-400 card w-96 bg-base-100 shadow-xl">
                        <figure><img src={service.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p>Fee: {service.fee}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${service._id}`}>
                                    <button className="btn btn-primary w-72">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <div className='text-center'>
                <Link to="/services">
                    <button className="btn btn-primary w-72 mt-8">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default LimitService;
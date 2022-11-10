import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServises] = useState([]);


    useEffect(() => {
        fetch('https://dr-munni-server-site.vercel.app/services')
        .then(res => res.json())
        .then(data => setServises(data))
    }, [])

    return (
        <div className='text-center my-24'>
            <div>
                <h2 className='text-4xl text-gray-800 font-bold my-8'>My All Services</h2>
                <p className='my-12'>I Love My Patients and want to give them a personal experience. But when the phone is ringing off the hook and your waiting room is full, it’s crazy and chaotic. If you’re not super responsive, patients get upset. But if you’re stuck on the phone, you may never get anything else accomplished! Patient communication shouldn’t be this hard.</p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;
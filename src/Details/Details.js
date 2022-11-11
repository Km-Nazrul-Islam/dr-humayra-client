import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Details = () => {
    const { _id, title, fee } = useLoaderData();
    const {user} = useContext(AuthContext)

    const handlePlaceSeriouls = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Please Register First';
        const phone = form.phone.value;
        const message = form.message.value;

        const serioul = {
            service: _id,
            serviceName: title,
            fee,
            customer: name,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/seriouls', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serioul)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }

    return (
        <div className='flex'>
            <div>
                <div>
                    <h2>This is service Details</h2>
                </div>
                <div>
                    <form onSubmit={handlePlaceSeriouls}>
                        <div className='flex space-x-4 text-4xl font-semibold mb-8'>
                            <h2 className='text-green-700'>Test Name: {title}</h2>
                            <h3 className='text-yellow-700'>Test Fee: {fee}</h3>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                            <input name='firstName' type="text" placeholder="Type Your First Name" className="input input-bordered input-md w-full" />

                            <input name='lastName' type="text" placeholder="Type Your Last Name" className="input input-bordered input-md w-full" />

                            <input name='phone' type="text" placeholder="Type Your Phone No." className="input input-bordered input-md w-full" required />

                            <input name='email' type="text" placeholder="Type Your Email Address" defaultValue={user?.email} className="input input-bordered input-md w-full" readOnly />
                        </div>
                        <textarea name='message' className="textarea textarea-bordered h-24 w-full my-8" placeholder="Your Message"></textarea>

                        <input className='btn' type="submit" value="Place Your Serioul Number" />
                    </form>
                </div>
            </div>
            <div>
                <h3>This is review table</h3>
            </div>
        </div>
    );
};

export default Details;
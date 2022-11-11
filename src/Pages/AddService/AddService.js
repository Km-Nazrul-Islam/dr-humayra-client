import React from 'react';

const AddService = () => {
    return (
        <div>
            <form className='p-8' onSubmit={handleAddService}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                    <input name='firstName' type="text" placeholder="Type Your First Name" className="input input-bordered input-md w-full" />

                    <input name='lastName' type="text" placeholder="Type Your Last Name" className="input input-bordered input-md w-full" />

                    <input name='phone' type="text" placeholder="Type Your Phone No." className="input input-bordered input-md w-full" required />

                    <input name='email' type="text" placeholder="Type Your Email Address" defaultValue={user?.email} className="input input-bordered input-md w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full my-8" placeholder="Your Message"></textarea>

                <div className=''>
                    <input className='btn btn-block mb-4' type="submit" value="Submit" />
                    <input className='btn btn-block' type="submit" value="Reset" />
                </div>
            </form>
        </div>
    );
};

export default AddService;
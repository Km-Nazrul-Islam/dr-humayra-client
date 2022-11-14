import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import swal from 'sweetalert';

const Details = () => {
    const { _id, title, fee, img, description } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext)

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'Please Register First';
        const phone = form.phone.value;
        const message = form.message.value;
        const photoURL = form.photoURL.value;

        const review = {
            service_id: _id,
            serviceName: title,
            fee,
            img,
            patient: name,
            email,
            phone,
            review: message,
            photoURL
        }

        console.log(review)

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
            .then( ()=> swal("Good job!", "Review Added Successfully!", "success"))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        fetch(`http://localhost:5000/reviewsById?id=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    return (
        <div className='flex justify-between gap-8'>
            <div className='col-span-8 mt-4'>
                <div className='border-2 border-pink-400 p-12 mb-4 rounded-xl'>
                    <div>
                        <h2 className='text-3xl text-red-500 font-bold text-center'>Details About This Service</h2>
                    </div>
                    <div className='text-2xl font-semibold mb-8'>
                        <div className='flex justify-evenly text-2xl font-semibold mb-8'>
                            <h2 className='text-green-700 grid grid-cols-1'>Test Name: {title}</h2>
                            <h3 className='text-yellow-700 grid grid-cols-1'>Test Fee: {fee}</h3>
                        </div>
                        <div className='justify-center'>
                            <img className='w-full h-auto mt-8 rounded-xl' src={img} alt="" />
                            <p className='text-sm text-red-400 justify-start mt-8'><span className='text-xl text-red-500 font-semibold'>About This Test</span>: {description}</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-pink-500 rounded-xl my-8'>
                    <h2 className='text-4xl text-red-400 font-bold text-center mt-4'>Please Type Your Review</h2>
                    <form className='p-8' onSubmit={handlePlaceReview}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                            <input name='name' type="text" placeholder="Type Your Name" className="input input-bordered input-md w-full" />

                            <input name='phone' type="text" placeholder="Type Your Phone No." className="input input-bordered input-md w-full" required />

                            <input name='email' type="text" placeholder="Type Your Email Address" defaultValue={user?.email} className="input input-bordered input-md w-full" readOnly />

                            <input name='photoURL' type="text" placeholder="Type Your Photo URL" className="input input-bordered input-md w-full" />
                        </div>
                        <textarea name='message' className="textarea textarea-bordered h-24 w-full my-8" placeholder="Your Message"></textarea>

                        <div className=''>
                            <input className='btn btn-block mb-4' type="submit" value="Submit" />
                            <input className='btn btn-block' type="submit" value="Reset" />
                        </div>
                    </form>
                </div>
            </div>

            <div className='col-span-4 mt-4'>
                <div>
                    <h3 className='text-2xl text-pink-600 font-bold text-center mb-4'>Patient Review This Service: {reviews.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Patient Name</th>
                                    <th>Deases Test</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Pelvic Test</td>
                                    <td>Excelent !!</td>
                                </tr>
                                {/* <!-- row 2 --> */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Pap Test</td>
                                    <td>Good</td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Pregnancy testing</td>
                                    <td>100% Qualified</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewsByEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-5xl text-center font-bold text-pink-700 my-8'>All Review Here: {reviews.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Fee</th>
                            <th>Review</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewTable
                                key={review._id}
                                review={review}
                            ></ReviewTable>)
                        }
                        
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Review;
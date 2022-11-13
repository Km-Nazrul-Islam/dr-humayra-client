import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext);
    console.log(user)

    

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
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr>
                        
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Review;
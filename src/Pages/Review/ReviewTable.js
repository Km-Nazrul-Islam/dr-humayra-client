import React from 'react';

const ReviewTable = ({review}) => {
    const { email, fee, img, message, patient, serviceName } = review;
    return (
        <tr>
            <td><img className='w-20 h-20 rounded' src={img} alt="" /></td>
            <td>{patient}</td>
            <td>{serviceName}</td>
            <td>{email}</td>
            <td>{fee}</td>
            <td>{message}</td>
            <td><button>Delete</button></td>
        </tr>
    );
};

export default ReviewTable;
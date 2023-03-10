import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <div className='border-2 border-red-500 p-4 my-12 rounded-xl'>
                <h2 className='text-red-500 text-4xl font-semibold mb-4 '>Difference between SQL and NoSQL ?</h2>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='border-2 border-green-600 p-4 my-12 rounded-xl'>
                <h2 className='text-green-600 text-4xl font-semibold mb-4'>What is JWT, and how does it work?</h2>
                <p>JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
            </div>
            <div className='border-2 border-violet-800 p-4 my-12 rounded-xl'>
                <h2 className='text-violet-800 text-4xl font-semibold mb-4'>What is the difference between javascript and NodeJS?</h2>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='border-2 border-pink-900 p-4 my-12 rounded-xl'>
                <h2 className='text-pink-900 text-4xl font-semibold mb-4'>How does NodeJS handle multiple requests at the same time?</h2>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;
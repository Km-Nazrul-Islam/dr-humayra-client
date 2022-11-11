import React from 'react';
import myOperation from '../../../assets/images/about_me/myOperation.jpg'
import myChember from '../../../assets/images/about_me/myChember.jpg'

const About = () => {
    return (
        <div className="hero rounded-xl my-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={myOperation} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={myChember} alt="" className="absolute w-3/5 right-4 top-1/2 border-9 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold my-4">Dr. Mahbuba Humayra</h1>
                    <h2 className="text-4xl font-bold">
                        Specialty - Junior Consultant</h2>
                    <h3 className="text-2xl font-bold">
                        Degree - MBBS, FCPS</h3>
                    <p className="py-6">

                        Hey!! My Name is Mahbuba Humayra and I am  medical graduate from Rajshahi Medical College. I am obtained FCPS in Obstetrics and Gynecology from Bangladesh College Of Physicians and Surgeons (BCPS)  in JULY 2016.
                        <br />
                        <br />
                        After completing my internship and I dedicated my training in the field of Obs and Gynae in Rajshahi Medical College Hospital.
                        <br />
                        Prior to joining in Square Hospitals Dhaka and I served as Registrar in Addin Women's Medical College and Hospital, Amana Hospital and Royel Hospitals Rajshahi. During that time period span I gained vast experience and performed all types of Gynaecological and Obstetric surgeries independently.
                        <br />
                        <br />
                        I am joined in Amana Hospitals Rajshahi in February, 2019 and has since been serving as Specialist with whole hearted dedication and has mastered the art of dealing with Obs and Gynae emergencies.
                        <br />
                        And also specially trained in infertility and laparoscopic surgery and participated in a number of national and international seminars, workshop and symposium.</p>
                    <button className="btn btn-primary">Details Me</button>
                </div>
            </div>
        </div>
    );
};

export default About;
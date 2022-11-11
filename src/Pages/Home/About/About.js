import React from 'react';
import myOperation from '../../../assets/images/about_me/myOperation.jpg'

const About = () => {
    return (
        <div>
            <div className="hero rounded-xl my-24">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <div className='w-1/2'>
                        <img src={myOperation} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-xl md:text-5xl font-bold my-4 underline hover:underline-offset-4 text-blue-600">Dr. Mahbuba Humayra</h1>
                        <h2 className="text-lg md:text-4xl font-bold">
                            Specialty - Junior Consultant</h2>
                        <h3 className="text-xl md:text-4xl font-bold mt-4">
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
                    </div>
                </div>
            </div>
            <div className=''>
                <h2 className='text-5xl text-blue-600 font-bold text-center mb-16'>About Patient Satisfection</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/4j2MfJR/pexels-andrea-piacquadio-3884103.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title">Kaniz Fatima</h2>
                            <p>The most important determinant of patient satisfaction lies in how much health care a patient feels that he or she has received. It turns out that patients who go to the emergency room for medical emergencies are more satisfied with their care than patients who go to the emergency room for less serious medical issues.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/ZLVwgNp/pexels-anna-shvets-3845757.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Rudba Ayman</h2>
                            <p>The most important determinant of patient satisfaction lies in how much health care a patient feels that he or she has received. It turns out that patients who go to the emergency room for medical emergencies are more satisfied with their care than patients who go to the emergency room for less serious medical issues.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/wR7x7hc/pexels-shvets-production-7176318.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Anzuara Khanom</h2>
                            <p>The most important determinant of patient satisfaction lies in how much health care a patient feels that he or she has received. It turns out that patients who go to the emergency room for medical emergencies are more satisfied with their care than patients who go to the emergency room for less serious medical issues.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
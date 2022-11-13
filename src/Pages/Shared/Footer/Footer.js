import React from 'react';
import logo from '../../../assets/logo6.png'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-light text-black">
            <div>
                <img className='max-w-48 h-24' src={logo} alt="" />
                <p><span className='font-bold text-gray-500'>Dr. Mahbuba Humayra</span><br />
                    Gynecologist at Rajshahi Medical College <br />
                    Specialty - Junior Consultant
                    <br />
                    Degree - MBBS, FCPS
                    </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Pelvic Test</a>
                <a href="/" className="link link-hover">Pap Test</a>
                <a href="/" className="link link-hover">STD</a>
                <a href="/" className="link link-hover">Pregnancy testing</a>
            </div>
            <div>
                <span className="footer-title">Contact Info</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
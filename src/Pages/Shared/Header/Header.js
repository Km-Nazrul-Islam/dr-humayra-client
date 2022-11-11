import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo5.png'

const Header = () => {

const menuItems = <>
        <li className='font-semibold'><Link to='/home'>Home</Link></li>
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/review'>Review</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
    </>

    return (
        <div className="navbar h-24 my-8 bg-base-100">
            <div className="navbar-start">
                
                <Link className="">
                    <img className='' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;
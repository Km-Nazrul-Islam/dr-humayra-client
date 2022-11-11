import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo5.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
const menuItems = <>
        <li className='font-semibold'><Link to='/home'>Home</Link></li>
        {
        user && user?.email ? <>
        <li className='font-semibold'><Link to='/review'>My Reviews</Link></li>
        <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
            <li onClick={logout} className='font-semibold'><Link>Logout</Link></li> </>: 
        <>
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
        <li className='font-semibold'><Link to='/signup'>Sign Up</Link></li>
       </>

        }
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        
    </>

    return (
        <div className="navbar h-24 my-8 bg-base-100 justify-between">
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
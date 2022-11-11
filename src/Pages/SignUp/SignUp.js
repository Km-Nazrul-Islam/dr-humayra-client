import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-24 md:grid-cols-2 flex-col lg:flex-row">
                <div className="">
                    <img className='w-4/5' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center">Sign Up!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>Already Have An Account ? <Link className='text-yellow-600 font-bold' to="/login">Please Login</Link> </p>
                    
                </div>
                
            </div>
        </div>
    );
};

export default SignUp;
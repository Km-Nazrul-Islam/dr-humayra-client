import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { login, googleSign, setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
         login(email, password)
         .then(result => {
            const user = result.user;
            navigate("/");
             setUser(user);
            form.reset();
         })
         .catch(err => console.error(err))
    }

    const handleGoogleSignIn = () => {
        googleSign()
            .then(result => {
                const user = result.user;
                navigate("/");
                setUser(user);
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
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>Have A Account ? <Link className='text-yellow-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <div className="form-control mt-6 p-8">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
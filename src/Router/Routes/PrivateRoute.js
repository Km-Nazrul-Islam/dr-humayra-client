import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    const navigate = useNavigate();

    if (loading) {
        return <h2>Loading...</h2>
    }

    if(user){
        return children;
    }
    
     navigate('/login')
    

    
};

export default PrivateRoute;
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Login = () => {

    let history = useHistory();
    let location = useLocation();
    const { user, logOut } = useAuth();
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));
    }

    return (
        
        <div>
            <div className="text-center mt-5">
            <button className="btn btn-warning"onClick={handleGoogleLogin}>Google sign in</button>
        </div>
        </div>
    );
};

export default Login;
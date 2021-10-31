import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Login = () => {

    let history = useHistory();
    let location = useLocation();
    const { signInUsingGoogle, setIsLoading,  user, logOut } = useAuth();
    console.log(user.email)
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));
    }

    

    return (
        
        <div className="mt-5 mb-5">
            <div className="google-login-container container bg-light d-flex align-items-center justify-content-center">
            {
                user.email ? 
                <button className="google-login-button"onClick={logOut}><i class="fas fa-sign-out-alt"></i> Sign Out </button> : <button className="google-login-button"onClick={handleGoogleLogin}><i class="fab fa-google fa-lg"></i> Google sign in</button>
            }
            
            
        </div>
        </div>
    );
};

export default Login;
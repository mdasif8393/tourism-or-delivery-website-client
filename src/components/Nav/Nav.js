import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Nav.css'
const Nav = () => {
    const {user, logOut, signInUsingGoogle, setIsLoading} = useAuth();
    let history = useHistory();
    let location = useLocation();
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ps-5">
                <img src="https://i.ibb.co/dcYLBfD/logo1.jpg" alt="" width="80" height="44"/>
                    <h4 className="text-secondary ps-3">Travelling is Fun</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ps-5 mb-lg-0">
                        
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myOrders" className="nav-link active" aria-current="page" href="#">My Bookings</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/addTour" className="nav-link active" aria-current="page" href="#">Add a Tour</Link>
                        </li>
                        
                    </ul>

                    {
                        user.email &&  <h6>User: {user.displayName }</h6>
                    }
                    
                    {
                        user.email ? <button className="btn btn-outline-danger" type="submit" onClick={logOut}>Log Out</button> : <button onClick={handleGoogleLogin} className="btn btn-outline-success" type="submit">Log In</button>

                    }
                        
                        

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
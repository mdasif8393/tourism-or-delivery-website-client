import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCoffee, faEnvelope, faEnvelopeOpen, faEnvelopeSquare, faPhone, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
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
            <div className="nav-header d-flex pt-1 justify-content-center container-fluid row">
                    <div className="col ms-5">
                        <p><FontAwesomeIcon icon={faEnvelope} /> travelling.is.fun@gmail.com</p>    
                    </div>

                    <div className="col">
                        <p className="ms-5"><FontAwesomeIcon icon={faPhoneSquareAlt} /> +88-01721212121</p>
                    </div>
                    
                    <div className="col">
                        <p className="ms-3"><FontAwesomeIcon icon={faClock} />  10 am - 6 pm Saturday - Thursday</p>
                    </div>
                    
                    <div className="col">
                        <a  href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a className="ms-2" href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a className="ms-2" href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                    
            </div>

            <div>
            <nav className="navbar navbar-expand-lg  bg-light ">
                <div className="container-fluid ps-5">
                <img src="https://i.ibb.co/dcYLBfD/logo1.jpg" alt="" width="80" height="44"/>
                    <h4 className="text-secondary ps-3">Travelling is Fun</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fas fa-chevron-circle-down"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 ps-5 mb-lg-0 d-flex align-items-center">
                        
                        <li className="nav-item ms-5">
                            <Link style={{ color: '#808080' }} to="/" className="nav-link active fw-bold" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link style={{ color: '#808080' }} to="/myOrders" className="nav-link active fw-bold" aria-current="page" href="#">My Bookings</Link>
                        </li>
                        
                        <li className="nav-item ms-5">
                            <Link style={{ color: '#808080' }} to="/manageAllOrders" className="nav-link active fw-bold" aria-current="page" href="#">Manage All Orders</Link>
                        </li>

                        <li className="nav-item ms-5">
                            <Link style={{ color: '#808080' }} to="/addTour" className="nav-link active fw-bold" aria-current="page" href="#">Add a New Tour</Link>
                        </li>

                        <li className="nav-item ms-5">
                            <Link style={{ color: '#808080' }} to="/login" className="nav-link active fw-bold" aria-current="page" href="#">Login</Link>
                        </li>
                    </ul>

                    {
                        user.email &&  <h6><i class="fas fa-user fa-lg"></i> {user.displayName }&nbsp;</h6>
                    }
                    
                    {
                        user.email ? 
                        <button className="btn btn-outline-danger" type="submit" onClick={logOut}><i class="fas fa-sign-out-alt"></i> Sign Out</button> : 
                        <button onClick={handleGoogleLogin} className="btn btn-outline-success" type="submit"><i class="fas fa-sign-in-alt "></i> Sign In</button>

                    }
                        
                        

                    </div>
                </div>
            </nav>
            </div>
            
        </div>
    );
};

export default Nav;
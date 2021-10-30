import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'

const Tour = (props) => {
    const {_id, title, cost, image, location, duration} = props.tour;
    return (
        <div className="container">
            <div className="bg-light rounded tour-card">
                <img className="tour-image img-fluid img-thumbnail" src={image} alt=""></img>
                <h5 className="mb-4 ">{title}</h5>
                <div className="ps-1 pe-1">
                    <div className="d-flex justify-content-between mb-2">
                        <small><i className="far fa-calendar-check fa-lg"></i> {duration} Days</small>
                        <small ><i className="fas fa-map-marker-alt fa-lg"></i> {location}</small>
                    </div>
                    <small className="text-primary">Starts from</small> <br/>
                    <p className="fw-bold text-secondary"><i class="fas fa-dollar-sign"> </i> BDT {cost} /<small>person</small></p>
                    <Link to={`/orderPlace/${_id}`}><button className="btn btn-outline-primary"><i class="fas fa-shopping-cart "></i> Book Now</button></Link>

                    
                </div>
            </div>
        </div>
    );
};

export default Tour;
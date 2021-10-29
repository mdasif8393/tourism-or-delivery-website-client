import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css'

const Tour = (props) => {
    const {_id, title, cost, image, location, duration} = props.tour;
    return (
        <div className="container">
            <div>
                <img className="tour-image img-fluid" src={image} alt=""></img>
                <h5>{title}</h5>
                <div>
                    <small>{duration}</small>
                    <small>{location}</small>
                </div>
                <small>Starts from</small> <br/>
                <p>BDT {cost} /<small>person</small></p>
                <Link to={`/orderPlace/${_id}`}><button class="btn btn-primary">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Tour;
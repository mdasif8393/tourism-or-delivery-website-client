import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://frightening-demon-32818.herokuapp.com/tours')
        .then( res => res.json())
        .then(data => setTours(data))
    },[])
    return (
        <div>
            {
                tours.length === 0 && <div className="spinner-border text-primary mt-5 " role="status">
                                            <div><span className="visually-hidden">Loading...</span></div>
                                        </div>
            }
            <div className="tours-container container mt-5">
            
            {
                tours.map(tour => <Tour key={tours._id} tour={tour}></Tour>)
            }
        </div>
        </div>
        
    );
};

export default Tours;
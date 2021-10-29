import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tours')
        .then( res => res.json())
        .then(data => setTours(data))
    },[])
    return (
        <div className="tours-container container mt-5">
            {
                tours.map(tour => <Tour key={tours._id} tour={tour}></Tour>)
            }
        </div>
    );
};

export default Tours;
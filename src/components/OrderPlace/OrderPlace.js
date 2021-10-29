import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './OrderPlace.css'
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OrderPlace = () => {
    const {id} = useParams();
    const [tour, setTour] = useState({})
    const {user} = useAuth();
    console.log(tour);
        
    useEffect(()=> {
        axios.get(`http://localhost:5000/tours/${id}`)
        .then(result => {
        setTour(result.data);
    })
    },[])

    const [startDate, setStartDate] = useState(new Date());

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.place = tour.title; 
        data.date = startDate;
        data.image = tour.image;
        
        axios.post('http://localhost:5000/orders', data)
        .then(result => {
            if(result.data.acknowledged){
                alert("Confirm Order Successfully");
                reset();
            }
        })
    };
    return (
        <div className="container orderPlace-container mt-5">
            <div>
                <img className="img-fluid" src={tour.image}></img>
                <h1>{tour.title}</h1>
                <p>{tour.location}</p>
                <p>{tour.description}</p>
                <h5>{tour.duration} days</h5>
                <h5>{tour.cost} taka all included</h5>
            </div>

            <div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="placeOrder-form-container p-3">
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5 className="text-center text-secondary mb-5">Confirm order to explore {tour.title}</h5>

                        <input className="form-control text-center" defaultValue={user.displayName} placeholder="Your Name" {...register("name", { required: true })} /> <br/>

                        <input className="form-control text-center" defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true })} /> <br/>

                        <DatePicker className="form-control text-center" selected={startDate} onChange={(date) => setStartDate(date)} /> <br/> <br/>

                        <input className="form-control text-center" type="number" placeholder="Your Phone Number" {...register("number", { required: true })} /> <br/>

                        <input className="form-control text-center" placeholder="Your Address" {...register("address", { required: true })} /> <br/>


                        <input value="Confirm Order" className="w-100 btn btn-secondary" type="submit" />
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderPlace;
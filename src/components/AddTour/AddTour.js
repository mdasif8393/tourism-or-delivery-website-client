import React from 'react';
import './AddTour.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/tours',data)
        .then(result => {
            if(result.data.acknowledged){
                alert("A tour is added successfully");
                reset();
            }
        })
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="add-tour-container">
                
            <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                <h4 className="text-center text-secondary">Add a new Tour</h4>

                <input className="form-control text-center" placeholder="Tour Title" {...register("title", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Description" {...register("description", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Duration" {...register("duration", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Location" {...register("location", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Cost" {...register("cost", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Image" {...register("image", { required: true })} /> <br/>

                <input className="w-100 btn btn-secondary" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddTour;
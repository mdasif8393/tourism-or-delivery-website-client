import React from 'react';
import './AddTour.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddTour = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://frightening-demon-32818.herokuapp.com/tours',data)
        .then(result => {
            if(result.data.acknowledged){
                alert("A tour is added successfully");
                reset();
                history.push('/')
            }
        })
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
            <div className="add-tour-container bg-light">
                
            <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center text-secondary">Add a new tour details</h3>

                <input className="form-control text-center" placeholder="Tour Title" {...register("title", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Description" {...register("description", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Duration" {...register("duration", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Location" {...register("location", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Tour Cost" {...register("cost", { required: true })} /> <br/>

                <input className="form-control text-center" placeholder="Image URL" {...register("image", { required: true })} /> <br/>

                <input className="w-100 btn btn-secondary" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddTour;
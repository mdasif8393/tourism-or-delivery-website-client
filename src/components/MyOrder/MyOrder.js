import axios from 'axios';
import React from 'react';
import './order.css'

const MyOrder = (props) => {
    console.log(props.order);
    const {address, date, email, name, number, place, _id, image, status} = props.order;

    const handleDeleteUser = (id) => {
        if(status === "Confirm"){
            alert("You can't delete this order because your order status is Confirm, For further info contact with US");
        }
        else{
            const proceed = window.confirm("Are you sure you want to delete?")
            if(proceed){
                axios.delete(`https://frightening-demon-32818.herokuapp.com/orders/${id}`)
                .then(result => {
                    if(result.data.acknowledged){
                        alert("Cancel your booking successfully");
                        window.location.reload();
                    }
                })
        }
        }
    }

    return (
        <div className="myOrder-container p-4">
            <div>
                <img className="img-fluid img-thumbnail" src={image} alt=""></img>
            </div>
            <div className="bg-light rounded">
                <div className="mt-4 ps-3 ">
                    <h5 className="text-secondary">{place}</h5>
                    <h6>Tour Date: {date}</h6>
                    <p>Order Status: {status}</p>
                    <button className="btn btn-outline-danger" type="submit" onClick={ ()=>handleDeleteUser(_id)} ><i className="fas fa-times fa-lg"></i> Cancel Booking</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
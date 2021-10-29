import React from 'react';
import './order.css'

const MyOrder = (props) => {
    console.log(props.order);
    const {address, date, email, name, number, place, _id, image} = props.order;

    return (
        <div className="myOrder-container p-4">
            <div>
                <img className="img-fluid img-thumbnail" src={image} alt=""></img>
            </div>
            <div className="bg-light rounded">
                <div className="mt-4 ps-3 ">
                    <h5 className="text-secondary">{place}</h5>
                    <h6>Tour Date: {date}</h6>
                    <button className="btn btn-outline-danger" type="submit" >Cancel Booking</button>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
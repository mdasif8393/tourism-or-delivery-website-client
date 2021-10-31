import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css'


const MyOrders = () => {
    const {user} = useAuth()
    const email = user.email

    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(()=>{
        axios.get(`https://frightening-demon-32818.herokuapp.com/orders/${email}`)
        .then(result => {
        setOrders(result.data)
    })
    },[])

    
    return (
        <div className="myOrders-container container mt-5">
            {
                orders.map((order) => <MyOrder key={order._id} order={order}></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;
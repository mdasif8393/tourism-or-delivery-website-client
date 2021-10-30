import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            axios.delete(`http://localhost:5000/orders/${id}`)
            .then(result => {
                if(result.data.acknowledged){
                    alert("Order is deleted successfully");
                    const newUsers = users.filter (user => user._id !== id);
                    setUsers(newUsers);
                }
            })
        }
        
    }

    const updateOrderStatus = (id) => {
        const proceed = window.confirm('Are you sure you want to update order status?');
        if(proceed) {
           const updatedUser = users.find(user => user._id === id)
           updatedUser.status="Confirm";
           axios.put(`http://localhost:5000/orders/${id}`, updatedUser)
           .then(result => {
                if(result.data.acknowledged){
                    alert("Order status is updated successfully");
                    window.location.reload();
                }
           })
        }
        
    }

    return (
        <div className="container-fluid mt-5 mb-5">
            <table className="table table-hover ">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Place</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Contact Number</th>
                    <th scope="col">Order Status</th>
                    </tr>
                </thead>
                {
                    users.map((user, index) => 
                        <tbody user={user} key={user._id}>
                    <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.place}</td>
                    <td>{user.name}</td>
                    <td>{user.number}</td>
                    <td>{user.status}</td>
                    <td><button className="btn btn-success" onClick={()=>updateOrderStatus(user._id)}><i class="fas fa-edit"></i> Update Status</button>&nbsp;
                    <button onClick={()=>deleteBooking(user._id)} className="btn btn-danger"><i class="fas fa-times fa-lg"></i> Delete Booking</button></td>
    
                    </tr>
                
                        </tbody>)
                }
                
            </table>
        </div>
    );
};

export default ManageAllOrders;
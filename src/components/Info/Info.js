import React from 'react';
import './Info.css'

const Info = () => {
    return (
        // d-flex justify-content-around align-items-center
        <div className="container-fluid info-container ">
            <div >
                <div className="text-center mb-4">
                    <i className="fas fa-dollar-sign fa-5x text-white"></i>
                </div>
                <div>
                    <h4 className="text-white text-center">Best Price Guarantee</h4>
                </div>
            </div>

            <div>
                <div className="text-center mb-4">
                    <i className="fas fa-heart fa-5x text-white"></i>
                </div>
                <div>
                    <h4 className="text-white text-center">Safe and Secure</h4>
                </div>
            </div>

            <div>
                <div className="text-center mb-4">
                    <i className="fas fa-thumbs-up fa-5x text-white"></i>
                </div>
                <div>
                    <h4 className="text-white text-center">Best Travel Agency</h4>
                </div>
            </div>

            <div>
                <div className="text-center mb-4">
                    <i className="fas fa-book fa-5x text-white"></i>
                </div>
                <div>
                    <h4 className="text-white text-center">Travel Guidelines</h4>
                </div>
            </div>
        </div>
    );
};

export default Info;
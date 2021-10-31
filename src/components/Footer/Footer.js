import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid footer-container ">
            <div className="about-us text-center footer-texts">
                <h4 className="text-white pb-3">CONTACT US</h4>
                <p className="text-white"><i className="fas fa-map-marker-alt fa-lg"> </i> Bashundhara, Dhaka Bangladesh </p>
                <p className="text-white"><i className="fas fa-phone fa-lg"></i> +88-01721212121</p>
                <p className="text-white"><i className="far fa-envelope fa-lg"></i> ghuri-firi@gmail.com</p>
            </div>

            <div className="about-us text-center footer-texts">
                <h4 className="text-white pb-3">ABOUT US</h4>
                <p className="text-white">Travelling is Fun is one of the best tour agency of Bangladesh. We take care about our customer and we focus on quality, not in profit. We gater our profit after giving pleasure to our customers. Our one of the top priority is to Safe and Pleasure to our customer with service. </p>
            </div>

            <div className="about-us text-center mt-5">
                <h4 className="text-white pb-3">Payment Options</h4>
                <img className="img-fluid img-thumbnail" src="https://i.ibb.co/Ms3hJxC/payment.jpg" alt=""></img>
            </div>
        </div>
    );
};

export default Footer;
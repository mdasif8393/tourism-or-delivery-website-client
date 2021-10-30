import React  from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Subscribe from '../Subscribe/Subscribe';
import Tours from '../Tours/Tours';
import './Home.css'
const axios = require('axios');

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <Info></Info>
            <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;
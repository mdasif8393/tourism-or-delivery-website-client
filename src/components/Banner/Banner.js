import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src="https://i.ibb.co/LnjXwTs/rsz-1img-20190921-093401.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Rangamati - the place of Kaptai Lake</h3>
                  <p>Start from BDT 8,500 /person.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src="https://i.ibb.co/G3HHcJT/rsz-img-20190920-131706.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Bandarban - a place to explore green</h3>
                  <p>Start from BDT 10,500 /person.</p>
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/rZFLkP9/rsz-1img-20190510-075722-01.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Sikkim - the place of Ice</h3>
                  <h5>Start from BDT 17,500 /person</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
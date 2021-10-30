import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/mbPmWYD/rsz-1banner1.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>St. Martin's Island - feeling like inside Ocean</h3>
                  <h5>Start from BDT 7,500 /person</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src="https://i.ibb.co/xG1sdpZ/rsz-rsz-1banner3.png"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Bandarban - a place to explore green</h3>
                  <p>Start from BDT 10,500 /person.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src="https://i.ibb.co/mq8JL6Y/rsz-1rsz-1rangamati11.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Rangamati - the place of Kaptai Lake</h3>
                  <p>Start from BDT 8,500 /person.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
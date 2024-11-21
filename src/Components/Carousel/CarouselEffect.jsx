import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { images } from './image/data';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
    >
        {
            images.map((imag, index) => <img key={index} src={imag} alt='background' />)
        }
      </Carousel>
      <div className={classes.hero_image}></div>
    </div>
  )
}

export default CarouselEffect

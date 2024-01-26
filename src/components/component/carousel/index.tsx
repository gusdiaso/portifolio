import React from 'react';
import Slider from 'react-slick';
import * as s from "./style";
import { CarouselProps } from './type';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
  
    return (
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <s.Container key={index}>{slide}</s.Container>
        ))}
      </Slider>
    );
  };
  
  export default Carousel;
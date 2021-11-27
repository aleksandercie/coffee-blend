import React from 'react';
import Slider from 'react-slick';
import Banner from '../../components/Banner/Banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlider.scss';
import Container from '../../common/Container/Container';

const MainSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Container customClass="slider" variant>
      <Slider {...settings} className="slider__container">
        {slides.map((slide, index) => (
          <Banner banner={slide} index={index} key={index} slider />
        ))}
      </Slider>
    </Container>
  );
};

export default MainSlider;

import React from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Container from '../../common/Container/Container';
import LazyImage from '../../common/LazyImage/LazyImage';
import { gallery } from '../../content/gallery';
import './Gallery.scss';

const Gallery = () => {
  const renderImages = gallery.map((image, index) => (
    <LazyImage image={image} key={index} alt="gallery" />
  ));
  return (
    <Container customClass="gallery" variant>
      <FadeIn option="fade-right">
        <Container customClass="gallery__container">{renderImages}</Container>
      </FadeIn>
    </Container>
  );
};

export default trackWindowScroll(Gallery);

import React from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Container from '../../common/Container/Container';
import Heading from '../../components/Heading/Heading';
import Button from '../../common/Button/Button';
import LazyImage from '../../common/LazyImage/LazyImage';
import { discoverMenu } from '../../content/discover-menu';
import './DiscoverMenu.scss';

const DiscoverMenu = () => {
  const {
    images,
    button: { name, url },
  } = discoverMenu;
  return (
    <Container customClass="discover-menu" variant>
      <FadeIn option="fade-up">
        <Container customClass="discover-menu__container">
          <Heading info={discoverMenu} align="left" />
          <Button
            link={url}
            name={name}
            variant="tertiary"
            customClass="discover-menu__button"
          />
        </Container>
      </FadeIn>
      <Container customClass="discover-menu__images">
        {images.map((image, index) => (
          <LazyImage image={image} key={index} alt="coffee" />
        ))}
      </Container>
    </Container>
  );
};

export default trackWindowScroll(DiscoverMenu);

import React from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Container from '../../common/Container/Container';
import Heading from '../../components/Heading/Heading';
import LazyImage from '../../common/LazyImage/LazyImage';
import { story } from '../../content/story';
import './DiscoverStory.scss';

const DiscoverStory = () => {
  const { banner } = story;
  return (
    <Container customClass="discover-story" variant>
      <FadeIn option="fade-right">
        <LazyImage image={banner} alt="banner" />
      </FadeIn>
      <Container customClass="discover-story__container">
        <Heading info={story} align="left" />
      </Container>
    </Container>
  );
};

export default trackWindowScroll(DiscoverStory);

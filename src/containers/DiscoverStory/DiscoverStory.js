import React from "react";
import FadeIn from "../../components/FadeIn/FadeIn";

import Container from "../../common/Container/Container";
import Heading from "../../components/Heading/Heading";
import Image from "../../common/Image/Image";
import { story } from "../../content/story";
import "./DiscoverStory.scss";

const DiscoverStory = () => {
  const { banner } = story;
  return (
    <Container customClass="discover-story" variant>
      <FadeIn option="fade-right">
        <Image
          image={banner}
          alt="banner"
          customClass="discover-story__image"
        />
      </FadeIn>
      <Container customClass="discover-story__container">
        <Heading info={story} align="left" />
      </Container>
    </Container>
  );
};

export default DiscoverStory;

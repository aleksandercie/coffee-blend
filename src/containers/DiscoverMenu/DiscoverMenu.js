import React from "react";
import FadeIn from "../../components/FadeIn/FadeIn";
import Container from "../../common/Container/Container";
import Heading from "../../components/Heading/Heading";
import Button from "../../common/Button/Button";
import Image from "../../common/Image/Image";
import { discoverMenu } from "../../content/discover-menu";
import "./DiscoverMenu.scss";

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
          <Image
            image={image}
            key={index}
            alt="coffee"
            customClass="discover-menu__image"
          />
        ))}
      </Container>
    </Container>
  );
};

export default DiscoverMenu;

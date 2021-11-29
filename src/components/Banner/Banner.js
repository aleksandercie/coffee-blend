import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Container from "../../common/Container/Container";
import Typography from "../../common/Typography/Typography";
import Button from "../../common/Button/Button";
import Image from "../../common/Image/Image";
import { isBrowser } from "../../helpers/isBrowser";
import { MOBILE_WIDTH } from "./constants";
import "./Banner.scss";

const Banner = ({ banner, slider }) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    if (!isBrowser()) return;
    const getWindowWidth = window.innerWidth;
    setWindowWidth(getWindowWidth);
  }, [windowWidth]);

  const { photo, title, buttons, subtitle, description } = banner;

  const bannerClasses = classNames("banner__container", {
    "banner__container--slider": slider,
  });

  const renderSubtitle = subtitle && (
    <Typography variant="p" customClass="banner__subtitle" type="subtitle">
      {banner.subtitle}
    </Typography>
  );

  const renderDescription = description && (
    <Typography variant="p" customClass="banner__description">
      {banner.description}
    </Typography>
  );

  const renderButtons = buttons && (
    <Container customClass="banner__buttons">
      {banner.buttons.map((button) => {
        const { name, url, variant } = button;
        return (
          <Button
            key={name}
            link={url}
            name={name}
            variant={variant}
            tabIndex
          />
        );
      })}
    </Container>
  );

  return (
    <Container customClass="banner" arriaHidden>
      <Image
        image={windowWidth < MOBILE_WIDTH ? photo.mobile : photo.desktop}
        alt="slide"
        customClass="banner__image"
      />
      <Container customClass={bannerClasses}>
        {renderSubtitle}
        <Typography variant="h1" customClass="banner__title">
          {title}
        </Typography>
        {renderDescription}
        {renderButtons}
      </Container>
    </Container>
  );
};

export default Banner;

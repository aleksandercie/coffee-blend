import React, { useState, useEffect } from "react";

import Container from "../../common/Container/Container";
import Details from "../../components/Details/Details";
import Form from "../../components/Form/Form";
import FadeIn from "../../components/FadeIn/FadeIn";
import { isBrowser } from "../../utils/isBrowser";
import { MOBILE_WIDTH } from "./constants";
import "./Intro.scss";

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!isBrowser()) return;
    const getWidnowWidth = window.innerWidth;
    getWidnowWidth < MOBILE_WIDTH && setIsMobile(true);
  }, [isMobile]);

  return (
    <Container customClass="intro" variant>
      <FadeIn option="fade-right">
        <Details />
      </FadeIn>
      {!isMobile && (
        <Form btnVariant="appointment" customClass="desktop--display" />
      )}
    </Container>
  );
};

export default Intro;

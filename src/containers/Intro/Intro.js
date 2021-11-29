import React, { Suspense, lazy } from "react";
import Container from "../../common/Container/Container";
import Details from "../../components/Details/Details";
import FadeIn from "../../components/FadeIn/FadeIn";
import "./Intro.scss";

const Form = lazy(() => import("../../components/Form/Form"));

const Intro = () => (
  <Container customClass="intro" variant>
    <FadeIn option="fade-right">
      <Details />
    </FadeIn>
    <Suspense fallback={<div />}>
      <Form btnVariant="appointment" />
    </Suspense>
  </Container>
);

export default Intro;

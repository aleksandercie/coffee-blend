import React from 'react';
import Container from '../../common/Container/Container';
import Details from '../../components/Details/Details';
import Form from '../../components/Form/Form';
import FadeIn from '../../components/FadeIn/FadeIn';
import './Intro.scss';

const Intro = () => (
  <Container customClass="intro" variant>
    <FadeIn option="fade-right">
      <Details />
    </FadeIn>
    <Form btnVariant="appointment" />
  </Container>
);

export default Intro;

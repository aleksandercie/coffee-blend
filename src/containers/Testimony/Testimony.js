import React from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import Container from '../../common/Container/Container';
import Heading from '../../components/Heading/Heading';
import Opinions from '../../components/Opinions/Opinions';
import { testimony } from '../../content/testimony';
import './Testimony.scss';

const Testimony = () => {
  return (
    <Container customClass="testimony" variant>
      <FadeIn option="fade-up">
        <Container customClass="testimony__container">
          <Heading info={testimony} align="center" />
        </Container>
      </FadeIn>
      <FadeIn option="fade-up">
        <Opinions />
      </FadeIn>
    </Container>
  );
};

export default Testimony;

import React from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import Container from '../../common/Container/Container';
import Heading from '../../components/Heading/Heading';
import Products from '../../components/Products/Products';
import { discoverCoffee } from '../../content/discover-coffee';
import './DiscoverCoffee.scss';

const DiscoverCoffee = () => {
  const { heading, products } = discoverCoffee;
  return (
    <Container customClass="discover-coffee" variant>
      <FadeIn option="fade-up">
        <Heading info={heading} align="center" />
        <Products products={products} variant="row-4" />
      </FadeIn>
    </Container>
  );
};

export default DiscoverCoffee;

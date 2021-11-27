import React from 'react';
import classNames from 'classnames';
import Container from '../../common/Container/Container';
import Typography from '../../common/Typography/Typography';
import LazyImage from '../../common/LazyImage/LazyImage';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import './Products.scss';

const Products = ({ products, variant }) => {
  const productClasses = classNames('product', {
    [`product--${variant}`]: variant,
  });

  const renderProducts = products.map((item, index) => {
    const { name, description, price, image } = item;
    return (
      <Container customClass={productClasses} key={index}>
        <LazyImage image={image} alt="product" />
        <Typography
          customClass="product__name"
          variant="h3"
          align="center"
          type="name"
        >
          {name}
        </Typography>
        <Typography
          customClass="product__description"
          variant="p"
          align="center"
          type="description"
        >
          {description}
        </Typography>
        <Typography
          customClass="product__price"
          variant="p"
          align="center"
          type="name"
        >
          {price}
        </Typography>
      </Container>
    );
  });

  return <Container customClass="products">{renderProducts}</Container>;
};

export default trackWindowScroll(Products);

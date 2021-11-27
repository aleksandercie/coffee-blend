import React, { useState } from 'react';
import Container from '../../common/Container/Container';
import Heading from '../../components/Heading/Heading';
import Products from '../../components/Products/Products';
import Filter from '../../components/Filter/Filter';
import { menu } from '../../content/menu';
import { MAIN_DISHES } from '../../components/Filter/constants';
import './Menu.scss';

const Menu = () => {
  const { heading, products } = menu;

  const filterProducts = (type, products) =>
    products.filter((product) => product.type === type);

  const [items, setItems] = useState(filterProducts(MAIN_DISHES, products));

  return (
    <Container customClass="menu" variant>
      <Heading info={heading} align="center" />
      <Filter
        products={products}
        setItems={setItems}
        filterProducts={filterProducts}
      />
      <Products products={items} variant="row-3" />
    </Container>
  );
};

export default Menu;

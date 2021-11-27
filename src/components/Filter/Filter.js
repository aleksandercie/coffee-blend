import React, { useState } from 'react';
import Container from '../../common/Container/Container';
import Button from '../../common/Button/Button';
import { MAIN_DISHES } from './constants';
import './Filter.scss';

const Filter = ({ setItems, products, filterProducts }) => {
  const [activeClass, setActiveClass] = useState(MAIN_DISHES);

  const filteredTypes = products
    .map((product) => product.type)
    .reduce((acc, item) => {
      !acc.includes(item) && acc.push(item);
      return acc;
    }, []);

  const handleClick = (event) => {
    const id = event.target.id;
    setItems(filterProducts(id, products));
    setActiveClass(id);
  };

  const renderButtons = filteredTypes.map((item) => {
    return (
      <Button
        id={item}
        onClick={handleClick}
        customClass={
          item === activeClass
            ? 'filter__button filter__button--active'
            : 'filter__button'
        }
        name={item}
        variant="filter"
        key={item}
      />
    );
  });

  return <Container customClass="filter">{renderButtons}</Container>;
};

export default Filter;

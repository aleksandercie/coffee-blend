import React from 'react';
import classNames from 'classnames';
import './Hamburger.scss';

const Hamburger = ({ toggleMenu, isOpen }) => {
  const hamburgerClasses = classNames('hamburger', {
    'hamburger--active': isOpen,
  });
  return (
    <button onClick={toggleMenu} className={hamburgerClasses}>
      <span className="hamburger__bar" />
      <span className="hamburger__bar" />
      <span className="hamburger__bar" />
    </button>
  );
};

export default Hamburger;

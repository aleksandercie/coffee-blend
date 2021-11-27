import React from 'react';
import classNames from 'classnames';
import Navigation from '../Navigation/Navigation';
import Container from '../../common/Container/Container';
import './MobileMenu.scss';

const MobileMenu = ({ navigation, isOpen, toggleMenu }) => {
  const mobileMenuClasses = classNames('mobile-menu', {
    'mobile-menu--active': isOpen,
  });
  return (
    <Container customClass={mobileMenuClasses}>
      <Navigation
        navigation={navigation}
        variant="mobile"
        toggleMenu={toggleMenu}
      />
    </Container>
  );
};

export default MobileMenu;

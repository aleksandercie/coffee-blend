import React, { useState, useEffect } from 'react';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import Hamburger from '../../components/Hamburger/Hamburger';
import { navigation } from '../../content/navigation';
import { APPLY_PREVENT_SCROLL_BODY_CLASS } from './constants';
import './Header.scss';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const isBrowser = () => typeof window !== 'undefined';

  useEffect(() => {
    if (!isBrowser()) return;
    const bodyElement = window.document.body;
    console.error = () => {};

    isOpen && bodyElement.classList.add(APPLY_PREVENT_SCROLL_BODY_CLASS);
    !isOpen && bodyElement.classList.remove(APPLY_PREVENT_SCROLL_BODY_CLASS);
  }, [isOpen]);

  return (
    <header className="header">
      <Logo />
      <Navigation navigation={navigation} variant="desktop" />
      <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />
      <MobileMenu
        navigation={navigation}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;

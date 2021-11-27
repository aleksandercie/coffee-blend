import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './Navigation.scss';

const Navigation = ({ navigation, variant, toggleMenu }) => {
  const navigationClasses = classNames('navigation', {
    [`navigation--${variant}`]: variant,
  });
  return (
    <nav>
      <ul className={navigationClasses}>
        {navigation.map((item, index) => {
          const { name, url } = item;
          return (
            <li className="navigation__item" key={index} onClick={toggleMenu}>
              <NavLink to={url} className="navigation__link">
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

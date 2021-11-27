import React from 'react';
import classNames from 'classnames';
import './Typography.scss';

const Typography = ({ variant, customClass, type, children, align, color }) => {
  const Components = variant;
  const typographyClasses = classNames(customClass, {
    [`typography--${type}`]: type,
    [`typography--${align}`]: align,
    [`typography--${color}`]: color,
  });

  return <Components className={typographyClasses}>{children}</Components>;
};

export default Typography;

import React from 'react';

const Image = ({ image, alt, customClass }) => (
  <img src={image} alt={alt} className={customClass} />
);

export default Image;

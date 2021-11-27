import React from "react";

const Link = ({ children, link, customClass, alt, tabIndex }) => (
  <a href={link} className={customClass} alt={alt} tabIndex={tabIndex && -1}>
    {children}
  </a>
);

export default Link;

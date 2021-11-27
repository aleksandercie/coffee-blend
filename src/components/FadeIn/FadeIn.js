import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FadeIn = ({ children, option }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return <div data-aos={option}>{children}</div>;
};

export default FadeIn;

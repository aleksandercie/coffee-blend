import React from 'react';
import FadeIn from '../../components/FadeIn/FadeIn';
import Intro from '../../containers/Intro/Intro';
import Menu from '../../containers/Menu/Menu';
import Banner from '../../components/Banner/Banner';
import { menuBanner } from '../../content/banner';

const MenuPage = () => (
  <>
    <Banner banner={menuBanner} />
    <Intro />
    <FadeIn option="fade-up">
      <Menu />
    </FadeIn>
  </>
);

export default MenuPage;

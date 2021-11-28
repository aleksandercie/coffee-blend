import React, { Suspense, lazy } from "react";
import FadeIn from "../../components/FadeIn/FadeIn";
import Intro from "../../containers/Intro/Intro";
import Banner from "../../components/Banner/Banner";
import { menuBanner } from "../../content/banner";

const Menu = lazy(() => import("../../containers/Menu/Menu"));

const MenuPage = () => (
  <>
    <Banner banner={menuBanner} />
    <Intro />
    <Suspense fallback={<div />}>
      <FadeIn option="fade-up">
        <Menu />
      </FadeIn>
    </Suspense>
  </>
);

export default MenuPage;

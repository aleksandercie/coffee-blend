import React, { Suspense, lazy } from "react";
import DiscoverStory from "../../containers/DiscoverStory/DiscoverStory";
import Banner from "../../components/Banner/Banner";
import { coffee } from "../../content/coffee";
import { aboutBanner } from "../../content/banner";

const Info = lazy(() => import("../../containers/Info/Info"));
const Testimony = lazy(() => import("../../containers/Testimony/Testimony"));
const DiscoverMenu = lazy(() =>
  import("../../containers/DiscoverMenu/DiscoverMenu")
);

const AboutPage = () => (
  <>
    <Banner banner={aboutBanner} />
    <DiscoverStory />
    <Suspense fallback={<div />}>
      <Testimony />
    </Suspense>
    <Suspense fallback={<div />}>
      <DiscoverMenu />
    </Suspense>
    <Suspense fallback={<div />}>
      <Info
        info={coffee}
        variant="image"
        colorDescription="grey"
        colorTitle="twine"
      />
    </Suspense>
  </>
);

export default AboutPage;

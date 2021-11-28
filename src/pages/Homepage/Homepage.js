import React, { Suspense, lazy } from "react";
import MainSlider from "../../containers/MainSlider/MainSlider";
import Intro from "../../containers/Intro/Intro";
// import Info from "../../containers/Info/Info";
// import DiscoverStory from "../../containers/DiscoverStory/DiscoverStory";
// import DiscoverMenu from "../../containers/DiscoverMenu/DiscoverMenu";
// import Testimony from "../../containers/Testimony/Testimony";
// import DiscoverCoffee from "../../containers/DiscoverCoffee/DiscoverCoffee";
// import Gallery from "../../containers/Gallery/Gallery";
// import Form from "../../components/Form/Form";
import { slides } from "../../content/slides";
import { services } from "../../content/services";
import { coffee } from "../../content/coffee";

const DiscoverStory = lazy(() =>
  import("../../containers/DiscoverStory/DiscoverStory")
);
const DiscoverMenu = lazy(() =>
  import("../../containers/DiscoverMenu/DiscoverMenu")
);
const DiscoverCoffee = lazy(() =>
  import("../../containers/DiscoverCoffee/DiscoverCoffee")
);
const Info = lazy(() => import("../../containers/Info/Info"));
const Testimony = lazy(() => import("../../containers/Testimony/Testimony"));
const Form = lazy(() => import("../../components/Form/Form"));
const Gallery = lazy(() => import("../../containers/Gallery/Gallery"));

const Homepage = () => (
  <>
    <MainSlider slides={slides} />
    <Intro />
    <Suspense fallback={<div />}>
      <DiscoverStory />
    </Suspense>
    <Suspense fallback={<div />}>
      <Info info={services} colorDescription="black" colorTitle="black" />
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
    <Suspense fallback={<div />}>
      <DiscoverCoffee />
    </Suspense>
    <Suspense fallback={<div />}>
      <Testimony />
    </Suspense>
    <Suspense fallback={<div />}>
      <Form />
    </Suspense>
    <Suspense fallback={<div />}>
      <Gallery />
    </Suspense>
  </>
);

export default Homepage;

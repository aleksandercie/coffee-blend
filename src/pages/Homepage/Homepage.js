import React from 'react';
import MainSlider from '../../containers/MainSlider/MainSlider';
import Intro from '../../containers/Intro/Intro';
import Info from '../../containers/Info/Info';
import DiscoverStory from '../../containers/DiscoverStory/DiscoverStory';
import DiscoverMenu from '../../containers/DiscoverMenu/DiscoverMenu';
import Testimony from '../../containers/Testimony/Testimony';
import DiscoverCoffee from '../../containers/DiscoverCoffee/DiscoverCoffee';
import Gallery from '../../containers/Gallery/Gallery';
import Form from '../../components/Form/Form';
import { slides } from '../../content/slides';
import { services } from '../../content/services';
import { coffee } from '../../content/coffee';

const Homepage = () => (
  <>
    <MainSlider slides={slides} />
    <Intro />
    <DiscoverStory />
    <Info info={services} colorDescription="black" colorTitle="black" />
    <DiscoverMenu />
    <Info
      info={coffee}
      variant="image"
      colorDescription="grey"
      colorTitle="twine"
    />
    <DiscoverCoffee />
    <Testimony />
    <Form />
    <Gallery />
  </>
);

export default Homepage;

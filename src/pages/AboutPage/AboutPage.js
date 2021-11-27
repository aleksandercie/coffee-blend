import React from 'react';
import Info from '../../containers/Info/Info';
import DiscoverStory from '../../containers/DiscoverStory/DiscoverStory';
import DiscoverMenu from '../../containers/DiscoverMenu/DiscoverMenu';
import Testimony from '../../containers/Testimony/Testimony';
import Banner from '../../components/Banner/Banner';
import { coffee } from '../../content/coffee';
import { aboutBanner } from '../../content/banner';

const AboutPage = () => (
  <>
    <Banner banner={aboutBanner} />
    <DiscoverStory />
    <Testimony />
    <DiscoverMenu />
    <Info
      info={coffee}
      variant="image"
      colorDescription="grey"
      colorTitle="twine"
    />
  </>
);

export default AboutPage;

import React from 'react';
import Info from '../../containers/Info/Info';
import Banner from '../../components/Banner/Banner';
import { servicesBanner } from '../../content/banner';
import { services } from '../../content/services';

const ServicesPage = () => (
  <>
    <Banner banner={servicesBanner} />
    <Info info={services} colorDescription="black" colorTitle="black" />
  </>
);

export default ServicesPage;

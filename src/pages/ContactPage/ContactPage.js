import React from 'react';
import Container from '../../common/Container/Container';
import Gallery from '../../containers/Gallery/Gallery';
import Form from '../../components/Form/Form';
import Banner from '../../components/Banner/Banner';
import { contactBanner } from '../../content/banner';

const ContactPage = () => (
  <Container className="contact-page">
    <Banner banner={contactBanner} />
    <Form />
    <Gallery />
  </Container>
);

export default ContactPage;

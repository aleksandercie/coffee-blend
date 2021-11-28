import React, { Suspense, lazy } from "react";
import Container from "../../common/Container/Container";
import Form from "../../components/Form/Form";
import Banner from "../../components/Banner/Banner";
import { contactBanner } from "../../content/banner";

const Gallery = lazy(() => import("../../containers/Gallery/Gallery"));

const ContactPage = () => (
  <Container className="contact-page">
    <Banner banner={contactBanner} />
    <Form />
    <Suspense fallback={<div />}>
      <Gallery />
    </Suspense>
  </Container>
);

export default ContactPage;

import React from 'react';
import Container from '../../common/Container/Container';
import Link from '../../common/Link/Link';
import Typography from '../../common/Typography/Typography';
import Icon from '../../common/Icon/Icon';
import './FooterAbout.scss';

const FooterAbout = ({ content }) => {
  const { description, socials } = content;
  const renderSocials = socials.map((social) => {
    const { name, link } = social;
    return (
      <Link link={link} key={name}>
        <Icon name={name} />
      </Link>
    );
  });
  return (
    <>
      <Typography
        variant="p"
        customClass="footer__description"
        color="grey"
        type="description"
      >
        {description}
      </Typography>
      <Container customClass="footer__socials">{renderSocials}</Container>
    </>
  );
};

export default FooterAbout;

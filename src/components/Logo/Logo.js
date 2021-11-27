import React from 'react';
import Container from '../../common/Container/Container';
import Typography from '../../common/Typography/Typography';
import Link from '../../common/Link/Link';
import { logo } from '../../content/logo';
import './Logo.scss';

const Logo = () => {
  const { name, brandName, url } = logo;
  return (
    <Container customClass="logo">
      <Link link={url} customClass="logo__name">
        {name}
        <Typography variant="span" customClass="logo__name--secondary">
          {brandName}
        </Typography>
      </Link>
    </Container>
  );
};

export default Logo;

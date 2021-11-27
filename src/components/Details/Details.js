import React from 'react';
import Container from '../../common/Container/Container';
import Typography from '../../common/Typography/Typography';
import Icon from '../../common/Icon/Icon';
import { details } from '../../content/details';
import './Details.scss';

const Details = () => (
  <Container customClass="details">
    {details.map((detail) => {
      const { name, description } = detail;
      return (
        <Container customClass="detail" key={name}>
          <Icon name={name} />
          <Typography
            variant="p"
            customClass="detail__description"
            color="grey"
            type="description"
          >
            {description}
          </Typography>
        </Container>
      );
    })}
  </Container>
);

export default Details;

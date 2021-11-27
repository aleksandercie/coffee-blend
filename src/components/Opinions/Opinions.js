import React from 'react';
import Container from '../../common/Container/Container';
import Typography from '../../common/Typography/Typography';
import { opinions } from '../../content/opinions';
import './Opinions.scss';

const renderOpinion = () => {
  return opinions.map((item, index) => {
    const { name, description, city } = item;
    return (
      <Container customClass="opinion" key={index}>
        <Typography
          variant="p"
          customClass="opinion__description"
          color="dark-grey"
        >
          {description}
        </Typography>
        <Typography variant="h3" customClass="opinion__customer" color="black">
          {name}
        </Typography>
        <Typography variant="h4" customClass="opinion__city" color="dark-grey">
          {city}
        </Typography>
      </Container>
    );
  });
};

const Opinions = () => (
  <Container customClass="opinions">{renderOpinion()}</Container>
);

export default Opinions;

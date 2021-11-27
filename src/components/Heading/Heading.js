import React from 'react';
import Typography from '../../common/Typography/Typography';

const Heading = ({ info, align }) => {
  const { title, subtitle, description } = info;
  return (
    <>
      <Typography variant="h2" type="subtitle" align={align}>
        {subtitle}
      </Typography>
      <Typography variant="h2" type="title" align={align}>
        {title}
      </Typography>
      <Typography variant="p" type="description" align={align}>
        {description}
      </Typography>
    </>
  );
};

export default Heading;

import React from 'react';
import classNames from 'classnames';
import FadeIn from '../../components/FadeIn/FadeIn';
import Container from '../../common/Container/Container';
import Typography from '../../common/Typography/Typography';
import Icon from '../../common/Icon/Icon';
import './Info.scss';

const Info = ({ info, variant, colorTitle, colorDescription }) => {
  const renderIcon = (type) => <Icon name={type} />;

  const infoClasses = classNames('info', {
    [`info--${variant}`]: variant,
  });

  return (
    <Container customClass={infoClasses} variant>
      {info.map((item, index) => {
        const { name, title, description } = item;
        return (
          <FadeIn option="fade-up" key={index}>
            <Container customClass="info__item">
              <Container customClass="info__icon">{renderIcon(name)}</Container>
              <Typography
                variant="h2"
                customClass="info__title"
                color={colorTitle}
              >
                {title}
              </Typography>
              <Typography
                variant="p"
                customClass="info__description"
                color={colorDescription}
                type="description"
              >
                {description}
              </Typography>
            </Container>
          </FadeIn>
        );
      })}
    </Container>
  );
};

export default Info;

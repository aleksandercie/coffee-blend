import React from 'react';
import Container from '../../common/Container/Container';
import Typography from '../../common/Typography/Typography';
import Details from '../../components/Details/Details';
import FooterAbout from '../../components/FooterAbout/FooterAbout';
import Button from '../../common/Button/Button';
import { footer } from '../../content/footer';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {footer.map((item) => {
        const { title, type } = item;
        return (
          <Container customClass="footer__container" key={title}>
            <Typography variant="h3" customClass="footer__title">
              {title}
            </Typography>
            {type === 'questions' && <Details />}

            {type === 'services' &&
              item.links.map((link) => (
                <Button
                  link={link.url}
                  name={link.name}
                  key={link.name}
                  customClass="footer__button"
                />
              ))}
            {type === 'about' && <FooterAbout content={item} />}
          </Container>
        );
      })}
    </footer>
  );
};

export default Footer;

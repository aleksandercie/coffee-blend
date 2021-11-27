import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkedAlt,
  faClock,
  faTruck,
  faCoffee,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Icon = ({ name }) => {
  return (
    <>
      {name === 'map' && <FontAwesomeIcon icon={faMapMarkedAlt} />}
      {name === 'phone' && <FontAwesomeIcon icon={faPhoneAlt} />}
      {name === 'email' && <FontAwesomeIcon icon={faEnvelope} />}
      {name === 'hours' && <FontAwesomeIcon icon={faClock} />}
      {name === 'facebook' && <FontAwesomeIcon icon={faFacebook} />}
      {name === 'twitter' && <FontAwesomeIcon icon={faTwitter} />}
      {name === 'instagram' && <FontAwesomeIcon icon={faInstagram} />}
      {name === 'delivery' && <FontAwesomeIcon icon={faTruck} />}
      {name === 'coffee' && <FontAwesomeIcon icon={faCoffee} />}
      {name === 'order' && <FontAwesomeIcon icon={faFileContract} />}
    </>
  );
};

export default Icon;

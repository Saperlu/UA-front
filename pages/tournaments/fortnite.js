import React from 'react';
import { Tournament } from '../../components';
import text from '../../assets/text';

const Fortnite = () => (
  <Tournament
    imgSrc="/static/fortnite.webp"
    text={text.fortnite}
  />
);

export default Fortnite;
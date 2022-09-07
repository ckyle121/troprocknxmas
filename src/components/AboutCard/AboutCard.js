import React from 'react';
import Card from 'react-bootstrap/Card';
// import { motion } from 'framer-motion';

//import './AboutCard.scss'

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;
  return (
    <>
        <div className='person'>
          <img src={pic} alt={person.title}/>
          <h3><a href={`mailto:${link}`} target="_blank" rel="noreferrer">{title}</a></h3>
          <p className='info-text'>{bio}</p>
        </div>
    </>
  );
};

export default AboutCard;

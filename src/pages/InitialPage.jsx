import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './InitialPage.css';
import oneImage from '../assets/one.jpeg';
import StoryMessage from '../components/StoryMessage';
import logoImage from '../assets/ErWasEens-Logo.png';

const InitialPage = ({ onAnimationEnd }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const { transform, opacity } = useSpring({
    transform: clicked ? 'scale(3) translateX(-20%)' : 'scale(1)',
    opacity: clicked ? 0 : 1,
    config: { duration: 500 },
    onRest: () => {
      if (clicked) {
        onAnimationEnd();
      }
    },
  });

  const messages = [
    "Once upon a time, there was a girl called Little Red Riding Hood.",
    "She lived with her mother in a village, near a forest.",
    "Click on the book."
  ];

  return (
    <div className="initial-page" onClick={handleClick}>
      <Link to="/" className="initialpage-logo-link">
        <img src={logoImage} alt="Er Was Eens Logo" className="initialpage-logo" />
      </Link>
      <Link to="/making-of" className="initialpage-makingof-link">
        Making Of
      </Link>
      <animated.img src={oneImage} alt="Book" className="full-image" style={{ transform, opacity }} />
      <StoryMessage messages={messages} />
    </div>
  );
};

export default InitialPage;

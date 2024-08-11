import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './Village.css';
import villageImage from '../assets/village.png';
import skyImage from '../assets/sky.png';
import StoryMessage from './StoryMessage';
import logoImage from '../assets/ErWasEens-Logo.png';

const Village = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Trigger the initial animation

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const villageSpring = useSpring({
    transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})`,
    opacity: scrollY < 1000 ? 1 : 0,
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: { transform: visible ? `scale(${1 + scrollY * 0.0002})` : 'scale(0.8)', opacity: visible ? 1 : 0 },
  });

  const skySpring = useSpring({
    transform: `scale(${1 + scrollY * 0.0001})`,
    opacity: scrollY < 1000 ? 1 : 0,
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: { transform: visible ? `scale(${1 + scrollY * 0.0001})` : 'scale(0.8)', opacity: visible ? 1 : 0 },
  });

  const messages = [
    "One day, Little Red Riding Hood went to visit her grandmother.",
    "She took a basket of food with her.",
    "But on her way..."
  ];
  
  return (
    <div className="village-container">
      <div className="village-header">
        <Link to="/" className="village-logo-link">
          <img src={logoImage} alt="Logo" className="village-logo" />
        </Link>
        <div className="village-title">Welcome to the Village</div>
        <Link to="/making-of" className="village-makingof-link">
          Making Of
        </Link>
      </div>
      
      <animated.img src={skyImage} alt="Sky" className="sky-image" style={skySpring} />
      <animated.img src={villageImage} alt="Village" className="village-image" style={villageSpring} />
      <StoryMessage messages={messages} />
    </div>
  );
};

export default Village;

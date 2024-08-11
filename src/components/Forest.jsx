import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxLayer } from '@react-spring/parallax';
import './Forest.css';
import forestBg from '../assets/Background-section3.png';
import roodkapjeImage from '../assets/Roodkapje.png';
import wolfImage from '../assets/Wolf.png';
import treesImage from '../assets/Trees.png';
import StoryMessage from './StoryMessage';

const Forest = () => {
  const roodkapjeControls = useAnimation();
  const wolfControls = useAnimation();

  const [roodkapjeRef, roodkapjeInView] = useInView();
  const [wolfRef, wolfInView] = useInView();

  const treesControls = useAnimation();
  const { ref: treesRef, inView: treesInView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  

  React.useEffect(() => {
    if (roodkapjeInView) {
      roodkapjeControls.start({
        x: 450,
        opacity: 1,
        transition: { duration: 2 },
      });
    } else {
      roodkapjeControls.start({
        x: 0,
        opacity: 1,
      });
    }

    if (wolfInView) {
      wolfControls.start({
        x: 850,
        opacity: 1,
        transition: { duration: 5 },
      });
    } else {
      wolfControls.start({
        x: 1500,
        opacity: 1,
      });
    }
    if (treesInView) {
      treesControls.start({
        scale: 1.2,
        y: -200, 
        transition: { duration: 5 },
      });
    } else {
      treesControls.start({
        scale: 1,
        y: 0,
      });
    }
    
  }, [roodkapjeInView, wolfInView, roodkapjeControls, wolfControls, treesInView, treesControls]);

  const messages = [
    "On her way, she met a wolf.",
    "Hello there, where are you going?",
    "I'm going to visit my grandmother, who lives in the forest.",
    "So the wolf ran to grandmother's house..."
  ];

  const styles = [
    '', // Default style for the narrator
    'wolf-message', // Grey background for the wolf
    'roodkapje-message', // Royal red background for Red Riding Hood
    '' // Default
  ];

  return (
    <div className="forest-container">
      <ParallaxLayer offset={0} speed={0.2}>
        <img src={forestBg} alt="Forest Background" className="forest-bg" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={roodkapjeImage}
          alt="Roodkapje"
          className="forest-character roodkapje-forest"
          ref={roodkapjeRef}
          initial={{ x: 0, opacity: 1 }}
          animate={roodkapjeControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={wolfImage}
          alt="Wolf"
          className="forest-character wolf-forest"
          ref={wolfRef}
          initial={{ x: '-100vw', opacity: 1 }}
          animate={wolfControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <motion.img
          src={treesImage}
          alt="Trees"
          className="forest-trees"
          ref={treesRef}
          initial={{ scale: 1, y: 0 }}
          animate={treesControls}
        />
      </ParallaxLayer>
      <StoryMessage messages={messages} styles={styles} />
    </div>
  );
};

export default Forest;

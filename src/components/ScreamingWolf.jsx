import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxLayer } from '@react-spring/parallax';
import './ScreamingWolf.css';
import bedroomBg from '../assets/bedroom-bg.png';
import wolfBedroom from '../assets/Wolf-Bedroom2.png';
import leftArm from '../assets/left-arm.png';
import rightArm from '../assets/right-arm.png';
import roodkapjeBedroom from '../assets/roodkapje-bedroom.png';
import StoryMessage from './StoryMessage';

const ScreamingWolf = () => {
  const wolfControls = useAnimation();
  const roodkapjeControls = useAnimation();
  const leftArmControls = useAnimation();
  const rightArmControls = useAnimation();
  const overlayControls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      wolfControls.start({
        y: -40,
        scale: 1.1,
        transition: { duration: 4 },
      });

      roodkapjeControls.start({
        y: 150,
        transition: { duration: 4 },
      });

      leftArmControls.start({
        y: 150,
        x: [0, -2, 2, -1, 1],
        transition: {
          y: { duration: 4 },
          x: {
            duration: 0.1,
            repeat: Infinity,
            repeatType: 'mirror',
          },
        },
      });

      rightArmControls.start({
        y: 150,
        x: [0, 2, -2, 1, -1],
        transition: {
          y: { duration: 4 },
          x: {
            duration: 0.1,
            repeat: Infinity,
            repeatType: 'mirror',
          },
        },
      });

      overlayControls.start({
        opacity: 0.5,
        transition: { duration: 4 },
      });
    } else {
      wolfControls.start({
        y: 400,
        scale: 0.85,
      });

      roodkapjeControls.start({
        y: 0,
      });

      leftArmControls.start({
        y: 0,
        x: 0,
      });

      rightArmControls.start({
        y: 0,
        x: 0,
      });

      overlayControls.start({
        opacity: 0,
      });
    }
  }, [inView, wolfControls, roodkapjeControls, leftArmControls, rightArmControls, overlayControls]);

  const messages = [
    "Heeeelp!",
    "Shouted Little Red Riding Hood as she realised that there was a wolf in her grandmother's bed!"
  ];

  const styles = [
    'roodkapje-message', 
    ''
  ];

  return (
    <div className="screaming-wolf-container" ref={ref}>
      <ParallaxLayer offset={0} speed={0.03}>
        <img src={bedroomBg} alt="Bedroom Background" className="bedroom-bg" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.02}>
        <motion.img src={wolfBedroom} alt="Wolf" className="wolf-bedroom" ref={ref} animate={wolfControls} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.02}>
        <motion.img src={leftArm} alt="Left Arm" className="left-arm" ref={ref} animate={leftArmControls} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.02}>
        <motion.img src={rightArm} alt="Right Arm" className="right-arm" ref={ref} animate={rightArmControls} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.02}>
        <motion.img src={roodkapjeBedroom} alt="Roodkapje" className="roodkapje-bedroom" ref={ref} animate={roodkapjeControls} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.div className="overlay" animate={overlayControls} />
      </ParallaxLayer>
      <StoryMessage messages={messages} styles={styles}/>
    </div>
  );
};

export default ScreamingWolf;

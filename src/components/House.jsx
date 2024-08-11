import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxLayer } from '@react-spring/parallax';
import './House.css';
import houseImage from '../assets/House.png';
import chickens from '../assets/chickens.png';
import roodkapje from '../assets/roodkapje-house.png';
import butterfly from '../assets/butterfly.png';
import StoryMessage from './StoryMessage';

const House = ({ onDoorClick }) => {
  const HouseControls = useAnimation();
  const chickensControls = useAnimation();
  const roodkapjeControls = useAnimation();
  const butterflyControls = useAnimation();

  const { ref: HouseRef, inView: HouseInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [chickensRef, chickensInView] = useInView();
  const [roodkapjeRef, roodkapjeInView] = useInView();
  const [butterflyRef, butterflyInView] = useInView();

  const [doorVisible, setDoorVisible] = React.useState(false);

  React.useEffect(() => {
    // HOUSE
    if (HouseInView) {
      HouseControls.start({
        x: 0,
        y: -300,
        scale: 1,
        transition: { duration: 5 },
      });
    } else {
      HouseControls.start({
        x: 0,
        y: 0,
        scale: 1,
      });
    }
    // CHICKENS
    if (chickensInView) {
      chickensControls.start({
        x: [1200, 1205, 1210, 1215, 1220, 1225, 1230, 1235, 1240, 1245, 1250],
        y: [600, 602, 604, 606, 608, 610, 612, 614, 616, 618, 620],
        scale: [1, 1.02, 1.04, 1.02, 1, 0.98, 0.96, 0.98, 1, 1.02, 1.04],
        scaleX: [1, 0.9, 0.8, 0.9, 1, -0.9, -0.8, -0.9, -1, -0.9, -0.8, -0.9, 1],
        transition: { duration: 6, repeat: Infinity, repeatType: 'reverse' },
      });
    } else {
      chickensControls.start({
        x: 1200,
        y: 680,
        scale: 1,
        scaleX: 1,
      });
    }
    // ROODKAPJE
    if (roodkapjeInView) {
      roodkapjeControls.start({
        x: 820,
        y: 440,
        scale: 1,
        transition: { duration: 5, delay: 6 },
      }).then(() => {
        setTimeout(() => {
          setDoorVisible(true); // Show the door 6 seconds after Roodkapje's animation starts
        }, 7000);
      });
    } else {
      roodkapjeControls.start({
        x: 600,
        y: 695,
        scale: 1,
      });
    }
    // BUTTERFLY
    if (butterflyInView) {
      butterflyControls.start({
        x: [100, 150, 200, 250, 300, 350, 300, 250, 200, 150, 100],
        y: [50, 80, 100, 120, 100, 80, 60, 40, 20, 40, 50],
        scale: [1, 1.05, 1.1, 1.05, 1, 0.95, 0.9, 0.95, 1, 1.05, 1.1],
        scaleX: [1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1],
        transition: { duration: 15, repeat: Infinity, repeatType: 'loop' },
      });
    } else {
      butterflyControls.start({
        x: 100,
        y: 50,
        scale: 1,
        scaleX: 1,
      });
    }
  }, [HouseInView, HouseControls, chickensInView, chickensControls, roodkapjeInView, roodkapjeControls, butterflyInView, butterflyControls]);

  const messages = [
    "He went inside, put on a night-gown and got into her bed.",
    "A little later, Little Red Riding Hood came to the house.",
    "She knocked on the door, then went inside."
  ];

  return (
    <div className="house-container">
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={houseImage}
          alt="House"
          className="house-image"
          ref={HouseRef}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={HouseControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={chickens}
          alt="chickens"
          className="chickens"
          ref={chickensRef}
          initial={{ x: 1200, y: 650, opacity: 1 }}
          animate={chickensControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={roodkapje}
          alt="roodkapje"
          className="roodkapje-house"
          ref={roodkapjeRef}
          initial={{ x: 0, y: 650, opacity: 1 }}
          animate={roodkapjeControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={butterfly}
          alt="butterfly"
          className="butterfly"
          ref={butterflyRef}
          initial={{ x: 100, y: 50, opacity: 1 }}
          animate={butterflyControls}
        />
      </ParallaxLayer>
      {doorVisible && (
        <div className="clickable-door" onClick={onDoorClick}></div>
      )}
      <StoryMessage messages={messages}/>
    </div>
  );
};

export default House;

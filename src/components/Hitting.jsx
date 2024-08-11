import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxLayer } from '@react-spring/parallax';
import './Hitting.css';
import hittingBg from '../assets/hitting-bg.png';
import axe from '../assets/axe.png';
import houthakker from '../assets/hitting-houthakker.png';
import wolf from '../assets/hitting-wolf.png';
import bult from '../assets/bult.png';
import StoryMessage from './StoryMessage';

const Hitting = () => {
  const bgControls = useAnimation();
  const axeControls = useAnimation();
  const houthakkerControls = useAnimation();
  const wolfControls = useAnimation();
  const bultControls = useAnimation();
  const rectControls = useAnimation(); // For the rectangle

  const [showClickableArea, setShowClickableArea] = useState(false);
  const [showStoryMessage, setShowStoryMessage] = useState(false); 

  const [bgRef, bgInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [axeRef, axeInView] = useInView({ threshold: 0.5 }); // , triggerOnce: true  add it after !!!
  const [houthakkerRef, houthakkerInView] = useInView({ threshold: 0.5 }); // , triggerOnce: true  add it after !!!
  const [wolfRef, wolfInView] = useInView({ threshold: 0.5 }); // , triggerOnce: true  add it after !!!
  const [bultRef, bultInView] = useInView({ threshold: 0.5 }); // , triggerOnce: true  add it after !!!


  const handleAxeClick = () => {
    axeControls.start({
        rotate: -100,
        x: 425,
        y: 420,
        transition: { duration: 0.1 },
      }).then(() => {
        setShowClickableArea(false); // Hide the clickable area
        bultControls.start({
            scale: 1, // Scale up and revert to original size
            transition: { duration: 1 },
            opacity: 1,
            x: 0,
            y: 0,
        }).then(() => {
          setShowStoryMessage(true); // Show StoryMessage after axe animation and bult appear
        });
      });
    };

  React.useEffect(() => {
    if (bgInView) {
      bgControls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }

    if (axeInView) {
      axeControls.start({
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        transition: { duration: 2, delay: 2 },
      }).then(() => {
        setTimeout(() => {
          setShowClickableArea(true); // Show clickable area after delay
        }, 700);
      });
    }

    if (houthakkerInView) {
      houthakkerControls.start({
        opacity: 1,
        transition: { duration: 2, delay: 2 },
      });
    }

    if (wolfInView) {
      wolfControls.start({
        opacity: 1,
        transition: { duration: 2, delay: 2 },
      });
    }

   
  }, [bgInView, axeInView, houthakkerInView, wolfInView, bultInView, bgControls, axeControls, houthakkerControls, wolfControls, bultControls]);

  const messages = [
    "Ouwwchh!",
    "The woodcutter hit the wolf over the head.",
    "The wolf ran away and little Red Riding Hood never saw him again."
  ];

  const styles = [
    'wolf-message',
    '',
    ''
  ];

  return (
    <div className="hitting-container">
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={hittingBg}
          alt="Hitting Background"
          className="hitting-image"
          ref={bgRef}
          initial={{ opacity: 0 }}
          animate={bgControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={axe}
          alt="Axe"
          className="hitting-image"
          ref={axeRef}
          initial={{ opacity: 0 }}
          animate={axeControls}
          onClick={handleAxeClick}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={houthakker}
          alt="Houthakker"
          className="hitting-image"
          ref={houthakkerRef}
          initial={{ opacity: 0 }}
          animate={houthakkerControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={wolf}
          alt="Wolf"
          className="hitting-image"
          ref={wolfRef}
          initial={{ opacity: 0 }}
          animate={wolfControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={bult}
          alt="Bult"
          className="hitting-image"
          ref={bultRef}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={bultControls}
        />
      </ParallaxLayer>

      {showClickableArea && (
        <motion.div
          className="axe-clickable-area"
          onClick={handleAxeClick}
        />
      )}
      
      {showStoryMessage && <StoryMessage messages={messages} styles={styles}/>}
    </div>
  );
};

export default Hitting;

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxLayer } from '@react-spring/parallax';
import './Bedroom.css';
import bedroomImage from '../assets/Bedroom.png';
import candleImage from '../assets/Candle.png';
import bedroom2Image from '../assets/Bedroom2.png';
import earsImage from '../assets/ears.png';
import eyesImage from '../assets/eyes.png';
import mouthImage from '../assets/mouth.png';
import StoryMessage from './StoryMessage';

const Bedroom = () => {
  const candleControls = useAnimation();
  const bedroomControls = useAnimation();
  const bedroom2Controls = useAnimation();

  const earsControls = useAnimation();
  const eyesControls = useAnimation();
  const mouthControls = useAnimation();

  const [candleRef, candleInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [bedroomRef, bedroomInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [bedroom2Ref, bedroom2InView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  const [earsRef, earsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [eyesRef, eyesInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [mouthRef, mouthInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  

  React.useEffect(() => {
    if (candleInView) {
      candleControls.start({
        x: 970,
        y: 350,
        scale: 1.2,
        transition: { duration: 4 },
      });
    } else {
      candleControls.start({
        x: 850,
        y: 275,
        scale: 1,
      });
    }

    if (bedroomInView) {
      bedroomControls.start({
        opacity: 1,
        scale: 1.2,
        transition: { duration: 4 },
      });
    } else {
      bedroomControls.start({
        opacity: 0,
        scale: 1,
      });
    }
    if (bedroomInView) {
      bedroomControls.start({
        opacity: 1,
        scale: 1.4,
        transition: { duration: 4, delay: 4 },
      });
    } else {
      bedroomControls.start({
        opacity: 1,
        scale: 1.2,
      });
    }

    if (bedroom2InView) {
      bedroom2Controls.start({
        opacity: 1,
        transition: { duration: 1, delay: 7 },
      });
    } else {
      bedroom2Controls.start({
        opacity: 0,
      });
    }

    // EARS, EYES, MOUTH parts
    if (earsInView) {
      earsControls.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 12 },
      });
    } else {
      earsControls.start({
        opacity: 0,
      });
    }

    if (eyesInView) {
      eyesControls.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 20 },
      });
    } else {
      eyesControls.start({
        opacity: 0,
      });
    }

    if (mouthInView) {
      mouthControls.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 30 },
      });
    } else {
      mouthControls.start({
        opacity: 0,
      });
    }


  }, [candleInView, bedroomInView , bedroom2InView, earsInView, eyesInView, mouthInView, candleControls, bedroomControls, bedroom2Controls, earsControls, eyesControls, mouthControls]);

  const messages = [
    "Little Red Riding Hood went over to grandmother's bed.",
    "Oh, granny! What big ears you have!",
    "All the better to hear you with.",
    "Oh granny! What big eyes you have!",
    "All the better to see you with.",
    "Oh granny, what big teeth you have!?",
    "All the better to eat you with!"
  ];

  const styles = [
    '', // Default style for the narrator
    'roodkapje-message', // Royal red background for Red Riding Hood
    'wolf-message', // Grey background for the wolf
    'roodkapje-message',
    'wolf-message',
    'roodkapje-message',
    'wolf-message'
  ];

  return (
    <div className="bedroom-container">
      <ParallaxLayer offset={0} speed={0}>
        <img src={bedroomImage} alt="Bedroom" className="bedroom-image" />
        <motion.img
          src={bedroomImage}
          alt="Bedroom"
          className="bedroom-image"
          ref={bedroomRef}
          initial={{ opacity: 1 }}
          animate={bedroomControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.05}>
        <motion.img
          src={candleImage}
          alt="Candle"
          className="bedroom-candle"
          ref={candleRef}
          initial={{ y: 275, x: 270, scale: 1 }}
          animate={candleControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={bedroom2Image}
          alt="Bedroom 2"
          className="bedroom-image"
          ref={bedroom2Ref}
          initial={{ opacity: 0 }}
          animate={bedroom2Controls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={earsImage}
          alt="ears"
          className="ears-image"
          ref={earsRef}
          initial={{ opacity: 0 }}
          animate={earsControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={eyesImage}
          alt="eyes"
          className="eyes-image"
          ref={eyesRef}
          initial={{ opacity: 0 }}
          animate={eyesControls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={mouthImage}
          alt="mouth"
          className="mouth-image"
          ref={mouthRef}
          initial={{ opacity: 0 }}
          animate={mouthControls}
        />
      </ParallaxLayer>
      <StoryMessage messages={messages} styles={styles}/>
    </div>
  );
};

export default Bedroom;

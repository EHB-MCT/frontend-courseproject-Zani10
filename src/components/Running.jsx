import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ParallaxLayer } from '@react-spring/parallax';
import './Running.css';
import running1 from '../assets/running1.png';
import running2 from '../assets/running2.png';
import running3 from '../assets/running3.png';
import running4 from '../assets/running4.png';
import running5 from '../assets/running5.png';
import StoryMessage from './StoryMessage';

const Running = () => {
  const running1Controls = useAnimation();
  const running2Controls = useAnimation();
  const running3Controls = useAnimation();
  const running4Controls = useAnimation();
  const running5Controls = useAnimation();

  const [running1Ref, running1InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [running2Ref, running2InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [running3Ref, running3InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [running4Ref, running4InView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [running5Ref, running5InView] = useInView({ threshold: 0.5, triggerOnce: true });

  React.useEffect(() => {
    if (running1InView) {
      running1Controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    }

    if (running2InView) {
      running2Controls.start({
        opacity: 1,
        transition: { duration: 1, delay: 2 },
      });
    }

    if (running3InView) {
      running3Controls.start({
        opacity: 1,
        transition: { duration: 1, delay: 4 },
      });
    }

    if (running4InView) {
      running4Controls.start({
        opacity: 1,
        transition: { duration: 1, delay: 6 },
      });
    }

    if (running5InView) {
      running5Controls.start({
        opacity: 1,
        transition: { duration: 1, delay: 8 },
      });
    }
  }, [running1InView, running2InView, running3InView, running4InView, running5InView, running1Controls, running2Controls, running3Controls, running4Controls, running5Controls]);

  const messages = [
    "A woodcutter was nearby.",
    "He heard Little Red Riding Hood scream and ran to the house."
  ];

  return (
    <div className="running-container">
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={running1}
          alt="Running 1"
          className="running-image"
          ref={running1Ref}
          initial={{ opacity: 0 }}
          animate={running1Controls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={running2}
          alt="Running 2"
          className="running-image"
          ref={running2Ref}
          initial={{ opacity: 0 }}
          animate={running2Controls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={running3}
          alt="Running 3"
          className="running-image"
          ref={running3Ref}
          initial={{ opacity: 0 }}
          animate={running3Controls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={running4}
          alt="Running 4"
          className="running-image"
          ref={running4Ref}
          initial={{ opacity: 0 }}
          animate={running4Controls}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0}>
        <motion.img
          src={running5}
          alt="Running 5"
          className="running-image"
          ref={running5Ref}
          initial={{ opacity: 0 }}
          animate={running5Controls}
        />
      </ParallaxLayer>
      <StoryMessage messages={messages}/>
    </div>
  );
};

export default Running;

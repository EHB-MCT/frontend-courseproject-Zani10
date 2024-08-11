import React, { useState, useRef } from 'react';
import './FairytalePage.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import InitialPage from './InitialPage';
import Village from '../components/Village';
import Forest from '../components/Forest';
import House from '../components/House';
import Bedroom from '../components/Bedroom';
import ScreamingWolf from '../components/ScreamingWolf';
import Actors from '../components/Actors';
import Running from '../components/Running';
import Hitting from '../components/Hitting';

const FairytalePage = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const bedroomRef = useRef(null);

  const handleAnimationEnd = () => {
    setTimeout(() => setShowMainContent(true), 2000);
  };

  const handleDoorClick = () => {
    bedroomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {!showMainContent && <InitialPage onAnimationEnd={handleAnimationEnd} />}
      {showMainContent && (
        <Parallax pages={8} style={{ top: '0', left: '0' }}>

          {/* Village */}
          <ParallaxLayer key="village" offset={0} speed={0} style={{ zIndex: 1 }}>
            <Village />
          </ParallaxLayer>

          {/* Forest */}
          <ParallaxLayer key="forest" offset={1} speed={0} style={{ zIndex: 1 }}>
            <Forest />
          </ParallaxLayer>

          {/* House */}
          <ParallaxLayer key="house" offset={2} speed={0} style={{ zIndex: 0 }}>
            <House onDoorClick={handleDoorClick} />
          </ParallaxLayer>

          {/* Bedroom */}
          <ParallaxLayer key="bedroom" offset={3} speed={0} style={{ zIndex: 0 }}>
            <div ref={bedroomRef}>
              <Bedroom />
            </div>
          </ParallaxLayer>

          {/* Screaming Wolf */}
          <ParallaxLayer key="screamingWolf" offset={4} speed={0} style={{ zIndex: 0 }}>
            <ScreamingWolf />
          </ParallaxLayer>

          {/* Houthakker */}
          <ParallaxLayer key="running" offset={5} speed={0} style={{ zIndex: 1 }}>
          <Running />
          </ParallaxLayer>

          {/* Hitting */}
          <ParallaxLayer key="section6" offset={6} speed={0} style={{ zIndex: 1 }}>
           <Hitting />
          </ParallaxLayer>

          {/* Actors */}
          <ParallaxLayer key="section7" offset={7} speed={0} style={{ zIndex: 1 }}>
            <Actors />
          </ParallaxLayer>

        </Parallax>
      )}
    </>
  );
};

export default FairytalePage;

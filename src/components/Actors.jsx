import React, { useEffect, useState } from 'react';
import './Actors.css';
import ActorModel from './ActorModel';
import { useInView } from 'react-intersection-observer';
import Confetti from 'react-confetti';

const Actors = () => {

    const [showConfetti, setShowConfetti] = useState(false);
    const { ref, inView } = useInView({
      threshold: 0.5,  // Confetti will start when 50% of the section is in view
      triggerOnce: true
    });
  
    useEffect(() => {
      if (inView) {
        setShowConfetti(true); // Show confetti when inView
      }
    }, [inView]);

  return (
    <div className="actors-section" ref={ref}>
      <div className="actors-title">Actors</div>
      <div className="actors-container">
        <ActorModel modelPath="/assets/roodkapje.glb" /> 
        <ActorModel modelPath="/assets/wolf.glb" />
        <ActorModel modelPath="/assets/houthakker.glb" scale={3} />
      </div>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default Actors;

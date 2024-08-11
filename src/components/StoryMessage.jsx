import React, { useState, useEffect } from 'react';
import './StoryMessage.css';
import { useInView } from 'react-intersection-observer';

const StoryMessage = ({ messages = [], styles = [] }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [waiting, setWaiting] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const [ref, inView] = useInView({
    triggerOnce: true, // Start typing only once when it comes into view
    threshold: 0.5, // Adjust threshold as needed
  });

  useEffect(() => {

    if (!inView) return; // Only proceed if the component is in view

    if (messages.length === 0) return;

    if (typing) {
      let currentText = '';
      let currentCharIndex = 0;
      const currentMessage = messages[currentMessageIndex] || '';

      const typeInterval = setInterval(() => {
        if (currentCharIndex < currentMessage.length) {
          currentText += currentMessage[currentCharIndex];
          setDisplayedText(currentText);
          currentCharIndex += 1;
        } else {
          clearInterval(typeInterval);
          setTyping(false);

          // Wait for 2 seconds after typing before moving to the next message
          setWaiting(true);
          setTimeout(() => {
            setWaiting(false);
          }, 1000);
        }
      }, 100); // Typing speed

      return () => clearInterval(typeInterval);
    } else if (!waiting) {
      // Move to the next message after the waiting period
      setTimeout(() => {
        if (currentMessageIndex < messages.length - 1) {
          setCurrentMessageIndex(currentMessageIndex + 1);
          setTyping(true);
          setDisplayedText('');
        }
      }, 0); // Immediate transition to the next message after waiting
    }
  }, [typing, waiting, currentMessageIndex, messages, inView]);

  const currentStyle = styles[currentMessageIndex] || ''; // Get the style for the current message

  return (
    <div ref={ref} className={`story-message ${styles[currentMessageIndex] || ''}`}>
      {displayedText}
    </div>
  );
};

export default StoryMessage;

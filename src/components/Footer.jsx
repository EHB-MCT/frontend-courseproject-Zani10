// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-section footer-logo">
                <img src="../src/assets/ErWasEens-Logo2.png" alt="Logo" />
            </div>
            <div className="footer-section footer-about">
                <h3>About Us</h3>
                <p> &quot;Er Was Eens&quot; is a portal website where students from Erasmus High School Brussels share a fairy tale. These stories are brought to life with parallax effects, allowing readers to have an immersive experience while scrolling through the story. It's an enchanting place where traditional fairy tales get a modern twist, and where everyone can enjoy the magic of storytelling. Welcome to our fairy tale realm!</p>
            </div>
            <div className="footer-section footer-links">
                <Link to="/">Fairy Tales</Link>
                <Link to="/making-of">Making Of</Link>
            </div>
        </footer>
    );
};

export default Footer;

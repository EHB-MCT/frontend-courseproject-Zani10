import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './FairytalePage.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FairytalePage = () => {
    return (
        <div className="fairytale-page">
            <Navigation />
            <div className="story-content">
                <div className="page-1">
                    <img src="./assets/one.svg" alt="First Image" className="first-image" />
                </div>
                <div className="page-2">
                    <Parallax className="parallax-layer" y={[-20, 20]}>
                        <img src="path_to_sky_image.png" alt="Sky" className="sky-image" />
                    </Parallax>
                    <Parallax className="parallax-layer" y={[20, -20]}>
                        <img src="path_to_mountain_image.png" alt="Mountains and Houses" className="mountain-image" />
                    </Parallax>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FairytalePage;

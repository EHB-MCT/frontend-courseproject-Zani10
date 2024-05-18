import { Parallax } from 'react-scroll-parallax';
import './FairytalePage.css';
import Navigation from '../components/FairytaleNavigation';
import React, { useEffect } from 'react';
import firstImage from '../assets/one.svg';
import village from '../assets/village.png';
import sky from '../assets/sky.png';

const FairytalePage = () => {

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.fairytale-navigation');
            if (window.scrollY > 50) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fairytale-page">
            <Navigation />
            <div className="story-content">
                <div className="page-1">
                    <img src={firstImage} alt="First Image" className="first-image" />
                </div>
                <div className="page-2">
                    <Parallax className="parallax-layer" y={[-20, 20]}>
                        <img src={sky} alt="Sky" className="sky-image" />
                    </Parallax>
                    <Parallax className="parallax-layer" y={[20, -20]}>
                        <img src={village} alt="Mountains and Houses" className="mountain-image" />
                    </Parallax>
                </div>
            </div>
            
        </div>
    );
};

export default FairytalePage;

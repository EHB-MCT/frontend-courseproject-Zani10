import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Navigation from '../components/FairytaleNavigation';
import './FairytalePage.css';
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

            const firstImage = document.querySelector('.first-image');
            const secondPart = document.querySelector('.page-2');
            const scrollPosition = window.scrollY;

            if (scrollPosition <= 500) {
                firstImage.style.transform = `scale(${1 + scrollPosition / 1000})`;
                firstImage.style.opacity = `${1 - scrollPosition / 500}`;
                firstImage.style.position = 'fixed';
                firstImage.style.top = '0';
            } else {
                secondPart.style.opacity = `${(scrollPosition - 500) / 500}`;
                firstImage.style.opacity = '0';
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
                        <img src={village} alt="Village" className="village-image" />
                    </Parallax>
                </div>
            </div>
        </div>
    );
};

export default FairytalePage;

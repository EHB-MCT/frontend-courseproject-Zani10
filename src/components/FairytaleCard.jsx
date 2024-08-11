import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import './FairytaleCard.css';

const FairytaleCard = ({ fairytale, defaultImage }) => {
    return (
        <a href={fairytale.url} target="_blank" rel="noopener noreferrer" className="fairytale-card">
            <img src={fairytale.imageSrc || defaultImage} alt={fairytale.description || 'Fairytale Image'} className="fairytale-card-image" />
            <div className="fairytale-card-overlay">
                <div className="fairytale-card-text">
                    <h3 className="fairytale-title">{fairytale.title}</h3>
                    <p className="fairytale-student">Student</p>
                    <p className="fairytale-creator">{fairytale.creator}</p>
                </div>
                <FaArrowRight className="fairytale-card-arrow" />
            </div>
        </a>
    );
};

FairytaleCard.propTypes = {
    fairytale: PropTypes.shape({
        creator: PropTypes.string.isRequired,
        imageSrc: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string.isRequired,
    }).isRequired,
    defaultImage: PropTypes.string.isRequired
};

export default FairytaleCard;

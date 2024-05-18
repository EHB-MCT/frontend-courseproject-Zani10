import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import './FairytaleCard.css';

const FairytaleCard = ({ fairytale, defaultImage }) => {
    return (
        <div className="fairytale-card">
            <img src={fairytale.imageUrl || defaultImage} alt={fairytale.description || 'Fairytale Image'} className="fairytale-card-image" />
            <div className="fairytale-card-text">
                <p>Student</p>
                <h3>{fairytale.student}</h3>
            </div>
            <FaArrowRight className="fairytale-card-arrow" />
        </div>
    );
};

FairytaleCard.propTypes = {
    fairytale: PropTypes.shape({
        student: PropTypes.string.isRequired,
        imageUrl: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
    defaultImage: PropTypes.string.isRequired
};

export default FairytaleCard;
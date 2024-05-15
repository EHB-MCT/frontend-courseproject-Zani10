import React from 'react';
import PropTypes from 'prop-types';

function FairytaleCard({ fairytale }) {
    return (
        <div>
            <h3>{fairytale.title}</h3>
            <p>{fairytale.description}</p>
        </div>
    );
}

FairytaleCard.propTypes = {
    fairytale: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

export default FairytaleCard;

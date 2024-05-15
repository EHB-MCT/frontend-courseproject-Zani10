import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({ setCategory }) {
    return (
        <div>
            <button onClick={() => setCategory('All')}>All</button>
            <button onClick={() => setCategory('Classic')}>Classic</button>
            <button onClick={() => setCategory('Animal')}>Animal</button>
        </div>
    );
}

Sidebar.propTypes = {
    setCategory: PropTypes.func.isRequired
};

export default Sidebar;


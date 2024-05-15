// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div>{children}</div>
        </div>
    );
}

// Define prop types
Layout.propTypes = {
    children: PropTypes.node // 'node' covers anything that can be rendered: numbers, strings, elements or an array containing these types.
};

export default Layout;
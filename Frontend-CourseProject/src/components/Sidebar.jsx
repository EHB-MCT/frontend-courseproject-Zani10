import { FaMagic, FaBook, FaHeart, FaPaw } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ setCategory }) => {
    const buttons = [
        { category: 'Magic', icon: <FaMagic /> },
        { category: 'Quests', icon: <FaBook /> },
        { category: 'Romance', icon: <FaHeart /> },
        { category: 'Animal Stories', icon: <FaPaw /> }
    ];

    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    return (
        <div className="sidebar">
            {buttons.map(({ category, icon }) => (
                <button key={category} onClick={() => handleCategoryClick(category)}>
                    {icon} {category}
                </button>
            ))}
        </div>
    );
}

import PropTypes from 'prop-types';

Sidebar.propTypes = {
    setCategory: PropTypes.func.isRequired
};


export default Sidebar;


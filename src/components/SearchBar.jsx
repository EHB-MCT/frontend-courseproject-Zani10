import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); // Trigger the search whenever the input changes
    };

    return (
        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;

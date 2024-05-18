import { FaSearch } from 'react-icons/fa'; 

function SearchBar() {
    return (
        <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search fairytales..."
                />
                <FaSearch className="search-icon" />
            </div>
    );
}

export default SearchBar;

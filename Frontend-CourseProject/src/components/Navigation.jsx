import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            {/* Logo */}
            <div className="logo">
                <img src="src\assets\ErWasEens-Logo.png" alt="Logo" />
            </div>
            
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search fairytales..."
                />
                <FaSearch className="search-icon" />
            </div>
            
            {/* Navigation Buttons */}
            <ul className="nav-links">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/">Fairy Tales</Link></li>
                <li><Link to="/making-of">Making Of</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;

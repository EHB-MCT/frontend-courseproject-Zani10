import { Link } from 'react-router-dom';
import './Navigation.css';
import SearchBar from './SearchBar';
import logo from '../assets/ErWasEens-Logo.png';

function Navigation() {
    return (
        <nav className="navigation">
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            
            {/* Search Bar */}
            <SearchBar />   
            
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

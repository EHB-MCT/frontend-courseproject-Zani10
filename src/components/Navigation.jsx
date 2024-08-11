import { Link } from 'react-router-dom';
import './Navigation.css';
import SearchBar from './SearchBar';
import logo from '../assets/ErWasEens-Logo.png';

function Navigation({ onSearch }) {
    const handleAboutUsClick = (event) => {
        event.preventDefault(); // Prevent the default link behavior
        document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navigation">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <SearchBar onSearch={onSearch} />
            <ul className="nav-links">
                <li><a href="#footer" onClick={handleAboutUsClick}>About Us</a></li>
                <li><Link to="/">Fairy Tales</Link></li>
                <li><Link to="/making-of">Making Of</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;

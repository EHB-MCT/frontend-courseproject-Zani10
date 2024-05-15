import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/making-of">Making Of</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
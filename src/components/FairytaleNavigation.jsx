import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './FairytaleNavigation.css';
import logo from '../assets/ErWasEens-Logo.png';

const FairytaleNavigation = () => {
    return (
        <nav className="fairytale-navigation" id="navbar">
            <Link to="/making-of" className="back-arrow">
                <FaArrowLeft size={30} />
            </Link>
            <div className="logo2">
                <img src={logo} alt="Logo" />
            </div>
            <div className="project-details">
                <span className="project-title">Project: <b>Little Red Riding Hood</b></span>
                <span className="project-author">By <b>Zani Dobruna</b></span>
                <span className="project-makingof"><b>Making Of</b></span>
            </div>
        </nav>
    );
};

export default FairytaleNavigation;

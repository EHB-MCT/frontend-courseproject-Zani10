import React, { useState, useEffect } from 'react';
import './PortalPage.css';
import FairytaleCard from '../components/FairytaleCard';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import classmatesData from '../data/classmates.json';

// Shuffle the projects array
const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const PortalPage = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [initialFairytales, setInitialFairytales] = useState([]);
    const [category, setCategory] = useState('All');
    const [filteredFairytales, setFilteredFairytales] = useState(classmatesData);

    useEffect(() => {
        const shuffledFairytales = shuffleArray(classmatesData);
        setInitialFairytales(shuffledFairytales.slice(0, 3));
    }, []);

    // Update filtered fairytales based on category
    useEffect(() => {
        filterFairytalesByCategory(category);
    }, [category]);

    // Function to filter fairytales by category
    const filterFairytalesByCategory = (category) => {
        const results = classmatesData.filter(fairytale => 
            category === 'All' ? true : fairytale.category === category
        );
        setFilteredFairytales(results);
    };

    // Handling search functionality
    const handleSearch = (searchQuery) => {
        // Ensure that searchQuery is a string
        if (typeof searchQuery !== 'string') return;

        const results = classmatesData.filter(fairytale => 
            fairytale.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            fairytale.creator.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFairytales(results);
        setShowAllProjects(true); // Automatically show all projects when searching
    };

    // Handle category change and show all projects
    const handleCategoryChange = (category) => {
        setCategory(category);
        setShowAllProjects(true); // Automatically show all projects when filtering by category
    };

    // Determine which fairytales to display
    const displayedFairytales = showAllProjects 
        ? filteredFairytales 
        : initialFairytales;

    return (
        <div className="page-container">
            <Navigation onSearch={handleSearch} />
            <div className="main-content">
                <Sidebar setCategory={handleCategoryChange} /> {/* Pass handleCategoryChange to Sidebar */}
                <div className="content-area">
                    <h2 className="portal-title">{showAllProjects ? 'All Projects' : 'Popular'}</h2>
                    <div className="fairytale-cards">
                        {displayedFairytales.map((fairytale, index) => (
                            <FairytaleCard key={index} fairytale={fairytale} defaultImage="/assets/default-image.webp" />
                        ))}
                    </div>
                    <button className="all-projects-button" onClick={toggleShowAllProjects}>
                        {showAllProjects ? 'Show Less' : 'All Projects'}
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );

    // Toggle function for the button
    function toggleShowAllProjects() {
        setShowAllProjects(prevState => !prevState);
        // If the user toggles back to "Show Less," reset the filtered fairytales
        if (showAllProjects) {
            filterFairytalesByCategory(category);
        }
    }
};

export default PortalPage;

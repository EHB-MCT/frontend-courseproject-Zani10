import React from 'react';
import './PortalPage.css';
import FairytaleCard from '../components/FairytaleCard';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const PortalPage = () => {
    const dummyFairytales = [
        { student: "John Doe", description: "A tale of magic.", imageUrl: "path_to_default_image.jpg" },
        { student: "Jane Smith", description: "A story of adventure.", imageUrl: "path_to_default_image.jpg" },
        { student: "Foo Bar", description: "An epic saga.", imageUrl: "path_to_default_image.jpg" }
    ];

    return (
        <div className="page-container">
            <Navigation />
            <div className="main-content">
                <Sidebar />
                <div className="content-area">
                    <h2 className="portal-title">Popular</h2>
                    <div className="fairytale-cards">
                        {dummyFairytales.map((fairytale, index) => (
                            <FairytaleCard key={index} fairytale={fairytale} defaultImage="path_to_default_image.jpg" />
                        ))}
                    </div>
                    <button className="all-projects-button" onClick={() => {}}>All Projects</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PortalPage;

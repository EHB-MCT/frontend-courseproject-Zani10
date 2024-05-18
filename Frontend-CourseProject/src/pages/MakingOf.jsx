import React from 'react';
import './MakingOf.css';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MakingOf = () => {
    return (
        <div className="page-container">
            <Navigation />
            <div className="main-content">
                <Sidebar />
                <div className="content-area">
                    <h2 className="making-of-title">Making Of</h2>
                    <div className="project-overview">
                        <div className="project-image-container">
                            <img src="path_to_your_project_image.jpg" alt="Roodkapje" className="project-image" />
                            <div className="project-image-text">
                                <h3>Roodkapje</h3>
                                <p>By Zani Dobruna</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-details">
                        <div className="project-video">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/your_video_id"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube video"
                            ></iframe>
                        </div>
                        <div className="project-description">
                            <p>Your fairytale description goes here...</p>
                        </div>
                    </div>
                    <div className="extra-images">
                        <img src="path_to_extra_image1.jpg" alt="Extra 1" className="extra-image" />
                        <img src="path_to_extra_image2.jpg" alt="Extra 2" className="extra-image" />
                        <img src="path_to_extra_image3.jpg" alt="Extra 3" className="extra-image" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MakingOf;

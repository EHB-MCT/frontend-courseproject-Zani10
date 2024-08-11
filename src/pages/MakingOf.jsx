import React, { useState } from 'react';
import './MakingOf.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const MakingOf = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="page-container">
            <Navigation />
            <div className="main-content">
                <div className="content-area">
                    <h2 className="making-of-title">Making Of</h2>
                    <Link to="/fairytale/zani" className="project-overview-link">
                        <div className="project-overview">
                            <div className="project-image-container">
                                <img src="src/assets/bedroom2.png" alt="Roodkapje" className="project-image" />
                                <div className="project-image-text">
                                    <h3>ROODKAPJE</h3>
                                    <p>By Zani Dobruna</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="project-details">
                        <div className="project-video">
                            <iframe
                                width="100%"
                                height="315"
                                src="https://www.youtube.com/embed/o2GwJg7XJBM"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube video"
                            ></iframe>
                        </div>
                        <div className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                            <h3>DESCRIPTION</h3>
                            <p>
                                Our Red Riding Hood (Roodkapje) parallax project is a modern reimagining of the classic fairy tale, utilizing cutting-edge web development techniques to create an immersive, interactive experience. By combining storytelling with advanced animations and 3D elements, we bring the story to life in a unique way that engages users like never before.
                            </p>
                            <h4>Technical Overview</h4>
                            <ul>
                                <li>
                                    <strong>React Framework:</strong> We used React’s component-based approach to break down the story into manageable, reusable components. This modularity allowed us to keep the codebase organized and scalable. React’s state management facilitated dynamic UI updates, responding to user interactions such as clicks and scrolls to create a responsive experience.
                                </li>
                                <li>
                                    <strong>Framer Motion:</strong> Framer Motion provided us with the tools to implement complex animations, including fades, slides, and staggered sequences, which enhance the story’s visual appeal. With Framer Motion’s `useAnimation` and `motion` components, we finely tuned the timing and sequence of animations to synchronize perfectly with the story’s flow.
                                </li>
                                <li>
                                    <strong>React-Spring Parallax:</strong> We implemented the `react-spring` library’s parallax feature to create a layered, 3D effect that adds depth to the scenes. Different elements move at varying speeds as the user scrolls, immersing them deeper into the story. The library also enabled us to create seamless transitions between scenes, ensuring a cohesive narrative experience.
                                </li>
                                <li>
                                    <strong>Three.js for 3D Models:</strong> We incorporated 3D models using `Three.js` to add a new dimension to the story, allowing characters like the wolf and Red Riding Hood to interact in a three-dimensional space. `Three.js`’s `OrbitControls` were used to allow users to rotate and zoom in on these 3D models, providing an interactive viewing experience.
                                </li>
                                <li>
                                    <strong>Intersection Observer API:</strong> The Intersection Observer API was used to trigger animations as users scroll through the story. Elements animate only when they come into view, optimizing performance and enhancing engagement. We also employed this API for lazy loading, ensuring that images and assets load only when needed, improving overall page performance.
                                </li>
                                <li>
                                    <strong>Custom CSS Styling:</strong> Custom CSS was developed to align with the dark and mysterious theme of the Red Riding Hood story, using a consistent color palette and typography to create an immersive atmosphere. CSS transitions and animations were used to enhance user interaction, providing visual feedback on hover and click, and making the experience more engaging.
                                </li>
                            </ul>
                            <h4>Conclusion</h4>
                            <p>
                                The Red Riding Hood parallax project exemplifies the fusion of traditional storytelling with modern web technology. Through the use of React, Framer Motion, Three.js, and other advanced tools, we’ve crafted an interactive, visually captivating retelling of a classic tale. This project demonstrates the potential of web development to transform storytelling into an engaging and participatory experience.
                            </p>
                        </div>
                        <button className="read-more-button" onClick={toggleReadMore}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                    <h3 className="extra-images-title">ADDITIONAL FOOTAGE</h3>
                    <div className="extra-images">
                        <img src="src/assets/house.png" alt="Extra 1" className="extra-image" />
                        <img src="src/assets/redandwolf.png" alt="Extra 2" className="extra-image" />
                        <img src="src/assets/redandwolf2.png" alt="Extra 3" className="extra-image" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MakingOf;

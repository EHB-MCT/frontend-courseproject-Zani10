import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const FairytalePage = () => {
    const { name } = useParams();

    // Example content for your fairytale page
    const fairytales = {
        Cinderella: {
            title: "Cinderella",
            description: "A classic fairytale about a girl who overcomes adversity with the help of her fairy godmother."
        },
        "The Frog Prince": {
            title: "The Frog Prince",
            description: "A tale about a kiss that transforms a frog into a prince."
        }
        // Add more fairytales as needed
    };

    const fairytale = fairytales[name];

    if (!fairytale) {
        return <div>Fairytale not found</div>;
    }

    return (
        <div className="fairytale-page">
            <Parallax bgImage="/path/to/image.jpg" strength={500}>
                <div style={{ height: 500 }}>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {fairytale.title}
                    </motion.h1>
                </div>
            </Parallax>
            <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p>{fairytale.description}</p>
            </motion.div>
        </div>
    );
};

export default FairytalePage;

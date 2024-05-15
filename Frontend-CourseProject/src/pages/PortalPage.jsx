import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';
import FairytaleCard from '../components/FairytaleCard';
import classmates from '../data/classmates.json';

function PortalPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [fairytales, setFairytales] = useState([]);

    useEffect(() => {
        setFairytales(classmates);
    }, []);

    const filteredFairytales = fairytales.filter(fairytale => {
        return fairytale.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
               (category === 'All' || fairytale.category === category);
    });

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Sidebar setCategory={setCategory} />
            <div>
                {filteredFairytales.map((fairytale) => (
                    <FairytaleCard key={fairytale.student} fairytale={fairytale} />
                ))}
            </div>
        </div>
    );
}

export default PortalPage;

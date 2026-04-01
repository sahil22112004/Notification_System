import React from 'react';
import CreatorCard from './cards/CreatorCard';
import './creator.css';

const CreatorComponent = () => {
    const creators = [
        { name: "John Doe", color: "#696e76ff" },
        { name: "Jane Smith", color: "#696e76ff" },
        { name: "Mike Johnson", color: "#696e76ff" },
        { name: "Sarah Williams", color: "#696e76ff" },
        { name: "Alan Turing", color: "#696e76ff" },
        { name: "Grace Hopper", color: "#696e76ff" },
        { name: "Ada Lovelace", color: "#696e76ff" },
    ];

    return (
        <div className="creator-page-container">
            <h1 className="creator-page-title">Featured Creators</h1>
            {creators.map((creator, idx) => (
                <CreatorCard
                    key={idx}
                    creatorName={creator.name}
                    coverColor={creator.color}
                />
            ))}
        </div>
    );
};

export default CreatorComponent;

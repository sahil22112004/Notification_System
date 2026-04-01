import React from 'react';
import './CreatorCard.css';

interface CreatorCardProps {
    creatorName: string;
    coverColor?: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ creatorName, coverColor = "#3b82f6" }) => {
    const firstLetter = creatorName.charAt(0).toUpperCase();

    return (
        <div className="creator-card">
            <div className="creator-cover-image" style={{ backgroundColor: coverColor }}></div>
            <div className="creator-details">
                <div className="creator-logo">{firstLetter}</div>
                <h3 className="creator-name">{creatorName}</h3>
                <button className="follow-btn">Follow</button>
            </div>
        </div>
    );
};

export default CreatorCard;

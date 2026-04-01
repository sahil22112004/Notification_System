import React from 'react';
import './LivestreamCard.css';

interface LivestreamCardProps {
    username: string;
    startTime: string;
    streamLink: string;
}

const LivestreamCard: React.FC<LivestreamCardProps> = ({ username, startTime, streamLink }) => {
    const firstLetter = username.charAt(0).toUpperCase();

    return (
        <div className="livestream-card">
            <div className="card-header">
                <div className="livestream-logo">{firstLetter}</div>
                <h4 className="card-username">{username}</h4>
            </div>
            <div className="card-body">
                <p className="start-time">Live starts at: {startTime}</p>
                <a href={streamLink} target="_blank" rel="noopener noreferrer" className="stream-link">Watch Stream</a>
            </div>
        </div>
    );
};

export default LivestreamCard;

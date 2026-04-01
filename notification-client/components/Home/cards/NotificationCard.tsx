import React from 'react';
import './NotificationCard.css';

interface NotificationCardProps {
    message: string;
    timestamp: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ message, timestamp }) => {
    return (
        <div className="notification-card">
            <p className="notification-message">{message}</p>
            <span className="notification-time">{timestamp}</span>
        </div>
    );
};

export default NotificationCard;

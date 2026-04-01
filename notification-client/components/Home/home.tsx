import React from 'react';
import UserInfo from './cards/UserInfo';
import LivestreamCard from './cards/LivestreamCard';
import NotificationCard from './cards/NotificationCard';
import './home.css';

const HomeComponent = () => {
    const livestreams = [
        { username: "Alice", startTime: "2:00 PM", streamLink: "https://example.com/alice" },
        { username: "Bob", startTime: "3:30 PM", streamLink: "https://example.com/bob" },
        { username: "Charlie", startTime: "5:00 PM", streamLink: "https://example.com/charlie" },
        { username: "David", startTime: "6:15 PM", streamLink: "https://example.com/david" },
        { username: "Eve", startTime: "8:00 PM", streamLink: "https://example.com/eve" },
    ];

    const notifications = [
        { message: "Charlie started a new live stream!", timestamp: "5 mins ago" },
        { message: "You have a new follower: David", timestamp: "12 mins ago" },
        { message: "Bob's live stream ended.", timestamp: "1 hour ago" },
        { message: "New comment on your post from Alice", timestamp: "3 hours ago" },
        { message: "Live stream reminder: Charlie in 2 hours", timestamp: "5 hours ago" },
        { message: "Welcome back! Check out new creators.", timestamp: "1 day ago" },
    ];

    return (
        <div className="home-container">
            <div className="left-block">
                <div className="sticky-container">
                    <UserInfo/>
                </div>
            </div>

            <div className="middle-block">
                <h3 className="section-title">Upcoming Live Streams</h3>
                {livestreams.map((stream, idx) => (
                    <LivestreamCard
                        key={idx}
                        username={stream.username}
                        startTime={stream.startTime}
                        streamLink={stream.streamLink}
                    />
                ))}
            </div>

            <div className="right-block">
                <h3 className="section-title">Notifications</h3>
                {notifications.map((notif, idx) => (
                    <NotificationCard
                        key={idx}
                        message={notif.message}
                        timestamp={notif.timestamp}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeComponent;

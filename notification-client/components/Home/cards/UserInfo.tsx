import React from 'react';
import './UserInfo.css';

interface UserInfoProps {
    username: string;
    following: number;
    followers: number;
    coverColor?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username, following, followers, coverColor = "#3b82f6" }) => {
    const firstLetter = username.charAt(0).toUpperCase();

    return (
        <div className="user-info-card">
            <div className="cover-image" style={{ backgroundColor: coverColor }}></div>
            <div className="profile-details">
                <div className="logo-avatar">
                    {firstLetter}
                </div>
                <h3 className="username">{username}</h3>
                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-value">{following}</span>
                        <span className="stat-label">Following</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">{followers}</span>
                        <span className="stat-label">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;

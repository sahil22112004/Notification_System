'use client'

import React from 'react';
import './UserInfo.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


const UserInfo= () => {

    const { loading, isLoggedIn, currentUser, error } = useSelector((state: RootState) => state.auth)
    console.log("current user is",currentUser)
    const firstLetter = currentUser?.fullName?.charAt(0).toUpperCase();
    console.log(firstLetter)

    return (
        <div className="user-info-card">
            <div className="cover-image" style={{ backgroundColor: "#3b82f6" }}></div>
            <div className="profile-details">
                <div className="logo-avatar">
                    {firstLetter}
                </div>
                <h3 className="username">{currentUser?.fullName}</h3>
                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-value">5</span>
                        <span className="stat-label">Following</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-value">4</span>
                        <span className="stat-label">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;

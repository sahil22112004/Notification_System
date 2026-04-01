import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link href="/home" className="nav-link">Home</Link>
                <Link href="/creator" className="nav-link">Creator</Link>
            </div>
            <div className="navbar-right">
                <button className="logout-btn">Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
